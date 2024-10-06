import React, { useState } from 'react';

const CreateStory = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        url: ''
    });

    const [iurl, setIurl] = useState('')

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted', formData);
    };

    const uploadImage = (e) => {
        e.preventDefault();


    }

    return (
        <form onSubmit={handleSubmit} className="form bg-white p-6 my-10 relative max-w-lg mx-auto shadow-lg rounded-lg">
            <h3 className="text-2xl text-gray-900 font-semibold">Add your latest story!</h3>
            <p className="text-gray-600">Let me know what is in your mind</p>



            <div className="flex space-x-5 mt-3">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Story Name"
                    className="border p-2 w-1/2"
                />

            </div>
            <div className='py-5'>

            <img src={iurl} alt='' loading='lazy' />

            <input
                type='file'
                name='cover'
                onChange={(e) => uploadImage(e)}
                />
                </div>

            <textarea
                name="message"
                value={formData.description}
                onChange={handleChange}
                cols={10}
                rows={3}
                maxLength={200}
                placeholder="Summurize your story"
                className="border p-2 mt-3 w-full"
            ></textarea>


            <input
                type="submit"
                value="Submit"
                className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
            />
        </form>
    );
};

export default CreateStory;
