const logos = ["NOVA", "ATLAS", "PULSE", "ORBIT", "LUMEN", "KINETIC"];

export function TrustStrip() {
  return (
    <section className="bg-black text-white border-y border-white/10">
      <div className="container mx-auto px-6 md:px-12 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="section-kicker text-white/60">Trusted By Ambitious Teams</p>
            <p className="text-sm md:text-base text-white/80 mt-2">
              8 launches delivered since 2024 with a lean, strategy-first team.
            </p>
          </div>

          <ul className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-5 text-center">
            {logos.map((logo) => (
              <li
                key={logo}
                className="border border-white/15 rounded-full px-3 py-2 text-xs md:text-sm tracking-[0.22em] text-white/70"
              >
                {logo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
