"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextReveal } from "./ui/TextReveal";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal text paragraph line by line
    gsap.from(".about-text", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom bottom",
      }
    });

    // Animate stats
    gsap.from(".stat-number", {
      textContent: 0,
      duration: 2,
      ease: "power2.out",
      snap: { textContent: 1 },
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".stats-grid",
        start: "top 80%",
      },
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-32 px-6 md:px-12 bg-white text-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gray-100 rounded-full blur-[100px] opacity-50 z-0 pointer-events-none" />
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-gray-500 mb-12">Who We Are</h2>
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="flex-1">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] mb-12">
              <TextReveal text="We create digital" /> <br/>
              <TextReveal text="experiences that" delay={0.1} /> <br/>
              <TextReveal text="defy expectations." delay={0.2} />
            </h3>
            
            <div className="text-lg md:text-xl text-gray-600 space-y-8 max-w-2xl about-text leading-relaxed">
              <p>
                Founded in 2024, Aesthete is a design-driven studio obsessed with quality. 
                We believe that great design is not just about how it looks, but how it works and feels.
              </p>
              <p>
                Our team of designers, developers, and strategists work together to build brands 
                that stand out in a noisy digital landscape. We don't just follow trends; we set them.
              </p>
            </div>
          </div>

          <div className="flex-none w-full md:w-1/3 stats-grid grid grid-cols-1 gap-12 self-end">
            <div className="border-t border-gray-200 pt-6">
              <span className="block text-6xl md:text-8xl font-display font-bold mb-2">
                <span className="stat-number">50</span>+
              </span>
              <span className="text-sm font-mono uppercase tracking-wider text-gray-500">Projects Delivered</span>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <span className="block text-6xl md:text-8xl font-display font-bold mb-2">
                <span className="stat-number">12</span>
              </span>
              <span className="text-sm font-mono uppercase tracking-wider text-gray-500">Design Awards</span>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <span className="block text-6xl md:text-8xl font-display font-bold mb-2">
                <span className="stat-number">100</span>%
              </span>
              <span className="text-sm font-mono uppercase tracking-wider text-gray-500">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
