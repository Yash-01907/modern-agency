"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MagneticButton } from "./ui/MagneticButton";

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Parallax footer text
    gsap.from(".footer-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom bottom",
      },
    });

  }, { scope: containerRef });

  return (
    <footer ref={containerRef} id="contact" className="bg-black text-white pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-xl font-mono uppercase tracking-widest text-gray-500 mb-8">Get In Touch</h2>
            <h3 className="footer-title text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.9] mb-12">
              Let's build<br/>something<br/>legendary.
            </h3>
            <MagneticButton className="px-10 py-5 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-200 transition-colors">
              Start a Project
            </MagneticButton>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end text-left md:text-right space-y-12 md:space-y-0">
            <div className="space-y-2">
              <h4 className="text-gray-500 font-mono text-sm uppercase mb-4">Socials</h4>
              <ul className="space-y-2 text-xl font-light">
                <li><a href="#" className="hover:text-gray-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors">Twitter (X)</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors">Dribbble</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-gray-500 font-mono text-sm uppercase mb-4">Location</h4>
              <p className="text-xl font-light">
                123 Creative Blvd,<br/>
                Suite 400,<br/>
                San Francisco, CA 94103
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-gray-500 font-mono text-sm uppercase mb-4">Email</h4>
              <a href="mailto:hello@aesthete.agency" className="text-xl font-light hover:text-gray-400 transition-colors block">
                hello@aesthete.agency
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-mono">
          <p>&copy; {new Date().getFullYear()} Aesthete Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none -z-10 opacity-30" />
    </footer>
  );
}
