import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { UploadImage } from '../../Helper/StoryHelp';
import { createChapter, readChapter, updateChapter } from '../../Redux/Action/StoryAction';
import Loader from '../../Components/Message/Loader';
import Message from '../../Components/Message/Message';
import { CorrectUrl } from '../../Helper/ImageUrlCorrect';
import LoaderModel from '../../Components/Message/LoaderModel';
import { UPDATE_CHAPTER_RESET } from '../../Redux/Constant/StoryConstant';

const EditChapter = ({ dispatch }) => {
    const { storyid, chapterid } = useParams();
    const [image, setImage] = useState('');
    const [isFormInitialized, setIsFormInitialized] = useState(false);

    // Fetch chapter state from Redux
    const editChapterState = useSelector(state => state.readChapter);
    const { loading, error, chapter } = editChapterState;

    const updateChapterState = useSelector(state => state.updateChapter);
    const { loading: updateLoading, error: updateError, success } = updateChapterState;

    // Form fields refs
    const titleRef = useRef(null);
    const chapterRef = useRef(null);
    const summaryRef = useRef(null);

    const navigate = useNavigate();

    // Step 1: Fetch chapter if not already loaded or chapterid doesn't match
    useEffect(() => {
        if (!chapter || chapter._id != chapterid) {
            dispatch(readChapter(storyid, chapterid));
        }

        const initializeForm = async () => {
            if (chapter && chapter._id == chapterid && !isFormInitialized) {
                titleRef.current.value = chapter.title || '';
                chapterRef.current.value = chapter.chapter || '';
                summaryRef.current.value = chapter.summary || '';

                const url = await CorrectUrl(chapter.cover);
                setImage(url || '');

            }
            setIsFormInitialized(true);  // Mark form as initialized
        };

        if (chapter && chapter._id == chapterid && !isFormInitialized) {
            initializeForm();
        }
        // }
    }, [dispatch, storyid, chapterid, chapter?._id]);



    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title: titleRef.current.value,
            chapter: chapterRef.current.value,
            summary: summaryRef.current.value,
            cover: image,
        };

        dispatch(updateChapter(storyid, chapterid, formData));


    };

    console.log('sucess', success)

    useEffect(() => {
        if (success) {
            alert('Chapter Updated ...')
            navigate(`/add/story/${storyid}`);
            dispatch({ type: UPDATE_CHAPTER_RESET })
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
    if (!chapter._id) return null;
    return (
        <form onSubmit={handleSubmit} className="form bg-white p-6 my-10 relative max-w-lg mx-auto shadow-lg rounded-lg">
            {updateLoading && <LoaderModel />}
            <h3 className="text-2xl text-gray-900 font-semibold">Edit Chapter</h3>
            <div className="flex space-x-5 mt-3">
                <input
                    type="text"
                    placeholder="Title"
                    className="border p-2 w-1/2"
                    ref={titleRef}
                />
            </div>
            <div className="relative max-h-52 aspect-[9/16] bg-gray-200 overflow-hidden left-1/3 align-middle">
                <img
                    src={image}
                    alt="Uploaded"
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

            <h1>Chapter Content</h1>
            <textarea
                placeholder="Write Chapter here"
                className="border p-2 mt-3 w-full"
                ref={chapterRef}
                maxLength={200}
            />

            <input
                type="submit"
                value="Update Chapter"
                className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
            />



        </form>
    );
};

export default EditChapter;
