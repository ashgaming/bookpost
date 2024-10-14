import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Redux/Action/UserAcrion';
import LoaderModel from '../../Components/Message/LoaderModel';
import Message from '../../Components/Message/Message';

const image = require('../AuthScreen/assets/reg.webp');

const RegisterScreen=()=> {
    // Create refs for each input
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Select loading, error, and success state from Redux store
    const { loading, error, success, token } = useSelector((state) => state.userRegister); // Adjust the state slice based on your store

    const registerFn = (event) => {
        event.preventDefault(); // Prevent default form submission
        const formData = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value,
        };

        if (Validate()) {
            // Dispatch the register action
            dispatch(registerUser(formData)); // Adjust based on your action implementation
        }
    };

    const Validate = () => {
        const usernamePattern = /^[a-zA-Z0-9]+$/; // Only letters and numbers are allowed
        const usernameValue = usernameRef.current.value.trim();

        // Check for username validation
        if (!usernameValue) {
            alert('Username is required');
            usernameRef.current.focus(); // Navigate to username field
            return false;
        } else if (usernameValue.length < 8) {
            alert('Username must be at least 8 characters long.');
            usernameRef.current.focus(); // Navigate to username field
            return false;
        } else if (!usernamePattern.test(usernameValue)) {
            alert('Username can only contain letters and numbers.');
            usernameRef.current.focus(); // Navigate to username field
            return false;
        }

        // Sanitize username
        const sanitizedUsername = usernameValue.replace(/[<>&"'\\`]/g, "");

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email format validation
        const emailValue = emailRef.current.value.trim(); // Assuming you have a ref for the email input

        // Check for email validation
        if (!emailValue) {
            alert('Email is required');
            emailRef.current.focus(); // Navigate to email field
            return false;
        } else if (emailValue.length < 5) { // Adjust minimum length if necessary
            alert('Email must be at least 5 characters long.');
            emailRef.current.focus(); // Navigate to email field
            return false;
        } else if (!emailPattern.test(emailValue)) {
            alert('Please enter a valid email address.');
            emailRef.current.focus(); // Navigate to email field
            return false;
        }


        const passwordValue = passwordRef.current.value;
        const confirmPasswordValue = confirmPasswordRef.current.value;

        // Check if passwords match
        if (passwordValue !== confirmPasswordValue) {
            alert('Passwords do not match. Please try again.');
            confirmPasswordRef.current.focus(); // Navigate to confirm password field
            return false;
        }

        // Validate strong password
        const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!strongPasswordPattern.test(passwordValue)) {
            alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            passwordRef.current.focus(); // Navigate to password field
            return false;
        }

        // Sanitize password
        const sanitizedPassword = passwordValue.replace(/[<>&"'\\`]/g, "");

        // Store sanitized values
        usernameRef.current.value = sanitizedUsername;
        passwordRef.current.value = sanitizedPassword;
        confirmPasswordRef.current.value = sanitizedPassword;

        return true; // If all validations pass
    };

    // Effect to navigate on success
    useEffect(() => {
        if (success) {
            navigate('/'); // Navigate to home on successful registration
        }
    }, [success, navigate]);

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center h-screen bg-[#F9BEAD]">
            <div className="lg:p-36 md:p-20 sm:p-8 p-4 w-full lg:w-1/2 ">
                <h1 className="text-2xl font-semibold mb-4">Register</h1>

                {loading && <LoaderModel />}
                {success && <Message>Registration successful!</Message>}

                <form onSubmit={registerFn}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                {error && <Message>{error}</Message>}
                        <input
                            type="text"
                            id="username"
                            name="username"
                            ref={usernameRef}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            ref={emailRef}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-800">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            ref={passwordRef}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-800">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            ref={confirmPasswordRef}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>
                    <button type="submit" className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">
                        Register
                    </button>
                </form>
                <div className="mt-6 text-green-500 text-center">
                    <Link to="/login" className="hover:underline">Sign in Here</Link>
                </div>
            </div>
            <div className="w-full lg:w-1/2 hidden lg:block h-screen">
                <img src={image} alt="Placeholder" className="object-cover w-full h-screen" />
            </div>
        </div>
    );

}

export default RegisterScreen;