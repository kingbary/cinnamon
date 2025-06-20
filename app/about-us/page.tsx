import AboutSection from '@/components/about-us/about-section'
import ContactForm from '@/components/about-us/contact-form'
import PageHeader from '@/components/universal/page-header'
import React from 'react'

export default function AboutUsPage() {
    return (
        <>
            <PageHeader title='About us' subtext='Lorem ipsum in id interdum felis ut elit eros urna sociis bibendum varius dui nisl aliquet euismod augue ullamcorper integer in ornare at lectus blandit arcu elementum blandit eget vel a fringilla pellentesque arcu massa lacus nisi consectetur risus tempus suspendisse id in ligula scelerisque euismod integer purus egestas curabitur volutpat quam accumsan habitant vulputate sapien bibendum in hac suspendisse mattis tempus gravida praesent in mattis nullam cras tortor dui est elementum eget eget sed donec vitae cras pellentesque eleifend.' />
            <AboutSection />
            <ContactForm />
        </>
    )
}
