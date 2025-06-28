import React from 'react'
import Container from '../universal/container'
import SectionTitle from '../universal/section-title'
import { Button } from '../ui/button'
import Image from 'next/image'
import { LineStroke } from '../vectors/line-stroke'

export default function FeaturedArticle() {
    return (
        <Container className='pt-8 pb-16 mt-8'>
            <div className='w-full flex flex-col justify-between gap-8 md:flex-row lg:gap-[120px]'>
                <div className='w-full'>
                    <SectionTitle text="Featured Article" />
                    <div className='flex flex-col gap-3 mt-4'>
                        <h2>Lorem ipsum molestie nunc egestas pretium scelerisque turpis magna.</h2>
                        <div className="flex">
                            <div className='flex gap-2 items-center'>
                                <Image src={'/images/avatar.png'} width={24} height={24} alt='avatar image' />
                                <p className='font-medium text-xs whitespace-nowrap lg:text-base'>John Doe</p>
                                <LineStroke className='ml-2' />
                            </div>
                            <div className='flex gap-4 items-center pl-4'>
                                <p className='font-medium text-xs whitespace-nowrap lg:text-base'>5 minutes</p>
                                <LineStroke />
                            </div>
                            <div className='flex gap-4 items-center pl-4'>
                                <div className={`rounded-md text-xs whitespace-nowrap lg:text-sm font-medium px-2 py-1`} style={{ backgroundColor: '#EEE5FF', color: '#5214CC' }}>
                                    Lifestyle and Travel
                                </div>
                            </div>
                        </div>
                        <p className='mt-3'>Lorem ipsum scelerisque elementum placerat posuere id nec nibh ullamcorper volutpat vestibulum viverra cras gravida at pretium aliquet morbi eget elit rhoncus faucibus sit placerat nulla diam tincidunt mauris pretium suspendisse lobortis enim et placerat a aenean in in etiam scelerisque aliquet in suspendisse dignissim.</p>
                        <Button className='w-fit'>Read Full Article</Button>
                    </div>
                </div>
                <div className='w-full'>
                    <Image src={'/images/featured-article-img.png'} className='w-full' width={620} height={448} alt='cinnamon website - featured article image' />
                </div>
            </div>
        </Container>
    )
}
