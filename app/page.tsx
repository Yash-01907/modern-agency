import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { FeaturedCaseStudy } from "@/components/FeaturedCaseStudy";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Header />
      <Hero />
      <Work />
      <About />
      <Services />
      <FeaturedCaseStudy />
      <Pricing />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
