import Footer from '@/components/universal/footer'
import NavLink from '@/components/universal/nav-link'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavLink />
            {children}
            <Footer />
        </>
    )
}
