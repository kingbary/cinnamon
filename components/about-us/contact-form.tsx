import React from 'react'
import Container from '../universal/container'
import { Button } from '../ui/button'

export default function ContactForm() {
    return (
        <Container className='mb-8'>
            <div className='flex w-full h-[500px]'>
                <div className='bg-[#1F1F99] h-full w-full rounded-l-[40px]'></div>
                <div className='h-full w-full rounded-r-[40px] py-16 px-[88px] border-r border-y'>
                    <form action="" className='flex flex-col gap-3'>
                        <div>
                            <label htmlFor="email" className='sr-only'>Email</label>
                            <input type="email" name='email' id='email' placeholder='Email address' className='bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg' />
                        </div>
                        <div>
                            <label htmlFor="name" className='sr-only'>Name </label>
                            <input type="name" name='name' placeholder='Name' className='bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg' />
                        </div>
                        <div>
                            <label htmlFor="message" className='sr-only'>Message</label>
                            <textarea name="message" placeholder='Please type your message' id="message" className='bg-[#EDEDFA] w-full p-4 border border-[#E1E1E5] outline-none rounded-lg' rows={6} cols={4}></textarea>
                        </div>
                        <Button type='submit' className='w-fit'>Send message</Button>
                    </form>
                </div>
            </div>
        </Container>
    )
}
