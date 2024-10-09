import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../Redux/Action/UserAcrion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const userLogin = useSelector(state=>state.userLogin)
    const { userInfo } = userLogin
    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Story', path: '/story-option' },
        !userInfo && { name: 'Login', path: '/Login' }, 
    ];

    const logoutHandler = () => {
        dispatch(logoutUser()); 
    }


    return (
        <header>
            <nav 
            style={styles}
            className="font-sans flex flex-col sm:flex-row justify-between items-center py-2 px-6 shadow w-full overflow-x-hidden">
                <div className="mb-2 sm:mb-0 text-center sm:text-left">
                    <Link to="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-bold">Falicia Celestia</Link>
                    <br />
                    <span className="text-xs text-grey-dark">Beautiful New Tagline</span>
                </div>

                <div className="relative sm:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? '✖️' : '☰'}
                    </button>
                </div>

                <div className={`flex-col sm:flex sm:items-center ${isOpen ? 'block' : 'hidden'} sm:flex-row`}>
                    {navigation.map((nav) => (
                        <Link
                            className='mx-2 justify-center align-middle text-md no-underline text-grey-darkest hover:text-blue-dark'
                            to={nav.path}
                            key={nav.name}
                        >
                            {nav.name}
                        </Link>
                    ))}

                    {
                        userInfo && <button
                        onClick={logoutHandler}
                        className='mx-2 justify-center align-middle text-md no-underline text-grey-darkest hover:text-blue-dark'
                    >
                        Logout
                    </button>
                    }

                </div>
            </nav>
        </header>
    );
}

const styles = {
    backgroundColor:"#EC9027"
}