"use client";

import { useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function TextReveal({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  
  useGSAP(() => {
    const chars = containerRef.current?.querySelectorAll(".char");
    if (!chars) return;
    
    gsap.fromTo(chars, 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.02, 
        duration: 1, 
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });
  
  return (
    <span ref={containerRef} className={`inline-block overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <span key={i} className="char inline-block" style={{ willChange: "transform" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
