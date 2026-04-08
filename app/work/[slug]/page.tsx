import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { caseStudies, getCaseStudyBySlug } from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-36 pb-24 px-6 md:px-12 border-b border-white/10">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-white/60 hover:text-white transition-colors"
          >
            ← Back to work
          </Link>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">
                {caseStudy.client} • {caseStudy.year}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-[0.95] tracking-tight">
                {caseStudy.title}
              </h1>
              <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
                {caseStudy.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3">Timeline</p>
              <p className="text-2xl font-display">{caseStudy.timeline}</p>

              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3 mt-8">Result</p>
              <p className="text-lg text-white/85 leading-relaxed">{caseStudy.result}</p>

              <Link
                href="/contact"
                className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-black font-medium hover:bg-gray-200 transition-colors"
              >
                Start a similar project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-12 border-b border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <img src={caseStudy.src} alt={caseStudy.title} className="w-full h-[48vh] md:h-[70vh] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <article className="md:col-span-1">
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-white/60 mb-3">Problem</p>
            <p className="text-white/85 leading-relaxed">{caseStudy.problem}</p>
          </article>

          <article className="md:col-span-1">
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-white/60 mb-3">What we built</p>
            <p className="text-white/85 leading-relaxed">{caseStudy.build}</p>
          </article>

          <article className="md:col-span-1">
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-white/60 mb-3">Outcome</p>
            <p className="text-white/85 leading-relaxed">{caseStudy.outcome}</p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
