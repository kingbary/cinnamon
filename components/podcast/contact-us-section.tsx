import React from 'react'
import Container from '../universal/container'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function ContactUsSection() {
    return (
        <div className='relative bg-[url(/images/podcast-session.png)] bg-no-repeat bg-cover flex items-end mb-8 bg-black/20 rounded-[40px] h-[460px] md:h-screen overflow-hidden'>
            <div className="podcast-session-bg flex items-end w-full">
                <Container>
                    <div className="py-6 px-4 flex flex-col items-center gap-3 w-full pb-20">
                        <h2 className="text-white text-center">
                            Want to feature on our podcast?
                        </h2>
                        <p className='text-center text-white'>You can join us on our podcast or feature on other podcasts to boost your visibility, leave us a message!</p>
                        <Link href={'/about-us#contact-form'}>
                            <Button variant={'secondary'} className='w-fit'>Contact us</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </div>
    )
}
