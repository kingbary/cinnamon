import React from 'react'
import Container from '../universal/container'

export default function BlogHeader() {
    return (
        <>
            <div className=' blogHeader relative bg-[linear-gradient(180deg, rgba(65, 169, 213, 0.70) 0 %, rgba(65, 169, 213, 0.00) 75 %)] rounded-3xl mt-2 mb-8 overflow-hidden'>
                <Container className='flex flex-col w-full gap-8 items-center px-8 pt-20 pb-[112px] mt-4'>
                    <div className='flex flex-col w-full items-center gap-6'>
                        {/* <h2 className='text-center text-[#402F0D] text-[120px] font-bold leading-[120px] -tracking-[10px] uppercase font-poppins'>Blog Header</h2> */}
                    </div>
                </Container>
            </div>
        </>
    )
}

// border - radius: 24px;
// border: 1px solid #FFF;
// background: linear - gradient(180deg, rgba(65, 169, 213, 0.70) 0 %, rgba(65, 169, 213, 0.00) 75 %), url(<path-to-image>) lightgray 50% / cover no-repeat, #DADAE5;