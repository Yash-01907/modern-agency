"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 text-white ${
        isOpen ? "mix-blend-normal" : "mix-blend-difference"
      }`}
    >
      <div className="container mx-auto px-6 py-8 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-display font-bold uppercase tracking-tighter hover:text-gray-300 transition-colors"
        >
          Raysden
        </Link>

        <button
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="z-50 relative group"
        >
          <div className="w-8 h-8 flex flex-col justify-center gap-1.5 items-end">
            <span
              className={`h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2 w-8" : "w-8 group-hover:w-6"
              }`}
            />
            <span
              className={`h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2 w-8" : "w-5 group-hover:w-8"
              }`}
            />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm text-white flex flex-col justify-center items-center h-screen w-screen z-40"
            >
              <nav className="flex flex-col gap-8 text-center">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="text-5xl md:text-8xl font-display font-bold drop-shadow-xl hover:text-gray-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
