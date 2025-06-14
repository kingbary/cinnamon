import React from 'react'

export default function SectionTitle({ text }: { text: string }) {
    return (
        <div className='bg-[#E9E9F5] w-fit rounded-xl p-1'>
            <div className='px-4 py-2 border border-primary border-dashed rounded-lg'>
                <span className='text-primary font-medium leading-6 tracking-[0.5px] uppercase font-[family-name:var(--font-geist-mono)]'>{text}</span>
            </div>
        </div>
    )
}
