import axios from 'axios';
import { backend } from '../Connection/conn';


export const UploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);


    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    };
    

    try {
        const response = await axios.post(`${backend}/api/upload-image/`, formData, config);

        if (response.status === 200) {
            const uploadedImageUrl = `${backend}` + response.data.image_url;
            alert('Image uploaded successfully');
            return uploadedImageUrl;
        } else {
            alert('Failed to upload image');
        }
    } catch (err) {
        alert('Error uploading image:', err);
        throw new Error('Image upload failed');
    }
};
