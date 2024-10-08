import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddComment from '../../Components/Layout/AddComment';
import Loader from '../../Components/Message/Loader';
import ListChapter from '../../Components/Layout/ListChapter';
import ListComment from '../../Components/Layout/ListComment';
import BookDetails from '../../Components/Layout/BookDetails';
import { useDispatch, useSelector } from 'react-redux';
import { listStoryDetails } from '../../Redux/Action/StoryAction';

// Memoized child components to prevent unnecessary re-renders
const MemoizedBookDetails = React.memo(BookDetails);
const MemoizedListChapter = React.memo(ListChapter);
const MemoizedAddComment = React.memo(AddComment);
const MemoizedListComment = React.memo(ListComment);

export default function DisplayBook() {
  const { id } = useParams();  // Get the story ID from the route params
  const dispatch = useDispatch();

  // Redux state to fetch the story details
  const readStory = useSelector((state) => state.readStory);
  const { loading, error, book } = readStory;

  // Fetch the book details when the component mounts or when 'id' changes
  useEffect(() => {
    dispatch(listStoryDetails(id));
  }, [dispatch, id]);


  return (
    <>
      {error &&
        <div className="text-red-500 text-center">{error}</div>}

        {/* Details of the Book */}
        <MemoizedBookDetails book={book} />

        <div className="mt-6 bg-gray-50">
          <div className="px-10 py-6 mx-auto">
            {/* List of Chapters */}
            {!loading && <MemoizedListChapter />}

            {/* Comment Section */}
            <MemoizedAddComment />

            {/* All Comments Section */}
            <MemoizedListComment />
          </div>
        </div>

    </>
  );
}
