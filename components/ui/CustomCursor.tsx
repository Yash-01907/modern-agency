"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window === "undefined") return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover effect for links and buttons
    const links = document.querySelectorAll("a, button, .hover-trigger");
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 2.5, opacity: 0.5, mixBlendMode: "difference" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, opacity: 1, mixBlendMode: "normal" });
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-black pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
    />
  );
}
