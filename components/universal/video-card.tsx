"use client"
import React from 'react'
import { PlayIcon } from '../vectors/play-icon'
import Image from 'next/image'
import { LineStroke } from '../vectors/line-stroke'

export type VideoProps = {
    title: string;
    name: string;
    avatarUrl: string;
    duration: string;
    videoUrl: string;
    posterUrl?: string;
    tag: {
        text: string;
        bgColor: string;
        textColor: string;
    }
}

export default function VideoCard({ props }: { props: VideoProps }) {
    const videoRef = React.useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = React.useState(false)

    const handlePlayClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
        }
    }

    const handleVideoPlay = () => {
        setIsPlaying(true)
    }

    const handleVideoPause = () => {
        setIsPlaying(false)
    }

    return (
        <div className='bg-white rounded-2xl flex flex-col gap-2 w-full p-1 overflow-hidden z-50 shadow-custom md:rounded-4xl'>
            <div className='relative w-full h-[320px] rounded-[12px] md:rounded-[28px] overflow-hidden'>
                <video
                    ref={videoRef}
                    className='w-full h-full object-cover'
                    poster={props.posterUrl ? props.posterUrl : '/images/video-overlay.png'}
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onEnded={handleVideoPause}
                    preload="metadata"
                >
                    <source src={props.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div
                    className={`absolute inset-0 bg-[#00000033] overflow-hidden cursor-pointer transition-opacity duration-300 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
                        }`}
                    onClick={handlePlayClick}
                >
                    <span className='absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 z-50 bg-[#FFFFFF33] rounded-2xl px-6 py-3'>
                        <PlayIcon />
                    </span>
                </div>

                {isPlaying && (
                    <div
                        className="absolute inset-0 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-200"
                        onClick={handlePlayClick}
                    >
                        <div className="absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 z-50 bg-black bg-opacity-50 rounded-full p-3">
                            <div className="w-6 h-6 flex items-center justify-center">
                                <div className="w-1 h-4 bg-white mr-1"></div>
                                <div className="w-1 h-4 bg-white"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className='py-6 px-4 flex flex-col gap-3'>
                <h4>{props.title}</h4>
                <div className="flex">
                    <div className='flex gap-2 items-center'>
                        <Image src={props.avatarUrl} width={24} height={24} alt='avatar image' />
                        <p className='font-medium text-xs whitespace-nowrap lg:text-base'>{props.name}</p>
                        <LineStroke className='ml-2' />
                    </div>
                    <div className='flex gap-4 items-center pl-4'>
                        <p className='font-medium text-xs whitespace-nowrap lg:text-base'>{props.duration}</p>
                        <LineStroke />
                    </div>
                    <div className='flex gap-4 items-center pl-4'>
                        <div className={`rounded-md text-xs whitespace-nowrap lg:text-sm font-medium px-2 py-1`} style={{ backgroundColor: props.tag.bgColor, color: props.tag.textColor }}>
                            {props.tag.text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}