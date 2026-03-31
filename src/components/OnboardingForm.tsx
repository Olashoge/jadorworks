"use client";

import { useState } from "react";
import { LogoLockup } from "./PixelJMark";

type FormStatus = "idle" | "submitting" | "success" | "error";

/* ── Pixel J mark (reusable) ── */
function PixelMark({ size = 9, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: size > 12 ? 6 : 4 }}>
      <div style={{ width: size, height: size, background: "currentColor" }} />
      <div style={{ width: size, height: size, background: "currentColor" }} />
      <div style={{ width: size, height: size, background: "transparent" }} />
      <div style={{ width: size, height: size, background: "currentColor" }} />
      <div style={{ width: size, height: size, background: "currentColor" }} />
      <div style={{ width: size, height: size, background: "currentColor" }} />
    </div>
  );
}

/* ── Section header ── */
function SectionHeader({ num, title, sub }: { num: number; title: string; sub: string }) {
  return (
    <div className="flex items-start gap-4 mb-7 pb-5" style={{ borderBottom: "1.5px solid rgba(13,27,42,0.1)" }}>
      <div className="w-9 h-9 bg-navy text-cream text-[13px] font-extrabold flex items-center justify-center shrink-0">
        {num}
      </div>
      <div>
        <div className="text-[19px] font-bold text-navy tracking-tight">{title}</div>
        <div className="text-[13px] font-light text-navy/45 leading-relaxed">{sub}</div>
      </div>
    </div>
  );
}

/* ── Radio option ── */
function RadioOption({
  name,
  id,
  label,
  checked,
  onChange,
  disabled,
}: {
  name: string;
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  disabled: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-2.5 px-3.5 py-3 cursor-pointer select-none transition-all text-[13px]"
      style={{
        border: checked ? "1.5px solid #0D1B2A" : "1.5px solid rgba(13,27,42,0.1)",
        background: checked ? "#0D1B2A" : "transparent",
        color: checked ? "#FAF9F6" : "#0D1B2A",
      }}
    >
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only"
      />
      <span
        className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"
        style={{ border: "1.5px solid currentColor" }}
      >
        {checked && <span className="block w-1.5 h-1.5" style={{ background: "#FAF9F6" }} />}
      </span>
      {label}
    </label>
  );
}

/* ── Checkbox option ── */
function CheckboxOption({
  id,
  label,
  checked,
  onChange,
  disabled,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  disabled: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-2.5 px-3.5 py-3 cursor-pointer select-none transition-all text-[13px]"
      style={{
        border: checked ? "1.5px solid #0D1B2A" : "1.5px solid rgba(13,27,42,0.1)",
        background: checked ? "#0D1B2A" : "transparent",
        color: checked ? "#FAF9F6" : "#0D1B2A",
      }}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only"
      />
      <span
        className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"
        style={{ border: "1.5px solid currentColor" }}
      >
        {checked && <span className="block w-1.5 h-1.5" style={{ background: "#FAF9F6" }} />}
      </span>
      {label}
    </label>
  );
}

/* ── Shared input styles ── */
const inputClass =
  "w-full font-[family-name:var(--font-inter)] text-base text-navy bg-cream border-[1.5px] border-[rgba(13,27,42,0.1)] px-4 py-[13px] outline-none transition-colors focus:border-navy placeholder:text-[rgba(13,27,42,0.28)] disabled:opacity-50";

const selectClass =
  "w-full font-[family-name:var(--font-inter)] text-base text-navy bg-cream border-[1.5px] border-[rgba(13,27,42,0.1)] px-4 py-[13px] outline-none transition-colors focus:border-navy appearance-none cursor-pointer disabled:opacity-50 bg-no-repeat bg-[right_16px_center]";

/* ============================= */
/* MAIN COMPONENT                */
/* ============================= */
export function OnboardingForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Form state
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [existingWebsite, setExistingWebsite] = useState("");
  const [existingGBP, setExistingGBP] = useState("");
  const [services, setServices] = useState("");
  const [serviceArea, setServiceArea] = useState("");
  const [mainGoals, setMainGoals] = useState<string[]>([]);
  const [idealCustomer, setIdealCustomer] = useState("");
  const [visualStyle, setVisualStyle] = useState("");
  const [brandColors, setBrandColors] = useState("");
  const [inspirationUrls, setInspirationUrls] = useState("");
  const [businessStory, setBusinessStory] = useState("");
  const [featuresWanted, setFeaturesWanted] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const isSubmitting = status === "submitting";

  function toggleGoal(goal: string) {
    setMainGoals((prev) =>
      prev.includes(goal)
        ? prev.filter((g) => g !== goal)
        : [...prev, goal]
    );
  }

  function toggleFeature(feature: string) {
    setFeaturesWanted((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const honeypot = new FormData(form).get("website") as string;

    const data = {
      businessName,
      contactName,
      email,
      phone,
      businessType,
      existingWebsite: existingWebsite || undefined,
      existingGBP: existingGBP || undefined,
      services,
      serviceArea,
      mainGoal: mainGoals.join(", "),
      idealCustomer: idealCustomer || undefined,
      visualStyle: visualStyle || undefined,
      brandColors: brandColors || undefined,
      inspirationUrls: inspirationUrls || undefined,
      businessStory,
      featuresWanted: featuresWanted.length > 0 ? featuresWanted : undefined,
      timeline: timeline || undefined,
      contactMethod: contactMethod || undefined,
      website: honeypot, // honeypot
    };

    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  /* ── Thank You State ── */
  if (status === "success") {
    return (
      <div className="min-h-screen bg-cream">
        {/* Hero (abbreviated) */}
        <div className="bg-navy px-6 md:px-14 py-16 md:py-20">
          <div className="text-[11px] font-semibold tracking-[0.26em] uppercase text-cream/35 flex items-center gap-3 mb-4">
            <span className="w-6 h-[1.5px] bg-cream/35 shrink-0" />
            New Client Onboarding
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold tracking-tight text-cream leading-none">
            Project Intake Form
          </h1>
        </div>

        {/* Thank you content */}
        <div className="max-w-[760px] mx-auto px-6 md:px-14 py-24 text-center">
          <div className="flex justify-center mb-8">
            <LogoLockup size={18} color="#0D1B2A" />
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-navy mb-3.5">
            You&apos;re all set.
          </h2>
          <p className="text-base font-light text-navy/45 leading-relaxed max-w-[480px] mx-auto mb-9">
            We&apos;ve received your intake and will review it within one business day.
            Here&apos;s what happens next:
          </p>
          <div className="text-left max-w-[440px] mx-auto">
            {[
              "We review your intake and confirm we have everything we need to begin.",
              "We send a follow-up email requesting any additional assets — logo, photos, content.",
              "We schedule a short kickoff call to align on scope, timeline, and expectations.",
              "We get to work. You'll see a first draft within the agreed timeframe.",
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-3.5 items-start py-3.5 text-[13px] font-light text-navy/45 leading-relaxed"
                style={{ borderBottom: i < 3 ? "1px solid rgba(13,27,42,0.1)" : "none" }}
              >
                <span className="text-[11px] font-extrabold text-navy shrink-0 mt-px">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Form State ── */
  return (
    <div className="min-h-screen bg-cream">
      {/* ── HERO ── */}
      <div className="bg-navy px-6 md:px-14 py-16 md:py-20">
        <div className="text-[11px] font-semibold tracking-[0.26em] uppercase text-cream/35 flex items-center gap-3 mb-4">
          <span className="w-6 h-[1.5px] bg-cream/35 shrink-0" />
          New Client Onboarding
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold tracking-tight text-cream leading-none mb-5">
          Project Intake Form
        </h1>
        <p className="text-[17px] font-light text-cream/60 leading-relaxed max-w-[600px] mb-10">
          This form helps us understand your business, gather the right assets, and start
          your project without delays.{" "}
          <strong className="text-cream/85 font-medium">
            Most clients complete it in 10-15 minutes.
          </strong>
        </p>
        <div className="flex gap-8 flex-wrap">
          {[
            "Required fields only — everything else is optional",
            "Assets can be uploaded later",
            "Submitted securely to our team",
          ].map((text, i) => (
            <div
              key={i}
              className="text-[12px] font-medium tracking-[0.1em] uppercase text-cream/35 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cream/25 shrink-0" />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div
        className="px-6 md:px-14 flex items-center gap-0 overflow-x-auto"
        style={{ background: "#E5E2DC", borderBottom: "1px solid rgba(13,27,42,0.1)" }}
      >
        {["Business Basics", "Services & Goals", "Branding & Style", "Project Notes"].map(
          (label, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && (
                <div className="w-6 h-px shrink-0" style={{ background: "rgba(13,27,42,0.1)" }} />
              )}
              <div className="flex items-center gap-2.5 py-4 pr-5 whitespace-nowrap">
                <div
                  className={`w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 ${
                    i === 0
                      ? "bg-navy text-cream"
                      : "text-navy/45"
                  }`}
                  style={i > 0 ? { background: "rgba(13,27,42,0.1)" } : {}}
                >
                  {i + 1}
                </div>
                <span
                  className={`text-[12px] font-semibold tracking-[0.04em] ${
                    i === 0 ? "text-navy" : "text-navy/45"
                  }`}
                >
                  {label}
                </span>
              </div>
            </div>
          )
        )}
      </div>

      {/* ── FORM ── */}
      <div className="max-w-[760px] mx-auto px-6 md:px-14 pt-16 pb-24">
        <form id="intake-form" onSubmit={handleSubmit}>
          {/* Honeypot */}
          <input
            name="website"
            type="text"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* ─── SECTION 1: BUSINESS BASICS ─── */}
          <div className="mb-14">
            <SectionHeader
              num={1}
              title="Business Basics"
              sub="Tell us about your business. This is what we need to get started."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2">
                  Business Name
                </div>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Summit Air & Plumbing"
                  required
                  disabled={isSubmitting}
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
              <div>
                <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2">
                  Your Name
                </div>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="First and last name"
                  required
                  disabled={isSubmitting}
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2">
                  Email Address
                </div>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="you@yourbusiness.com"
                  required
                  disabled={isSubmitting}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2">
                  Phone Number
                </div>
                <input
                  type="tel"
                  className={inputClass}
                  placeholder="(317) 000-0000"
                  required
                  disabled={isSubmitting}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-5">
              <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2">
                Business Type
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: "bt1", label: "Storefront / Location", value: "Storefront" },
                  { id: "bt2", label: "Service Area Business", value: "Service Area" },
                  { id: "bt3", label: "Hybrid / Both", value: "Hybrid" },
                ].map((opt) => (
                  <RadioOption
                    key={opt.id}
                    name="biz-type"
                    id={opt.id}
                    label={opt.label}
                    checked={businessType === opt.value}
                    onChange={() => setBusinessType(opt.value)}
                    disabled={isSubmitting}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2 flex items-center gap-2">
                  Existing Website URL
                  <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-navy/45 bg-[#EDEAE4] px-2 py-0.5">
                    Optional
                  </span>
                </div>
                <input
                  type="url"
                  className={inputClass}
                  placeholder="https://yoursite.com"
                  disabled={isSubmitting}
                  value={existingWebsite}
                  onChange={(e) => setExistingWebsite(e.target.value)}
                />
              </div>
              <div>
                <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2 flex items-center gap-2">
                  Google Business Profile URL
                  <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-navy/45 bg-[#EDEAE4] px-2 py-0.5">
                    Optional
                  </span>
                </div>
                <input
                  type="url"
                  className={inputClass}
                  placeholder="https://maps.google.com/..."
                  disabled={isSubmitting}
                  value={existingGBP}
                  onChange={(e) => setExistingGBP(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* ─── SECTION 2: SERVICES & GOALS ─── */}
          <div className="mb-14">
            <SectionHeader
              num={2}
              title="Services & Goals"
              sub="What do you offer and what do you want this project to achieve?"
            />

            <div className="mb-5">
              <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2">
                Main Services You Offer
              </div>
              <div className="text-[12px] font-light text-navy/45 mb-2">
                List your primary services — one per line or separated by commas.
              </div>
              <textarea
                className={`${inputClass} resize-y min-h-[96px] leading-relaxed`}
                placeholder="e.g. AC repair, furnace installation, drain cleaning..."
                required
                disabled={isSubmitting}
                value={services}
                onChange={(e) => setServices(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2">
                Service Area
              </div>
              <div className="text-[12px] font-light text-navy/45 mb-2">
                Which cities, counties, or regions do you serve?
              </div>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. Indianapolis, Carmel, Fishers — Marion & Hamilton Counties"
                required
                disabled={isSubmitting}
                value={serviceArea}
                onChange={(e) => setServiceArea(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2">
                Main Goal for This Project
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: "g1", label: "More calls & inquiries" },
                  { id: "g2", label: "More quote requests" },
                  { id: "g3", label: "Better Google visibility" },
                  { id: "g4", label: "More credibility online" },
                  { id: "g5", label: "Replace an old website" },
                  { id: "g6", label: "All of the above" },
                ].map((opt) => (
                  <CheckboxOption
                    key={opt.id}
                    id={opt.id}
                    label={opt.label}
                    checked={mainGoals.includes(opt.label)}
                    onChange={() => toggleGoal(opt.label)}
                    disabled={isSubmitting}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2 flex items-center gap-2">
                Who is your ideal customer?
                <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-navy/45 bg-[#EDEAE4] px-2 py-0.5">
                  Optional
                </span>
              </div>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. Homeowners in Carmel aged 35-60 who need HVAC service"
                disabled={isSubmitting}
                value={idealCustomer}
                onChange={(e) => setIdealCustomer(e.target.value)}
              />
            </div>
          </div>

          {/* ─── SECTION 3: BRANDING & STYLE ─── */}
          <div className="mb-14">
            <SectionHeader
              num={3}
              title="Branding & Style"
              sub="Help us understand your visual identity and the feel you're going for."
            />

            <div className="mb-5">
              <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2">
                Preferred Visual Style
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: "s1", label: "Clean & modern" },
                  { id: "s2", label: "Premium & refined" },
                  { id: "s3", label: "Warm & approachable" },
                  { id: "s4", label: "Bold & high-energy" },
                ].map((opt) => (
                  <RadioOption
                    key={opt.id}
                    name="style"
                    id={opt.id}
                    label={opt.label}
                    checked={visualStyle === opt.label}
                    onChange={() => setVisualStyle(opt.label)}
                    disabled={isSubmitting}
                  />
                ))}
              </div>
            </div>

            <div className="mb-5">
              <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2 flex items-center gap-2">
                Brand Colors
                <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-navy/45 bg-[#EDEAE4] px-2 py-0.5">
                  Optional
                </span>
              </div>
              <div className="text-[12px] font-light text-navy/45 mb-2">
                Hex codes, color names, or just describe them.
              </div>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. Navy blue and orange — #1B3A5C and #E8712B"
                disabled={isSubmitting}
                value={brandColors}
                onChange={(e) => setBrandColors(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2 flex items-center gap-2">
                Competitor or Inspiration URLs
                <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-navy/45 bg-[#EDEAE4] px-2 py-0.5">
                  Optional
                </span>
              </div>
              <div className="text-[12px] font-light text-navy/45 mb-2">
                Websites you like the look of — even outside your industry.
              </div>
              <textarea
                className={`${inputClass} resize-y min-h-[72px] leading-relaxed`}
                placeholder="e.g. https://example.com — I like how clean and modern this feels..."
                disabled={isSubmitting}
                value={inspirationUrls}
                onChange={(e) => setInspirationUrls(e.target.value)}
              />
            </div>

            {/* Upload Later Box */}
            <div
              className="p-6 md:p-7"
              style={{ background: "#EDEAE4", border: "1.5px dashed rgba(13,27,42,0.1)" }}
            >
              <div className="text-[13px] font-bold text-navy mb-1.5">
                Send these after you submit
              </div>
              <div className="text-[13px] font-light text-navy/45 leading-relaxed mb-4">
                You don&apos;t need these now. After you submit, we&apos;ll send a follow-up request
                for any assets we need to get started. No need to delay submitting this form.
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Logo file",
                  "Brand fonts",
                  "Business photos",
                  "Project photos",
                  "Team photos",
                  "Existing marketing materials",
                  "Testimonials / reviews",
                  "Licenses & certifications",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium tracking-[0.06em] text-navy/45 bg-cream px-3 py-1.5"
                    style={{ border: "1px solid rgba(13,27,42,0.1)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ─── SECTION 4: PROJECT NOTES ─── */}
          <div className="mb-14">
            <SectionHeader
              num={4}
              title="Project Notes"
              sub="Anything else we should know before we start."
            />

            <div className="mb-5">
              <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2">
                Tell us about your business and this project
              </div>
              <div className="text-[12px] font-light text-navy/45 mb-2">
                Your story, what makes you different, anything you want us to know.
              </div>
              <textarea
                className={`${inputClass} resize-y min-h-[120px] leading-relaxed`}
                placeholder="e.g. We've been in business for 12 years and specialize in HVAC for older homes. Our biggest competitor is XYZ and we want to look more professional than them online..."
                required
                disabled={isSubmitting}
                value={businessStory}
                onChange={(e) => setBusinessStory(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2 flex items-center gap-2">
                Pages or Sections You Want on the Site
                <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-navy/45 bg-[#EDEAE4] px-2 py-0.5">
                  Optional
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Contact form",
                  "Photo gallery",
                  "Testimonials",
                  "Before & after",
                  "Online quote request",
                  "FAQ section",
                  "Financing / promotions",
                  "Emergency / 24hr callout",
                ].map((feature, i) => (
                  <CheckboxOption
                    key={i}
                    id={`f${i + 1}`}
                    label={feature}
                    checked={featuresWanted.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                    disabled={isSubmitting}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2 flex items-center gap-2">
                  Timeline / Urgency
                  <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-navy/45 bg-[#EDEAE4] px-2 py-0.5">
                    Optional
                  </span>
                </div>
                <select
                  className={selectClass}
                  disabled={isSubmitting}
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230D1B2A' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                    color: timeline ? "#0D1B2A" : "rgba(13,27,42,0.28)",
                  }}
                >
                  <option value="" disabled>
                    Select a timeframe
                  </option>
                  <option style={{ color: "#0D1B2A" }}>As soon as possible</option>
                  <option style={{ color: "#0D1B2A" }}>Within 2 weeks</option>
                  <option style={{ color: "#0D1B2A" }}>Within a month</option>
                  <option style={{ color: "#0D1B2A" }}>No rush — whenever you&apos;re ready</option>
                </select>
              </div>
              <div>
                <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-navy mb-2 flex items-center gap-2">
                  Preferred Contact Method
                  <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-navy/45 bg-[#EDEAE4] px-2 py-0.5">
                    Optional
                  </span>
                </div>
                <select
                  className={selectClass}
                  disabled={isSubmitting}
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230D1B2A' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                    color: contactMethod ? "#0D1B2A" : "rgba(13,27,42,0.28)",
                  }}
                >
                  <option value="" disabled>
                    Select preference
                  </option>
                  <option style={{ color: "#0D1B2A" }}>Email</option>
                  <option style={{ color: "#0D1B2A" }}>Phone call</option>
                  <option style={{ color: "#0D1B2A" }}>Text message</option>
                  <option style={{ color: "#0D1B2A" }}>Any — whatever works</option>
                </select>
              </div>
            </div>
          </div>

          {/* ─── SUBMIT ─── */}
          <div
            className="p-6 md:p-10"
            style={{ background: "#EDEAE4", borderTop: "1px solid rgba(13,27,42,0.1)" }}
          >
            <p className="text-[13px] font-light text-navy/45 leading-relaxed mb-6">
              <strong className="text-navy font-semibold">Ready to submit?</strong> We&apos;ll review
              your intake within one business day and reach out to confirm next steps. After you
              submit, we&apos;ll send a follow-up email requesting any additional assets or
              information we need.
            </p>

            {/* Error message */}
            {status === "error" && (
              <div
                className="px-4 py-3 mb-4 text-sm font-light"
                style={{
                  backgroundColor: "rgba(192,57,43,0.1)",
                  border: "1px solid rgba(192,57,43,0.2)",
                  color: "rgba(192,57,43,0.9)",
                }}
              >
                {errorMsg || "Something went wrong. Please try again."}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-[18px] px-12 bg-navy text-cream text-[13px] font-bold tracking-[0.1em] uppercase border-none cursor-pointer transition-opacity hover:opacity-85 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-3">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                <>
                  Submit Project Intake
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </>
              )}
            </button>
            <p className="text-[11px] font-light text-navy/45 text-center mt-3.5 leading-relaxed">
              Your information is private and secure. We will never share your details with
              third parties.
            </p>
            <p className="text-[10px] font-light text-navy/25 text-center mt-6 leading-relaxed">
              This form is provided for active JadorWorks clients and project onboarding.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
