import React from 'react'
import Container from '../universal/container'
import SectionTitle from '../universal/section-title'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function ServicesSection() {
    return (
        <Container className='pt-8 pb-16 mt-8 px-0'>
            <div className='w-full flex flex-col justify-between items-center gap-8 md:flex-row lg:gap-[120px]'>
                <div className='w-full'>
                    <SectionTitle text="services" />
                    <div className='flex flex-col gap-6 mt-4'>
                        <h2>Strategic Media Placements</h2>
                        <p>Secure coverage in publications that matter to your industry and immigration goals.</p>
                        <Button className='w-fit'>Get Featured</Button>
                    </div>
                </div>
                <div className='w-full'>
                    <Image src={'/images/services-section-img.png'} className='w-full' width={620} height={630} alt='cinnamon website - services image' />
                </div>
            </div>
        </Container>
    )
}
