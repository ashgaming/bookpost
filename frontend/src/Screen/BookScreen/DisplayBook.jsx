import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExtraBookDetails } from '../../Actions/BookAction';
import AddComment from '../../Components/Layout/AddComment';
import Stars from '../../Components/Element/Stars';

export default function DisplayBook() {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState('SM');

  const book = {
    storyId: 1,
    name: "Cup of tea",
    description:
      "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.",
    writer: "Ankita Alhat",
    views: 3000,
    rating: 4,
    reviewCount: 125,
    url: 'https://up.yimg.com/ib/th?id=OIP.8LPxqTvPFvkgPax6lRcYPwHaKe&pid=Api&rs=1&c=1&qlt=95&w=80&h=113',
  };

  const Chapters = [
    {
      storyId: 1,
      ChapterId: 1,
      name: "Cup of tea",
      description:
        "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.",
      views: 3000,
      rating: 4,
      reviewCount: 125,
      url: 'https://up.yimg.com/ib/th?id=OIP.8LPxqTvPFvkgPax6lRcYPwHaKe&pid=Api&rs=1&c=1&qlt=95&w=80&h=113',
    },
    {
      storyId: 1,
      ChapterId: 2,
      name: "Cup of tea",
      description:
        "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.",
      views: 3000,
      rating: 4,
      reviewCount: 125,
      url: 'https://up.yimg.com/ib/th?id=OIP.8LPxqTvPFvkgPax6lRcYPwHaKe&pid=Api&rs=1&c=1&qlt=95&w=80&h=113',
    },
    {
      storyId: 1,
      ChapterId: 1,
      name: "Cup of tea",
      description:
        "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.",
      views: 3000,
      rating: 4,
      reviewCount: 125,
      url: 'https://up.yimg.com/ib/th?id=OIP.8LPxqTvPFvkgPax6lRcYPwHaKe&pid=Api&rs=1&c=1&qlt=95&w=80&h=113',
    },
    {
      storyId: 1,
      ChapterId: 2,
      name: "Cup of tea",
      description:
        "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.",
      views: 3000,
      rating: 4,
      reviewCount: 125,
      url: 'https://up.yimg.com/ib/th?id=OIP.8LPxqTvPFvkgPax6lRcYPwHaKe&pid=Api&rs=1&c=1&qlt=95&w=80&h=113',
    },
  ];

  useEffect(() => {
    if (id) {
      ExtraBookDetails(id);
    }
  }, [id]);

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={book.url}
              loading="lazy"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{book.name}</h1>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{book.writer}</h2>
              <div className="flex mb-4 justify-end">
                <Stars rating={book.rating} count={book.reviewCount}/>
              </div>
              <p className="leading-relaxed">{book.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5" />
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  <div className="flex justify-start items-center mt-2">
                    <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">
                      {book.views}
                    </p>
                    <p className="text-sm text-gray-400 font-bold ml-5">Views</p>
                  </div>
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                <Link to={`/story/${id}/chapter/1`}>
                  Read
                </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-6 bg-gray-50">
        <div className="px-10 py-6 mx-auto">
          <h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">Chapters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pb-10 mt-8 sm:mt-16 w-full">
            {Chapters.map(chapter => (
              <div
                key={chapter.ChapterId}
                className="flex flex-col items-start overflow-hidden shadow-lg rounded-xl transition-transform duration-300 transform hover:scale-105"
              >
                <Link to={`/story/${chapter.storyId}/chapter/${chapter.ChapterId}`} className="block w-full">

                  <img
                    className="object-cover w-full h-48 rounded-t-xl transition duration-300 transform hover:scale-105"
                    src={chapter.url}
                    alt={`Chapter cover for ${chapter.name}`}
                  />


                </Link>
                <div className="relative flex flex-col items-start p-4 bg-white border-t border-gray-200 rounded-b-xl">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    <Link to={`/story/${chapter.storyId}/chapter/${chapter.ChapterId}`} className="hover:text-blue-600">
                      {chapter.ChapterId} : {chapter.name}
                    </Link>
                  </h2>
                </div>
              </div>

            ))}
            
          </div>




          {/* Comment Section */}
          <AddComment />




          {/* All Comments Section */}
          <div className="max-w-4xl px-10 py-16 mx-auto bg-gray-100 min-w-screen">
            <p className="mt-1 text-2xl font-bold text-left text-gray-800 sm:text-center">
              All Comments on this Post
            </p>

            {/* Sample Comment */}
            <div className="flex items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg">
              <Link to="#" className="flex items-center mt-6 mb-6 mr-6">
                <img
                  src="https://avatars.githubusercontent.com/u/71964085?v=4"
                  alt="Commenter avatar"
                  className="object-cover w-20 h-20 mx-auto rounded-full bg-gray-300"
                />
              </Link>
              <div className="mt-4 mr-8">
                <p className="text-lg font-bold text-left text-gray-800">Ankita</p>
                <p className="text-sm text-left text-gray-500">
                  Cup of tea story is brilliant!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
