import PageHeader from '@/components/universal/page-header'
import RequestQuote from '@/components/request-quote'

export const metadata = {
    title: "Request Quote | Cinnamon",
    description:
        "Request a personalized PR strategy quote from Cinnamon. Share your goals and let our team craft a tailored plan to build your global visibility and professional reputation.",
    openGraph: {
        title: "Request Quote | Cinnamon",
        description:
            "Request a personalized PR strategy quote from Cinnamon. Share your goals and let our team craft a tailored plan to build your global visibility and professional reputation.",
        url: "https://thecinnamon.io/request-quote",
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
        title: "Request Quote | Cinnamon",
        description:
            "Request a personalized PR strategy quote from Cinnamon. Share your goals and let our team craft a tailored plan to build your global visibility and professional reputation.",
        images: ["https://thecinnamon.io/cinnamon.png"],
        site: "@thecinnamonio",
    },
};

export default function RequestQuotePage() {
    return (
        <div className="min-h-screen bg-background mx-2">
            <PageHeader
                title="Request Quote"
                subtext="Get a customized PR strategy quote or share your valuable feedback with our team"
            />
            <RequestQuote />
        </div>
    )
}
