import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { UploadImage } from '../../Helper/StoryHelp';
import { createStory } from '../../Redux/Action/StoryAction';
import Message from '../../Components/Message/Message';
import Loader from '../../Components/Message/Loader';

const CreateStory = ({ dispatch }) => {

    const CreateStory = useSelector(state => state.createStory)
    const { loading, error, success } = CreateStory


    const titleRef = useRef(null);
    const desRef = useRef(null);
    const imgRef = useRef(null);
    const catRef = useRef(null);
    const [iurl, setIurl] = useState('');  // Image URL state
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Update formData state with current ref values
        setFormData({
            title: titleRef.current.value,
            description: desRef.current.value,
            category: catRef.current.value,
            image: iurl, // Image URL
        });

        console.log('Form submitted', {
            title: titleRef.current.value,
            description: desRef.current.value,
            category: catRef.current.value,
            image: iurl,

        });

        dispatch(createStory({
            title: titleRef.current.value,
            description: desRef.current.value,
            category: catRef.current.value,
            image: iurl, // Image URL
        }));

        if (success) {
            ResetAllInput();
        }
    };

    const ResetAllInput = () => {
        setFormData({
            title: '',
            description: '',
            image: ''
        })

        titleRef.current.value = null
        desRef.current.value = null
        imgRef.current.value = null
        catRef.current.value = null

        setIurl('')
    }

    const uploadImage = async (e) => {
        e.preventDefault();
        const file = e.target.files[0]; // Get the selected file
        if (file) {
            try {
                const uploadedUrl = await UploadImage(file); // Upload image
                setIurl(uploadedUrl); // Set the image URL for display
            } catch (error) {
                console.error("Image upload failed", error);
            }
        }
    };

    return (

        <form onSubmit={handleSubmit} className="form bg-white p-6 my-10 relative max-w-lg mx-auto shadow-lg rounded-lg">
            <h3 className="text-2xl text-gray-900 font-semibold">Add your latest story!</h3>
            <p className="text-gray-600">Let me know what is in your mind</p>

            {loading && <Loader />}
            {error && <Message>{error}</Message>}
            <div className="flex space-x-5 mt-3">
                <input
                    type="text"
                    name="title"
                    placeholder="Story Name"
                    className="border p-2 w-1/2"
                    ref={titleRef} // Referencing the title input
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Story Category"
                    className="border p-2 w-1/2"
                    ref={catRef} // Referencing the title input
                />
            </div>

            <div className='py-5'>
                {/* Display the uploaded image */}
                {iurl && <img src={iurl} alt="Uploaded cover" loading='lazy' />}

                <input
                    type="file"
                    name="cover"
                    accept="image/*" // Ensure only images are uploaded
                    onChange={uploadImage} // Call upload function when file is selected
                    className="border p-2"
                    ref={imgRef}
                />
            </div>

            <textarea
                name="description"
                cols={10}
                rows={3}
                maxLength={200}
                placeholder="Summarize your story"
                className="border p-2 mt-3 w-full"
                ref={desRef} // Referencing the description input
            ></textarea>

            <input
                type="submit"
                value="Submit"
                className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
            />
        </form>
    );
};

export default CreateStory;