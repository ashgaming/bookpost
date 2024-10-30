import React from 'react'
import { Link } from 'react-router-dom'
import { handleImageError } from '../../Helper/ImageUrlCorrect';
import Stars from '../Element/Stars';

export const BookCover = ({ Book }) => {
  if (!Book) return null;

  return (
    <Link
      to={`/book/${Book._id}`}
      className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105"
    >
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

        <img
          src={Book.cover}
          alt="Product" class="h-80 w-72 object-cover rounded-t-xl"
          onError={(e) => handleImageError(e)} />
        <div class="px-4 py-3 w-72">
          <span class="text-gray-400 mr-3 uppercase text-xs">Novel</span>
          <p class="text-lg font-bold text-black truncate block capitalize">{Book.name}</p>
          <div class="flex items-center">
            <p class="text-lg font-semibold text-black cursor-auto my-3"><Stars rating={Book.rating} count={Book.count} /></p>
          </div>
        </div>

      </div>

    </Link>

  )
}
