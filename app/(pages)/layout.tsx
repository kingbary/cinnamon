import Footer from '@/components/universal/footer'
import NavLink from '@/components/universal/nav-link'
import React from 'react'
import { Toaster } from 'sonner'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='relative overflow-hidden'>
            <Toaster richColors position="top-right" />
            <NavLink />
            {children}
            <Footer />
        </main>
    )
}
