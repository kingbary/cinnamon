"use client"
import React, { useState } from 'react'
import LogoText from './logo-text'
import Link from 'next/link'
import { Dot } from '../vectors/dot'
import { usePathname } from 'next/navigation'
import Container from './container'
import { navLinks } from '@/constants/navLink'
import Menu from '../vectors/menu'

export default function NavLink() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const active = navLinks.find((item) => item.route === pathname)?.route;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className='absolute w-full z-50 right-0 top-8'>
            <Container>
                <div className='relative w-full flex justify-center items-center'>
                    <div className='absolute -top-2 flex w-full justify-between z-10'>
                        <Link href={'/'}>
                            <LogoText />
                        </Link>
                        <button
                            onClick={toggleMobileMenu}
                            className='p-3 rounded-[12px] border border-white/20 md:hidden hover:bg-white/10 transition-colors cursor-pointer'
                            aria-label="Toggle mobile menu"
                        >
                            <Menu />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className='hidden gap-2 items-center md:flex z-50'>
                        {navLinks.map((navLink, index) => (
                            <li className={`flex items-center gap-1 px-3 py-2 text-[#B8B8CC] ${active === navLink.route && 'text-white font-semibold animate-navLink'}`} key={index}>
                                {active === navLink.route && (<Dot />)}
                                <Link href={navLink.route}>{navLink.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {isMobileMenuOpen && (
                    <div className='px-2 z-50'>
                        <div className='md:hidden absolute top-full left-0 right-0 mt-2 overflow-hidden rounded-[16px] animate-in slide-in-from-top-2 duration-300'>
                            <div className='absolute inset-0 bg-gradient-to-br from-black/95 via-slate-800/95 to-black/95 backdrop-blur-xl'></div>
                            <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 via-primary/20 to-black/20 p-[1px] rounded-[16px]'>
                                <div className='h-full w-full bg-primary/50 rounded-[15px]'></div>
                            </div>
                            <div className='absolute inset-0 opacity-10'>
                                <div className='h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]'></div>
                            </div>
                            <div className='relative z-10'>
                                <ul className='flex flex-col p-2'>
                                    {navLinks.map((navLink, index) => (
                                        <li key={index} className='transform transition-all duration-200 hover:scale-[1.02]'>
                                            <Link
                                                href={navLink.route}
                                                onClick={closeMobileMenu}
                                                className={`flex items-center gap-3 px-6 py-4 m-1 rounded-[12px] text-[#B8B8CC] hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 transition-all duration-300 group ${active === navLink.route && 'text-white font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-lg shadow-blue-500/10'
                                                    }`}
                                            >
                                                <div className={`transition-transform duration-300 ${active === navLink.route ? 'scale-110' : 'group-hover:scale-110'}`}>
                                                    {active === navLink.route && (<Dot />)}
                                                </div>
                                                <span className='transition-all duration-300 group-hover:translate-x-1'>
                                                    {navLink.name}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom Accent */}
                                <div className='h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 mx-4 rounded-full opacity-60'></div>
                            </div>
                        </div>
                    </div>
                )}
                {isMobileMenuOpen && (
                    <div
                        className='md:hidden fixed inset-0 bg-gradient-to-br from-black/40 via-primary/30 to-black/40 backdrop-blur-sm -z-20 animate-in fade-in duration-300'
                        onClick={closeMobileMenu}
                    />
                )}
            </Container>
        </nav>
    )
}