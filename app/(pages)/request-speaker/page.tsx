import SpeakerRequestForm from '@/components/request-speaker';
import PageHeader from '@/components/universal/page-header';
import React from 'react'

export const metadata = {
    title: "Request Speaker | Cinnamon",
    description:
        "Apply to be a speaker for an event, podcast, conference, or publication. Share your expertise and let Cinnamon connect you with opportunities to speak and inspire audiences.",
    openGraph: {
        title: "Request Speaker | Cinnamon",
        description:
            "Apply to be a speaker for an event, podcast, conference, or publication. Share your expertise and let Cinnamon connect you with opportunities to speak and inspire audiences.",
        url: "https://thecinnamon.io/request-speaker",
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
        title: "Request Speaker | Cinnamon",
        description:
            "Apply to be a speaker for an event, podcast, conference, or publication. Share your expertise and let Cinnamon connect you with opportunities to speak and inspire audiences.",
        images: ["https://thecinnamon.io/cinnamon.png"],
        site: "@thecinnamonio",
    },
};

export default function page() {
    return (
        <div className="min-h-screen bg-background mx-2">
            <PageHeader
                title="Request Speaker"
                subtext="Apply to be a speaker for an event, podcast, conference, or publication. Share your expertise and let Cinnamon connect you with speaking opportunities."
            />
            <SpeakerRequestForm />
        </div>
    )
}
