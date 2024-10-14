import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { backend } from '../../Connection/conn';
import Message from '../Message/Message';
import Loader from '../Message/Loader';
import { Link } from 'react-router-dom';

const MostPopular = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const hasLoadedRef = useRef(false); // Ref to track if data has already been loaded

    useEffect(() => {
        const fetchBooks = async () => {
            if (!hasLoadedRef.current) { // Check if data has been loaded
                setLoading(true);
                try {
                    console.log('Fetching data...');
                    const { data } = await axios.get(`${backend}/api/mostpopular`);
                    setBook(data);
                    hasLoadedRef.current = true; // Mark as loaded
                } catch (error) {
                    setError(error.message || 'Failed to fetch books');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchBooks();
    }, []);

    if (loading) return <Loader />; // Display loader while loading

    return (
        <section>
            {console.log('book', book)}
            {error ? (
                <Message>{error}</Message>
            ) : (
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt=""
                                src={book.cover}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">{book.name}</h2>
                            <h2 className="text-2xl font-bold sm:text-3xl">{book.category}</h2>

                            <p className="mt-4 text-gray-600">
                                {book.summary}
                            </p>

                            <Link
                                to={`/book/${book._id}`}
                                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Reading
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MostPopular;
