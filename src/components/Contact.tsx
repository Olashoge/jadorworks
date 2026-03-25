"use client";

import { useState } from "react";
import Link from "next/link";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire up to a real form handler (e.g., API route, Formspree, etc.)
    setSubmitted(true);
  }

  return (
    <section className="py-20 px-6 bg-navy" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to get your business online?
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Book a free 15-minute consultation. We&apos;ll talk through what your
          business needs and map out the right next step.
        </p>

        {/* Form */}
        {submitted ? (
          <div className="mt-10 p-8 rounded-xl bg-white/10 text-white">
            <p className="text-xl font-semibold">Thank you!</p>
            <p className="mt-2 text-white/70">
              We&apos;ll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-4 text-left"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold"
              />
              <input
                type="text"
                name="business"
                placeholder="Business Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold"
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your business and what you need..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold resize-none"
            />
            <button
              type="submit"
              className="w-full py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-muted transition-colors"
            >
              Book a Free Consultation
            </button>
          </form>
        )}

        {/* Secondary CTA */}
        <Link
          href="/demos"
          className="inline-block mt-6 text-sm text-white/50 hover:text-white/80 transition-colors"
        >
          Or view the demo sites first →
        </Link>

        {/* Reassurance */}
        <p className="mt-8 text-sm text-white/30">
          No pressure. No commitment. Just a clear conversation.
        </p>
      </div>
    </section>
  );
}
