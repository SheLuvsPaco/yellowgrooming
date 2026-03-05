import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="font-sans text-black overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
