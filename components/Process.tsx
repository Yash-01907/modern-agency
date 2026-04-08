const steps = [
  {
    id: "01",
    title: "Discovery",
    timeline: "Week 1",
    copy: "We audit your brand, funnel, and customer journey to identify high-impact opportunities.",
  },
  {
    id: "02",
    title: "Strategy",
    timeline: "Week 2",
    copy: "We map positioning, messaging architecture, and conversion priorities before visual execution.",
  },
  {
    id: "03",
    title: "Design & Build",
    timeline: "Weeks 3-6",
    copy: "Your team gets high-fidelity design, polished interactions, and production-grade implementation.",
  },
  {
    id: "04",
    title: "Launch & Optimize",
    timeline: "Week 7+",
    copy: "Post-launch, we track behavior, run experiments, and improve conversion performance continuously.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 bg-white text-black">
      <div className="container mx-auto max-w-7xl">
        <p className="section-kicker text-gray-500 mb-8">How We Work</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-[0.95] max-w-4xl">
          A Strategy-First Process Built for Momentum
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <article
              key={step.id}
              className="border border-black/10 rounded-3xl p-7 md:p-8 bg-neutral-50"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-sm text-gray-500 tracking-wider">
                  {step.id}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  {step.timeline}
                </span>
              </div>
              <h3 className="font-display text-3xl mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
