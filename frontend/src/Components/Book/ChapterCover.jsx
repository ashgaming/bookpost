import React from 'react'
import { Link } from 'react-router-dom'


const ChapterCover = () => {
    return (

        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-[720px] mx-auto">
                <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
                    <Link
                        target="_blank"
                        to="https://www.material-tailwind.com/docs/html/card"
                        className="block w-full px-4 py-2 text-center text-slate-700 transition-all"
                    >
                        More components on <b>Material Tailwind</b>.
                    </Link>
                </div>


                <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-bg-black-10"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            How we design and code open-source projects?
                        </h2>
                        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            Tania Andrew
                        </h5>
                        <img alt="Tania Andrew"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChapterCover
