import React, { useState } from 'react';

const AddChapterScreen = () => {
  const [image, setImage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    story: '',
    url: image
  });

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

  const uploadImage = () => {

  }

  return (
    <form onSubmit={handleSubmit} className="form bg-white p-6 my-10 relative max-w-lg mx-auto shadow-lg rounded-lg">

      <h3 className="text-2xl text-gray-900 font-semibold">Add new chapter here</h3>
      <p className="text-gray-600">Latest Chapter is coming soon</p>

      <div className="flex space-x-5 mt-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 w-1/2"
        />

        <input
          type="button"
          value="Save"
          className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
        />

      </div>

      <div className="flex space-x-5 mt-3">
        <img src={image} alt='' />
        <input
          type="file"
          name="name"
          onChange={uploadImage}
          placeholder="Your Name"
          className="border p-2 w-1/2"
          accept="image/*"
        />

      </div>



      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        cols={10}
        rows={50}
        placeholder="Write Chapter here"
        className="border p-2 mt-3 w-full"
        maxLength={1000}
      ></textarea>


      <input
        type="submit"
        value="Publish"
        className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
      />
    </form>
  );
};

export default AddChapterScreen;
