import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import AddComment from '../../Components/Layout/AddComment';
//import Loader from '../../Components/Message/Loader';
import ListChapter from '../../Components/Layout/ListChapter';
//import ListComment from '../../Components/Layout/ListComment';
import BookDetails from '../../Components/Layout/BookDetails';
import { useDispatch, useSelector } from 'react-redux';
import { listStoryDetails } from '../../Redux/Action/StoryAction';
import LoaderModel from '../../Components/Message/LoaderModel';

// Memoized child components to prevent unnecessary re-renders
const MemoizedBookDetails = React.memo(BookDetails);
const MemoizedListChapter = React.memo(ListChapter);
// const MemoizedAddComment = React.memo(AddComment);
// const MemoizedListComment = React.memo(ListComment);

const DisplayBook = () =>{
  const { id } = useParams();  // Get the story ID from the route params
  const dispatch = useDispatch();

  // Fetch the book details when the component mounts or when 'id' changes
  useEffect(() => {
    if (id && (!book || book._id != id)) {
      // Only dispatch if the story is not already loaded or the id has changed
      dispatch(listStoryDetails(id));
    }
  }, [dispatch, id]);

  // Redux state to fetch the story details
  const readStory = useSelector((state) => state.readStory);
  const { loading, error, book } = readStory;

  


  return (
    <>
      {error &&
        <div className="text-red-500 text-center">{error}</div>}

        {/* Details of the Book */}
        
        {loading ? <LoaderModel/> :
        <MemoizedBookDetails book={book} />
      }

        <div className="mt-6 bg-gray-50">
          <div className="px-10 py-6 mx-auto">
            {/* List of Chapters */}
            {!loading && <MemoizedListChapter />}

            {/* Comment Section 
            <MemoizedAddComment />
            */}

            {/* All Comments Section 
            <MemoizedListComment />
            */}
          </div>
        </div>

    </>
  );
}

export default DisplayBook;
