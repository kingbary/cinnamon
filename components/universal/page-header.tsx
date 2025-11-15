"use client"
import React from 'react'
import Container from './container'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

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
                        <motion.h3
                            className={cn('text-center text-white text-7xl font-bold uppercase -tracking-[8px] md:-tracking-[10px] font-[family-name:var(--font-poppins)] md:text-[120px]', titleClassName)}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.6, 0.05, 0.01, 0.9]
                            }}
                        >
                            {title}
                        </motion.h3>
                    </div>
                    {subtext && (
                        <motion.div
                            className='max-w-[532px] flex flex-col items-center justify-center'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                                ease: [0.6, 0.05, 0.01, 0.9]
                            }}
                        >
                            <p className='text-white font-medium text-center'>{subtext}</p>
                        </motion.div>
                    )}
                </div>
            </Container>
        </header>
    )
}