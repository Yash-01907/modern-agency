"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  className,
  href,
  target,
  rel,
  onClick,
  type = "button",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });

      const mouseMove = (event: MouseEvent) => {
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = event.clientX - left - width / 2;
        const y = event.clientY - top - height / 2;
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
    },
    { scope: ref },
  );

  const resolvedRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={className}
          target={target}
          rel={resolvedRel}
          aria-label={ariaLabel}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={className}
        target={target}
        rel={resolvedRel}
        aria-label={ariaLabel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={className}
      aria-label={ariaLabel}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement> | undefined}
    >
      {children}
    </button>
  );
}
