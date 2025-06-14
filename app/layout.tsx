import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans, Poppins } from "next/font/google";
import "./globals.css";
import NavLink from "@/components/universal/nav-link";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geist = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cinnamon",
  description: "Crafting bold narratives and digital footprints for visionary brands across the diaspora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${poppins.variable} ${geist.variable} bg-background overflow-x-hidden px-2 antialiased font-[family-name:var(--font-instrument-sans)]`}

      >
        <NavLink />
        {children}
      </body>
    </html>
  );
}
