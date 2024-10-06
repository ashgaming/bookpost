import React from 'react'
import { Link } from 'react-router-dom'
const image = require('../AuthScreen/assets/reg.webp');


export default function RegisterScreen() {
    return (
        <>
        <div className="flex justify-center items-center h-screen" style={{
            backgroundColor:'#F9BEAD',
        }}>

          
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-1/2 lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Register</h1>
                <form>
                    <div className="mb-4">
                        <label for="username" className="block text-gray-600">Username</label>
                        <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                    </div>
                    <div className="mb-4">
                        <label for="password" className="block text-gray-800">Password</label>
                        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                    </div>

                    <div className="mb-4">
                        <label for="password" className="block text-gray-800">Confirm Password</label>
                        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                    </div>
                 
                   
                    <button type="submit" className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
              
                <div className="mt-6 text-green-500 text-center">
                    <Link to="/login" className="hover:underline">Sign in Here</Link>
                </div>
            </div>
            <div className="w-1/2 h-screen hidden lg:block">
                <img src={image} alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>
        </div>
        </>
    )
}
