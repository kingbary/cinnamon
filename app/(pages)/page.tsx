import FAQ from "@/components/home/faq";
import FeaturedSection from "@/components/home/featured-section";
import Header from "@/components/home/header";
import ServicesSection from "@/components/home/services-section";

export default function Home() {
  return (
    <>
      <Header />
      <ServicesSection />
      <FeaturedSection />
      <FAQ />
    </>
  );
}
