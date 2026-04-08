const testimonials = [
  {
    quote:
      "They turned our vague idea into a clear launch strategy and a site that finally explains what we do in seconds.",
    name: "Nidhi Patel",
    role: "Founder",
    company: "ClinicFlow",
  },
  {
    quote:
      "Fast communication, thoughtful design decisions, and clean implementation. The project felt structured from day one.",
    name: "Karan Shah",
    role: "Marketing Lead",
    company: "Orbit Labs",
  },
  {
    quote:
      "Our new website gave us the confidence to pitch bigger clients. We now have a digital presence that matches our service quality.",
    name: "Mansi Desai",
    role: "Co-founder",
    company: "Studio Numa",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-28 px-6 md:px-12 bg-[#0d0d0d] text-white border-t border-white/10">
      <div className="container mx-auto max-w-7xl">
        <p className="section-kicker text-white/60 mb-8">Client Feedback</p>
        <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight leading-[0.95] max-w-4xl">
          Trusted by teams building their next growth phase.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-white/15 bg-white/5 p-6 md:p-7"
            >
              <p className="text-lg leading-relaxed text-white/85">“{testimonial.quote}”</p>
              <div className="mt-8 pt-5 border-t border-white/10">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-white/60">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
