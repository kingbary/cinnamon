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

const getVideoType = (url: string) => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);

    if (match && match[1]) {
        return {
            type: 'youtube',
            embedUrl: `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=0`,
            thumbnailUrl: `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`
        };
    }

    if (url.includes('youtube.com/embed/')) {
        return {
            type: 'youtube',
            embedUrl: url.includes('autoplay=1') ? url : `${url}${url.includes('?') ? '&' : '?'}autoplay=1&mute=0`,
            thumbnailUrl: null
        };
    }

    return {
        type: 'regular',
        embedUrl: url,
        thumbnailUrl: null
    };
};

export default function VideoCard({ props }: { props: VideoProps }) {
    const videoRef = React.useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [showIframe, setShowIframe] = React.useState(false)

    const videoInfo = getVideoType(props.videoUrl)

    const handlePlayClick = () => {
        if (videoInfo.type === 'youtube') {
            setShowIframe(true)
            setIsPlaying(true)
        } else if (videoRef.current) {
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

    const getPosterImage = () => {
        if (props.posterUrl) return props.posterUrl;
        if (videoInfo.type === 'youtube' && videoInfo.thumbnailUrl) return videoInfo.thumbnailUrl;
        return '/images/video-overlay.png';
    }

    return (
        <div className='bg-white rounded-2xl flex flex-col gap-2 w-full p-1 overflow-hidden z-50 shadow-custom md:rounded-4xl'>
            <div className='relative w-full h-[320px] rounded-[12px] md:rounded-[28px] overflow-hidden'>
                {videoInfo.type === 'youtube' && showIframe ? (
                    // YouTube iframe
                    <iframe
                        src={videoInfo.embedUrl}
                        title={props.title}
                        className='w-full h-full'
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : videoInfo.type === 'regular' ? (
                    <>
                        <video
                            ref={videoRef}
                            className='w-full h-full object-cover'
                            poster={getPosterImage()}
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
                    </>
                ) : (
                    <div className="relative w-full h-full">
                        <Image
                            src={getPosterImage()}
                            alt={props.title}
                            fill
                            className="object-cover"
                        />
                        <div
                            className="absolute inset-0 bg-[#00000033] overflow-hidden cursor-pointer"
                            onClick={handlePlayClick}
                        >
                            <span className='absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 z-50 bg-[#FFFFFF33] rounded-2xl px-6 py-3'>
                                <PlayIcon />
                            </span>
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