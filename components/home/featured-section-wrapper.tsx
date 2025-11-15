import React from 'react'
import { fetchPodcasts, ExpandedPodcast } from '@/sanity/lib/queries'
import FeaturedSection from './featured-section'
import { VideoProps } from '../universal/video-card'

const fallbackVideoData: VideoProps = {
    title: "Lorem ipsum rutrum eget congue nisi sed urna enim nec tempor ultricies.",
    name: "John Doe",
    avatarUrl: "/images/avatar.png",
    duration: "5 minutes",
    videoUrl: "/video.mp4",
    posterUrl: "/images/video-overlay.png",
    tag: {
        text: "Lifestyle and Travel",
        bgColor: "#E5FFFF",
        textColor: "#14CCCC"
    }
};

const transformPodcastToVideoProps = (item: ExpandedPodcast): VideoProps => ({
    title: item.title || "Untitled Podcast",
    name: item.authorData?.name || "Unknown Author",
    avatarUrl: item.authorData?.imageUrl || "/images/avatar.png",
    duration: item.duration || "Unknown duration",
    videoUrl: item.videoUrl || "/video.mp4",
    posterUrl: item.posterImageUrl || "/images/video-overlay.png",
    tag: {
        text: item.tag?.text || "Podcast",
        bgColor: item.tag?.bgColor || "#E5FFFF",
        textColor: item.tag?.textColor || "#14CCCC"
    }
});

export default async function FeaturedSectionWrapper() {
    let podcastData: ExpandedPodcast[] = [];

    try {
        const result = await fetchPodcasts();
        podcastData = result.data || [];
    } catch (error) {
        console.error('Error fetching podcasts:', error);
    }

    const videosToDisplay = podcastData && podcastData.length > 0
        ? podcastData.slice(0, 2).map(transformPodcastToVideoProps)
        : [fallbackVideoData, fallbackVideoData];

    return <FeaturedSection videosToDisplay={videosToDisplay} />
}