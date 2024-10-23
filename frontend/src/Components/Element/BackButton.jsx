import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackButton = ({url}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(url);
    };
    return (
        <div className="w-full flex justify-start my-5">
            <button
                className="bg-customOrange text-white py-2 px-4 rounded hover:bg-hoverOrange transition-colors duration-200"
                onClick={handleClick}
            >
                Go Back
            </button>
        </div>
    );
}

export default BackButton


