import React from 'react'
import { Link } from 'react-router-dom'

const ListComment = () => {
  return (
    <div className="max-w-4xl px-10 py-16 mx-auto bg-gray-100 min-w-screen">
            <p className="mt-1 text-2xl font-bold text-left text-gray-800 sm:text-center">
              All Comments on this Post
            </p>

            {/* Sample Comment */}
            <div className="flex items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg">
              <Link to="#" className="flex items-center mt-6 mb-6 mr-6">
                <img
                  src="https://avatars.githubusercontent.com/u/71964085?v=4"
                  alt="Commenter avatar"
                  className="object-cover w-20 h-20 mx-auto rounded-full bg-gray-300"
                />
              </Link>
              <div className="mt-4 mr-8">
                <p className="text-lg font-bold text-left text-gray-800">Ankita</p>
                <p className="text-sm text-left text-gray-500">
                  Cup of tea story is brilliant!
                </p>
              </div>
            </div>
          </div>
  )
}

export default ListComment
