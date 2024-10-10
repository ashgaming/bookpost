import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../Element/Stars'

const BookDetails = ({ book }) => {
    const [cover, setCover] = useState();

    // Avoid setting state during render. Move it into useEffect.
  /*  useEffect(() => {
        if (book && book.cover) {
            CorrectUrl(book.cover).then((cor) => {
              //  setCover(cor); // Set the cover only when the correct URL is resolved
            });
        }
    }, [book]);*/

    // Return null if book is undefined to avoid rendering an empty UI
    if (!book) {
        return null;
    }
  
    console.log(book.cover)

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                        src={book.cover}
                        loading="lazy"
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{book.name}</h1>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{book.category}</h2>
                        <div className="flex mb-4 justify-end">
                            <Stars rating={book.rating} count={book.numReviews} />
                        </div>
                        <p className="leading-relaxed">{book.summary}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5" />
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">
                                <div className="flex justify-start items-center mt-2">
                                    <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">
                                        {book.views ? book.views : '0'}
                                    </p>
                                    <p className="text-sm text-gray-400 font-bold ml-5">Views</p>
                                </div>
                            </span>
                            <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                                <Link to={`/story/${book._id}/chapter/1`}>
                                    Read
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default BookDetails
