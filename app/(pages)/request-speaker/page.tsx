import SpeakerRequestForm from '@/components/request-speaker';
import PageHeader from '@/components/universal/page-header';
import React from 'react'

export const metadata = {
    title: "Request Speaker | Cinnamon",
    description:
        "Request a speaker for your event, podcast, conference, or publication. Share your requirements and let Cinnamon match you with the perfect expert or guest.",
    openGraph: {
        title: "Request Speaker | Cinnamon",
        description:
            "Request a speaker for your event, podcast, conference, or publication. Share your requirements and let Cinnamon match you with the perfect expert or guest.",
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
            "Request a speaker for your event, podcast, conference, or publication. Share your requirements and let Cinnamon match you with the perfect expert or guest.",
        images: ["https://thecinnamon.io/cinnamon.png"],
        site: "@thecinnamonio",
    },
};

export default function page() {
    return (
        <div className="min-h-screen bg-background mx-2">
            <PageHeader
                title="Request Speaker"
                subtext="Share your event details and requirements to get matched with the ideal speaker or expert for your audience."
            />
            <SpeakerRequestForm />
        </div>
    )
}
