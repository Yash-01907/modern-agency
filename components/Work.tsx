"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { caseStudies } from "@/lib/caseStudies";
import { ParallaxImage } from "./ui/ParallaxImage";

export function Work() {
  const containerRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const pinArea = pinRef.current;

      if (!track || !pinArea || typeof window === "undefined") return;

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      const scrollTrigger = ScrollTrigger.create({
        trigger: pinArea,
        start: "center center",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: pinArea,
        animation: tween,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      return () => {
        scrollTrigger.kill();
        tween.kill();
      };
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="work"
      className="racesWrapper bg-black text-white py-24 min-h-screen overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tight">
          Concept
          <br />
          Projects
        </h2>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
          These are self-initiated concept builds created to demonstrate our process,
          design quality, and implementation standards across different industries.
        </p>
      </div>

      <div ref={pinRef} className="relative">
        <div ref={trackRef} className="races flex gap-8 px-6 md:px-24 w-max h-[72vh]">
          {caseStudies.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="w-[85vw] md:w-[62vw] h-full flex flex-col justify-between p-7 md:p-9 bg-gray-900 rounded-3xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 z-0 opacity-65 group-hover:opacity-100 transition-opacity duration-700">
                <ParallaxImage
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  speed={0.45}
                />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xl font-mono text-white/60">0{project.id}</span>
                  <span className="rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/75">
                    {project.timeline}
                  </span>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase mix-blend-difference group-hover:translate-x-3 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/45 border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm md:text-base text-white/90">
                    <p className="max-w-xl">
                      <span className="text-white/60">Project note:</span> {project.result}
                    </p>
                    <span className="font-mono uppercase tracking-[0.16em] text-white/80 group-hover:text-white transition-colors">
                      View project breakdown →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
