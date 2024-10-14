import React, { useEffect } from 'react'
import { BookCover } from '../Book/BookCover'
import { listStory } from '../../Redux/Action/StoryAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Message/Loader'
import Message from '../Message/Message'

const ListBook = () => {
    const dispatch = useDispatch()
    const listStoryy = useSelector(state => state.listStory)
    const { loading, error, Books } = listStoryy

    useEffect(() => {
        if (Books === undefined) {
            dispatch(listStory());
        }
    }, [Books])


    return (
        <>

            <h1 className='m-1 p-5 text-5xl '>My Book Collection</h1>
            {loading && <Loader />}
            {error && <Message>{error}</Message>}
            <div className="container mx-auto p-4 lg:h-auto flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {
                        Books && Books.map((book, index) => (

                            <BookCover Book={book} key={index} />

                        ))
                    }

                    {!Books && <Message>No books available ...!</Message>}



                </div>
            </div>
        </>
    )
}

export default ListBook
