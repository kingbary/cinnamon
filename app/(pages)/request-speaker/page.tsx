import SpeakerRequestForm from '@/components/request-speaker';
import PageHeader from '@/components/universal/page-header';
import React from 'react'

export const metadata = {
    title: "Request a Speaker | Cinnamon",
    description:
        "Request speakers for your event, podcast or conference. Let Cinnamon connect you with inspiring experts and thought leaders.",
    openGraph: {
        title: "Request a Speaker | Cinnamon",
        description:
            "Request speakers for your event, podcast or conference. Let Cinnamon connect you with inspiring experts and thought leaders.",
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
        title: "Request a Speaker | Cinnamon",
        description:
            "Request speakers for your event, podcast or conference. Let Cinnamon connect you with inspiring experts and thought leaders.",
        images: ["https://thecinnamon.io/cinnamon.png"],
        site: "@thecinnamonio",
    },
};

export default function page() {
    return (
        <div className="min-h-screen bg-background mx-2">
            <PageHeader
                title="Request a Speaker"
                subtext="Looking for speakers for your event, podcast or conference? Fill out the form and Cinnamon will connect you with inspiring experts and thought leaders."
            />
            <SpeakerRequestForm />
        </div>
    )
}
