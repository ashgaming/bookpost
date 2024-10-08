import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { listChapter } from '../../Redux/Action/StoryAction';
import { useDispatch, useSelector } from 'react-redux';
import { CorrectUrl } from '../../Helper/ImageUrlCorrect';

const ListChapter = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const ListChapterState = useSelector(state => state.listChapter);
    const { loading, error, chapters } = ListChapterState;

    // State to hold resolved image URLs
    const [imageUrls, setImageUrls] = useState({});

    useEffect(() => {
        // Fetch the chapters when the id changes
        dispatch(listChapter(id));
        console.log('com reloaders')
    }, [id, dispatch]);

    console.log(typeof chapters)

    useEffect(() => {
        // Function to resolve chapter cover URLs
        const fetchUrls = async () => {
            const urls = {};
            const chapterArray = Object.values(chapters); // Convert chapters object to an array
            for (const chapter of chapterArray) {
                if (chapter.cover) {
                    try {
                        const resolvedUrl = await CorrectUrl(chapter.cover);
                        urls[chapter.ChapterId] = resolvedUrl;
                    } catch (error) {
                        console.error('Error fetching URL for chapter:', chapter.title, error);
                        urls[chapter.ChapterId] = '/path/to/placeholder-image.jpg'; // Fallback image
                    }
                } else {
                    urls[chapter.ChapterId] = '/path/to/placeholder-image.jpg'; // Fallback image
                }
            }
            setImageUrls(urls);
        };

        if (chapters && typeof chapters === 'object') {
        }
    }, [chapters,id]);

    if (!chapters || typeof chapters !== 'object') return null;
    console.log(chapters)


    return (
        <>
            <h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">Chapters</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pb-10 mt-8 sm:mt-16 w-full">
                {chapters.map((chapter, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start overflow-hidden shadow-lg rounded-xl transition-transform duration-300 transform hover:scale-105"
                    >
                        <Link to={`/story/${id}/chapter/${chapter._id}`} className="block w-full">
                            <img
                                className="object-cover w-full h-48 rounded-t-xl transition duration-300 transform hover:scale-105"
                                src={ `http://127.0.0.1:8000/${chapter.cover}` } // Use resolved URL or fallback
                                alt={`Chapter cover for ${chapter.title}`}
                            />
                        </Link>

                        <div className="relative flex flex-col items-start p-4 bg-white border-t border-gray-200 rounded-b-xl">
                            <h2 className="text-lg font-semibold text-gray-800 truncate">
                                <Link to={`/story/${id}/chapter/${chapter._id}`} className="hover:text-blue-600">
                                    {chapter._id} : {chapter.title}
                                </Link>
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ListChapter;
