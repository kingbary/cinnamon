import AboutSection from '@/components/about-us/about-section'
import ContactForm from '@/components/about-us/contact-form'
import PageHeader from '@/components/universal/page-header'
import React from 'react'

export default function AboutUsPage() {
    return (
        <div className='mx-2'>
            <PageHeader title='About us' subtext={`We're a UK-based personal PR consultancy specialising in building global visibility for high-achieving professionals. Our strategic approach combines targeted media placements, thought leadership positioning, and international profile building to help ambitious professionals build credible digital footprints and lasting global visibility. We specialise in personal press, including article features, podcast interviews, and online visibility, that make your expertise undeniable while advancing your career worldwide.`} />
            <AboutSection />
            <ContactForm />
        </div>
    )
}
