import React from 'react'
import Container from './container'
import { cn } from '@/lib/utils';

type Props =
    {
        title: string;
        subtext?: string;
        className?: string;
        titleClassName?: string;
    }


export default function PageHeader({ title, subtext, className, titleClassName }: Props) {
    return (
        <header className={`relative pt-2 ${title ? title : 'h-screen'}`}>
            <Container className={`bg-[#14141A] flex items-center pt-20 pb-[112px] h-full ${className}`}>
                <div className='pt-20 flex flex-col items-center justify-center'>
                    <div className='flex flex-col w-full items-center gap-6'>
                        <h3 className={cn('text-center text-white text-7xl font-bold uppercase -tracking-[8px] md:-tracking-[10px] font-[family-name:var(--font-poppins)] md:text-[120px]', titleClassName)}>{title}</h3>
                    </div>
                    <div className='max-w-[532px] flex flex-col items-center justify-center'>
                        <p className='text-white font-medium text-center'>{subtext}</p>
                    </div>
                </div>
            </Container>
        </header>
    )
}