import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';

const imgUrl = require('../Courosel/assets/preview.jpg');
const BookUrl = require('../Courosel/assets/bcover.png');

export default function Courosel() {
    const url = 'https://tse1.mm.bing.net/th?id=OIP.vpXr1BZYtQaN78C5VdH9AAHaJu&pid=Api&P=0&h=180';

    useEffect(() => {
        AOS.init({
          duration: 1000,  // Set animation duration in milliseconds
          once: true,      // Whether animation should happen only once - while scrolling down
        });
      }, []);
    return (
        <section
            className="bg-cover bg-center p-5 py-32 min-h-screen h-full flex items-center justify-center w-full"
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            <div className="container mx-auto text-center text-white flex items-center justify-center">
                <div className="w-full md:w-1/2">
                    <h1
                        data-aos="fade-up"
                     //   data-aos-anchor-placement="bottom-center"
                        className="text-5xl font-medium mb-6 font-serif">
                        Welcome to a realm of heartfelt tales
                    </h1>
                    <p className="text-xl mb-12 font-script"  data-aos="fade-up" >For those who believe every love has a destiny</p>
                    <Link  data-aos="fade-up" to="" className="bg-customOrange text-white py-4 px-12 rounded-full hover:bg-hoverOrange">
                        Explore
                    </Link>
                </div>
            </div>
        </section>


    )
}
