import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../Redux/Action/UserAcrion';
import { useSelector } from 'react-redux';
const image = require('../AuthScreen/assets/log.webp');

const LoginScreen = ({dispatch}) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const userLogin = useSelector(state=>state.userLogin)
    const { 
       // loading,error,
        token } = userLogin

    const SubmitHandler = (e) =>{
        e.preventDefault();
        const name = usernameRef.current?.value;
        const pass = passwordRef.current?.value;
    
        dispatch(loginUser(name,pass));
    }

    useEffect(()=>{
        if(token){
            navigate('/');
        }else{
            return;
        }
    },[token,navigate])

    return (
        <>
        <div className="bg-sky-100 flex justify-center items-center h-screen">

            <div className="w-1/2 h-screen hidden lg:block">
                <img src={image} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={(e)=> SubmitHandler(e)}>
                    <div className="mb-4 bg-sky-100">
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                        <input type="text" ref={usernameRef} id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-800">Password</label>
                        <input type="password" ref={passwordRef} id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                 
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="remember" name="remember" className="text-red-500" />
                            <label htmlFor="remember" className="text-green-900 ml-2">Remember Me</label>
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

export default LoginScreen;