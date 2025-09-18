import AboutSection from '@/components/about-us/about-section'
import ContactForm from '@/components/about-us/contact-form'
import OurPrincipleSection from '@/components/about-us/our-principle-section'
import PageHeader from '@/components/universal/page-header'
import React from 'react'

export const metadata = {
    title: "About Us | Cinnamon",
    description:
        "Cinnamon is a personal PR consultancy specialising in building global visibility for high-achieving professionals. Our strategic approach combines targeted media placements, thought leadership positioning, and international profile building to help ambitious professionals build credible digital footprints and lasting global visibility.",
    openGraph: {
        title: "About Us | Cinnamon",
        description:
            "Cinnamon is a personal PR consultancy specialising in building global visibility for high-achieving professionals. Our strategic approach combines targeted media placements, thought leadership positioning, and international profile building to help ambitious professionals build credible digital footprints and lasting global visibility.",
        url: "https://thecinnamon.io/about-us",
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
        title: "About Us | Cinnamon",
        description:
            "Cinnamon is a personal PR consultancy specialising in building global visibility for high-achieving professionals. Our strategic approach combines targeted media placements, thought leadership positioning, and international profile building to help ambitious professionals build credible digital footprints and lasting global visibility.",
        images: ["https://thecinnamon.io/cinnamon.png"],
        site: "@thecinnamonio",
    },
};

export default function AboutUsPage() {
    return (
        <div className='mx-2'>
            <PageHeader title='About us' subtext={`We're a personal PR consultancy specialising in building global visibility for high-achieving professionals. Our strategic approach combines targeted media placements, thought leadership positioning, and international profile building to help ambitious professionals build credible digital footprints and lasting global visibility. We specialise in personal press, including article features, podcast interviews, and online visibility, that make your expertise undeniable while advancing your career worldwide.`} />
            <AboutSection />
            <OurPrincipleSection />
            <ContactForm />
        </div>
    )
}
