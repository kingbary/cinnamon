"use client"
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import Container from '../universal/container'
import SectionTitle from '../universal/section-title'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function ServicesSection() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const services = [
        {
            title: "Strategic Media Placements",
            description: "Secure coverage in publications that matter to your industry and immigration goals.",
            image: '/images/services-section-img.png'
        },
        {
            title: "Thought Leadership Positioning",
            description: "Build authority through expert commentary and industry insights that highlight your perspective.",
            image: '/images/services-section-img.png'
        },
        {
            title: "Global Recognition Strategy",
            description: "Develop international visibility that strengthens your career growth and supports immigration goals.",
            image: '/images/services-section-img.png'
        },
        {
            title: "Expert Speaker Placement",
            description: "Access our network of industry experts and global professionals for conferences, panels, and corporate events.",
            image: '/images/services-section-img.png'
        },
    ]

    const sectionHeight = 1 / services.length

    const yTransform0 = useTransform(scrollYProgress, [0 * sectionHeight, 1 * sectionHeight], [0, -100])
    const yTransform1 = useTransform(scrollYProgress, [1 * sectionHeight, 2 * sectionHeight], [0, -100])
    const yTransform2 = useTransform(scrollYProgress, [2 * sectionHeight, 3 * sectionHeight], [0, -100])
    const yTransform3 = useTransform(scrollYProgress, [3 * sectionHeight, 4 * sectionHeight], [0, -100])

    const yTransforms = [yTransform0, yTransform1, yTransform2, yTransform3]

    return (
        <div ref={containerRef} className="relative" style={{ height: `${services.length * 100}vh` }}>
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className="sticky top-0 h-screen w-full flex items-center bg-white"
                    style={{
                        y: yTransforms[index],
                        zIndex: services.length
                    }}
                >
                    <Container className='pt-8 pb-16 mt-8 px-2'>
                        <div className='w-full flex flex-col justify-between items-center gap-8 md:flex-row lg:gap-[120px]'>
                            <div className='w-full text-black'>
                                <SectionTitle text="services" />
                                <div className='flex flex-col gap-6 mt-4'>
                                    <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
                                        {service.title}
                                    </h2>
                                    <p className='text-lg md:text-xl opacity-90 leading-relaxed'>
                                        {service.description}
                                    </p>
                                    <Button className='w-fit bg-black text-white hover:bg-gray-800 font-semibold px-8 py-3'>
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                            <div className='w-full'>
                                <Image
                                    src={service.image}
                                    className='w-full rounded-lg'
                                    width={620}
                                    height={630}
                                    alt={`${service.title} - service illustration`}
                                />
                            </div>
                        </div>
                    </Container>
                </motion.div>
            ))}
        </div>
    )
}