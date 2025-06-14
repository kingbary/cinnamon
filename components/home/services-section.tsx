import React from 'react'
import Container from '../universal/container'
import SectionTitle from '../universal/section-title'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function ServicesSection() {
    return (
        <Container className='pt-8 pb-16 mt-8'>
            <div className='w-full flex flex-col justify-between gap-8 md:flex-row lg:gap-[120px]'>
                <div className='w-full'>
                    <SectionTitle text="services" />
                    <div className='flex flex-col gap-6'>
                        <h2>Lorem ipsum molestie nunc egestas pretium scelerisque turpis magna.</h2>
                        <p>Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim.</p>
                        <Button className='w-fit'>Learn more</Button>
                    </div>
                </div>
                <div className='w-full'>
                    <Image src={'/images/services-section-img.png'} className='w-full' width={620} height={630} alt='cinnamon website - services image' />
                </div>
            </div>
        </Container>
    )
}
