"use client"
import React, { useRef } from 'react'
import PageHeader from '../universal/page-header'
import Image from 'next/image'
import VideoSection from './video-section'
import EpisodeSection from './episode-section'
import ContactUsSection from './contact-us-section'
import { ExpandedPodcast } from '@/sanity/lib/queries'
import { motion, useInView } from 'framer-motion'

export default function PodcastScreen({ featuredVideo, allPodcastsData }: { featuredVideo: ExpandedPodcast | undefined, allPodcastsData: ExpandedPodcast[] }) {
    const headerRef = useRef(null)
    const isInView = useInView(headerRef, { once: false, amount: 0.3 })

    return (
        <div className='mx-2'>
            <div ref={headerRef} className='relative rounded-3xl mt-2 mb-8 overflow-hidden'>
                <motion.div
                    initial={{ opacity: 0, x: -50, rotate: -10 }}
                    animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -50, rotate: -10 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        className='hidden absolute bottom-0 left-0 md:block z-10'
                        src={'/images/headphone-2.png'}
                        width={420}
                        height={440}
                        alt='headphone'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 10 }}
                    animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: 50, rotate: 10 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        className='hidden absolute bottom-0 right-0 md:block z-10'
                        src={'/images/retro-mic-2.png'}
                        width={420}
                        height={320}
                        alt='microphone'
                    />
                </motion.div>
                <PageHeader
                    title='podcast'
                    className='bg-[#FFD480]'
                    titleClassName='text-[#402F0D]'
                />
            </div>
            <VideoSection featuredVideo={featuredVideo} />
            <EpisodeSection allEpisodes={allPodcastsData} />
            <ContactUsSection />
        </div>
    )
}
