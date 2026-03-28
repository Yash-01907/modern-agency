"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    
    // Sync GSAP ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);
    
    // Add Lenis's raf to GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    // Disable lag smoothing for consistent scroll
    gsap.ticker.lagSmoothing(0);
    
    return () => {
      gsap.ticker.remove(lenis.raf);
    };
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
