import React from 'react'
import { Link } from 'react-router-dom';

const imgUrl = require('../Courosel/assets/preview.webp');
const BookUrl = require('../Courosel/assets/bcover.png');

export default function Courosel() {
    const url = 'https://tse1.mm.bing.net/th?id=OIP.vpXr1BZYtQaN78C5VdH9AAHaJu&pid=Api&P=0&h=180';
  

    return (
            <section className="bg-cover bg-center p-5 py-32 min-h-screen h-full flex justify-center w-full" Style={`background-image: url(${imgUrl});`}>
                <div className="container mx-auto text-left text-white">
                    <div className="flex items-center">
                        <div className="w-1/2">
                            <h1 className="text-5xl font-medium mb-6">Welcome to Read My Book</h1>
                            <p className="text-xl mb-12">Open up Worlds That Couldn't Be Described in Words – Immerse into the Play of Stories at Every Page Turn!</p>
                            <Link to="" className="bg-customOrange text-white py-4 px-12 rounded-full hover:bg-hoverOrange">Read</Link>
                        </div>
                        <div className="w-1/2 h-1/2 pl-16 justify-center flex">
                            <img 
                            src={BookUrl} 
                            className="h-1/3 w-1/2 object-cover rounded-xl border-2 border-black shadow-md"
                             alt="Layout Image" />
                        </div>
                    </div>
                </div>
            </section>
       
    )
}
