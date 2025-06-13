import React from 'react'
import Container from '../container'
import NavLink from '../universal/nav-link'
import { Button } from '../ui/button'

export default function Header() {

    return (
        <header className='relative py-2 h-screen'>
            <div className='absolute w-full mt-4'>
                <Container>
                    <NavLink />
                </Container>
            </div>
            <Container className='first-container bg-dark flex items-center py-4 h-fit'>
                <div className='pt-20 flex flex-col items-center justify-center'>
                    <h5 className='text-[#B8B8CC] text-[32px] font-semibold leading-8 -tracking-[2px]'>PR that puts you in the</h5>
                    <div className='relative my-6'>
                        <span className='text-[#B8B8CC80] text-[290px] font-bold -tracking-[25px] leading-[240px] uppercase font-[family-name:var(--font-poppins)]'>Spotlight</span>
                    </div>
                </div>
            </Container>
            <Container className='second-container bg-[#1F1F99] flex items-center py-4 h-full'>
                <div className='pt-20 flex flex-col items-center justify-center'>
                    <h5 className='text-[#B8B8CC] text-[32px] font-semibold leading-8 -tracking-[2px]'>PR that puts you in the</h5>
                    <div className='relative my-6'>
                        <h1 className='absolute text-white text-[290px] font-bold -tracking-[28px] leading-[240px] uppercase font-[family-name:var(--font-poppins)] blur-lg'>Spotlight</h1>
                        <span className='abosolute -z-10 text-white text-[290px] font-bold -tracking-[28px] leading-[240px] uppercase font-[family-name:var(--font-poppins)]'>Spotlight</span>
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
