import SpeakerRequestForm from '@/components/request-speaker';
import React from 'react'

export const metadata = {
    title: "Request Speaker | Cinnamon",
    description:
        "Request a personalized PR strategy quote from Cinnamon. Share your goals and let our team craft a tailored plan to build your global visibility and professional reputation.",
    openGraph: {
        title: "Request Speaker | Cinnamon",
        description:
            "Request a personalized PR strategy quote from Cinnamon. Share your goals and let our team craft a tailored plan to build your global visibility and professional reputation.",
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
            "Request a personalized PR strategy quote from Cinnamon. Share your goals and let our team craft a tailored plan to build your global visibility and professional reputation.",
        images: ["https://thecinnamon.io/cinnamon.png"],
        site: "@thecinnamonio",
    },
};

export default function page() {
    return (
        <SpeakerRequestForm />
    )
}
