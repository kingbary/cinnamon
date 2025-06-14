import React from 'react'

type props = {
    className?: string;
    children: React.ReactNode
}

export default function Container({ className, children }: props) {
    return (
        <section className={`${className} w-full flex justify-center rounded-3xl px-4 md:px-8`}>
            <div className='w-full max-w-7xl'>
                {children}
            </div>
        </section>
    )
}
