import React from 'react'
import Container from '../universal/container'
import SectionTitle from '../universal/section-title'

export default function OurPrincipleSection() {
    const principleCardItem = [
        { title: 'Substance Over Spotlight', subText: 'We focus on credibility, not vanity metrics. Every press feature or podcast booking is designed to reflect your expertise, not just attract attention.', bgColor: '#FF7733' },
        { title: 'Tailored, Not Templated', subText: 'You won’t find a one-size-fits-all campaign here. We build your media profile around your unique strengths, story, and strategic goals.', bgColor: '#26BFA6' },
        { title: 'Measurable Impact', subText: 'Our success is measured by your success; career advancement, international opportunities, and visa approvals.', bgColor: '#BB33FF' },
    ]
    return (
        <div className='px-2'>
            <Container className='pt-8 pb-16 mt-8 px-0'>
                <div className='w-full flex flex-col justify-between items-center gap-8 lg:flex-row lg:gap-6'>
                    <div className='w-full h-full rounded-[40px] overflow-hidden flex flex-col'>
                        <div className='bg-primary p-8 md:p-14'>
                            <SectionTitle text='our principles' />
                            <div className='mt-6 flex flex-col gap-3'>
                                <h2 className='our-principle-title-text'>Strategic</h2>
                                <h2 className='our-principle-title-text'>Intentional</h2>
                                <h2 className='our-principle-title-text'>Results-driven</h2>
                            </div>
                        </div>
                        <div className='hidden lg:block bg-[#CFCFE5] bg-[url(/images/chess-game.png)] bg-center bg-cover bg-no-repeat flex-1'></div>
                    </div>
                    <div className='w-full h-full flex flex-col gap-6'>
                        {
                            principleCardItem.map((item) => (
                                <div key={item.title} className={`bg-[#FF7733] flex flex-col gap-2 rounded-[40px] w-full p-8 md:p-14`} style={{ backgroundColor: item.bgColor }}>
                                    <h2 className='text-white principle-card-title'>{item.title}</h2>
                                    <p className='text-white md:text-lg font-medium'>{item.subText}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}
