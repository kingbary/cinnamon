import Container from '@/components/universal/container'
import React from 'react'
import { LineStroke } from '../vectors/line-stroke'
import { PlayIcon } from '../vectors/play-icon'

export default function VideoSection() {
    return (
        <div className='relative bg-[url(/images/video.png)] bg-no-repeat bg-cover flex items-end mb-8 bg-black/20 rounded-3xl md:rounded-[40px] h-[460px] md:h-screen overflow-hidden'>
            <div className='absolute top-1/2 right-1/2 translate-x-1/2  bg-black/20 flex justify-center items-center py-6 px-12 shadow-[0px 10px 20px 0px rgba(0, 0, 0, 0.40)] rounded-2xl z-10'>
                <PlayIcon />
            </div>
            <div className="video-bg flex items-end w-full">
                <Container>
                    <div className="py-6 md:px-4 md:py-8 flex flex-col gap-3 w-full">
                        <h2 className="text-white">
                            Lorem ipsum molestie nunc egestas pretium scelerisque turpis magna.
                        </h2>
                        <div className="flex gap-1 md:gap-2 md:mb-6">
                            <div className="flex gap-2 items-center">
                                <p className="font-medium text-[#AAAAB2] text-xs whitespace-nowrap lg:text-base">Febr 14, 2025</p>
                                <LineStroke className="ml-1 md:ml-2" />
                            </div>
                            <div className="flex gap-4 items-center pl-2 md:pl-4">
                                <p className="font-medium text-[#AAAAB2] text-xs whitespace-nowrap lg:text-base">10 minutes</p>
                                <LineStroke />
                            </div>
                            <div className="flex gap-4 items-center pl-2 md:pl-4">
                                <div className="rounded-md text-xs whitespace-nowrap lg:text-sm font-medium px-2 py-1 text-[#5214CC] bg-[#EEE5FF]">
                                    Lifestyle and Travel
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}