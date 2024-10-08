export const CorrectUrl = async(url) =>
{
    const con = 'http://127.0.0.1:8000/'
    url = url.slice(32)
    const image = con + url;
    return image;
}