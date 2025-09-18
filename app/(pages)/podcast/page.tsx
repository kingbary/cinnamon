import ContactUsSection from '@/components/podcast/contact-us-section'
import EpisodeSection from '@/components/podcast/episode-section'
import VideoSection from '@/components/podcast/video-section'
import PageHeader from '@/components/universal/page-header'
import { ExpandedPodcast, fetchPodcasts } from '@/sanity/lib/queries'
import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: "Podcast | Cinnamon",
    description:
        "Tune in to the Cinnamon Podcast for inspiring conversations with high-achieving professionals, thought leaders, and industry experts. Discover strategies for building global visibility, personal branding, and career advancement through engaging interviews and actionable insights.",
    openGraph: {
        title: "Podcast | Cinnamon",
        description:
            "Tune in to the Cinnamon Podcast for inspiring conversations with high-achieving professionals, thought leaders, and industry experts. Discover strategies for building global visibility, personal branding, and career advancement through engaging interviews and actionable insights.",
        url: "https://thecinnamon.io/podcast",
        siteName: "Cinnamon",
        images: [
            {
                url: "https://thecinnamon.io/cinnamon.png",
                width: 1200,
                height: 630,
                alt: "Cinnamon",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Podcast | Cinnamon",
        description:
            "Tune in to the Cinnamon Podcast for inspiring conversations with high-achieving professionals, thought leaders, and industry experts. Discover strategies for building global visibility, personal branding, and career advancement through engaging interviews and actionable insights.",
        images: ["https://thecinnamon.io/cinnamon.png"],
        site: "@thecinnamonio",
    },
};

let allPodcastsData: ExpandedPodcast[] = []
let featuredVideo: ExpandedPodcast | undefined

try {
    const allPodcastsResult = await fetchPodcasts()
    allPodcastsData = allPodcastsResult.data || []

    featuredVideo = allPodcastsData.find(podcast => podcast.featured) || allPodcastsData[0]
} catch (error) {
    console.error('Error fetching podcast data:', error)
}

export default async function PodcastPage() {
    return (
        <div className='mx-2'>
            <div className='relative rounded-3xl mt-2 mb-8 overflow-hidden'>
                <Image
                    className='hidden absolute bottom-0 left-0 md:block z-10'
                    src={'/images/headphone-2.png'}
                    width={420}
                    height={440}
                    alt='headphone'
                />
                <Image
                    className='hidden absolute bottom-0 right-0 md:block z-10'
                    src={'/images/retro-mic-2.png'}
                    width={420}
                    height={320}
                    alt='microphone'
                />
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