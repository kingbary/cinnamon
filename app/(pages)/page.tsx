import AmplifyProfile from "@/components/home/amplify-profile";
import FAQ from "@/components/home/faq";
import FeaturedSection from "@/components/home/featured-section";
import Header from "@/components/home/header";
import ServicesSection from "@/components/home/services-section";
import Testimonial from "@/components/home/testimonial";

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
