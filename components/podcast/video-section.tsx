"use client"
import Container from '@/components/universal/container'
import React from 'react'
import { LineStroke } from '../vectors/line-stroke'
import { PlayIcon } from '../vectors/play-icon'
import { ExpandedPodcast } from '@/sanity/lib/queries'

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

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
};

interface VideoSectionProps {
    featuredVideo?: ExpandedPodcast;
}

export default function VideoSection({ featuredVideo }: VideoSectionProps) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const videoData = featuredVideo || {
        title: "Lorem ipsum molestie nunc egestas pretium scelerisque turpis magna.",
        duration: "10 minutes",
        publishedAt: "2025-02-14",
        tag: {
            text: "Lifestyle and Travel",
            bgColor: "#EEE5FF",
            textColor: "#5214CC"
        },
        videoUrl: null,
        posterImageUrl: "/images/video.png"
    };

    const videoInfo = videoData.videoUrl ? getVideoType(videoData.videoUrl) : null;

    const handlePlayClick = () => {
        if (!videoData.videoUrl) return;

        if (videoInfo?.type === 'youtube') {
            setIsPlaying(true);
        } else if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
        }
    };

    const handleVideoPlay = () => {
        setIsPlaying(true);
    };

    const handleVideoPause = () => {
        setIsPlaying(false);
    };

    const backgroundImage = videoData.posterImageUrl || '/images/video.png';

    return (
        <div
            className='relative bg-no-repeat bg-cover flex items-end mb-8 bg-black/20 rounded-3xl md:rounded-[40px] h-[460px] md:h-screen overflow-hidden'
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Video Player Overlay */}
            {isPlaying && videoData.videoUrl && videoInfo?.type === 'youtube' && (
                <div className="absolute inset-0 z-20">
                    <iframe
                        src={videoInfo.embedUrl}
                        title={videoData.title}
                        className='w-full h-full'
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            )}

            {isPlaying && videoData.videoUrl && videoInfo?.type === 'regular' && (
                <div className="absolute inset-0 z-20">
                    <video
                        ref={videoRef}
                        className='w-full h-full object-cover'
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                        onEnded={handleVideoPause}
                        controls
                        autoPlay
                    >
                        <source src={videoData.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            {/* Play Button */}
            {!isPlaying && videoData.videoUrl && (
                <div
                    className='absolute top-1/2 right-1/2 translate-x-1/2 bg-black/20 flex justify-center items-center py-6 px-12 shadow-[0px 10px 20px 0px rgba(0, 0, 0, 0.40)] rounded-2xl z-10 cursor-pointer hover:bg-black/30 transition-colors'
                    onClick={handlePlayClick}
                >
                    <PlayIcon />
                </div>
            )}

            {/* Static play button for videos without URL */}
            {!videoData.videoUrl && (
                <div className='absolute top-1/2 right-1/2 translate-x-1/2 bg-black/20 flex justify-center items-center py-6 px-12 shadow-[0px 10px 20px 0px rgba(0, 0, 0, 0.40)] rounded-2xl z-10'>
                    <PlayIcon />
                </div>
            )}

            {/* Content Overlay */}
            <div className="video-bg flex items-end w-full relative z-10">
                <Container>
                    <div className="py-6 md:px-4 md:py-8 flex flex-col gap-3 w-full">
                        <h2 className="text-white">
                            {videoData.title}
                        </h2>
                        <div className="flex gap-1 md:gap-2 md:mb-6">
                            <div className="flex gap-2 items-center">
                                <p className="font-medium text-[#AAAAB2] text-xs whitespace-nowrap lg:text-base">
                                    {videoData.publishedAt ? formatDate(videoData.publishedAt) : 'Feb 14, 2025'}
                                </p>
                                <LineStroke className="ml-1 md:ml-2" />
                            </div>
                            <div className="flex gap-4 items-center pl-2 md:pl-4">
                                <p className="font-medium text-[#AAAAB2] text-xs whitespace-nowrap lg:text-base">
                                    {videoData.duration}
                                </p>
                                <LineStroke />
                            </div>
                            <div className="flex gap-4 items-center pl-2 md:pl-4">
                                <div
                                    className="rounded-md text-xs whitespace-nowrap lg:text-sm font-medium px-2 py-1"
                                    style={{
                                        backgroundColor: videoData.tag?.bgColor || '#EEE5FF',
                                        color: videoData.tag?.textColor || '#5214CC'
                                    }}
                                >
                                    {videoData.tag?.text || 'Lifestyle and Travel'}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}