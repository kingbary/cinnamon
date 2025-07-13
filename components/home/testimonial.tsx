import React from 'react'

export default function Testimonial() {
    const testimonials = [
        { title: 'Testimonial headline (a part of the testimonial that stands out)', content: 'Lorem ipsum amet convallis id nam platea suspendisse sit vulputate sed neque aliquet lacus vel neque proin id senectus auctor rutrum in mauris arcu amet id porttitor pulvinar integer sed eget tristique.', author: 'John Doe', location: 'Lagos, Nigeria' },
        { title: 'Testimonial headline (a part of the testimonial that stands out)', content: 'Lorem ipsum amet convallis id nam platea suspendisse sit vulputate sed neque aliquet lacus vel neque proin id senectus auctor rutrum in mauris arcu amet id porttitor pulvinar integer sed eget tristique.', author: 'John Doe', location: 'Lagos, Nigeria' },
        { title: 'Testimonial headline (a part of the testimonial that stands out)', content: 'Lorem ipsum amet convallis id nam platea suspendisse sit vulputate sed neque aliquet lacus vel neque proin id senectus auctor rutrum in mauris arcu amet id porttitor pulvinar integer sed eget tristique.', author: 'John Doe', location: 'Lagos, Nigeria' },
        { title: 'Testimonial headline (a part of the testimonial that stands out)', content: 'Lorem ipsum amet convallis id nam platea suspendisse sit vulputate sed neque aliquet lacus vel neque proin id senectus auctor rutrum in mauris arcu amet id porttitor pulvinar integer sed eget tristique.', author: 'John Doe', location: 'Lagos, Nigeria' },
        { title: 'Testimonial headline (a part of the testimonial that stands out)', content: 'Lorem ipsum amet convallis id nam platea suspendisse sit vulputate sed neque aliquet lacus vel neque proin id senectus auctor rutrum in mauris arcu amet id porttitor pulvinar integer sed eget tristique.', author: 'John Doe', location: 'Lagos, Nigeria' },
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