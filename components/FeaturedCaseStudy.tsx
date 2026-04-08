export function FeaturedCaseStudy() {
  return (
    <section className="bg-[#0c0c0c] text-white py-20 md:py-24 px-6 md:px-12 border-y border-white/10">
      <div className="container mx-auto max-w-7xl">
        <p className="section-kicker text-white/60 mb-6">What we focus on</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight leading-[0.98] max-w-4xl">
          Strategy-first execution, built for early-stage teams.
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <h3 className="text-xl font-display mb-3">Positioning first</h3>
            <p className="text-white/75 leading-relaxed">
              We define message clarity and page hierarchy before visual polish.
            </p>
          </article>

          <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <h3 className="text-xl font-display mb-3">Fast collaboration</h3>
            <p className="text-white/75 leading-relaxed">
              You work directly with the team shipping the project, without layers.
            </p>
          </article>

          <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <h3 className="text-xl font-display mb-3">Launch-ready systems</h3>
            <p className="text-white/75 leading-relaxed">
              Every build is structured for easy updates, content edits, and future growth.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
