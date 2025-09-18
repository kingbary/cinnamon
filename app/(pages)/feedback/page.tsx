import FeedBackForm from '@/components/feedback/feedback-form'
import PageHeader from '@/components/universal/page-header'
import React from 'react'

export const metadata = {
  title: "Feedback | Cinnamon",
  description:
    "We value your opinion! Help us improve our services by sharing your experience, suggestions, or any concerns you may have.",
  openGraph: {
    title: "Feedback | Cinnamon",
    description:
      "We value your opinion! Help us improve our services by sharing your experience, suggestions, or any concerns you may have.",
    url: "https://thecinnamon.io/feedback",
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
    title: "Feedback | Cinnamon",
    description:
      "We value your opinion! Help us improve our services by sharing your experience, suggestions, or any concerns you may have.",
    images: ["https://thecinnamon.io/cinnamon.png"],
    site: "@thecinnamonio",
  },
};

export default function page() {
    return (
        <div className="min-h-screen bg-background mx-2">
            <PageHeader
                title="Feedback"
                subtext="We value your opinion! Help us improve our services by sharing your experience, suggestions, or any concerns you may have."
            />
            <FeedBackForm />
        </div>
    )
}
