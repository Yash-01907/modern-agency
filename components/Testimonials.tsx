import { MagneticButton } from "./ui/MagneticButton";

export function Testimonials() {
  return (
    <section className="py-14 md:py-16 px-6 md:px-12 bg-black text-white border-t border-white/10">
      <div className="container mx-auto max-w-5xl text-center">
        <p className="text-lg md:text-xl text-white/80">
          We&apos;re building our client base — talk to us directly.
        </p>
        <MagneticButton
          href="/contact"
          className="mt-6 inline-flex rounded-full border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.14em] hover:bg-white hover:text-black transition-colors"
        >
          Start a conversation
        </MagneticButton>
      </div>
    </section>
  );
}
