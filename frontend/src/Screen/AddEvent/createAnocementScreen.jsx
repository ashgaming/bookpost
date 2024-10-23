import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListMyStoryes from '../../Components/Layout/Event/ListMyStoryes';

const CreateAnocementScreen = () => {
  const [event, setEvent] = useState(''); // Keep track of selected event
  const [story, setStory] = useState(''); // Selected story
  const [chapter, setChapter] = useState(''); // Selected chapter
  const [message, setMessage] = useState(''); // Message text
  const [eventDate, setEventDate] = useState(''); // Event date
  const [eventTime, setEventTime] = useState(''); // Event time
  const [expireDate, setExpireDate] = useState(''); // Expire date
  const [expireTime, setExpireTime] = useState(''); // Expire time
  const [WantToUploadCover, setWantToUploadCover] = useState(false); // Cover upload flag
  const [coverFile, setCoverFile] = useState(null); // Cover file

  const submitHandler = (e) => {
    e.preventDefault();

    // You can handle form validation here before proceeding
    if (!event || !message || !eventDate || !expireDate) {
      alert('Please fill in all required fields!');
      return;
    }

    const announcementData = {
      event,
      story,
      chapter,
      message,
      eventDate,
      eventTime,
      expireDate,
      expireTime,
      coverFile,
    };

    console.log('Submitted Data:', announcementData);
    // You can dispatch the data or send to an API
  };

  console.log('event',event)

  const UploadImage = (file) => {

    console.log('files', file)
    setCoverFile()
  }

  return (
    <div className="mx-auto container flex items-center" id="nav">
      <div className="w-full pt-2 p-4">
        <div className="mx-auto md:p-6 md:w-1/2">
          <div className="flex flex-wrap justify-between">
            <h1 className="text-2xl text-orange-500 hover:text-orange-500 transition duration-500 p-4">
              <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
              Announcement
            </h1>
            <Link to="/" className="mt-8 text-orange-400 hover:text-orange-600 transition duration-500">
              <svg className="w-6 h-6 inline-block align-bottom" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Back to Home
            </Link>
          </div>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form onSubmit={submitHandler}>
              {/* Event Selector */}
              <div className="mb-8">
                <label htmlFor="event" className="block text-gray-700 text-sm font-bold mb-2">
                  <span className="text-red-500">*</span> Event
                </label>
                <select
                  onChange={(e) => setEvent(e.target.value)}
                  value={event}
                  id="event"
                  className="block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 focus:outline-none focus:bg-white focus:border-orange-500"
                >
                  <option value="select">Select</option>
                  <option value="Story">New Story</option>
                  <option value="NewChapter">New Chapter</option>
                  <option value="AboutChapter">About Chapter</option>
                  <option value="AboutStory">About Story</option>
                </select>
                {!event && <strong className="text-red-500 text-xs italic">Event is required</strong>}
              </div>

              {/* Conditional Story Selection */}
              {event === 'NewChapter' && (
                <div className="mb-8">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <span className="text-red-500">*</span> Story
                  </label>
                  <ListMyStoryes setStory={setStory} />
                  {!story && <strong className="text-red-500 text-xs italic">Story is required</strong>}
                </div>
              )
            }
            {
                event !== 'select' && event !== '' && (
                  <>
                    {/* Conditional Chapter Input */}
                    {event === 'AboutChapter' && (
                      <div className="mb-8">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          <span className="text-red-500">*</span> Chapter
                        </label>
                        <input
                          type="text"
                          value={chapter}
                          onChange={(e) => setChapter(e.target.value)}
                          className="block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 focus:outline-none focus:bg-white focus:border-orange-500"
                        />
                        {!chapter && <strong className="text-red-500 text-xs italic">Chapter is required</strong>}
                      </div>
                    )}

                    {/* Message */}
                    <div className="mb-8">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        <span className="text-red-500">*</span> Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 focus:outline-none focus:bg-white focus:border-orange-500"
                      />
                      {!message && <strong className="text-red-500 text-xs italic">Message is required</strong>}
                    </div>

                    {/* Event Date */}
                    <div className="mb-8">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        <span className="text-red-500">*</span> Event Date
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3"
                      />
                      <input
                        type="time"
                        value={eventTime}
                        onChange={(e) => setEventTime(e.target.value)}
                        className="block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3"
                      />
                      {!eventDate && <strong className="text-red-500 text-xs italic">Event Date is required</strong>}
                    </div>

                    {/* Expire Date */}
                    <div className="mb-8">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        <span className="text-red-500">*</span> Expire Date
                      </label>
                      <input
                        type="date"
                        value={expireDate}
                        onChange={(e) => setExpireDate(e.target.value)}
                        className="block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3"
                      />
                      <input
                        type="time"
                        value={expireTime}
                        onChange={(e) => setExpireTime(e.target.value)}
                        className="block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3"
                      />
                      {!expireDate && <strong className="text-red-500 text-xs italic">Expire Date is required</strong>}
                    </div>

                    {/* Upload Cover */}
                    <div className="mb-8">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        <input
                          type="checkbox"
                          checked={WantToUploadCover}
                          onChange={(e) => setWantToUploadCover(e.target.checked)}
                          className="mr-2"
                        />
                        Want to upload cover
                      </label>
                    </div>

                    {WantToUploadCover && (
                      <div className="mb-8">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          <span className="text-red-500">*</span> Upload Cover
                        </label>
                        <input
                          type="file"
                          onChange={(e) => UploadImage(e.target.files[0])}
                          className="block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3"
                        />
                        {!coverFile && <strong className="text-red-500 text-xs italic">Cover is required</strong>}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="mb-4 text-center">
                      <button
                        type="submit"
                        className="transition duration-500 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Announce
                      </button>
                    </div>
                  </>
                )
              }
              <hr />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAnocementScreen;
