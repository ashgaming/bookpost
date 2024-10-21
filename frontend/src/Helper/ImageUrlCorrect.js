 const CorrectUrl = async(url) =>
{
    const con = 'http://127.0.0.1:8000/'
    url = url.slice(32)
    const image = con + url;
    return image;
}

export const handleImageError = (e) => {
    e.target.src = 'https://tse1.mm.bing.net/th?id=OIP.rTGLpwoN4zkMisuka5heyQHaHY&pid=Api&P=0&h=180'; // Set your fallback image here
  };