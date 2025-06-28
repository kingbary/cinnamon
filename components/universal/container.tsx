import { cn } from '@/lib/utils';
import React from 'react'

type props = {
    className?: string;
    children: React.ReactNode
}

export default function Container({ className, children }: props) {
    return (
        <section className={cn('w-full flex flex-col items-center justify-center rounded-3xl px-4 md:px-8', className)}>
            <div className='w-full flex justify-center max-w-7xl'>
                {children}
            </div>
        </section>
    )
}
