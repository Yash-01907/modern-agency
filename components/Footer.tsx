"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ContactForm } from "./ContactForm";
import { MagneticButton } from "./ui/MagneticButton";

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
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
    },
    { scope: containerRef },
  );

  return (
    <footer
      ref={containerRef}
      id="contact"
      className="bg-black text-white pt-32 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="section-kicker text-gray-500 mb-8">Ready To Start</h2>
            <h3 className="footer-title text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.9] mb-12">
              Turn your next
              <br />
              launch into a
              <br />
              growth engine.
            </h3>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
              Share your goals and timeline. We reply within 24 hours with a clear
              next-step plan.
            </p>
            <div className="flex flex-wrap gap-3 mb-8 text-sm text-white/80">
              <span className="rounded-full border border-white/20 px-4 py-2">
                Average response: 24h
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                Projects from ₹75k
              </span>
            </div>
            <MagneticButton
              href="/contact"
              className="inline-flex px-10 py-5 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-200 transition-colors"
            >
              Start a Project
            </MagneticButton>
          </div>

          <div className="bg-white/5 border border-white/15 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
            <h4 className="text-gray-300 font-mono text-sm uppercase tracking-[0.2em] mb-6">
              Project Brief
            </h4>
            <ContactForm className="space-y-4" submitLabel="Send Brief" />

            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <h5 className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">
                Socials
              </h5>
              <ul className="grid grid-cols-2 gap-y-2 text-base font-light">
                <li>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                    Twitter (X)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 text-sm text-gray-400 space-y-1">
              <p>
                Prefer email?{" "}
                <a
                  href="mailto:hello@aesthete.agency"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  hello@aesthete.agency
                </a>
              </p>
              <p>Based in Surat, Gujarat</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-mono">
          <p>&copy; {new Date().getFullYear()} Aesthete Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-gray-900 to-transparent pointer-events-none -z-10 opacity-30" />
    </footer>
  );
}
