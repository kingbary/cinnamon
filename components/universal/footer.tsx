"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Footer() {
    const footerRef = useRef(null)
    const isInView = useInView(footerRef, { once: false, amount: 0.3 })

    const socials = [
        { name: "Instagram", link: "https://www.instagram.com/cinnamon_io" },
        { name: "YouTube", link: "https://www.youtube.com/@CinnamonandFire" },
        { name: "LinkedIn", link: "https://www.linkedin.com/company/cinnamonpr/" },
        { name: "Facebook", link: "https://www.facebook.com/share/1CMiNf28rb/?mibextid=wwXIfr" },
        { name: "X (fka. Twitter)", link: "https://x.com/cinnamon__io" },
    ]

    // const otherLinks = [
    //     { name: "Privacy Policy", link: "privacy-policy" },
    //     { name: "Terms and Condition", link: "terms-and-condition" },
    // ]

    return (
        <footer ref={footerRef} className='bg-[#14141A] flex flex-col items-center px-4 mx-2 py-6 md:p-16 rounded-3xl text-[#CFCFE5]'>
            <motion.span
                className='footer-logo'
                style={{ fontFeatureSettings: "'ss02' on" }}
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: -20 }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10,
                    duration: 1
                }}
            >
                cinnamon
            </motion.span>
            <motion.small
                className='text-xs md:text-base leading-6 -tracking-[0.5px]'
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                © Copyright {new Date().getFullYear()}. All rights reserved
            </motion.small>
            <div className='w-full mt-20 flex justify-between'>
                <div className='flex flex-col items-start gap-2 md:items-center md:flex-row'>
                    {socials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        >
                            <Link href={item.link} className='px-3 py-2 font-sans text-sm md:text-xl text-left hover:text-white transition-colors'>
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>
                {/* <div className='flex flex-col items-end gap-2 md:items-center md:flex-row'>
                    {otherLinks.map((item, index) => (
                        <Link key={index} href={item.link} className='px-3 py-2 font-sans text-sm md:text-xl text-left'>{item.name}</Link>
                    ))}
                </div> */}
            </div>
        </footer>
    )
}
