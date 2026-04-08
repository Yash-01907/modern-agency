import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { FeaturedCaseStudy } from "@/components/FeaturedCaseStudy";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Header />
      <Hero />
      <TrustStrip />
      <FeaturedCaseStudy />
      <Work />
      <About />
      <Services />
      <Pricing />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  );
}
