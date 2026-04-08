import { MagneticButton } from "./ui/MagneticButton";

const reasons = [
  {
    title: "Founder-led from start to finish",
    copy: "No account-manager relay. You collaborate directly with the people designing and building your project.",
  },
  {
    title: "Fast response and tighter timelines",
    copy: "As a lean team, we move quickly, keep communication simple, and reduce waiting between feedback rounds.",
  },
  {
    title: "Portfolio-building intensity",
    copy: "We treat every project as reputation-defining work, so execution quality and care stay consistently high.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-28 px-6 md:px-12 bg-[#0d0d0d] text-white border-y border-white/10">
      <div className="container mx-auto max-w-7xl">
        <p className="section-kicker text-white/60 mb-6">Why teams choose us</p>
        <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight leading-[0.96] max-w-4xl">
          New agency energy,
          <br />
          senior-level execution.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-7"
            >
              <h3 className="text-2xl font-display mb-3">{reason.title}</h3>
              <p className="text-white/75 leading-relaxed">{reason.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <MagneticButton
            href="/contact"
            className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.14em] text-white hover:bg-white hover:text-black transition-colors"
          >
            Talk to us directly
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
