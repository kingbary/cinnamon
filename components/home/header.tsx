import React from 'react'
import Container from '../universal/container'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Header() {


    return (
        <header className='relative pt-2 h-screen'>
            {/* <Container className='first-container bg-dark flex items-center py-4 h-fit'>
                <div className='pt-20 flex flex-col items-center justify-center'>
                    <h5 className='text-[#B8B8CC] text-[32px] font-semibold leading-8 -tracking-[2px]'>PR that puts you in the</h5>
                    <div className='relative my-6'>
                        <span className='text-[#B8B8CC80] text-[290px] font-bold -tracking-[25px] leading-[240px] uppercase font-[family-name:var(--font-poppins)]'>Spotlight</span>
                    </div>
                </div>
            </Container> */}
            <Container className='bg-[#1F1F99] py-4 animate-heightGrow animate-bgTransition'>
                <div className='pt-20 flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0'>
                    <h5 className='text-[#B8B8CC] text-[32px] font-semibold leading-8 -tracking-[2px]'>PR that puts you in the</h5>
                    <div className='relative my-6 font-[family-name:var(--font-poppins)] px-4'>
                        <h1 className='blur-lg'>
                            <span className='md:hidden'>Spot<br />light</span>
                            <span className='hidden md:inline'>Spotlight</span>
                        </h1>
                        <span className='h1 absolute top-0 z-10'>
                            <span className='md:hidden'>Spot<br />light</span>
                            <span className='hidden md:inline'>Spotlight</span>
                        </span>
                    </div>
                    <div className='max-w-[420px] flex flex-col items-center justify-center mt-20 md:mt-6'>
                        <p className='text-white text-lg text-center font-medium leading-8 -tracking-[0.5px]'>We build your global profile through strategic media placements that showcase your expertise and accelerate your international career prospects.</p>
                        <div className='mt-6 flex gap-4'>
                            <Link href={'/about-us#contact-form'}>
                                <Button variant={'secondary'}>Book Consultation</Button>
                            </Link>
                            <Button variant={'transparentBg'} className='text-white'>See our Work</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}
