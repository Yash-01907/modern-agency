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
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "b2b-saas-concept-site",
    title: "B2B SaaS Launch Concept",
    client: "Concept Project",
    year: "2026",
    src: "/portfolio/b2b-saas-concept.svg",
    color: "#4f46e5",
    description:
      "A concept website built to demonstrate how we simplify complex SaaS messaging into a clear, conversion-focused launch experience.",
    result:
      "Concept project — built to showcase information hierarchy, message clarity, and CTA flow for SaaS buyers.",
    tags: ["Concept", "Strategy", "UX/UI", "Next.js"],
    timeline: "Built in 2 weeks",
    problem:
      "Early-stage SaaS teams often have strong products but unclear website narratives, causing visitors to drop before understanding core value.",
    build:
      "We mapped a tighter messaging framework, designed a modular page system, and built responsive sections focused on fast comprehension.",
    outcome:
      "This concept demonstrates our approach for structuring and shipping a high-clarity SaaS launch site without unnecessary complexity.",
  },
  {
    id: 2,
    slug: "clinic-website-concept",
    title: "Clinic Booking Website Concept",
    client: "Concept Project",
    year: "2026",
    src: "/portfolio/clinic-booking-concept.svg",
    color: "#0ea5e9",
    description:
      "A healthcare-focused concept site designed to communicate trust quickly and guide users into a frictionless booking flow.",
    result:
      "Concept project — created to demonstrate trust-building layout patterns for local service businesses.",
    tags: ["Concept", "Branding", "Web Design", "Local SEO"],
    timeline: "Built in 10 days",
    problem:
      "Most local clinic websites feel outdated on mobile and bury critical decision information that patients need before booking.",
    build:
      "We designed patient-first service pages, testimonial-ready trust sections, and a mobile-first booking path with clear intent cues.",
    outcome:
      "The concept acts as a blueprint for how we would build a practical, high-trust website for a local healthcare business.",
  },
  {
    id: 3,
    slug: "gaming-launch-concept",
    title: "Gaming Campaign Microsite Concept",
    client: "Concept Project",
    year: "2026",
    src: "/portfolio/gaming-campaign-concept.svg",
    color: "#f97316",
    description:
      "A motion-led concept microsite showing how campaign storytelling can feel immersive while staying lightweight and conversion-aware.",
    result:
      "Concept project — produced to showcase pacing, interaction design, and visual identity for a launch campaign.",
    tags: ["Concept", "Creative Direction", "Motion", "Front-end"],
    timeline: "Built in 12 days",
    problem:
      "Launch campaigns often over-index on flashy visuals while missing narrative pacing and clear action paths.",
    build:
      "We structured the experience around scroll-driven reveals, clear chapter transitions, and conversion points placed at intent peaks.",
    outcome:
      "This concept demonstrates how we balance cinematic interaction with performance and practical campaign outcomes.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
