"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Testimonial {
    title: string
    content: string
    author: string
    location: string
}

function TestimonialCard({ item, index }: { item: Testimonial, index: number }) {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: false, amount: 0.3 })

    return (
        <motion.div
            ref={cardRef}
            className="w-[80vw] sm:w-[360px] flex-shrink-0 flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <motion.h4
                className="text-[#5C5C66] text-base md:text-[32px] font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
                {item.title}
            </motion.h4>
            <motion.p
                className="text-[#737380]"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
                {item.content}
            </motion.p>
            <motion.div
                className="text-[#AAAAB2] flex gap-4 items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
                <p>{item.author}</p>
                <div className="h-4 w-px bg-[#DADAE5]"></div>
                <p>{item.location}</p>
            </motion.div>
        </motion.div>
    )
}

export default function Testimonial() {
    const testimonials = [
        {
            title: 'Cinnamon understood my vision',
            content: 'As an individual building my brand, working with CinnamonPR was exactly what I needed. They took the time to understand my goals, crafted the right narrative, and gave my brand the visibility it truly deserved. Beyond just PR, they became genuine partners in my journey.I\'m really grateful for their impact on my growth. ',
            author: 'Jesse Amamgbu',
            location: 'Lagos, Nigeria'
        },
        {
            title: 'Finally getting the recognition I deserve',
            content: 'This platform put me in front of global media outlets I never thought I\'d reach. It has elevated my credibility and opened international doors.',
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
            content: 'The team helped craft my story and positioned me in the right media spaces. I\'ve gained authentic visibility and valuable new opportunities.',
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
            content: 'This is more than PR—it\'s about shaping perception. The placements I\'ve received have amplified my voice and accelerated my career growth.',
            author: 'Chude Jonah',
            location: 'Enugu, Nigeria'
        },
    ]

    return (
        <section id='testimonial' className="w-full max-w-full mt-8 mb-16 pt-4 md:pt-8">
            <div className="flex gap-4 md:gap-16 overflow-x-auto overflow-y-hidden px-4 pb-4 hide-scrollbar md:pl-16">
                {testimonials.map((item, index) => (
                    <TestimonialCard key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    )
}
