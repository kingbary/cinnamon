import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  description:
    "Crafting bold narratives and digital footprints for visionary brands across the diaspora.",
  openGraph: {
    title: "Cinnamon",
    description:
      "Crafting bold narratives and digital footprints for visionary brands across the diaspora.",
    url: "https://thecinnamon.io",
    siteName: "Cinnamon",
    images: [
      {
        url: "https://thecinnamon.io/cinnamon.png",
        width: 1200,
        height: 630,
        alt: "Cinnamon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinnamon",
    description:
      "Crafting bold narratives and digital footprints for visionary brands across the diaspora.",
    images: ["https://thecinnamon.io/cinnamon.png"],
    site: "@thecinnamonio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M85CBZXT');
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XGV7XBGZQP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XGV7XBGZQP');
          `}
        </Script>
      </head>
      <body
        className={`${instrumentSans.variable} ${poppins.variable} ${geist.variable} bg-background overflow-x-hidden pb-2 antialiased font-[family-name:var(--font-instrument-sans)]`}
      >
        {children}
      </body>
    </html>
  );
}
