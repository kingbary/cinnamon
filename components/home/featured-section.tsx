import React from 'react'
import Container from '../universal/container'
import { Button } from '../ui/button'
import VideoCard from '../universal/video-card'
import Image from 'next/image'
import VideoCamera from '../vectors/video-camera'
import Microphone from '../vectors/microphone'
import Headphone from '../vectors/headphone'
import Link from 'next/link'

export default function FeaturedSection() {
    const videoCardData = {
        title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
        name: "John Doe",
        avatarUrl: "/images/avatar.png",
        duration: "5 minutes",
        tag: {
            text: "Lifestyle and Travel",
            bgColor: "#E5FFFF",
            textColor: "#14CCCC"
        }
    }
    return (
        <div className='relative bg-[#FFD480] mb-8 mx-2 overflow-hidden rounded-3xl md:rounded-t-[80px] md:rounded-b-[40px]'>
            <Image className='hidden absolute top-0 left-0 md:block' src={'/images/headphone.png'} width={600} height={600} alt='headphone' />
            <Image className='hidden absolute bottom-0 right-0 md:block' src={'/images/retro-mic.png'} width={600} height={600} alt='microphone' />
            <div className='flex w-full justify-center mt-4'>
                <div className='bg-[#402F0D]/10 w-fit rounded-xl p-1'>
                    <div className='bg-[#402F0D]/20 flex items-center gap-[10px] px-4 py-2 border border-primary border-dashed rounded-lg'>
                        <span><VideoCamera /></span>
                        <span><Headphone /></span>
                        <span><Microphone /></span>
                    </div>
                </div>
            </div>
            <Container className='flex flex-col w-full gap-8 items-center px-2 pt-4 md:pt-20 pb-8'>
                <div className='flex flex-col w-full items-center gap-6'>
                    <h2 className='text-center text-[#402F0D] max-w-[640px]'>Real conversations. Unfiltered journeys.</h2>
                    <p className='text-center text-[#736039] max-w-[452px]'>Tune into bold, uncut stories from founders, creators, and culture-shifters building across the diaspora.</p>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                        <Button variant={'secondary'}>Feature on our Podcast</Button>
                        <Link href={'/podcast#all-episodes'}>
                            <Button variant={'transparentBg'} className='bg-[#0000001A]'>View all Episodes</Button>
                        </Link>
                    </div>
                    <div className='flex flex-col w-full justify-between gap-8 md:flex-row'>
                        <VideoCard props={videoCardData} />
                        <VideoCard props={videoCardData} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
