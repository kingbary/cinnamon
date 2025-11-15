"use client"
import React, { useRef } from 'react'
import Container from '../universal/container'
import { Button } from '../ui/button'
import VideoCard, { VideoProps } from '../universal/video-card'
import Image from 'next/image'
import VideoCamera from '../vectors/video-camera'
import Microphone from '../vectors/microphone'
import Headphone from '../vectors/headphone'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

interface FeaturedSectionProps {
    videosToDisplay: VideoProps[]
}

export default function FeaturedSection({ videosToDisplay = [] }: FeaturedSectionProps) {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

    // Add safety check
    if (!videosToDisplay || videosToDisplay.length === 0) {
        return null;
    }

    return (
        <div ref={sectionRef} className='relative bg-[#FFD480] mb-8 mx-2 overflow-hidden rounded-3xl md:rounded-t-[80px] md:rounded-b-[40px]'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    className='hidden absolute top-0 left-0 md:block'
                    src={'/images/headphone.png'}
                    width={600}
                    height={600}
                    alt='headphone'
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    className='hidden absolute bottom-0 right-0 md:block'
                    src={'/images/retro-mic.png'}
                    width={600}
                    height={600}
                    alt='microphone'
                />
            </motion.div>

            <div className='flex w-full justify-center mt-4'>
                <motion.div
                    className='bg-[#402F0D]/10 w-fit rounded-xl p-1'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className='bg-[#402F0D]/20 flex items-center gap-[10px] px-4 py-2 border border-primary border-dashed rounded-lg'>
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <VideoCamera />
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <Headphone />
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                        >
                            <Microphone />
                        </motion.span>
                    </div>
                </motion.div>
            </div>

            <Container className='flex flex-col w-full gap-8 items-center px-2 pt-4 md:pt-20 pb-8'>
                <div className='flex flex-col w-full items-center gap-6'>
                    <motion.h2
                        className='text-center text-[#402F0D] max-w-[640px]'
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Real conversations. Unfiltered journeys.
                    </motion.h2>
                    <motion.p
                        className='text-center text-[#736039] max-w-[452px]'
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Tune into bold, uncut stories from founders, creators, and culture-shifters building across the diaspora.
                    </motion.p>

                    <motion.div
                        className='flex flex-col gap-4 sm:flex-row'
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <Button variant={'secondary'}>Feature on our Podcast</Button>
                        <Link href={'/podcast#all-episodes'} className='w-full'>
                            <Button variant={'transparentBg'} className='bg-[#0000001A] w-full'>
                                View all Episodes
                            </Button>
                        </Link>
                    </motion.div>

                    <div className='flex flex-col w-full justify-between gap-8 md:flex-row z-30'>
                        {videosToDisplay.map((videoData, index) => (
                            <motion.div
                                key={`video-${index}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                            >
                                <VideoCard props={videoData} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}