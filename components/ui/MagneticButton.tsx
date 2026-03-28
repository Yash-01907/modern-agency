"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function MagneticButton({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    
    const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
    
    const mouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      xTo(x * 0.35);
      yTo(y * 0.35);
    };
    
    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };
    
    el.addEventListener("mousemove", mouseMove);
    el.addEventListener("mouseleave", mouseLeave);
    
    return () => {
      el.removeEventListener("mousemove", mouseMove);
      el.removeEventListener("mouseleave", mouseLeave);
    };
  }, { scope: ref });
  
  return (
    <button ref={ref} className={className}>
      {children}
    </button>
  );
}
