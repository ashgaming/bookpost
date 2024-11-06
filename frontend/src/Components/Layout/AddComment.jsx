import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../Redux/Action/StoryAction';

const AddComment = ({ type, id }) => {

    const createComments = useSelector(state=>state.createComment)
    const { loading , error , success , comment:comments} = createComments

    const [rate, setValue] = useState(0);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    const commentRef = useRef('');


    const submitHandler = (e) => {
        e.preventDefault(); 
        
        // Ensure `type`, `rating`, and `commentRef.current` exist before creating the form
        const form = {
            storyid:id,
            type: type || "",  // default to an empty string if `type` is undefined
            rate:rate || 0,  // set default rate to 0 if `rateRef` is undefined
            comment: commentRef.current ? commentRef.current.value : ""  // default comment to an empty string
        };
    
        // Dispatch the action 
        dispatch(createComment(form));
    
        // Clear form fields after submission
        if (commentRef.current) commentRef.current.value = '';
        setValue(0);  // If this is resetting a state value (e.g., a rating component), keep it
    };

    const handleRating = (e) =>{
        e.preventDefault();
        setValue(e.target.value == rate ? 0 : e.target.value)
    }


    return (
        <div className="max-w-4xl py-16 xl:px-8 flex justify-center mx-auto">
            <div className="w-full mt-16 md:mt-0">
                {loading && <h1>Loading...</h1>}
                {error && <h1>Error...</h1>}
                <form
                    onSubmit={(e) => submitHandler(e)}
                    className="relative z-10 h-auto p-8 py-10 bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                    <h3 className="mb-6 text-2xl font-medium text-center">Write a Comment</h3>

                    {/* Rating Section */}
                    <div className="mb-6 text-center">
                        <h4 className="mb-2 text-lg font-medium">Rate this:</h4>
                        <div className="flex justify-center">
                            {[1, 2, 3, 4, 5].map((star, index) => (
                                <label key={star} className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={star}
                                        className="hidden"
                                        onClick={(e) => handleRating(e)}
                                    />
                                    {
                                        rate >= star ? (
                                            <svg
                                                className="w-6 h-6 text-yellow-500 hover:text-yellow-200"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M12 .587l3.668 7.428 8.193 1.187-5.917 5.252 1.396 8.157L12 18.897l-7.34 4.083 1.396-8.157-5.917-5.252 8.193-1.187z" />
                                            </svg>
                                        )
                                            :
                                            (
                                                <svg
                                                    className="w-6 h-6 text-gray-300 hover:text-yellow-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 .587l3.668 7.428 8.193 1.187-5.917 5.252 1.396 8.157L12 18.897l-7.34 4.083 1.396-8.157-5.917-5.252 8.193-1.187z" />
                                                </svg>
                                            )
                                    }

                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Comment Textarea */}
                    <textarea
                        name="comment"
                        className="w-full px-4 py-3  border-2 border-gray-200 rounded-lg focus:ring-blue-500 focus:outline-none"
                        placeholder="Write your comment"
                        rows="5"
                        required
                        maxLength={500}
                        onChange={(e) => setComment(e.target.value)}
                        ref={commentRef}
                    >
                    </textarea>
                    <p
                        className='mb-4 text-right'
                    >{commentRef.current.value?.length ? commentRef.current.value?.length : '0'}/500</p>


                    {/* Submit Button */}
                    <input
                        type="submit"
                        value="Submit Comment"
                        className="text-white px-4 py-3 bg-blue-500 rounded-lg hover:bg-slate-700"
                    />
                </form>
            </div>
        </div>

    )
}

export default AddComment
