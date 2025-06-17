import React from 'react'
import Container from '../universal/container'
import { Button } from '../ui/button'

export default function ContactUsSection() {
    return (
        <div className='relative bg-[url(/images/podcast-session.png)] bg-no-repeat bg-cover flex items-end mb-8 bg-black/20 rounded-[40px] h-screen overflow-hidden'>
            <div className="podcast-session-bg flex items-end w-full">
                <Container>
                    <div className="py-6 px-4 flex flex-col items-center gap-3 w-full pb-20">
                        <h2 className="text-white text-center">
                            Lorem ipsum ultricies etiam in erat turpis a.
                        </h2>
                        <p className='text-center text-white'>Lorem ipsum consectetur pretium diam aliquam praesent blandit pellentesque eget sed eu.</p>
                        <Button variant={'secondary'} className='w-fit'>Contact us</Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}
