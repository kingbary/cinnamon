import React from 'react'
import Container from '../universal/container'
import { Button } from '../ui/button'

export default function Header() {

    return (
        <header className='relative py-2 h-screen'>
            {/* <Container className='first-container bg-dark flex items-center py-4 h-fit'>
                <div className='pt-20 flex flex-col items-center justify-center'>
                    <h5 className='text-[#B8B8CC] text-[32px] font-semibold leading-8 -tracking-[2px]'>PR that puts you in the</h5>
                    <div className='relative my-6'>
                        <span className='text-[#B8B8CC80] text-[290px] font-bold -tracking-[25px] leading-[240px] uppercase font-[family-name:var(--font-poppins)]'>Spotlight</span>
                    </div>
                </div>
            </Container> */}
            <Container className='second-container bg-[#1F1F99] flex items-center py-4 h-full animate-bgTransition'>
                <div className='pt-20 flex flex-col items-center justify-center'>
                    <h5 className='text-[#B8B8CC] text-[32px] font-semibold leading-8 -tracking-[2px]'>PR that puts you in the</h5>
                    <div className='relative my-6 font-[family-name:var(--font-poppins)]'>
                        <h1 className='absolute text-white font-bold uppercase blur-lg lg:text-[220px] lg:leading-[200px] lg:-tracking-[24px] 2xl:leading-[240px] 2xl:-tracking-[28px] 2xl:text-[290px]'>Spotlight</h1>
                        <span className='abosolute -z-10 text-white font-bold uppercase lg:text-[220px] lg:leading-[200px] lg:-tracking-[24px] 2xl:leading-[240px] 2xl:-tracking-[28px] 2xl:text-[290px]'>Spotlight</span>
                    </div>
                    <div className='max-w-[420px] flex flex-col items-center justify-center'>
                        <p className='text-white text-lg text-center font-medium leading-8 -tracking-[0.5px]'>Crafting bold narratives and digital footprints for visionary brands across the diaspora.</p>
                        <div className='mt-6 flex gap-4'>
                            <Button variant={'secondary'}>Book Press</Button>
                            <Button variant={'transparentBg'} className='text-white'>See our Work</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}
