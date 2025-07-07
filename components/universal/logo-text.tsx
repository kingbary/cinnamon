"use client"
import { usePathname } from 'next/navigation';
import React from 'react'

export default function LogoText({ className }: { className?: string }) {
    const pathname = usePathname();

    let textColor = "text-white";
    if (pathname.includes("podcast")) {
        textColor = "text-black";
    } else if (pathname.includes("/blog/")) {
        textColor = "text-primary";
    }
    return (
        <div
            className={`${className} text-[32px] font-[family-name:var(--font-poppins)] font-semibold -tracking-[2px] ${textColor}`}
            style={{ fontFeatureSettings: "'ss02' on" }}
        >
            cinnamon
        </div>
    )
}