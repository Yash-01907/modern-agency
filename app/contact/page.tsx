import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-36 pb-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
          <div>
            <p className="section-kicker text-white/60 mb-6">Start a Project</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-[0.95] tracking-tight">
              Tell us what you&apos;re building.
            </h1>
            <p className="mt-8 text-lg text-white/80 max-w-xl leading-relaxed">
              Share your scope, budget, and timeline. We&apos;ll send clear next steps and a realistic plan for execution.
            </p>

            <div className="mt-10 space-y-3 text-white/70 text-sm md:text-base">
              <p>• Typical response time: within 24 hours</p>
              <p>• Project investments start from ₹75k</p>
              <p>• Based in Surat, Gujarat — serving global clients remotely</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
            <ContactForm className="space-y-4" submitLabel="Submit inquiry" />
          </div>
        </div>
      </section>
    </main>
  );
}
