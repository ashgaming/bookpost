import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddComment from '../../Components/Layout/AddComment';
import Stars from '../../Components/Element/Stars';
import { readChapter } from '../../Redux/Action/StoryAction';
import { useSelector } from 'react-redux';
import Loader from '../../Components/Message/Loader';
import Message from '../../Components/Message/Message';

export default function ReadChapterScreen({ dispatch }) {
  const { chapterid, storyid } = useParams();
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');

  const ReadChapter = useSelector(state => state.readChapter)
  const { loading,error,chapter,count } = ReadChapter

  const LikeThisChapter = () => {
    chapter.likes += 1;
    console.log(chapter.likes)
  }

  useEffect(() => {
    try {
      dispatch(readChapter(storyid, chapterid))
    } catch (err) {
      alert(err)
    }
  },[chapterid])
  
  if(loading) return <Loader/>;
  if(error) return <Message>error</Message>;
  if(!chapter._id) return null;

  console.log(chapter.chapter)
  const paragraphs = chapter.chapter.split(/\n+/).filter(p => p.trim() !== '');
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Chapter Header */}
        <h1 className="text-3xl font-semibold text-blue-700 mb-4">Read Chapter</h1>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-medium">Story Id: {storyid}</h2>
          <h2 className="text-xl font-medium">Chapter Id: {chapterid}</h2>
        </div>

        {/* Chapter Content */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <img src={`http://127.0.0.1:8000/${chapter.cover.slice(32)}`} alt="Chapter Image" className="w-48 h-48 object-cover rounded-lg shadow-md" />
            <div className="mt-4 md:mt-0 md:ml-6">
              <h1 className="text-2xl font-bold text-gray-800">{chapter.title || 'Untitled'}</h1>
              <h2 className="text-lg text-gray-600">{chapter.title}</h2>
              <h2 className="text-lg text-gray-600">{chapter.views} Views</h2>
              <h2 className="text-lg text-gray-600">{chapter.likes} Likes</h2>
              <Stars rating={chapter.rating} count={chapter.numReviews} />

              {/**
             * 
               <h2 className="text-sm text-gray-600">{chapter.likes} 
                <button onClick={LikeThisChapter}>Like</button>
                 </h2>
            */}
            </div>

          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            {paragraphs.map((para, index) => (
              <p
                key={index}
                className="mb-4 text-justify whitespace-pre-wrap text-gray-700 text-lg leading-relaxed "
                style={{ textIndent: '2em', marginBottom: '1.5em' }} // Indent first line and add space after each paragraph
              >
                {para}
              </p>
            ))}
            <p>****</p>

          </div>
        </section>

        {/* Navigation Links */}
        <div className="flex justify-between mb-6">
          {chapterid > 1 && (
            <Link
              to={`/story/${storyid}/chapter/${chapterid - 1}`}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Previous
            </Link>
          )}
          {count > parseInt(chapterid) && (
            <Link
              to={`/story/${storyid}/chapter/${parseInt(chapter._id) + 1}`}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Next
            </Link>
          )}
        </div>

        {/* Comment Section 
        <div className="mt-6">
          <AddComment type="chapter" id={chapterid} />
        </div>
          */}
      </div>
    </div>
  );
}
