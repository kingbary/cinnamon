import React from 'react'
import Container from '../universal/container'

export default function AboutSection() {
    return (
        <Container className='pt-8 pb-16 mt-8'>
            <div className='w-full flex flex-col justify-between gap-8 md:flex-row lg:gap-[120px]'>
                <div className='w-full'>
                    <div className='flex flex-col gap-6'>
                        <h2>Lorem ipsum molestie nunc egestas pretium scelerisque turpis magna.</h2>
                        <p>Lorem ipsum risus bibendum molestie bibendum pellentesque tellus rhoncus libero amet lectus arcu elementum sit faucibus eu amet hendrerit arcu lacinia turpis scelerisque sapien eu est morbi cursus pulvinar diam proin velit quam mauris aliquam venenatis auctor porttitor tincidunt arcu enim malesuada ultricies sed in phasellus penatibus congue a mauris aliquam condimentum condimentum volutpat nulla viverra sed mi orci faucibus elit nulla pharetra amet ac leo arcu ultricies nunc habitasse nam ornare magnis nascetur et dolor volutpat ultrices non nec semper neque sit metus eget lobortis dictum sit cursus lobortis nulla donec lorem diam adipiscing vitae aenean in tellus purus vitae lacus duis nunc suspendisse egestas phasellus integer nulla maecenas est metus in hac semper lectus posuere scelerisque ultrices consequat.</p>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='bg-[#CFCFE5] w-full h-[480px] rounded-[40px]'></div>
                </div>
            </div>
        </Container>
    )
}
