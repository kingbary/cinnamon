import React from 'react'
import Container from '../universal/container'
import { Button } from '../ui/button'
import VideoCard from '../universal/video-card'
import Image from 'next/image'

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
        <div className='relative bg-[#FFD480] rounded-t-[80px] rounded-b-[40px] mb-8 overflow-hidden'>
            <Image className='absolute top-0 left-0' src={'/images/headphone.png'} width={600} height={600} alt='headphone' />
            <Image className='absolute bottom-0 right-0' src={'/images/retro-mic.png'} width={600} height={600} alt='headphone' />
            <Container className='flex flex-col w-full gap-8 items-center px-8 pt-20 pb-8'>
                <div className='flex flex-col w-full items-center gap-6'>
                    <h2 className='text-center text-[#402F0D] max-w-[640px]'>Lorem ipsum consectetur elit eleifend donec dui vulputate.</h2>
                    <p className='text-center text-[#736039] max-w-[452px]'>Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium.</p>
                    <div className='flex gap-4'>
                        <Button variant={'secondary'}>Feature on our Podcast</Button>
                        <Button variant={'transparentBg'} className='bg-[#0000001A]'>View all Episodes</Button>
                    </div>
                    <div className='flex w-full justify-between gap-8'>
                        <VideoCard props={videoCardData} />
                        <VideoCard props={videoCardData} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
