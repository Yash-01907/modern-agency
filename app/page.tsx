import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Header />
      <Hero />
      <Work />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
