"use client"
import React from 'react'
import Container from '../container'
import NavLink from '../universal/nav-link'

export default function Header() {

    return (
        <header>
            <Container className='bg-[#1F1F99] h-40 mt-2 py-4'>
                <NavLink />
            </Container>
        </header>
    )
}
