import React from 'react'
import Courosel from '../Components/Courosel/Courosel'
import ListBook from '../Components/Layout/ListBook'
import Footer from '../Components/Footer/Footer'
import ChapterCover from '../Components/Book/ChapterCover'

const HomeScreen = () => {
    return (
        <main className='w-full relative overflow-x-hidden'>
            <Courosel />
            <ListBook />
            <Footer />
        </main>
    )
}

export default HomeScreen;
