"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MagneticButton } from "./ui/MagneticButton";



export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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

      const timeline = gsap.timeline();

      timeline
        .from(".animate-up", {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          ".feature-strip",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
    >
      <div className="hero-bg absolute inset-0 bg-black/95 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-abstract-blue-liquid-ink-4444/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black" />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-white max-w-6xl">
        <div ref={headerRef} className="mb-16 md:mb-24 max-w-4xl">
          <div className="animate-up flex items-center gap-4 mb-6">
            <h2 className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">
              Welcome to
            </h2>
            <span className="w-12 h-px bg-white/20"></span>
          </div>
          
          <h1 className="animate-up font-display font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-[-0.04em] leading-[0.9] mb-10">
            <span className="inline-block text-[#F2F2F2]">
              THE RAYS' DEN
            </span>
          </h1>
          
          <div className="animate-up flex flex-col gap-1 md:gap-2 ml-1 md:ml-2">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-400 tracking-tight">
              We don't just talk tech.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight">
              We build it.
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="flex flex-col md:flex-row w-full max-w-5xl border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 mb-16">
          
          {/* Item 1 */}
          <div className="feature-strip flex-1 p-6 md:p-8 flex flex-col gap-3 md:gap-4">
            <span className="font-mono text-sm text-gray-500">01</span>
            <h3 className="text-lg md:text-xl font-display font-medium text-white tracking-tight">Conversion Architecture</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We map user journeys and wireframe for clarity before writing a line of code.
            </p>
          </div>

          {/* Item 2 */}
          <div className="feature-strip flex-1 p-6 md:p-8 flex flex-col gap-3 md:gap-4">
            <span className="font-mono text-sm text-gray-500">02</span>
            <h3 className="text-lg md:text-xl font-display font-medium text-white tracking-tight">Next.js Performance</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build exclusively with modern React stacks to guarantee sub-second load times.
            </p>
          </div>

          {/* Item 3 */}
          <div className="feature-strip flex-1 p-6 md:p-8 flex flex-col gap-3 md:gap-4">
            <span className="font-mono text-sm text-gray-500">03</span>
            <h3 className="text-lg md:text-xl font-display font-medium text-white tracking-tight">Direct Founder Access</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              You work 1:1 with the engineers building your product. No account managers, zero telephone game.
            </p>
          </div>
          
        </div>

        <div ref={ctaRef} className="flex flex-col items-center sm:items-start gap-5">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <MagneticButton
              href="/contact"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-all duration-300 text-center inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </MagneticButton>
            <MagneticButton
              href="/#work"
              className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm text-center inline-flex items-center justify-center"
            >
              Explore Our Work
            </MagneticButton>
          </div>
          {/* <div className="flex flex-wrap items-center gap-2 md:gap-3 pt-2 text-gray-400 text-xs md:text-sm font-mono tracking-wide">
            <span>3 live projects shipped</span>
            <span className="text-white/20">•</span>
            <span>Avg 1.2s load time</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="w-full sm:w-auto">100% founder-led</span>
          </div> */}
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 animate-bounce pointer-events-none hidden md:block">
        <span className="text-sm uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}
