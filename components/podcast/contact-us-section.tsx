"use client"
import React, { useRef } from 'react'
import Container from '../universal/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

export default function ContactUsSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

    return (
        <div
            ref={sectionRef}
            className='relative bg-[url(/images/podcast-session.png)] bg-no-repeat bg-cover flex items-end mb-8 bg-black/20 rounded-[40px] h-[460px] md:h-screen overflow-hidden'
        >
            <div className="podcast-session-bg flex items-end w-full">
                <Container>
                    <motion.div
                        className="py-6 px-4 flex flex-col items-center gap-3 w-full pb-20"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-white text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Want to feature on our podcast?
                        </motion.h2>
                        <motion.p
                            className='text-center text-white max-w-2xl'
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            You can join us on our podcast or feature on other podcasts to boost your visibility, leave us a message!
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={'/about-us#contact-form'}>
                                <Button variant={'secondary'} className='w-fit'>Contact us</Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </Container>
            </div>
        </div>
    )
}
