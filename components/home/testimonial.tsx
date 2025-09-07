import React from 'react'

export default function Testimonial() {
    const testimonials = [
        {
            title: 'Cinnamon understood my vision',
            content: 'As an individual building my brand, working with CinnamonPR was exactly what I needed. They took the time to understand my goals, crafted the right narrative, and gave my brand the visibility it truly deserved. Beyond just PR, they became genuine partners in my journey.I’m really grateful for their impact on my growth. ',
            author: 'Jesse Amamgbu',
            location: 'Lagos, Nigeria'
        },
        {
            title: 'Finally getting the recognition I deserve',
            content: 'This platform put me in front of global media outlets I never thought I’d reach. It has elevated my credibility and opened international doors.',
            author: 'Iyinoluwa Demilade',
            location: 'Lagos, Nigeria'
        },
        {
            title: 'A powerful boost for my career',
            content: 'I always knew the value of PR but struggled to get placements. This platform made it effortless, and now my profile is recognized globally.',
            author: 'Tobi Akinwumi',
            location: 'Abuja, Nigeria'
        },
        {
            title: 'Strategic media exposure that works',
            content: 'The team helped craft my story and positioned me in the right media spaces. I’ve gained authentic visibility and valuable new opportunities.',
            author: 'Hakeem Hasssan',
            location: 'Lagos, Nigeria'
        },
        {
            title: 'Game-changing for thought leaders',
            content: 'As someone building authority in my industry, this platform has been crucial. It bridged the gap between my expertise and global recognition.',
            author: 'Mark Akindele',
            location: 'Lagos, Nigeria'
        },
        {
            title: 'The perfect tool for global positioning',
            content: 'This is more than PR—it’s about shaping perception. The placements I’ve received have amplified my voice and accelerated my career growth.',
            author: 'Chude Jonah',
            location: 'Enugu, Nigeria'
        },
    ]

    return (
        <section id='testimonial' className="w-full max-w-full mt-8 mb-16 pt-4 md:pt-8">
            <div className="flex gap-4 md:gap-16 overflow-x-auto overflow-y-hidden px-4 pb-4 hide-scrollbar md:pl-16">
                {testimonials.map((item, index) => (
                    <div className="w-[80vw] sm:w-[360px] flex-shrink-0 flex flex-col gap-4" key={index}>
                        <h4 className="text-[#5C5C66] text-base md:text-[32px] font-semibold">{item.title}</h4>
                        <p className="text-[#737380]">{item.content}</p>
                        <div className="text-[#AAAAB2] flex gap-4 items-center">
                            <p>{item.author}</p>
                            <div className="h-4 w-px bg-[#DADAE5]"></div>
                            <p>{item.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
