export type CaseStudy = {
  id: number;
  slug: string;
  title: string;
  client: string;
  year: string;
  src: string;
  color: string;
  description: string;
  result: string;
  tags: string[];
  timeline: string;
  problem: string;
  build: string;
  outcome: string;
  /** Optional live URL for deployed projects */
  liveUrl?: string;
  /** e.g. "Studio Concept" or "Client Project" — shown as a badge */
  projectType?: string;
  /** Explanatory note shown on the case study detail page */
  projectTypeNote?: string;
};

/* ── Shared defaults for concept work ────────────────────────── */
const conceptDefaults = {
  projectType: "Studio Concept",
  projectTypeNote:
    "This project was designed and developed in-house to demonstrate our process and code quality. It reflects the same standards we apply to client work.",
};

const deployedDefaults = {
  projectType: "Deployed Project",
  projectTypeNote:
    "This project is live and deployed. Visit the link above to explore the full experience we built.",
};

export const caseStudies: CaseStudy[] = [
  /* ────────────────── DEPLOYED PROJECTS ────────────────── */
  {
    id: 1,
    slug: "tej-clinic",
    title: "Tej Clinic — Ayurvedic Healthcare",
    client: "Tej Clinic & Research Centre",
    year: "2026",
    src: "/portfolio/tej-clinic.svg",
    color: "#2d6a4f",
    description:
      "A privacy-first healthcare website for an Ayurvedic sexologist in Karnal, featuring confidential booking flow, SEO-rich condition pages, and YouTube integration.",
    result:
      "Fully deployed Next.js site with schema markup, structured SEO, and a private online consultation funnel generating ₹499 bookings.",
    tags: ["Healthcare", "SEO", "Next.js", "Branding"],
    timeline: "Built in 3 weeks",
    problem:
      "The clinic had no online presence for sensitive health services. Patients needed confidential access and the doctor needed a professional platform for YouTube content.",
    build:
      "We built a mobile-first site with trust-building sections, condition-specific pages, YouTube embed integration, and a private online booking funnel.",
    outcome:
      "The site now ranks locally for Ayurvedic health keywords, drives consultation bookings, and showcases Dr. Saldi's 29+ years of practice.",
    liveUrl: "https://tej-clinic.vercel.app/",
    ...deployedDefaults,
  },
  {
    id: 2,
    slug: "fusion-edge-gym",
    title: "Fusion Edge — Premium Fitness",
    client: "Fusion Edge Fitness Studio",
    year: "2026",
    src: "/portfolio/fusion-edge.svg",
    color: "#c8ff00",
    description:
      "A bold, performance-driven gym website with cinematic scroll animations, membership pricing, trainer spotlights, and a high-energy brand identity.",
    result:
      "Deployed Next.js site with GSAP scroll-triggered animations, parallax photography, and a conversion-focused CTA flow.",
    tags: ["Fitness", "Motion Design", "Next.js", "GSAP"],
    timeline: "Built in 2 weeks",
    problem:
      "The gym needed a digital presence that matched the energy and premium feel of their physical facility — not a generic template.",
    build:
      "We designed aggressive typography, scroll-driven reveals, desaturated hero photography, and outlined text effects. Built with Next.js and custom GSAP animations.",
    outcome:
      "A website that feels like walking into the gym — intense, intentional, and membership-driving.",
    liveUrl: "https://fusion-edge-gym.vercel.app/",
    ...deployedDefaults,
  },
  {
    id: 3,
    slug: "table-no-21",
    title: "Table No 21 — Punjabi Gastronomy",
    client: "Table No 21 Restaurant",
    year: "2026",
    src: "/portfolio/table-no-21.svg",
    color: "#c8a97e",
    description:
      "A warm, editorial restaurant website for a Punjabi gastronomy café in Surat, featuring a curated menu showcase, Google review integration, and location-driven design.",
    result:
      "Deployed Next.js site with grain-textured aesthetics, editorial typography, and a Google Maps-integrated visit section.",
    tags: ["Restaurant", "Branding", "CSS Modules", "Editorial"],
    timeline: "Built in 10 days",
    problem:
      "The restaurant had strong walk-in traffic but no website. They needed a digital space that captured the warmth of their food and ambiance.",
    build:
      "We crafted a grain-textured editorial design with a curated menu showcase, Newsreader serif typography, testimonial carousel, and Google Maps integration.",
    outcome:
      "A website that smells like butter chicken — warm, inviting, and designed to make people visit in person.",
    liveUrl: "https://table-no-21-2.vercel.app/",
    ...deployedDefaults,
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
