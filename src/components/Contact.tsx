"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-navy py-24 md:py-32 px-6 md:px-12 lg:px-20" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="section-label !text-cream/30 justify-center mb-8 after:!bg-cream/20">
            Get Started
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            Ready to get your business online?
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-6 text-lg text-white/40 font-light">
            Book a free 15-minute consultation. We&apos;ll talk through what your
            business needs and map out the right next step.
          </p>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal className="mt-12">
          {submitted ? (
            <div className="p-10 rounded-xl border border-white/10 text-white">
              <p className="text-xl font-semibold">Thank you!</p>
              <p className="mt-2 text-white/50 font-light">
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-5 py-4 rounded-lg bg-transparent border border-white/15 text-white placeholder-white/30 text-sm font-light focus:outline-none focus:border-white/40 transition-colors"
                />
                <input
                  type="text"
                  name="business"
                  placeholder="Business Name"
                  required
                  className="w-full px-5 py-4 rounded-lg bg-transparent border border-white/15 text-white placeholder-white/30 text-sm font-light focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-5 py-4 rounded-lg bg-transparent border border-white/15 text-white placeholder-white/30 text-sm font-light focus:outline-none focus:border-white/40 transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 rounded-lg bg-transparent border border-white/15 text-white placeholder-white/30 text-sm font-light focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell us about your business and what you need..."
                rows={4}
                className="w-full px-5 py-4 rounded-lg bg-transparent border border-white/15 text-white placeholder-white/30 text-sm font-light focus:outline-none focus:border-white/40 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-cream text-navy text-sm font-medium tracking-[0.05em] uppercase rounded-lg hover:bg-white transition-colors"
              >
                Book a Free Consultation
              </button>
            </form>
          )}

          <p className="mt-6 text-sm text-white/25 font-light">
            No pressure. No commitment. Just a clear conversation.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
