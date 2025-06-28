import Footer from '@/components/universal/footer'
import NavLink from '@/components/universal/nav-link'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='relative'>
            <NavLink />
            {children}
            <Footer />
        </main>
    )
}
