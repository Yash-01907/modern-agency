"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MagneticButton } from "./ui/MagneticButton";

const services = [
  { id: 1, title: "Web Design", desc: "Crafting visually stunning websites that captivate and convert." },
  { id: 2, title: "Development", desc: "Building robust, scalable, and high-performance applications." },
  { id: 3, title: "3D Experiences", desc: "Creating immersive 3D environments for the web." },
  { id: 4, title: "Branding", desc: "Designing memorable brand identities that resonate." },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Accordion effect
    services.forEach((service, i) => {
      const el = containerRef.current?.querySelector(`.service-${i}`);
      const content = el?.querySelector(".content");

      if (el && content) {
        gsap.set(content, { height: 0, opacity: 0 });

        el.addEventListener("mouseenter", () => {
          gsap.to(content, { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" });
          gsap.to(el, { backgroundColor: "#f3f4f6", duration: 0.3 });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(content, { height: 0, opacity: 0, duration: 0.5, ease: "power2.out" });
          gsap.to(el, { backgroundColor: "transparent", duration: 0.3 });
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="services" className="py-24 px-6 md:px-12 bg-white text-black min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-xl font-mono uppercase tracking-widest text-gray-500 mb-16">What We Do</h2>
        
        <div className="border-t border-gray-200">
          {services.map((service, i) => (
            <div 
              key={service.id} 
              className={`service-${i} border-b border-gray-200 py-12 px-6 md:px-12 transition-colors duration-300 relative group cursor-pointer overflow-hidden`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-mono text-gray-400 group-hover:text-black transition-colors">0{service.id}</span>
                <h3 className="text-4xl md:text-6xl font-display font-medium group-hover:italic transition-all duration-300">
                  {service.title}
                </h3>
                <span className="hidden md:block w-8 h-8 rounded-full border border-gray-300 group-hover:bg-black group-hover:border-black transition-colors duration-300" />
              </div>
              
              <div className="content overflow-hidden h-0 opacity-0">
                <p className="text-xl text-gray-600 max-w-2xl pt-4 font-light">
                  {service.desc}
                </p>
                <div className="mt-8">
                  <MagneticButton className="px-6 py-3 border border-black rounded-full text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-colors">
                    Learn More
                  </MagneticButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
