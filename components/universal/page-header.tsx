import React from 'react'
import Container from './container'

export default function PageHeader({ title, subtext }: { title: string, subtext?: string }) {
    return (
        <header className={`relative pt-2 ${title ? title : 'h-screen'}`}>
            <Container className='second-container bg-[#14141A] flex items-center pt-20 pb-[112px] h-full'>
                <div className='pt-20 flex flex-col items-center justify-center'>
                    <div className='flex flex-col w-full items-center gap-6'>
                        <h2 className='text-center text-white text-[120px] font-bold leading-[120px] -tracking-[10px] uppercase font-poppins'>{title}</h2>
                    </div>
                    <div className='max-w-[532px] flex flex-col items-center justify-center'>
                        <p className='text-white text-xl text-center font-medium leading-8 -tracking-[0.5px]'>{subtext}</p>

                    </div>
                </div>
            </Container>
        </header>
    )
}