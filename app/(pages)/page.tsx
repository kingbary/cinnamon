import AmplifyProfile from "@/components/home/amplify-profile";
import FAQ from "@/components/home/faq";
import FeaturedSectionWrapper from "@/components/home/featured-section-wrapper";
import Header from "@/components/home/header";
import ServicesSection from "@/components/home/services-section";
import Testimonial from "@/components/home/testimonial";

export const metadata = {
  title: "Cinnamon | Personal PR Consultancy",
  description:
    "Cinnamon builds global visibility for visionary brands and professionals through PR services, media placements, and strategic storytelling.",
  openGraph: {
    title: "Cinnamon | Personal PR Consultancy",
    description:
      "Cinnamon builds global visibility for visionary brands and professionals through PR services, media placements, and strategic storytelling.",
    url: "https://thecinnamon.io/",
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
    title: "Cinnamon | Personal PR Consultancy",
    description:
      "Cinnamon builds global visibility for visionary brands and professionals through PR services, media placements, and strategic storytelling.",
    images: ["https://thecinnamon.io/cinnamon.png"],
    site: "@thecinnamonio",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <ServicesSection />
      <AmplifyProfile />
      <Testimonial />
      <FeaturedSectionWrapper />
      <FAQ />
    </>
  );
}
