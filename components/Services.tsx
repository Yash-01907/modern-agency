"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MagneticButton } from "./ui/MagneticButton";

const services = [
  {
    id: 1,
    title: "Web Design",
    desc: "Crafting visually distinctive websites that communicate value clearly and convert the right audience.",
    deliverables: "UX Audit, Wireframes, Conversion UI",
    timeline: "4-6 weeks",
    startingPrice: "From ₹75k",
  },
  {
    id: 2,
    title: "Development",
    desc: "Building robust, scalable, and high-performance applications with modern, maintainable architecture.",
    deliverables: "Next.js Build, CMS Setup, QA and Launch",
    timeline: "5-8 weeks",
    startingPrice: "From ₹1.2L",
  },
  {
    id: 3,
    title: "3D Experiences",
    desc: "Creating immersive 3D environments and motion systems that make product narratives memorable.",
    deliverables: "Creative Direction, Three.js Scenes, Optimization",
    timeline: "3-5 weeks",
    startingPrice: "From ₹2L",
  },
  {
    id: 4,
    title: "Branding",
    desc: "Designing positioning, visual identity, and brand systems that give your business a confident voice.",
    deliverables: "Positioning, Identity System, Brand Guidelines",
    timeline: "3-4 weeks",
    startingPrice: "From ₹90k",
  },
];

export function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cleanups: Array<() => void> = [];
      let activeIndex = -1;
      const closeItemFns: Array<() => void> = [];

      services.forEach((_, index) => {
        const serviceItem = containerRef.current?.querySelector(`.service-${index}`);
        const content = serviceItem?.querySelector(".content");

        if (!serviceItem || !content) return;

        gsap.set(content, { height: 0, opacity: 0 });

        const open = () => {
          gsap.to(content, { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out", overwrite: "auto" });
          gsap.to(serviceItem, { backgroundColor: "#f3f4f6", duration: 0.3, overwrite: "auto" });
        };

        const close = () => {
          gsap.to(content, { height: 0, opacity: 0, duration: 0.5, ease: "power2.out", overwrite: "auto" });
          gsap.to(serviceItem, { backgroundColor: "transparent", duration: 0.3, overwrite: "auto" });
        };

        closeItemFns[index] = close;

        const onMouseEnter = () => {
          if (window.matchMedia("(hover: none)").matches) return;
          if (activeIndex === index) return;
          open();
        };

        const onMouseLeave = () => {
          if (window.matchMedia("(hover: none)").matches) return;
          if (activeIndex === index) return;
          close();
        };

        const onClick = (e: Event) => {
          e.stopPropagation();
          if (activeIndex === index) {
            close();
            activeIndex = -1;
          } else {
            if (activeIndex !== -1 && closeItemFns[activeIndex]) {
              closeItemFns[activeIndex]();
            }
            open();
            activeIndex = index;
          }
        };

        serviceItem.addEventListener("mouseenter", onMouseEnter);
        serviceItem.addEventListener("mouseleave", onMouseLeave);
        serviceItem.addEventListener("click", onClick);

        cleanups.push(() => {
          serviceItem.removeEventListener("mouseenter", onMouseEnter);
          serviceItem.removeEventListener("mouseleave", onMouseLeave);
          serviceItem.removeEventListener("click", onClick);
        });
      });

      const onDocumentClick = () => {
        if (activeIndex !== -1 && closeItemFns[activeIndex]) {
          closeItemFns[activeIndex]();
          activeIndex = -1;
        }
      };

      document.addEventListener("click", onDocumentClick);
      cleanups.push(() => document.removeEventListener("click", onDocumentClick));

      return () => {
        cleanups.forEach((cleanup) => cleanup());
      };
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-24 px-6 md:px-12 bg-white text-black min-h-screen"
    >
      <div className="container mx-auto">
        <h2 className="text-xl font-mono uppercase tracking-widest text-gray-500 mb-16">
          What We Do
        </h2>

        <div className="border-t border-gray-200">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-${index} border-b border-gray-200 py-12 px-6 md:px-12 transition-colors duration-300 relative group cursor-pointer overflow-hidden`}
            >
              <div className="flex items-center justify-start gap-4 md:justify-between md:gap-0 mb-4">
                <span className="text-sm font-mono text-gray-400 group-hover:text-black transition-colors">
                  0{service.id}
                </span>
                <h3 className="flex-1 md:flex-none text-3xl sm:text-4xl md:text-6xl text-left whitespace-nowrap md:whitespace-normal font-display font-medium group-hover:italic transition-all duration-300">
                  {service.title}
                </h3>
                <span className="hidden md:block w-8 h-8 rounded-full border border-gray-300 group-hover:bg-black group-hover:border-black transition-colors duration-300" />
              </div>

              <div className="content overflow-hidden h-0 opacity-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 pt-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    {service.deliverables}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center w-fit rounded-full border border-gray-300 px-3 py-1 text-xs uppercase tracking-[0.18em] text-gray-500">
                      {service.timeline}
                    </span>
                    <span className="inline-flex items-center w-fit rounded-full border border-black/20 px-3 py-1 text-xs uppercase tracking-[0.18em] text-black/70">
                      {service.startingPrice}
                    </span>
                  </div>
                </div>
                <p className="text-xl text-gray-600 max-w-2xl pt-4 font-light">{service.desc}</p>
                <div className="mt-8">
                  <MagneticButton
                    href="#contact"
                    className="px-6 py-3 border border-black rounded-full text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
                  >
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
