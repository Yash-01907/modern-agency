"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { TextReveal } from "./ui/TextReveal";

export function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-text", {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.9,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom bottom",
        },
      });

      gsap.from(".fact-card", {
        opacity: 0,
        y: 28,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".facts-grid",
          start: "top 82%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-32 px-6 md:px-12 bg-white text-black overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gray-100 rounded-full blur-[100px] opacity-50 z-0 pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-6xl">
        <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-gray-500 mb-12">
          Who We Are
        </h2>

        <div className="flex flex-col md:flex-row gap-16 md:gap-28">
          <div className="flex-1">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] mb-12">
              <TextReveal text="A new agency" /> <br />
              <TextReveal text="built for focused" delay={0.1} /> <br />
              <TextReveal text="execution." delay={0.2} />
            </h3>

            <div className="text-lg md:text-xl text-gray-600 space-y-8 max-w-2xl about-text leading-relaxed">
              <p>
                We started Raysden in 2024 to build thoughtful websites without
                slow handoffs, bloated retainers, or generic templates.
              </p>
              <p>
                You work directly with the people designing and building your
                site. That means faster decisions, tighter feedback loops, and a
                cleaner final product.
              </p>
            </div>
          </div>

          <div className="flex-none w-full md:w-[38%] facts-grid grid grid-cols-1 gap-5 self-end">
            <article className="fact-card border border-gray-200 rounded-2xl p-6 bg-white">
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-3">
                Base
              </p>
              <p className="text-2xl md:text-3xl font-display leading-tight">
                Founded 2024 · Surat, Gujarat
              </p>
            </article>

            <article className="fact-card border border-gray-200 rounded-2xl p-6 bg-white">
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-3">
                Working style
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founder-led communication with clear weekly updates and direct
                implementation ownership.
              </p>
            </article>

            <article className="fact-card border border-gray-200 rounded-2xl p-6 bg-white">
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-3">
                Fit
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Best for early-stage teams and local businesses that need quality
                work shipped quickly.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
