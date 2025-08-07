import ContactUsSection from '@/components/podcast/contact-us-section'
import EpisodeSection from '@/components/podcast/episode-section'
import VideoSection from '@/components/podcast/video-section'
import PageHeader from '@/components/universal/page-header'
import { ExpandedPodcast, fetchPodcasts } from '@/sanity/lib/queries'
import Image from 'next/image'
import React from 'react'


let allPodcastsData: ExpandedPodcast[] = []

try {
    const allPodcastsResult = await fetchPodcasts()
    allPodcastsData = allPodcastsResult.data || []

} catch (error) {
    console.error('Error fetching podcast data:', error)
}

export default async function PodcastPage() {
    return (
        <div className='mx-2'>
            <div className='relative rounded-3xl mt-2 mb-8 overflow-hidden'>
                <Image className='hidden absolute bottom-0 left-0 md:block z-10' src={'/images/headphone-2.png'} width={420} height={440} alt='headphone' />
                <Image className='hidden absolute bottom-0 right-0 md:block z-10' src={'/images/retro-mic-2.png'} width={420} height={320} alt='microphone' />
                <PageHeader title='podcast' className='bg-[#FFD480]' titleClassName='text-[#402F0D]' />
            </div>
            <VideoSection />
            <EpisodeSection allEpisodes={allPodcastsData} />
            <ContactUsSection />
        </div>
    )
}
