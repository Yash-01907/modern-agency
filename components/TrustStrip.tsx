const signals = [
  "Reply within 1 business day",
  "Founder-led communication",
  "Strategy before visuals",
  "Next.js + Tailwind build stack",
  "Transparent scope and timelines",
  "Built for early-stage teams",
];

export function TrustStrip() {
  return (
    <section className="bg-black text-white border-y border-white/10">
      <div className="container mx-auto px-6 md:px-12 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="section-kicker text-white/60">
              Strategy-first execution, built for early-stage teams.
            </p>
            <p className="text-sm md:text-base text-white/80 mt-2">
              Honest scope, fast communication, and modern tooling from day one.
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 text-center">
            {signals.map((signal) => (
              <li
                key={signal}
                className="border border-white/15 rounded-full px-3 py-2 text-xs md:text-sm tracking-[0.08em] text-white/70"
              >
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
