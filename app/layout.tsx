import type { Metadata } from "next";
import { Instrument_Sans, Poppins } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
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
        className={`${instrumentSans.variable} ${poppins.variable} bg-background px-2 antialiased font-[family-name:var(--font-instrument-sans)]`}

      >
        {children}
      </body>
    </html>
  );
}
