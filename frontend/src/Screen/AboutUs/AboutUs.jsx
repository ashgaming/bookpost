import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { backend } from '../../Connection/conn';
import Loader from '../../Components/Message/Loader';

const cover = require('../AboutUs/assets/aboutUs.webp');

const AboutUs = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();

    const validateForm = () => {


        // Get the current values from the refs
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const phone = phoneRef.current?.value;
        const message = messageRef.current?.value;

        // Check if the name is not empty
        if (!name) {
            alert("Name is required");
            nameRef.current?.focus();  // Focus on the name field
            return false;
        }

        // Check if the email is not empty and in valid format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            alert("Email is required");
            emailRef.current?.focus();  // Focus on the email field
            return false;
        } else if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            emailRef.current?.focus();  // Focus on the email field
            return false;
        }

        // Check if the phone number is not empty and valid (e.g., only digits and 10 digits long)
        const phonePattern = /^[0-9]{10}$/;
        if (!phone) {
            alert("Phone number is required");
            phoneRef.current?.focus();  // Focus on the phone field
            return false;
        } else if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number");
            phoneRef.current?.focus();  // Focus on the phone field
            return false;
        }

        // Check if the message is not empty
        if (!message) {
            alert("Message is required");
            messageRef.current?.focus();  // Focus on the message field
            return false;
        }

        // If all validations pass
        return true;
    };


    const submitHandler = async (e) => {
        e.preventDefault();

        if (validateForm()) {

            setLoading(true);
            setError(null);

            const formData = {
                name: nameRef.current?.value || '',
                email: emailRef.current?.value || '',
                phone: phoneRef.current?.value || '',
                message: messageRef.current?.value || '',
            };
            try {
                const token = localStorage.getItem('token')
                const Authconfig = {
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }


                const { data } = await axios.post(`${backend}/api/contactUs`, formData, Authconfig);
                alert('Your form has been submitted successfully!');
                // Clear form fields
                nameRef.current.value = '';
                emailRef.current.value = '';
                phoneRef.current.value = '';
                messageRef.current.value = '';
            } catch (error) {
                setError('Error submitting form. Please try again later.');
            } finally {
                setLoading(false);
            }
        } else {
            return
        }
    };

    return (
        <section>
            <div className="relative w-full h-96"><img className="absolute h-full w-full object-cover object-center" src={cover} alt="nature image" />
                <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                <div className="relative pt-28 text-center">
                    <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">Contact Information</h2>
                    <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
                        Thank you for reaching out! I'd be happy to assist you. Please go ahead and ask your questions or share your feedback here, and I will do my best to help you                        </p>
                </div>
            </div>
            <div className="-mt-16 mb-8 px-8 ">
                <div className="container mx-auto">
                    <div className="py-12 flex justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
                        <div className="py-4">
                            {loading && <Loader />}
                            <form>
                                <div className="mb-4">
                                    <div className="relative w-full min-w-[200px] h-11 ">
                                        <input
                                            type="text"
                                            name="Name"
                                            ref={nameRef}
                                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900"
                                            placeholder=" "
                                        />

                                        <label
                                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                            Enter your name
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div
                                        className="relative w-full min-w-[200px] h-11 "
                                    >
                                        <input
                                            type="email"
                                            name="Email"
                                            ref={emailRef}
                                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900" placeholder=" " /><label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter your email </label></div>
                                </div>
                                <div className="mb-4">
                                    <div className="relative w-full min-w-[200px] h-11 ">
                                        <input
                                            type="tel"
                                            ref={phoneRef}
                                            name="Phone Number"
                                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900" placeholder=" " /><label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter your phone number </label></div>
                                </div>
                                <div className="mb-4">
                                    <div className="relative w-full min-w-[200px] h-11 ">
                                        <input
                                            type="textarea"
                                            ref={messageRef}
                                            name="Message"
                                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900" placeholder=" " /><label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Enter your message </label></div>
                                </div>
                                <div className="inline-flex items-center">
                                    <label className="relative flex items-center cursor-pointer p-3 rounded-full -ml-2.5" for=":R1a:">
                                        <input
                                            type="checkbox"
                                            className="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[&#x27;&#x27;] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900"
                                            id=":R1a:"
                                        />

                                        <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3.5 w-3.5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                stroke-width="1">

                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                >
                                                </path>
                                            </svg>
                                        </span>
                                    </label>

                                    <label className="text-gray-700 font-light select-none cursor-pointer mt-px" for=":R1a:">
                                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">You agree to

                                            <Link to="#" className="font-medium text-gray-700 hover:text-gray-900">
                                                Privacy Policy
                                            </Link>.
                                        </p>
                                    </label>
                                </div>

                                <button
                                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-customOrange text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6"
                                    type="button"
                                    onClick={(e) => submitHandler(e)}>
                                    Contact Us
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
