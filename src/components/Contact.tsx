"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      business: formData.get("business") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      source: "main",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  const inputStyle = {
    backgroundColor: "rgba(250,249,246,0.07)",
    border: "1px solid rgba(250,249,246,0.08)",
    color: "#FAF9F6",
  };

  return (
    <section className="bg-navy py-20 md:py-24 px-6 md:px-12 lg:px-20" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="section-label section-label-dark justify-center mb-8">
            Get Started
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream leading-[1.1]">
            Ready to get your business online?
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mt-6 text-lg font-light leading-relaxed" style={{ color: "rgba(250,249,246,0.75)" }}>
            Book a free 15-minute consultation. We&apos;ll talk through what your
            business needs and map out the right next step.
          </p>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal className="mt-12">
          {status === "success" ? (
            <div className="p-10 rounded-xl text-cream" style={{ border: "1px solid rgba(250,249,246,0.08)" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(250,249,246,0.6)"
                strokeWidth="1.5"
                className="mx-auto mb-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-xl font-semibold">Thank you!</p>
              <p className="mt-2 font-light" style={{ color: "rgba(250,249,246,0.65)" }}>
                We&apos;ll be in touch within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-light underline underline-offset-4 transition-colors"
                style={{ color: "rgba(250,249,246,0.4)" }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  disabled={status === "submitting"}
                  className="w-full px-5 py-4 rounded-lg text-cream text-sm font-light focus:outline-none transition-colors placeholder:text-[rgba(250,249,246,0.3)] disabled:opacity-50"
                  style={inputStyle}
                />
                <input
                  type="text"
                  name="business"
                  placeholder="Business Name"
                  required
                  disabled={status === "submitting"}
                  className="w-full px-5 py-4 rounded-lg text-cream text-sm font-light focus:outline-none transition-colors placeholder:text-[rgba(250,249,246,0.3)] disabled:opacity-50"
                  style={inputStyle}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  disabled={status === "submitting"}
                  className="w-full px-5 py-4 rounded-lg text-cream text-sm font-light focus:outline-none transition-colors placeholder:text-[rgba(250,249,246,0.3)] disabled:opacity-50"
                  style={inputStyle}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  disabled={status === "submitting"}
                  className="w-full px-5 py-4 rounded-lg text-cream text-sm font-light focus:outline-none transition-colors placeholder:text-[rgba(250,249,246,0.3)] disabled:opacity-50"
                  style={inputStyle}
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell us about your business and what you need..."
                rows={4}
                disabled={status === "submitting"}
                className="w-full px-5 py-4 rounded-lg text-cream text-sm font-light focus:outline-none transition-colors resize-none placeholder:text-[rgba(250,249,246,0.3)] disabled:opacity-50"
                style={inputStyle}
              />

              {/* Error message */}
              {status === "error" && (
                <div
                  className="px-4 py-3 rounded-lg text-sm font-light"
                  style={{
                    backgroundColor: "rgba(192,57,43,0.15)",
                    border: "1px solid rgba(192,57,43,0.25)",
                    color: "rgba(250,249,246,0.8)",
                  }}
                >
                  {errorMsg || "Something went wrong. Please try again."}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-cream text-navy text-sm font-medium tracking-[0.05em] uppercase rounded-lg hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Book a Free Consultation"
                )}
              </button>
            </form>
          )}

          <p className="mt-6 text-sm font-light" style={{ color: "rgba(250,249,246,0.50)" }}>
            No pressure. No commitment. Just a clear conversation.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
