'use client'

import React from 'react'
import Container from '../universal/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
    return (
        <header className='relative pt-2 min-h-screen mx-2'>
            <Container className='bg-[#1F1F99] py-4 animate-heightGrow animate-bgTransition h-screen'>
                <div className='pt-20 flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0'>
                    <motion.h5
                        className='text-[#B8B8CC] text-[32px] font-semibold leading-8 -tracking-[2px]'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        PR that puts you in the
                    </motion.h5>
                    <motion.div
                        className='relative my-6 font-[family-name:var(--font-poppins)] px-4'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h1 className='blur-lg'>
                            <span className='md:hidden'>Spot<br />light</span>
                            <span className='hidden md:inline'>Spotlight</span>
                        </h1>
                        <span className='h1 absolute top-0 z-10'>
                            <span className='md:hidden'>Spot<br />light</span>
                            <span className='hidden md:inline'>Spotlight</span>
                        </span>
                    </motion.div>
                    <motion.div
                        className='max-w-[700px] flex flex-col items-center justify-center px-4 mt-20 md:mt-6'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <div className='px-4'>
                            <p className='text-white text-lg text-center font-medium leading-8 -tracking-[0.5px]'>We build your global profile through strategic media placements that showcase your expertise and accelerate your international career prospects.</p>
                        </div>
                        <motion.div
                            className='mt-6 flex gap-4 px-4'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <Link href={'/about-us#contact-form'}>
                                <Button variant={'secondary'}>Book Consultation</Button>
                            </Link>
                            <Link href={'/request-speaker'}>
                                <Button variant={'transparentBg'} className='text-white'>Request Speaker</Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </header>
    )
}
