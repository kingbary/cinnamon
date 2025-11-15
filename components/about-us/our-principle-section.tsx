"use client"
import React, { useRef } from 'react'
import Container from '../universal/container'
import SectionTitle from '../universal/section-title'
import { motion, useInView } from 'framer-motion'

export default function OurPrincipleSection() {
    const sectionRef = useRef(null)
    const cardsRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
    const cardsInView = useInView(cardsRef, { once: false, amount: 0.2 })

    const principleCardItem = [
        { title: 'Substance Over Spotlight', subText: 'We focus on credibility, not vanity metrics. Every press feature or podcast booking is designed to reflect your expertise, not just attract attention.', bgColor: '#FF7733' },
        { title: 'Tailored, Not Templated', subText: 'You won’t find a one-size-fits-all campaign here. We build your media profile around your unique strengths, story, and strategic goals.', bgColor: '#26BFA6' },
        { title: 'Measurable Impact', subText: 'Our success is measured by your success; career advancement, international opportunities, and visa approvals.', bgColor: '#BB33FF' },
    ]

    return (
        <div className='px-2'>
            <Container className='pt-8 pb-16 mt-8 px-0'>
                <div className='w-full flex flex-col justify-between items-center gap-8 lg:flex-row lg:gap-6'>
                    <motion.div
                        ref={sectionRef}
                        className='w-full h-full rounded-[40px] overflow-hidden flex flex-col'
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='bg-primary p-8 md:p-14'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <SectionTitle text='our principles' />
                            </motion.div>
                            <div className='mt-6 flex flex-col gap-3'>
                                <motion.h2
                                    className='our-principle-title-text'
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    Strategic
                                </motion.h2>
                                <motion.h2
                                    className='our-principle-title-text'
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    Intentional
                                </motion.h2>
                                <motion.h2
                                    className='our-principle-title-text'
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    Results-driven
                                </motion.h2>
                            </div>
                        </div>
                        <motion.div
                            className='hidden lg:block bg-[#CFCFE5] bg-[url(/images/chess-game.png)] bg-center bg-cover bg-no-repeat flex-1'
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                    </motion.div>
                    <div ref={cardsRef} className='w-full h-full flex flex-col gap-6'>
                        {principleCardItem.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className={`flex flex-col gap-2 rounded-[40px] w-full p-8 md:p-14`}
                                style={{ backgroundColor: item.bgColor }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.h2
                                    className='text-white principle-card-title'
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                                >
                                    {item.title}
                                </motion.h2>
                                <motion.p
                                    className='text-white md:text-lg font-medium'
                                    initial={{ opacity: 0 }}
                                    animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                                >
                                    {item.subText}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
