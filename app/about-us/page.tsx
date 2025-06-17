import AboutSection from '@/components/about-us/about-section'
import ContactForm from '@/components/about-us/contact-form'
import AboutUsHeader from '@/components/about-us/header'
import React from 'react'

export default function AboutUsPage() {
    return (
        <>
            <AboutUsHeader />
            <AboutSection />
            <ContactForm />
        </>
    )
}
