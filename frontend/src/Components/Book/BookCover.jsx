import React from 'react'
import { Link } from 'react-router-dom'
import { handleImageError } from '../../Helper/ImageUrlCorrect';

export const BookCover = ({ Book }) => {
  if (!Book) return null;

  return (
    <Link
      to={`/book/${Book._id}`}
      className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105"
    >
      <img
        src={Book.cover}
        alt={Book.name}
        onError={(e)=>handleImageError(e)}
        className="w-full h-64 object-cover rounded-t-lg"
      /* h-64 gives a fixed height for a more uniform layout */
      />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-60 backdrop-blur-sm text-white p-4 rounded-b-lg">
        <h1 className="text-2xl font-semibold truncate">{Book.name}</h1>
        {/* The `truncate` class ensures long text doesn't overflow */}

        <p className="mt-2 text-sm line-clamp-3">
          {Book.summary}
        </p>
        {/* The `line-clamp-3` class ensures only 3 lines of summary are displayed */}
      </div>
    </Link>

  )
}
