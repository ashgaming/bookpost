import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { UploadImage } from '../../Helper/StoryHelp';
import { listStoryDetails, updateStory } from '../../Redux/Action/StoryAction';
import Loader from '../../Components/Message/Loader';
import Message from '../../Components/Message/Message';
import LoaderModel from '../../Components/Message/LoaderModel';
import { READ_CHAPTER_RESET, UPDATE_STORY_RESET } from '../../Redux/Constant/StoryConstant';
import BackButton from '../../Components/Element/BackButton';

const EditStoryScreen = ({ dispatch }) => {
    const { storyid } = useParams();
    const [image, setImage] = useState('');
    const [isFormInitialized, setIsFormInitialized] = useState(false);

    // Fetch chapter state from Redux
    const readStory = useSelector(state => state.readStory);
    const { loading, error, book } = readStory;

    const updateStoryState = useSelector(state => state.updateStory);
    const { loading: updateLoading, error: updateError, success } = updateStoryState;

    // Form fields refs
    const titleRef = useRef(null);
    const summaryRef = useRef(null);
    const catRef = useRef(null);

    const navigate = useNavigate();

    const [oldForm, setOldForm] = useState({})
    const [imgUploading, setImgUploading] = useState(false)
    const [imgUpError, setImgUpError] = useState(null)


    // Step 1: Fetch story if not already loaded or chapterid doesn't match
    useEffect(() => {
        if (!book || book?._id != storyid) {
            dispatch(listStoryDetails(storyid));
        }

        console.log(book)
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
            setImage(book.cover)
        }

    }, [dispatch, storyid, isFormInitialized, book]);

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
            console.log('image', image)
            console.log('old img', oldForm.image)
            formData.cover = image; // Add cover if it has changed
        }

        dispatch(updateStory(storyid, formData));

    };


    useEffect(() => {
        if (success) {
            alert('Story Updated ...')
            navigate(`/list-story`, { replace: true });
            dispatch({ type: UPDATE_STORY_RESET })
            dispatch({ type: READ_CHAPTER_RESET })
        }
    }, [success])

    const uploadImage = async (e) => {
        e.preventDefault();

        setImgUploading(true);
        const file = e.target.files[0];
        if (file) {
            try {
                const uploadedUrl = await UploadImage(file);
                setImage(uploadedUrl);
            } catch (error) {
                setImgUpError(error);
            }
        }

        setImgUploading(false)
    };

    if (loading) return <Loader />;
    if (error) return <Message>{error}</Message>;
    if (!book?._id) return null;
    return (
        <form onSubmit={handleSubmit} className="form bg-white p-6 my-10 relative max-w-lg mx-auto shadow-lg rounded-lg">
            <BackButton url={`/list-story`} />
            {updateLoading && <LoaderModel />}

            <h3 className="text-2xl text-gray-900 font-semibold">Edit Story</h3>
            {updateError && <Message>{updateError}</Message>}
            <div className="flex space-x-5 mt-3">
                <input
                    type="text"
                    placeholder="Title"
                    className="border p-2 w-1/2"
                    ref={titleRef}
                />
            </div>

            <div className="flex space-x-5 mt-3 mb-2">
            <select
                    name="category"
                    ref={catRef} // Referencing the title input
                    className="border p-2 rounded-md">
                    <option value="Fantasy">Fantasy</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Fairy Tale">Fairy Tales</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    <option value="Rom-Com">Rom-Com</option>
                    <option value="Drama">Drama</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Non Fiction">Non-Fiction</option>
                    <option value="Biography">Biography</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Classic">Classic</option>
                    <option value="Young Adult">Young Adult</option>
                    <option value="Children">Children's</option>
                    <option value="Graphic Novel">Graphic Novel</option>
                </select>
            </div>

            <div className="relative max-h-52 aspect-[9/16] bg-gray-200 overflow-hidden left-1/3 align-middle">
                <img
                    src={image}
                    alt=""
                    className="object-cover w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            {imgUploading && <Loader />}
            {imgUpError && <Message>{imgUpError}</Message>}
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
                maxLength={2000}
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
