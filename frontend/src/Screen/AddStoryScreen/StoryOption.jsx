import React from 'react'
import { Link } from 'react-router-dom'

const StoryOption = () => {
    return (
        <div className="main flex flex-col m-5">
            <div className="header">
                <div className="text-3xl font-bold text-gray-600 mb-4">Choose Your Option</div>
            </div>
            <Link to="/create-story" >
                <div className="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer">
                    <div className="left">
                        <div className="header text-blue-600 font-semibold text-2xl">Create New Story</div>
                        <div className="desc text-gray-600">this is basically used for web based scripting</div>
                    </div>
                    <div className="right m-auto mr-0">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/list-story">
                <div className="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer">
                    <div className="left">
                        <div className="header text-blue-600 font-semibold text-2xl">Continue Story</div>
                        <div className="desc text-gray-600">this is basically used for server based processing</div>
                    </div>
                    <div className="right m-auto mr-0">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/" >
                <div className="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer">
                    <div className="left">
                        <div className="header text-blue-600 font-semibold text-2xl">Edit Profile</div>
                        <div className="desc text-gray-600">this is basically used for web based front end designing</div>
                    </div>
                    <div className="right m-auto mr-0">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default StoryOption
