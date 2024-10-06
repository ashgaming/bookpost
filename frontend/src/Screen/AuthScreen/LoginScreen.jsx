import React from 'react'
import { Link } from 'react-router-dom'
const image = require('../AuthScreen/assets/log.webp');

export default function LoginScreen() {
    return (
        <>
        <div className="bg-sky-100 flex justify-center items-center h-screen">

            <div className="w-1/2 h-screen hidden lg:block">
                <img src={image} alt="Placeholder" className="object-cover w-full h-full" />
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form action="#" method="POST">
                    <div className="mb-4 bg-sky-100">
                        <label for="username" className="block text-gray-600">Username</label>
                        <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                    </div>
                    <div className="mb-4">
                        <label for="password" className="block text-gray-800">Password</label>
                        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                    </div>
                 
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="remember" name="remember" className="text-red-500" />
                            <label for="remember" className="text-green-900 ml-2">Remember Me</label>
                    </div>
                  
                    <div className="mb-6 text-blue-500">
                        <Link to="#" className="hover:underline">Forgot Password?</Link>
                    </div>
                 
                    <button type="submit" className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
              
                <div className="mt-6 text-green-500 text-center">
                    <Link to="/register" className="hover:underline">Sign up Here</Link>
                </div>
            </div>
        </div>
        </>
    )
}
