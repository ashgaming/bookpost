import React from 'react'
import { Link } from 'react-router-dom'

export const BookCover = ({ Book }) => {
  return (
    <Link 
    to={`/book/${Book.id}`}
    className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"
    >
      <img
       src={Book.url} 
       alt={Book.name}
       className="w-full h-auto object-cover rounded-lg" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
        <h1 className="text-2xl font-semibold">{Book.name}</h1>
        <p className="mt-2">{Book.description}</p>
      </div>
    </Link>
  )
}
