import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';  // Import Quill styles
import axios from "axios";

// Import the image uploader plugin
import Quill from 'quill';
import ImageUploader from 'quill-image-uploader';
Quill.register('modules/imageUploader', ImageUploader);

const TextImageInput = () => {
  const [content, setContent] = useState("");

  const handleTextChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", content);  // Quill editor output as HTML

    try {
      const response = await axios.post("http://localhost:8000/api/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading data", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ReactQuill
        value={content}
        onChange={handleTextChange}
        modules={{
          toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image'],  // Image option in toolbar
          ],
          imageUploader: {
            upload: (file) => {
              // Upload the image to your server or an image hosting service
              const formData = new FormData();
              formData.append("image", file);

              // You can use a real image upload URL here
              return axios.post("http://localhost:8000/api/upload-image/", formData)
                .then(response => {
                  return response.data.imageUrl;  // Return the uploaded image URL
                })
                .catch(error => {
                  console.error("Image upload failed:", error);
                  throw error;
                });
            }
          }
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextImageInput;
