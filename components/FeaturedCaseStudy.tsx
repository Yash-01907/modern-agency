import { MagneticButton } from "./ui/MagneticButton";

export function FeaturedCaseStudy() {
  return (
    <section className="bg-[#0c0c0c] text-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_40%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <p className="section-kicker text-white/60 mb-8">Featured Case Study</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-end">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-[0.95] tracking-tight">
              4.3x Pipeline Growth for a B2B SaaS Launch
            </h2>
            <p className="text-white/75 text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">
              We repositioned the brand, redesigned the product narrative, and shipped a conversion-focused site in 7 weeks.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/25 px-4 py-2">Brand Strategy</span>
              <span className="rounded-full border border-white/25 px-4 py-2">UX + UI Design</span>
              <span className="rounded-full border border-white/25 px-4 py-2">Webflow Development</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/15 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
            <h3 className="text-2xl font-display mb-6">Outcomes in 90 Days</h3>
            <ul className="space-y-5 text-white/90">
              <li className="flex justify-between gap-6 border-b border-white/10 pb-3">
                <span>Qualified leads</span>
                <strong className="font-display text-2xl">+238%</strong>
              </li>
              <li className="flex justify-between gap-6 border-b border-white/10 pb-3">
                <span>Demo bookings</span>
                <strong className="font-display text-2xl">+171%</strong>
              </li>
              <li className="flex justify-between gap-6 pb-1">
                <span>Cost per acquisition</span>
                <strong className="font-display text-2xl">-34%</strong>
              </li>
            </ul>

            <MagneticButton
              href="/work/atlas-saas-launch"
              className="mt-8 w-full inline-flex justify-center px-6 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
            >
              See Full Case Study
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
