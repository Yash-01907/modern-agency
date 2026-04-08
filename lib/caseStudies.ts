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
    slug: "atlas-saas-launch",
    title: "Atlas SaaS Launch",
    client: "Atlas CRM",
    year: "2025",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2515&auto=format&fit=crop",
    color: "#4f46e5",
    description:
      "Repositioned a complex CRM product into a clear, conversion-focused launch site for mid-market buyers.",
    result: "Demo requests increased 2.4x within the first 60 days after launch.",
    tags: ["Strategy", "UX/UI", "Next.js"],
    timeline: "7 weeks",
    problem:
      "Atlas had a strong product, but website messaging was feature-heavy and generic. Visitors dropped before understanding the value proposition.",
    build:
      "We rebuilt the narrative architecture, designed a modular page system, and implemented a fast Next.js marketing site with clear demo funnels and proof sections.",
    outcome:
      "The new funnel reduced friction in the decision journey and created a repeatable structure for future campaign pages.",
  },
  {
    id: 2,
    slug: "lumen-clinic-growth",
    title: "Lumen Clinic Growth Site",
    client: "Lumen Skin Clinic",
    year: "2025",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    color: "#0ea5e9",
    description:
      "Designed and launched a local healthcare brand site focused on trust, clarity, and appointment conversion.",
    result: "Online appointment bookings grew by 68% in the first quarter.",
    tags: ["Branding", "Web Design", "SEO Foundations"],
    timeline: "6 weeks",
    problem:
      "The clinic relied on referrals and a dated website that did not communicate expertise or convert mobile traffic.",
    build:
      "We created a new identity direction, patient-first service pages, and a streamlined booking flow designed for local search intent.",
    outcome:
      "The brand now has a strong digital presence and a website that supports both trust and day-to-day lead generation.",
  },
  {
    id: 3,
    slug: "vortex-gaming-campaign",
    title: "Vortex Gaming Campaign",
    client: "Vortex Gaming",
    year: "2024",
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
    color: "#f97316",
    description:
      "Built an immersive campaign microsite combining performance storytelling and motion-driven product reveals.",
    result: "Bounce rate dropped 31% while average session duration nearly doubled.",
    tags: ["Creative Direction", "Motion", "Front-end Development"],
    timeline: "5 weeks",
    problem:
      "Existing campaign pages loaded slowly and looked similar to competitors, leading to weak retention after ad clicks.",
    build:
      "We crafted a cinematic page flow with scroll choreography, optimized media delivery, and clear CTA placements tied to launch milestones.",
    outcome:
      "The campaign delivered stronger engagement and gave the internal marketing team reusable launch templates.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
