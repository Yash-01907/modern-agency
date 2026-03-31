"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MagneticButton } from "./ui/MagneticButton";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax background
    gsap.to(".hero-bg", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Staggered reveal
    const tl = gsap.timeline();
    
    tl.from(titleRef.current?.querySelectorAll(".word") || [], {
      y: 100,
      opacity: 0,
      rotate: 5,
      stagger: 0.05,
      duration: 1.2,
      ease: "power4.out",
    })
    .from(textRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")
    .from(ctaRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-bg absolute inset-0 bg-black/90 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        >
          <source src="https://cdn.coverr.co/videos/coverr-abstract-blue-liquid-ink-4444/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80" />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center text-white">
        <h1 ref={titleRef} className="font-display font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.98] md:leading-[0.9] mb-8">
          <span className="inline-block overflow-hidden pb-4"><span className="word inline-block">Digital</span></span><br/>
          <span className="inline-block overflow-hidden pb-4"><span className="word inline-block">Experiences</span></span><br/>
          <span className="inline-block overflow-hidden pb-4"><span className="word inline-block text-gray-500">Reimagined</span></span>
        </h1>
        
        <p ref={textRef} className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light mb-12 leading-relaxed">
          We are a creative agency crafting immersive digital products, 
          brands, and experiences that move people.
        </p>

        <div ref={ctaRef} className="flex justify-center gap-6">
          <MagneticButton className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
            Start Project
          </MagneticButton>
          <MagneticButton className="px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
            View Work
          </MagneticButton>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <span className="text-sm uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}
