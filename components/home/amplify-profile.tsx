"use client"
import React, { useRef } from 'react'
import Container from '../universal/container'
import Link from 'next/link'
import { Button } from '../ui/button'
import { motion, useInView } from 'framer-motion'

export default function AmplifyProfile() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  return (
    <div ref={sectionRef} className='px-2'>
      <Container className='bg-[#141419] mt-0 mb-8 md:mt-8'>
        <div className='flex flex-col items-center gap-6 mt-16 mb-8' id='amplify-profile'>
          <motion.h2
            className='text-white'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Ready to amplify your profile?
          </motion.h2>
          <motion.p
            className='text-[#B8B8CC] text-center max-w-[452px]'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your achievements deserve the spotlight. Let&apos;s take your story from impressive to unmissable.
          </motion.p>
          <motion.div
            className='flex justify-center'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href={'/about-us#contact-form'} >
              <Button variant={'secondary'} className='w-fit'>Book Consultation</Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
