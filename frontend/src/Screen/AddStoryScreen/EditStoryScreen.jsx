import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { UploadImage } from '../../Helper/StoryHelp';
import { listStoryDetails,updateStory } from '../../Redux/Action/StoryAction';
import Loader from '../../Components/Message/Loader';
import Message from '../../Components/Message/Message';
import LoaderModel from '../../Components/Message/LoaderModel';
import { UPDATE_CHAPTER_RESET , READ_CHAPTER_RESET, UPDATE_STORY_RESET } from '../../Redux/Constant/StoryConstant';

const EditStoryScreen = ({ dispatch }) => {
    const { storyid } = useParams();
    const [image, setImage] = useState('');
    const [isFormInitialized, setIsFormInitialized] = useState(false);

    // Fetch chapter state from Redux
    const readStory = useSelector(state => state.readStory);
    const { loading, error, book } = readStory;

    console.log('readStory',readStory)

    const updateStoryState = useSelector(state => state.updateStory);
    const { loading: updateLoading,
        // error: updateError,
        success } = updateStoryState;

    // Form fields refs
    const titleRef = useRef(null);
    const chapterRef = useRef(null);
    const summaryRef = useRef(null);
    const catRef = useRef(null);

    const navigate = useNavigate();

    const [oldForm, setOldForm] = useState({})


    // Step 1: Fetch story if not already loaded or chapterid doesn't match
    useEffect(() => {
        if (!book || book?._id != storyid) {
            dispatch(listStoryDetails(storyid));
        }


        const initializeForm = async () => {
            if (book && book?._id == storyid && !isFormInitialized) {
                titleRef.current.value = book.name || '';
                catRef.current.value = book.category || '';
                summaryRef.current.value = book.summary || '';

                setImage(book.cover || '');
            }
            setIsFormInitialized(true);  // Mark form as initialized
        };

        if (book && book?._id == storyid && !isFormInitialized) {
            initializeForm();
            setOldForm({
                title: book.title,
                category: catRef.current.value,
                summary: summaryRef.current.value,
                cover: book.cover,
            })
        }


         
    }, [dispatch, storyid,isFormInitialized,book]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {}; // Initialize an empty object

        // Conditionally add properties based on changes
        if (titleRef.current.value !== oldForm.title) {
            formData.title = titleRef.current.value; // Add title if it has changed
        }
        if (catRef.current.value !== oldForm.category) {
            formData.category = catRef.current.value; // Add category if it has changed
        }
        if (summaryRef.current.value !== oldForm.summary) {
            formData.summary = summaryRef.current.value; // Add summary if it has changed
        }
        if (image !== oldForm.cover) {
            console.log('image',image)
            console.log('old img',oldForm.image)
            formData.cover = image; // Add cover if it has changed
        }

      

        dispatch(updateStory(storyid, formData));

    };


    useEffect(() => {
        if (success) {
            alert('Chapter Updated ...')
            navigate(`/add/story/${storyid}`);
            dispatch({ type: UPDATE_STORY_RESET })
            dispatch({ type: READ_CHAPTER_RESET })
        }
    }, [success])

    const uploadImage = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            try {
                const uploadedUrl = await UploadImage(file);
                setImage(uploadedUrl);
            } catch (error) {
                console.error("Image upload failed", error);
            }
        }
    };

    // Step 3: Rendering based on loading/error state
    if (loading) return <Loader />;
    if (error) return <Message>{error}</Message>;
    if (!book?._id) return null;
    return (
        <form onSubmit={handleSubmit} className="form bg-white p-6 my-10 relative max-w-lg mx-auto shadow-lg rounded-lg">
            { /*updateLoading && <LoaderModel />*/}
            <h3 className="text-2xl text-gray-900 font-semibold">Edit Chapter</h3>
            <div className="flex space-x-5 mt-3">
                <input
                    type="text"
                    placeholder="Title"
                    className="border p-2 w-1/2"
                    ref={titleRef}
                />
            </div>

            <div className="flex space-x-5 mt-3 mb-2">
                <input
                    type="text"
                    placeholder="Category"
                    className="border p-2 w-1/2"
                    ref={catRef}
                />
            </div>

            <div className="relative max-h-52 aspect-[9/16] bg-gray-200 overflow-hidden left-1/3 align-middle">
                <img
                    src={image}
                    alt=""
                    className="object-cover w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            <div className="flex space-x-5 mt-3">
                <input
                    type="file"
                    onChange={uploadImage}
                    className="border p-2 w-1/2"
                    accept="image/*"
                />
            </div>

            <h1>Summary</h1>
            <textarea
                placeholder="Write Summary here"
                className="border p-2 mt-3 w-full"
                ref={summaryRef}
                maxLength={1000}
            />

         
            <input
                type="submit"
                value="Update Story"
                className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
            />



        </form>
    );
};

export default EditStoryScreen;
