import React, { Suspense, useEffect, useState } from 'react';
import Courosel from '../Components/Courosel/Courosel';
import Footer from '../Components/Footer/Footer';
import ChapterCover from '../Components/Book/ChapterCover';
const MostPopular = React.lazy(() => import('../Components/Layout/MostPopular'));
const ListBook = React.lazy(() => import('../Components/Layout/ListBook'));
const Intro = React.lazy(() => import('../Components/Layout/Intro'));

const HomeScreen = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Check if the page has already loaded
        const checkIfLoaded = () => {
            // Logic to determine if the page has been loaded, 
            // for example, checking localStorage, a state, or a context
            const loaded = localStorage.getItem('mostPopularLoaded') === 'true';
            setIsLoaded(loaded);
        };

        checkIfLoaded();
    }, []);

    const handleLoad = () => {
        // Set the loaded state and save it to localStorage
        setIsLoaded(true);
        localStorage.setItem('mostPopularLoaded', 'true');
    };

    return (
        <main className='w-full relative overflow-x-hidden'>
            <Courosel />
            <Suspense fallback={<div>Loading...</div>}>
                <Intro />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                {isLoaded ? (
                    <MostPopular />
                ) : (
                    <MostPopular onLoad={handleLoad} />
                )}
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ListBook />
            </Suspense>
            <Footer />
        </main>
    );
};

export default HomeScreen;
