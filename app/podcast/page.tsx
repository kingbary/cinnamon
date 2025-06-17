import ContactUsSection from '@/components/podcast/contact-us-section'
import EpisodeSection from '@/components/podcast/episode-section'
import VideoSection from '@/components/podcast/video-section'
import Container from '@/components/universal/container'
import Image from 'next/image'
import React from 'react'

export default function PodcastPage() {
    return (
        <>
            <div className='relative bg-[#FFD480] rounded-3xl mt-2 mb-8 overflow-hidden'>
                <Image className='absolute bottom-0 left-0' src={'/images/headphone-2.png'} width={420} height={440} alt='headphone' />
                <Image className='absolute bottom-0 right-0' src={'/images/retro-mic-2.png'} width={420} height={320} alt='microphone' />
                <Container className='flex flex-col w-full gap-8 items-center px-8 pt-20 pb-[112px] mt-4'>
                    <div className='flex flex-col w-full items-center gap-6'>
                        <h2 className='text-center text-[#402F0D] text-[120px] font-bold leading-[120px] -tracking-[10px] uppercase font-poppins'>Podcast</h2>
                    </div>
                </Container>
            </div>
            <VideoSection />
            <EpisodeSection />
            <ContactUsSection />
        </>
    )
}
