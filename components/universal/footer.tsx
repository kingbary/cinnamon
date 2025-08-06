import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const socials = [
        { name: "Instagram", link: "https://instagram.com/cinnamon" },
        { name: "YouTube", link: "https://youtube.com/cinnamon" },
        { name: "TikTok", link: "https://tiktok.com/cinnamon" },
        { name: "Facebook", link: "https://facebook.com/cinnamon" },
        { name: "X (fka. Twitter)", link: "https://x.com/cinnamon" },
    ]

    // const otherLinks = [
    //     { name: "Privacy Policy", link: "privacy-policy" },
    //     { name: "Terms and Condition", link: "terms-and-condition" },
    // ]
    return (
        <footer className='bg-[#14141A] flex flex-col items-center px-4 mx-2 py-6 md:p-16 rounded-3xl text-[#CFCFE5]'>
            <span
                className='footer-logo'
                style={{ fontFeatureSettings: "'ss02' on" }}
            >
                cinnamon
            </span>
            <small className='text-xs md:text-base leading-6 -tracking-[0.5px]'>© Copyright {new Date().getFullYear()}. All rights reserved</small>
            <div className='w-full mt-20 flex justify-between'>
                <div className='flex flex-col items-start gap-2 md:items-center md:flex-row'>
                    {socials.map((item, index) => (
                        <Link key={index} href={item.link} className='px-3 py-2 font-sans text-sm md:text-xl text-left'>{item.name}</Link>
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
