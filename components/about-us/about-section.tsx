"use client"
import React, { useRef } from 'react'
import Container from '../universal/container'
import SectionTitle from '../universal/section-title'
import { motion, useInView } from 'framer-motion'

export default function AboutSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

    return (
        <div className='px-2'>
            <Container className='pt-8 pb-16 mt-8 px-0'>
                <div ref={sectionRef} className='w-full flex flex-col justify-between items-center gap-8 lg:flex-row lg:gap-[120px]'>
                    <div className='w-full'>
                        <div className='flex flex-col gap-6'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6 }}
                            >
                                <SectionTitle text='our story' />
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Why We Do What We Do
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Founded on the belief that exceptional talent deserves global recognition, Cinnamon bridges the gap between professional excellence and public visibility. We understand that brilliant work often goes unnoticed, and that recognition, not just achievement, opens the doors that matter most.
                                Our team combines deep expertise in strategic communications with an understanding of what immigration panels, industry leaders, and international audiences value most. We don&apos;t just generate coverage; we build the kind of credible, authoritative presence that creates real opportunities.
                            </motion.p>
                        </div>
                    </div>
                    <motion.div
                        className='w-full'
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className='bg-[#CFCFE5] bg-[url(/images/hand-holding-bulb.png)] bg-center bg-cover bg-no-repeat w-full h-[450px] md:h-[640px] rounded-[40px]'></div>
                    </motion.div>
                </div>
            </Container>
        </div>
    )
}
