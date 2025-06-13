"use client"
import React from 'react'
import Container from '../container'
import LogoText from '../universal/logo-text'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dot } from '../vectors/dot'
import { navLinks } from '@/app/constants/navLink'

export default function Header() {
    const pathname = usePathname();
    const active = navLinks.find((item) => item.route === pathname)?.route
    return (
        <header>
            <Container className='bg-[#1F1F99] h-40 mt-2 py-4'>
                <nav className='relative w-full flex justify-center items-center'>
                    <span className='absolute -top-2 left-0'>
                        <LogoText />
                    </span>
                    <ul className='flex gap-2 items-center'>
                        {navLinks.map((navLink, index) => (
                            <li className={`flex items-center gap-1 px-3 py-2 text-[#B8B8CC] ${active === navLink.route && 'text-white font-semibold'}`} key={index}>
                                {active === navLink.route && (<Dot />)}
                                <Link href={navLink.route}>{navLink.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
