import React from 'react'
import Container from '../universal/container'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function AmplifyProfile() {
  return (
    <Container className='bg-[#141419] mt-0 mb-8 md:mt-8'>
      <div className='flex flex-col items-center gap-6 mt-16 mb-8' id='amplify-profile'>
        <h2 className='text-white'>Ready to amplify your profile?</h2>
        <p className='text-[#B8B8CC] text-center max-w-[452px]'>Your achievements deserve the spotlight. Let’s take your story from impressive to unmissable.</p>
        <div className='flex justify-center'>
          <Link href={'/about-us#contact-form'} >
            <Button variant={'secondary'} className='w-fit'>Book Consultation</Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
