import React from 'react'
import Container from '../universal/container'

export default function AboutSection() {
    return (
        <div className='px-2'>
            <Container className='pt-8 pb-16 mt-8'>
                <div className='w-full flex flex-col justify-between gap-8 md:flex-row lg:gap-[120px]'>
                    <div className='w-full'>
                        <div className='flex flex-col gap-6'>
                            <h2>Why We Do What We Do</h2>
                            <p>Founded on the belief that exceptional talent deserves global recognition, Cinnamon bridges the gap between professional excellence and public visibility. We understand that brilliant work often goes unnoticed, and that recognition, not just achievement, opens the doors that matter most.
                                Our team combines deep expertise in strategic communications with an understanding of what immigration panels, industry leaders, and international audiences value most. We don&apos;t just generate coverage; we build the kind of credible, authoritative presence that creates real opportunities.
                            </p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='bg-[#CFCFE5] w-full h-[480px] rounded-[40px]'></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
