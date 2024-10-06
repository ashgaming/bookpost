import React from 'react'
import { BookCover } from '../Book/BookCover'

const ListBook = () => {

    const Books = [
        {
            id:1,
            name: "Nature Image",
            description: "This is a beautiful nature image placeholder. You can replace it with your own image.",
            url: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      

    ]

    return (
        <>
            <h1 className='m-1 p-5 text-5xl '>My Book Collection</h1>
            <div className="container mx-auto p-4 lg:h-auto flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {
                        Books.map((book, index) => (
                          
                                <BookCover Book={book} key={index}/>
                          
                        ))
                    }



                </div>
            </div>
        </>
    )
}

export default ListBook
