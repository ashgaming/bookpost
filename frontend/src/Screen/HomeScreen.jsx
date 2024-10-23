import React, { Suspense, useEffect, useState } from 'react';
import Courosel from '../Components/Courosel/Courosel';
import Footer from '../Components/Footer/Footer';
import Loader from '../Components/Message/Loader';
import ConfirmDelete from '../Components/Message/ConfirmDelete';


const MostPopular = React.lazy(() => import('../Components/Layout/MostPopular'));
const ListBook = React.lazy(() => import('../Components/Layout/ListBook'));
const Intro = React.lazy(() => import('../Components/Layout/Intro'));
const FAQ = React.lazy(() => import('../Components/Layout/FAQ'));
const Annoucements = React.lazy(() => import('../Components/Layout/Event/Annoucements'));
const UpcomingEvents = React.lazy(() => import('../Components/Layout/Event/UpcomingEvents'));
const LatestEvents = React.lazy(() => import('../Components/Layout/Event/LatestEvents'));

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
            <Suspense fallback={<Loader/>}>
                <Intro />
            </Suspense>
            <Suspense fallback={<Loader/>}>
                <MostPopular />
            </Suspense>
            
            {/**
            <Suspense fallback={<div>Loading...</div>}>
                <Annoucements />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <UpcomingEvents />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <LatestEvents />
            </Suspense>
            */}

            <Suspense fallback={<Loader/>}>
                <ListBook />
            </Suspense>


            <Suspense fallback={<Loader/>}>
                <FAQ />
            </Suspense>
            <Footer />
        </main>
    );
};

export default HomeScreen;
