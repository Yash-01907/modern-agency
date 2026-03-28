"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ParallaxImage } from "./ui/ParallaxImage";

const projects = [
  { 
    id: 1, 
    title: "Vortex Gaming", 
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop", 
    color: "#ff3333" 
  },
  { 
    id: 2, 
    title: "EcoFuture", 
    src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2574&auto=format&fit=crop", 
    color: "#33ff99" 
  },
  { 
    id: 3, 
    title: "Neon Studio", 
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop", 
    color: "#3366ff" 
  },
];

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Horizontal scroll
    const races = document.querySelector(".races");
    
    if (races && typeof window !== 'undefined') {
      const getScrollAmount = () => {
        const racesWidth = races.scrollWidth;
        return -(racesWidth - window.innerWidth);
      };

      const tween = gsap.to(races, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: ".racesWrapper",
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="work" className="bg-black text-white py-24 min-h-screen racesWrapper overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tight">Selected<br/>Projects</h2>
      </div>

      <div className="races flex gap-8 px-6 md:px-24 w-max h-[70vh]">
        {projects.map((project, i) => (
          <div 
            key={project.id} 
            className="w-[80vw] md:w-[60vw] h-full flex flex-col justify-between p-8 bg-gray-900 rounded-3xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
              <ParallaxImage 
                src={project.src} 
                alt={project.title} 
                className="w-full h-full object-cover" 
                speed={0.5} 
              />
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <span className="text-xl font-mono text-white/50">0{project.id}</span>
              <h3 className="text-5xl md:text-7xl font-display font-bold uppercase mix-blend-difference group-hover:translate-x-4 transition-transform duration-500">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
