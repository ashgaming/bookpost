import React from 'react'

const Intro = () => {
    return (
        <section className='bg-webb'> 
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold sm:text-4xl text-left">
                        ANkitA Alhat
                    </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                            alt=""
                            src={require('./assets/logo.jpg')}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-900 text-left">
                            <p>
                                Ankita Alhat, author of heartwarming tales. My stories weave a tapestry of love, destiny, and serendipity, transporting you to enchanting worlds.
                            </p>
                            <p>
                                Within these pages, you'll discover the beauty of life's precious moments, the thrill of unspoken feelings, and the joy of chance encounters. My tales are crafted to evoke emotions, spark imagination, and remind you of love's transformative power.
                            </p>
                            <p>
                                As we journey through the complexities of the heart, I invite you to reflect on your own experiences, hopes, and dreams. Let's explore the intricacies of love, relationships, and the depths of emotion.
                            </p>
                            <p>
                                Together, let's create a world of wonder, where words become wings, and stories take flight. Join me on this literary adventure, and let's cherish the beauty of storytelling.
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
