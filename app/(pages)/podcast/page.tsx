import PodcastScreen from '@/components/podcast/podcast-screen'
import { ExpandedPodcast, fetchPodcasts } from '@/sanity/lib/queries'
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
        <PodcastScreen featuredVideo={featuredVideo} allPodcastsData={allPodcastsData} />
    )
}