"use client"
import React from 'react'
import LogoText from './logo-text'
import Link from 'next/link'
import { Dot } from '../vectors/dot'
import { usePathname } from 'next/navigation'
import Container from './container'
import { navLinks } from '@/constants/navLink'

export default function NavLink() {
    const pathname = usePathname();
    const active = navLinks.find((item) => item.route === pathname)?.route
    return (
        <nav className='absolute w-full z-50 top-8'>
            <Container>
                <div className='relative w-full flex justify-center items-center'>
                    <span className='absolute -top-2 left-0'>
                        <LogoText />
                    </span>
                    <ul className='flex gap-2 items-center'>
                        {navLinks.map((navLink, index) => (
                            <li className={`flex items-center gap-1 px-3 py-2 text-[#B8B8CC] ${active === navLink.route && 'text-white font-semibold animate-navLink'}`} key={index}>
                                {active === navLink.route && (<Dot />)}
                                <Link href={navLink.route}>{navLink.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </nav>
    )
}
