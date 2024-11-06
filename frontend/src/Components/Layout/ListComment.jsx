import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listComment } from '../../Redux/Action/StoryAction';
import { deleteComment } from '../../Redux/Action/CommentAction';
import { GET_COMMENT_SUCCESS } from '../../Redux/Constant/StoryConstant';

const ListComment = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, error, comments = [] } = useSelector(state => state.listComments);
  
  const [delLoading, setDelLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(listComment(id));
  }, [dispatch, id, refresh]);

  const getRandomColorClass = () => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const deleteMyComments = async (e, commentId) => {
    e.preventDefault();
    if (delLoading) return;

    try {
      setDelLoading(true);
      const result = await dispatch(deleteComment(commentId));

      if (result === 'success') {
        const updatedComments = comments.filter(item => item._id !== commentId);
        dispatch({
          type: GET_COMMENT_SUCCESS,
          payload: { comments: updatedComments },
        });
      } else {
        alert(result);
      }
    } catch (error) {
      alert("Something went wrong...!");
    } finally {
      setDelLoading(false);
    }
  };

  return (
    <div className="max-w-4xl px-10 py-16 mx-auto bg-gray-100 min-w-screen">
      <p className="mt-1 text-2xl font-bold text-left text-gray-800 sm:text-center">
        All Comments on this Post
      </p>

      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {comments.length === 0 && !loading && <p>No comments...!</p>}

      {comments.map(item => (
        <div key={item._id} className="flex items-center w-full px-6 py-6 mx-auto mt-2 bg-white border border-gray-200 rounded-lg">
          <div className={`flex items-center justify-center ${getRandomColorClass()} text-white font-bold text-2xl rounded-full w-20 h-16`}>
            {item.username?.charAt(0).toUpperCase()}
          </div>
          <div className="w-full mx-2">
            <p className="text-lg font-bold text-left text-gray-800">{item.username}</p>
            <p className="text-sm text-left text-gray-500">{item.comment}</p>
          </div>
          {item.user === JSON.parse(sessionStorage.getItem('user'))._id && (
            <div className="flex justify-end mx-2">
              <button onClick={(e) => deleteMyComments(e, item._id)} disabled={delLoading}>
                {delLoading ? 'Loading...' : 'Delete'}
              </button>
            </div>
          )}
        </div>
      ))}

      <button onClick={() => setRefresh(!refresh)} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Load More Comments
      </button>
    </div>
  );
};

export default ListComment;
