import { MagneticButton } from "./ui/MagneticButton";

const packages = [
  {
    name: "Starter",
    price: "From ₹75k",
    idealFor: "Founders who need a high-converting launch site fast.",
    timeline: "3-4 weeks",
    includes: [
      "Messaging + sitemap",
      "Up to 5 responsive pages",
      "Basic animations + CMS setup",
      "Launch support",
    ],
  },
  {
    name: "Growth",
    price: "From ₹1.8L",
    idealFor: "Teams scaling acquisition and improving funnel performance.",
    timeline: "5-7 weeks",
    includes: [
      "Conversion-focused UX strategy",
      "8-12 custom pages",
      "Advanced motion interactions",
      "Analytics + optimization handoff",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "From ₹3.5L",
    idealFor: "Brands that need strategy, identity, and full digital execution.",
    timeline: "8-12 weeks",
    includes: [
      "Brand strategy + visual system",
      "Website + campaign landing pages",
      "Custom development / 3D integrations",
      "Post-launch growth experiments",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 bg-black text-white">
      <div className="container mx-auto max-w-7xl">
        <p className="section-kicker text-white/60 mb-8">Pricing</p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-[0.95] max-w-4xl">
            Clear packages with room to tailor your scope.
          </h2>
          <p className="max-w-xl text-white/70 leading-relaxed">
            Every project starts with a discovery call. These ranges help you qualify quickly before we create a detailed proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pack) => (
            <article
              key={pack.name}
              className={`rounded-3xl border p-7 md:p-8 ${
                pack.featured
                  ? "bg-white text-black border-white"
                  : "bg-white/5 border-white/15"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-[0.2em] ${
                  pack.featured ? "text-black/60" : "text-white/60"
                }`}
              >
                {pack.timeline}
              </p>
              <h3 className="mt-3 text-3xl font-display">{pack.name}</h3>
              <p className="mt-2 text-2xl font-display">{pack.price}</p>
              <p className={`mt-4 leading-relaxed ${pack.featured ? "text-black/80" : "text-white/80"}`}>
                {pack.idealFor}
              </p>

              <ul className="mt-6 space-y-3">
                {pack.includes.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className={`mt-2 h-1.5 w-1.5 rounded-full ${pack.featured ? "bg-black" : "bg-white"}`} />
                    <span className={pack.featured ? "text-black/85" : "text-white/85"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="#contact"
                className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm uppercase tracking-[0.14em] transition-colors ${
                  pack.featured
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "border border-white/30 text-white hover:bg-white hover:text-black"
                }`}
              >
                Discuss this package
              </MagneticButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
