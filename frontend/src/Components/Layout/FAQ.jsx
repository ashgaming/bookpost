import React from 'react'

const FAQ = () => {

    const Quetions = [
        {
            q: 'What type of books do you publish on this website?',
            a: 'I publish my own original written works, including fiction, non-fiction, and other genres. Each book is divided into chapters for easy reading and regular updates.',
        },
        {
            q: 'Can I download the books or chapters?',
            a: 'Currently, the books and chapters are available to read online only. I may consider adding download options in the future',
        },
        {
            q: 'How often do you update new chapters?',
            a: 'I aim to post new chapters on a regular schedule. You can subscribe or check the website for updates to know when new chapters are released.',
        },
        {
            q: 'Can I suggest changes or provide feedback on the content?',
            a: 'Absolutely! I love hearing from readers. Feel free to leave comments or suggestions through the feedback form or in the comments section below each chapter.',
        },
        {
            q: 'Do you accept guest writers or co-authors?',
            a: 'Currently, I am focused on publishing my own work. However, I may consider collaborations in the future.',
        },
        {
            q: 'How can I support your writing?',
            a: 'You can support my work by sharing the website with others, leaving comments, or contributing via donations (if applicable). I appreciate any form of support!',
        },
        {
            q: 'Can I share your books and chapters with others?',
            a: 'You’re welcome to share links to my website or specific chapters with others. However, please do not distribute or reproduce the content without permission.',
        },
        {
            q: 'Are the books free to read, or do I need to pay?',
            a: 'The books are free to read online. If I decide to offer paid content or premium chapters, I will clearly mention it on the website.',
        },
        {
            q: 'What genres do your books cover?',
            a: 'My books span a variety of genres, including Romcom and more. Each book description provides details about the genre and storyline.',
        },
        {
            q:'Can I support you financially for your work?',
            a:'Yes, if you enjoy my writing and wish to support me, I may offer options like donations or crowdfunding platforms in the future. Keep an eye on the website for updates on this.'
        }

    ]

    return (

        <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
            <div class="flex flex-col items-center">
                <h2 class="font-bold text-5xl mt-5 tracking-tight">
                    FAQ
                </h2>
                <p class="text-neutral-500 text-xl mt-3">
                    Frequenty asked questions
                </p>
            </div>

            <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            {
                Quetions.map((qna,index)=>(
                    <div class="py-5" key={index}>
                    <details class="group">
                        <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span>{qna.q}</span>
                            <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            {qna.a}
                        </p>
                    </details>
                </div>
                ))
            }
            
            </div>
        </div>

    )
}

export default FAQ
