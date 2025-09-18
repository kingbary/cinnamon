import AmplifyProfile from "@/components/home/amplify-profile";
import FAQ from "@/components/home/faq";
import FeaturedSection from "@/components/home/featured-section";
import Header from "@/components/home/header";
import ServicesSection from "@/components/home/services-section";
import Testimonial from "@/components/home/testimonial";

export const metadata = {
  title: "Cinnamon | Personal PR Consultancy",
  description:
    "Cinnamon crafts bold narratives and digital footprints for visionary brands and professionals. Discover our PR services, media placements, and strategies for building global visibility and lasting impact.",
  openGraph: {
    title: "Cinnamon | Personal PR Consultancy",
    description:
      "Cinnamon crafts bold narratives and digital footprints for visionary brands and professionals. Discover our PR services, media placements, and strategies for building global visibility and lasting impact.",
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
      "Cinnamon crafts bold narratives and digital footprints for visionary brands and professionals. Discover our PR services, media placements, and strategies for building global visibility and lasting impact.",
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
      <FeaturedSection />
      <FAQ />
    </>
  );
}
