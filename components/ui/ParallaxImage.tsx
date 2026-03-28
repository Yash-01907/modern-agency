"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function ParallaxImage({ src, alt, className, speed = 1 }: { src: string, alt: string, className?: string, speed?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imgRef.current) return;

    gsap.fromTo(imgRef.current, 
      { scale: 1.2, yPercent: -10 * speed },
      {
        yPercent: 10 * speed,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <img 
        ref={imgRef}
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover absolute inset-0"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
