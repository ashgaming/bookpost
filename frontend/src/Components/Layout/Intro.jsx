import React from 'react'

const Intro = () => {
    return (
        <section>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl text-left">
                Felicia Celestia
            </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <img
                    alt=""
                    src={require('./assets/my_logo.png')}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="lg:py-16">
                <article className="space-y-4 text-gray-600">
                    <p>
                        Felicia Celestia is an up-and-coming author who has her own fresh take on romantic comedy reading. Known for developing endearing characters and charming dialogue, Felicia delivers the highs of romance — a rush of excitement, feeling uplifted while embodying forever-one emotions. Inspired by her daily routines and the madness of contemporary love, she writes stories that are heartwarming as they border on being downright amusing.
                    </p>

                    <p>
                        Felicia, a new voice in the genre, stands for fun and sexy romance with an emotional heart that helps the reader laugh, love, dream….and get off! Navigating the intricacies of dating and exploring the elation of unexpected connections, her tales are a testament to us all that Love is… truly an adventure.
                    </p>
                </article>
            </div>
        </div>
    </div>
</section>

    )
}

export default Intro
