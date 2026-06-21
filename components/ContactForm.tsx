"use client";

import { useMemo, useState } from "react";

interface ContactFormProps {
  className?: string;
  submitLabel?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({
  className,
  submitLabel = "Send Brief",
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const endpoint = useMemo(
    () => process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/your-form-id",
    [],
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      setStatus("submitting");

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Unable to submit");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New project inquiry from Raysden website" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="sr-only">
            Work email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="Work email"
            className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-business-name" className="sr-only">
          Business name
        </label>
        <input
          id="contact-business-name"
          name="businessName"
          type="text"
          required
          placeholder="Business name"
          className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-business-type" className="sr-only">
            Type of business
          </label>
          <select
            id="contact-business-type"
            name="businessType"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <option value="" disabled>
              Type of business
            </option>
            <option value="saas">SaaS / Tech</option>
            <option value="ecommerce">E-commerce</option>
            <option value="professional-services">Professional services</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-budget" className="sr-only">
            Budget range
          </label>
          <select
            id="contact-budget"
            name="budgetRange"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <option value="" disabled>
              Budget range
            </option>
            <option value="under-75k">Under ₹75k</option>
            <option value="75k-150k">₹75k - ₹1.5L</option>
            <option value="150k-350k">₹1.5L - ₹3.5L</option>
            <option value="350k-plus">₹3.5L+</option>
          </select>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-timeline" className="sr-only">
            Timeline
          </label>
          <select
            id="contact-timeline"
            name="timeline"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <option value="" disabled>
              Timeline
            </option>
            <option value="asap">ASAP (within 2 weeks)</option>
            <option value="1-month">Within 1 month</option>
            <option value="2-3-months">2-3 months</option>
            <option value="planning">Just planning</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-referral" className="sr-only">
            How did you find us?
          </label>
          <select
            id="contact-referral"
            name="referralSource"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <option value="" disabled>
              How did you find us?
            </option>
            <option value="google">Google search</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
            <option value="referral">Client referral</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="sr-only">
          Project goals
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Share your goals, current challenges, and what success looks like."
          className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : submitLabel}
      </button>

      {status === "success" && (
        <p className="mt-4 text-sm text-emerald-300">
          Thanks! Your brief was sent successfully. We&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 text-sm text-red-300">
          Submission failed. Please confirm your Formspree endpoint in
          <code className="mx-1 rounded bg-white/10 px-1 py-0.5 text-xs">NEXT_PUBLIC_FORMSPREE_ENDPOINT</code>
          or email hello@raysden.agency.
        </p>
      )}
    </form>
  );
}
