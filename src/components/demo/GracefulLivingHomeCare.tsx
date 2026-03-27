"use client";

import { useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Graceful Living Home Care — Full One-Page Home Care Demo           */
/*  Built by JadorWorks Web Studio                                     */
/* ------------------------------------------------------------------ */

// ── colour tokens ────────────────────────────────────────────────────
const C = {
  navy: "#2A3D54",
  navy2: "#1C2B3C",
  navyLt: "#3A5470",
  sage: "#7FA868",
  sageLt: "#95C07D",
  sageDk: "#5D8A4A",
  warm: "#FBF9F6",
  warm2: "#F2EEE8",
  white: "#FFFFFF",
  gray: "#6B6E78",
  lightgray: "#DDD9D2",
};

// ── font helpers ─────────────────────────────────────────────────────
const nunito = (
  weight: number,
  extra?: React.CSSProperties
): React.CSSProperties => ({
  fontFamily: "var(--font-nunito), 'Nunito Sans', sans-serif",
  fontWeight: weight,
  ...extra,
});

const playfair = (
  weight: number,
  extra?: React.CSSProperties
): React.CSSProperties => ({
  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
  fontWeight: weight,
  ...extra,
});

// ── reusable components ──────────────────────────────────────────────
function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-3 mb-3"
      style={{
        ...nunito(700, {
          fontSize: "11px",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: light ? C.sageLt : C.sageDk,
        }),
      }}
    >
      <span
        className="inline-block w-6 flex-shrink-0"
        style={{
          height: "1.5px",
          background: light ? C.sageLt : C.sageDk,
        }}
      />
      {children}
    </div>
  );
}

function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      style={{
        ...playfair(500, {
          fontSize: "clamp(32px, 3.8vw, 52px)",
          lineHeight: 1.12,
          letterSpacing: "-0.01em",
          color: light ? C.white : C.navy2,
          marginBottom: "16px",
        }),
      }}
    >
      {children}
    </h2>
  );
}

function BodyText({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      style={{
        ...nunito(300, {
          fontSize: "16px",
          lineHeight: 1.8,
          color: light ? "rgba(255,255,255,0.5)" : C.gray,
          maxWidth: "560px",
        }),
      }}
    >
      {children}
    </p>
  );
}

// ── SVG Icons ────────────────────────────────────────────────────────
const PhoneIcon = ({ size = 14, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const ShieldIcon = ({ size = 18, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

const CheckCircleIcon = ({ size = 18, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const PersonIcon = ({ size = 18, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
  </svg>
);

const MailIcon = ({ size = 18, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const StarIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill={C.sage}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const HomeIcon = ({ size = 24, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const ClockIcon = ({ size = 24, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);

const CarIcon = ({ size = 24, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
  </svg>
);

const PeopleIcon = ({ size = 24, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const UserIcon = ({ size = 24, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const LocationIcon = ({ size = 15, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
  </svg>
);

// ── Main Component ───────────────────────────────────────────────────
export function GracefulLivingHomeCare() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Nav scroll shadow
  useEffect(() => {
    const nav = document.getElementById("hc-nav");
    if (!nav) return;
    const handleScroll = () => {
      nav.classList.toggle(
        "shadow-[0_2px_24px_rgba(42,61,84,0.08)]",
        window.scrollY > 20
      );
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addReveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  // Services data
  const services = [
    {
      icon: <UserIcon size={24} />,
      title: "Companionship & Daily Living Assistance",
      body: "Meaningful company, conversation, and help with the daily routines that keep life moving and spirits high.",
    },
    {
      icon: <HomeIcon size={24} />,
      title: "Light Housekeeping & Meal Preparation",
      body: "A tidy, comfortable home and warm, nutritious meals prepared to their preferences and dietary needs.",
    },
    {
      icon: <ClockIcon size={24} />,
      title: "Medication Reminders",
      body: "Gentle, consistent reminders to take the right medications at the right time — keeping them safe and on schedule.",
    },
    {
      icon: <CarIcon size={24} />,
      title: "Transportation & Errands",
      body: "Safe, reliable rides to appointments, grocery runs, social events, and wherever life needs to go.",
    },
    {
      icon: <PeopleIcon size={24} />,
      title: "Respite Care for Families",
      body: "Relief for family caregivers who need a break, peace of mind, or simply time to take care of themselves too.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote:
        "When my mother could no longer live alone, I was terrified of the options. Graceful Living changed everything. Her caregiver is kind, patient, and genuinely loves what she does. My mom actually looks forward to her visits — and I sleep at night knowing she's safe.",
      name: "Lisa D.",
      loc: "Greenwood, IN · Care for Mother, 82",
      initial: "L",
    },
    {
      quote:
        "My father has Parkinson's and needs assistance throughout the day. The level of care he receives from Graceful Living is extraordinary — consistent, respectful, and always communicated to our family clearly. They've become part of our lives.",
      name: "James W.",
      loc: "Fishers, IN · Daily Care for Father, 78",
      initial: "J",
    },
    {
      quote:
        "I was the primary caregiver for my husband for two years before I found Graceful Living. The respite care they provide has given me back my energy — and given him better, more consistent support than I could manage alone. I wish I'd found them sooner.",
      name: "Sandra P.",
      loc: "Westfield, IN · Respite Care",
      initial: "S",
    },
  ];

  // Service area cities
  const cities = [
    "Indianapolis",
    "Carmel",
    "Fishers",
    "Noblesville",
    "Westfield",
    "Greenwood",
    "Beech Grove",
    "Lawrence",
    "Speedway",
    "Zionsville",
    "Sheridan",
    "Cicero",
  ];

  // Process steps
  const steps = [
    {
      num: "01",
      title: "Free Consultation",
      body: "We have a relaxed conversation about your loved one's needs, routine, and personality. No commitment required.",
    },
    {
      num: "02",
      title: "Personalized Care Plan",
      body: "We build a care plan tailored specifically to your loved one — their schedule, preferences, and the level of support they need.",
    },
    {
      num: "03",
      title: "Caregiver Matching",
      body: "We carefully select a caregiver whose personality and approach is a natural fit. You can always request a different match.",
    },
    {
      num: "04",
      title: "Ongoing Support",
      body: "We stay in regular contact with you and your loved one, adjusting the plan as needs evolve over time.",
    },
  ];

  return (
    <div style={{ fontFamily: "var(--font-nunito), 'Nunito Sans', sans-serif", color: C.navy2, background: C.white, overflowX: "hidden" }}>
      <style>{`
        .reveal{opacity:0;transform:translateY(20px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1)}
        .reveal.revealed{opacity:1;transform:translateY(0)}
        .d1{transition-delay:.08s}.d2{transition-delay:.16s}.d3{transition-delay:.24s}.d4{transition-delay:.32s}.d5{transition-delay:.40s}
        .svc-card-hc{position:relative;overflow:hidden;transition:all .3s cubic-bezier(.22,1,.36,1)}
        .svc-card-hc::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2.5px;background:${C.sage};transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.22,1,.36,1)}
        .svc-card-hc:hover{border-color:${C.sage} !important;transform:translateY(-6px);box-shadow:0 16px 48px rgba(42,61,84,.1)}
        .svc-card-hc:hover::after{transform:scaleX(1)}
        .testi-card-hc{position:relative;overflow:hidden;transition:all .25s cubic-bezier(.22,1,.36,1)}
        .testi-card-hc::before{content:'';position:absolute;top:0;left:0;right:0;height:2.5px;background:${C.sage};transform:scaleX(0);transition:transform .4s cubic-bezier(.22,1,.36,1)}
        .testi-card-hc:hover{border-color:${C.sage} !important;transform:translateY(-4px);box-shadow:0 12px 40px rgba(42,61,84,.08)}
        .testi-card-hc:hover::before{transform:scaleX(1)}
        .why-item-hc{transition:all .25s}
        .why-item-hc:hover{border-color:${C.sage} !important;box-shadow:0 4px 24px rgba(127,168,104,.12)}
        .area-city-hc{transition:all .2s}
        .area-city-hc:hover{background:${C.sage} !important;color:${C.white} !important;border-color:${C.sage} !important}
        .p-step-hc{transition:background .25s}
        .p-step-hc:hover{background:rgba(255,255,255,.05)}
      `}</style>

      {/* ── DEMO BANNER ─────────────────────────────────────────────── */}
      <div
        style={{
          background: C.navy2,
          textAlign: "center",
          padding: "8px 16px",
          ...nunito(600, {
            fontSize: "12px",
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.45)",
          }),
        }}
      >
        This is a demo site built by{" "}
        <a
          href="/"
          style={{ color: C.sageLt, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
        >
          <svg width="10" height="16" viewBox="0 0 28 44" fill="none"><rect x="0" y="0" width="12" height="12" fill={C.sageLt}/><rect x="16" y="0" width="12" height="12" fill={C.sageLt}/><rect x="16" y="16" width="12" height="12" fill={C.sageLt}/><rect x="16" y="32" width="12" height="12" fill={C.sageLt}/><rect x="0" y="32" width="12" height="12" fill={C.sageLt}/></svg>
          <span style={{ fontWeight: 300 }}>Jador</span><span style={{ fontWeight: 700 }}>Works</span>{" "}Web Studio
        </a>
      </div>

      {/* ── TOP BAR ─────────────────────────────────────────────────── */}
      <div
        style={{
          background: C.warm2,
          padding: "10px 56px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `1px solid ${C.lightgray}`,
        }}
      >
        <div style={{ display: "flex", gap: "28px" }}>
          <span style={{ ...nunito(400, { fontSize: "12px", color: C.gray }) }}>
            Indianapolis, IN · Hamilton & Marion Counties
          </span>
          <span style={{ ...nunito(400, { fontSize: "12px", color: C.gray }) }}>
            Available 7 days a week · Flexible Scheduling
          </span>
        </div>
        <a
          href="tel:5554387200"
          style={{
            ...nunito(700, {
              fontSize: "13px",
              color: C.navy,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }),
          }}
        >
          <PhoneIcon size={14} color={C.navy} />
          (555) 438-7200
        </a>
      </div>

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav
        id="hc-nav"
        style={{
          background: C.white,
          padding: "0 56px",
          height: "76px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
          borderBottom: `1px solid ${C.lightgray}`,
          transition: "box-shadow 0.25s",
        }}
      >
        <a href="#" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "2px" }}>
          <div style={{ ...playfair(600, { fontSize: "20px", color: C.navy, letterSpacing: "0.01em", lineHeight: 1 }) }}>
            Graceful Living Home Care
          </div>
          <div style={{ ...nunito(700, { fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: C.sageDk }) }}>
            Indianapolis · Hamilton & Marion Counties
          </div>
        </a>
        <ul style={{ display: "flex", gap: "32px", listStyle: "none" }}>
          {["Services", "About Us", "For Families", "Stories", "Contact"].map(
            (link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  style={{
                    ...nunito(600, {
                      fontSize: "13px",
                      color: C.navy,
                      textDecoration: "none",
                      letterSpacing: "0.03em",
                    }),
                  }}
                >
                  {link}
                </a>
              </li>
            )
          )}
        </ul>
        <button
          style={{
            ...nunito(700, {
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: C.white,
              background: C.sage,
              border: "none",
              padding: "13px 26px",
              cursor: "pointer",
              borderRadius: "2px",
            }),
          }}
        >
          Schedule a Consultation
        </button>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "88vh", overflow: "hidden", display: "flex", alignItems: "center", padding: 0 }}>
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/demos/home-care/HOMECARE1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, rgba(28,43,60,0.92) 0%, rgba(28,43,60,0.80) 45%, rgba(28,43,60,0.3) 100%)",
          }}
        />
        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, padding: "80px 56px", maxWidth: "640px" }}>
          <div
            style={{
              ...nunito(700, {
                fontSize: "11px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: C.sageLt,
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }),
            }}
          >
            <span style={{ width: "28px", height: "1.5px", background: C.sageLt, flexShrink: 0, display: "inline-block" }} />
            Compassionate In-Home Care
          </div>

          <h1
            style={{
              ...playfair(500, {
                fontSize: "clamp(44px, 5.5vw, 72px)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: C.white,
                marginBottom: "20px",
              }),
            }}
          >
            The care your
            <br />
            family can
            <br />
            <em style={{ fontStyle: "italic", color: C.sageLt }}>count on.</em>
          </h1>

          <p
            style={{
              ...nunito(300, {
                fontSize: "17px",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.72)",
                maxWidth: "480px",
                marginBottom: "40px",
              }),
            }}
          >
            Compassionate, dependable in-home care for seniors and adults who want to live safely and comfortably at home.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "52px", flexWrap: "wrap" }}>
            <button
              style={{
                ...nunito(700, {
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: C.white,
                  background: C.sage,
                  border: "none",
                  padding: "18px 36px",
                  cursor: "pointer",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }),
              }}
            >
              <PhoneIcon size={17} color="white" />
              Schedule a Free Consultation
            </button>
            <button
              style={{
                ...nunito(600, {
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: C.white,
                  background: "none",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  padding: "16px 32px",
                  cursor: "pointer",
                  borderRadius: "2px",
                }),
              }}
            >
              Learn About Our Care
            </button>
          </div>

          {/* Reassurance checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Background-checked, licensed, and insured caregivers",
              "Personalized care plans built around your loved one",
              "Regular family communication updates — always in the loop",
            ].map((item) => (
              <div
                key={item}
                style={{
                  ...nunito(400, {
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.65)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }),
                }}
              >
                <CheckCircleIcon size={16} color={C.sageLt} />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right panel image */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "40%", overflow: "hidden" }}>
          <img
            src="/images/demos/home-care/HOMECARE2.png"
            alt="Senior enjoying home"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", opacity: 0.5 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(28,43,60,1) 0%, transparent 50%)" }} />
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────────── */}
      <div
        style={{
          background: C.sage,
          padding: "18px 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {[
          { icon: <ShieldIcon size={18} color="rgba(255,255,255,0.85)" />, text: "Licensed & Insured" },
          { icon: <CheckCircleIcon size={18} color="rgba(255,255,255,0.85)" />, text: "Background-Checked Caregivers" },
          { icon: <PersonIcon size={18} color="rgba(255,255,255,0.85)" />, text: "Personalized Care Plans" },
          { icon: <MailIcon size={18} color="rgba(255,255,255,0.85)" />, text: "Family Communication Updates" },
        ].map((item, i) => (
          <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {i > 0 && (
              <div style={{ width: "1px", height: "18px", background: "rgba(255,255,255,0.3)", marginRight: "30px" }} />
            )}
            {item.icon}
            <span style={{ ...nunito(700, { fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: C.white }) }}>
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* ── INTRO — WHAT WE BELIEVE ─────────────────────────────────── */}
      <section style={{ padding: "96px 56px", background: C.warm }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Image with badge */}
          <div ref={addReveal} className="reveal" style={{ position: "relative" }}>
            <img
              src="/images/demos/home-care/HOMECARE6.png"
              alt="Caregiver with senior client"
              style={{ width: "100%", height: "480px", objectFit: "cover", display: "block" }}
            />
            <div style={{ position: "absolute", bottom: "-20px", right: "-20px", background: C.navy, padding: "28px 32px" }}>
              <div style={{ ...playfair(400, { fontSize: "46px", color: C.white, lineHeight: 1 }) }}>10+</div>
              <div style={{ ...nunito(700, { fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginTop: "4px" }) }}>
                Years of
                <br />
                Compassionate Care
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <div ref={addReveal} className="reveal">
              <Eyebrow>Our Belief</Eyebrow>
            </div>
            <div ref={addReveal} className="reveal d1">
              <SectionTitle>
                Everyone deserves to age with <em style={{ fontStyle: "italic", color: C.sageDk }}>dignity</em> and grace.
              </SectionTitle>
            </div>
            <blockquote
              ref={addReveal}
              className="reveal d2"
              style={{
                ...playfair(400, {
                  fontSize: "24px",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: C.navy,
                  borderLeft: `2.5px solid ${C.sage}`,
                  paddingLeft: "24px",
                  margin: "28px 0",
                }),
              }}
            >
              We don&apos;t just provide care. We provide company, comfort, and the simple dignity of being able to stay in the place that feels most like home.
            </blockquote>
            <div ref={addReveal} className="reveal d3">
              <BodyText>
                Graceful Living Home Care was founded on a simple belief: the people we love deserve to age on their own terms. Our caregivers are chosen not just for their skills, but for their kindness — and matched carefully to each client&apos;s personality and needs.
              </BodyText>
            </div>

            {/* Stats grid */}
            <div
              ref={addReveal}
              className="reveal d4"
              style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
            >
              {[
                { num: "500+", label: "Families Served" },
                { num: "4.9\u2605", label: "Average Rating" },
                { num: "7", label: "Days a Week" },
                { num: "100%", label: "Background Checked" },
              ].map((s) => (
                <div key={s.label} style={{ background: C.white, padding: "22px", borderRadius: "4px", border: `1.5px solid ${C.lightgray}` }}>
                  <div style={{ ...playfair(400, { fontSize: "36px", color: C.sageDk, lineHeight: 1 }) }}>{s.num}</div>
                  <div style={{ ...nunito(700, { fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray, marginTop: "6px" }) }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section id="services" style={{ padding: "96px 56px", background: C.white }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "end", marginBottom: "60px" }}>
          <div>
            <div ref={addReveal} className="reveal">
              <Eyebrow>How We Help</Eyebrow>
            </div>
            <div ref={addReveal} className="reveal d1">
              <SectionTitle>
                Care that fits
                <br />
                <em style={{ fontStyle: "italic", color: C.sageDk }}>their life.</em>
              </SectionTitle>
            </div>
          </div>
          <div ref={addReveal} className="reveal d2">
            <BodyText>
              Every client is different. We build a care plan around their routines, preferences, and needs — not the other way around. Here&apos;s what we offer.
            </BodyText>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
          {services.map((svc, i) => (
            <div
              key={svc.title}
              ref={addReveal}
              className={`reveal d${i + 1} svc-card-hc`}
              style={{
                background: C.warm,
                padding: "32px 26px",
                border: `1.5px solid ${C.lightgray}`,
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: C.sage,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {svc.icon}
              </div>
              <div style={{ ...playfair(500, { fontSize: "17px", color: C.navy2, marginBottom: "10px", lineHeight: 1.3 }) }}>
                {svc.title}
              </div>
              <div style={{ ...nunito(300, { fontSize: "13px", lineHeight: 1.7, color: C.gray }) }}>{svc.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT / WHY ─────────────────────────────────────────────── */}
      <section id="about-us" style={{ padding: "96px 56px", background: C.warm }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Overlapping images */}
          <div ref={addReveal} className="reveal" style={{ position: "relative", height: "580px" }}>
            <img
              src="/images/demos/home-care/HOMECARE3.png"
              alt="Graceful Living care team"
              style={{ position: "absolute", left: 0, top: 0, width: "68%", height: "78%", objectFit: "cover", borderRadius: "2px" }}
            />
            <img
              src="/images/demos/home-care/HOMECARE4.png"
              alt="Compassionate caregiver holding hands"
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                width: "52%",
                height: "52%",
                objectFit: "cover",
                borderRadius: "2px",
                border: `8px solid ${C.warm}`,
                boxShadow: "0 8px 40px rgba(42,61,84,0.1)",
              }}
            />
          </div>

          {/* Text + Why cards */}
          <div>
            <div ref={addReveal} className="reveal">
              <Eyebrow>Our Team</Eyebrow>
            </div>
            <div ref={addReveal} className="reveal d1">
              <SectionTitle>
                People who care
                <br />
                because they <em style={{ fontStyle: "italic", color: C.sageDk }}>truly</em> do.
              </SectionTitle>
            </div>
            <div ref={addReveal} className="reveal d2">
              <BodyText>
                Every caregiver at Graceful Living is selected for more than credentials. We look for warmth, patience, genuine compassion — and the ability to form a real connection with our clients.
              </BodyText>
            </div>

            <div ref={addReveal} className="reveal d3" style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "36px" }}>
              {[
                {
                  icon: <ShieldIcon size={20} />,
                  title: "Thoroughly Vetted & Background-Checked",
                  body: "Every caregiver undergoes a comprehensive background check, reference verification, and skills assessment before joining our team.",
                },
                {
                  icon: <CheckCircleIcon size={20} />,
                  title: "Carefully Matched to Each Client",
                  body: "We take time to understand your loved one's personality and preferences before assigning their caregiver — compatibility matters.",
                },
                {
                  icon: <MailIcon size={20} />,
                  title: "Families Always in the Loop",
                  body: "Regular updates through your preferred channel. You never have to wonder how your loved one is doing — we tell you.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="why-item-hc"
                  style={{
                    display: "flex",
                    gap: "18px",
                    alignItems: "flex-start",
                    padding: "22px",
                    background: C.white,
                    borderRadius: "4px",
                    border: `1.5px solid ${C.lightgray}`,
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: C.sage,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ ...nunito(700, { fontSize: "14px", color: C.navy2, marginBottom: "4px" }) }}>{item.title}</div>
                    <div style={{ ...nunito(300, { fontSize: "13px", lineHeight: 1.65, color: C.gray }) }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section style={{ padding: "96px 56px", background: C.navy }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "end" }}>
          <div>
            <div ref={addReveal} className="reveal">
              <Eyebrow light>Getting Started</Eyebrow>
            </div>
            <div ref={addReveal} className="reveal d1">
              <SectionTitle light>
                Starting care is
                <br />
                <em style={{ fontStyle: "italic", color: C.sageLt }}>simpler than you think.</em>
              </SectionTitle>
            </div>
          </div>
          <div ref={addReveal} className="reveal d2">
            <BodyText light>
              We make it easy to begin. There&apos;s no pressure, no paperwork maze, no long wait. Just a conversation — and a plan.
            </BodyText>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.07)",
            marginTop: "60px",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={addReveal}
              className={`reveal d${i + 1} p-step-hc`}
              style={{ background: C.navy, padding: "40px 32px" }}
            >
              <div style={{ ...playfair(400, { fontSize: "56px", fontStyle: "italic", color: C.sage, opacity: 0.5, lineHeight: 1, marginBottom: "22px" }) }}>
                {step.num}
              </div>
              <div style={{ ...playfair(500, { fontSize: "20px", color: C.white, marginBottom: "10px" }) }}>{step.title}</div>
              <div style={{ ...nunito(300, { fontSize: "13px", lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }) }}>{step.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOR FAMILIES ────────────────────────────────────────────── */}
      <section id="for-families" style={{ padding: "96px 56px", background: C.warm2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Cards */}
          <div>
            <div ref={addReveal} className="reveal">
              <Eyebrow>For Families</Eyebrow>
            </div>
            <div ref={addReveal} className="reveal d1">
              <SectionTitle>
                Peace of mind for
                <br />
                the people who love <em style={{ fontStyle: "italic", color: C.sageDk }}>them most.</em>
              </SectionTitle>
            </div>
            <div ref={addReveal} className="reveal d2">
              <BodyText>
                We know that choosing care for someone you love is one of the most important decisions a family can make. We take that responsibility seriously — and we never forget who we&apos;re really working for.
              </BodyText>
            </div>

            <div ref={addReveal} className="reveal d3" style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "36px" }}>
              {[
                {
                  icon: <MailIcon size={18} color={C.sageDk} />,
                  title: "Regular Family Updates",
                  body: "We communicate through your preferred method — phone, text, or email. You always know what's happening.",
                },
                {
                  icon: <PhoneIcon size={18} color={C.sageDk} />,
                  title: "Always Reachable",
                  body: "Questions don't wait for business hours. Our team is available when you need us, including weekends.",
                },
                {
                  icon: <ShieldIcon size={18} color={C.sageDk} />,
                  title: "No Long-Term Contracts",
                  body: "We earn your trust every day. Our agreements are flexible — because your loved one's needs may change.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: C.white,
                    padding: "24px 28px",
                    borderRadius: "4px",
                    borderLeft: `3px solid ${C.sage}`,
                    display: "flex",
                    gap: "18px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      background: "rgba(127,168,104,0.12)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <div style={{ ...nunito(700, { fontSize: "14px", color: C.navy2, marginBottom: "4px" }) }}>{card.title}</div>
                    <div style={{ ...nunito(300, { fontSize: "13px", lineHeight: 1.65, color: C.gray }) }}>{card.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={addReveal} className="reveal d2">
            <img
              src="/images/demos/home-care/HOMECARE5.png"
              alt="Caregiver helping senior in kitchen"
              style={{ width: "100%", height: "520px", objectFit: "cover", borderRadius: "4px" }}
            />
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────────── */}
      <section style={{ padding: "96px 56px", background: C.white }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div>
            <div ref={addReveal} className="reveal">
              <Eyebrow>Where We Serve</Eyebrow>
            </div>
            <div ref={addReveal} className="reveal d1">
              <SectionTitle>
                Serving Hamilton &
                <br />
                <em style={{ fontStyle: "italic", color: C.sageDk }}>Marion Counties.</em>
              </SectionTitle>
            </div>
            <div ref={addReveal} className="reveal d2">
              <BodyText>
                We serve families throughout the Indianapolis area. Not sure if we cover your location? Just give us a call — we&apos;re happy to help.
              </BodyText>
            </div>

            <div ref={addReveal} className="reveal d3" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "28px" }}>
              {cities.map((city) => (
                <div
                  key={city}
                  className="area-city-hc"
                  style={{
                    ...nunito(600, {
                      fontSize: "12px",
                      letterSpacing: "0.04em",
                      color: C.navy,
                      background: C.warm,
                      border: `1.5px solid ${C.lightgray}`,
                      padding: "8px 16px",
                      borderRadius: "2px",
                      cursor: "pointer",
                    }),
                  }}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* CTA Box */}
            <div ref={addReveal} className="reveal d2" style={{ background: C.navy, padding: "44px", borderRadius: "4px" }}>
              <div style={{ ...playfair(500, { fontSize: "28px", color: C.white, marginBottom: "12px" }) }}>
                Let&apos;s start a conversation.
              </div>
              <div style={{ ...nunito(300, { fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "28px" }) }}>
                A free consultation costs nothing and commits you to nothing. We&apos;d love to learn about your loved one and explain how we can help.
              </div>
              <a href="tel:5554387200" style={{ ...playfair(400, { fontSize: "36px", color: C.sageLt, textDecoration: "none", display: "block", marginBottom: "6px" }) }}>
                (555) 438-7200
              </a>
              <div style={{ ...nunito(400, { fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }) }}>
                Available 7 days a week · Flexible scheduling
              </div>
            </div>

            {/* Hours */}
            <div ref={addReveal} className="reveal d3" style={{ background: C.warm, padding: "28px 32px", marginTop: "16px", border: `1.5px solid ${C.lightgray}`, borderRadius: "4px" }}>
              <div style={{ ...nunito(700, { fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: C.sageDk, marginBottom: "12px" }) }}>
                Availability
              </div>
              {[
                "Monday – Sunday: Available 7 days a week",
                "Flexible scheduling to fit your needs",
                "Evening and weekend care available",
              ].map((line) => (
                <div key={line} style={{ ...nunito(400, { fontSize: "13px", color: C.gray, lineHeight: 2 }) }}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <section id="stories" style={{ padding: "96px 56px", background: C.warm }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px" }}>
          <div>
            <div ref={addReveal} className="reveal">
              <Eyebrow>Family Stories</Eyebrow>
            </div>
            <div ref={addReveal} className="reveal d1">
              <SectionTitle>
                What families say
                <br />
                about <em style={{ fontStyle: "italic", color: C.sageDk }}>Graceful Living.</em>
              </SectionTitle>
            </div>
          </div>
          <div ref={addReveal} className="reveal d2" style={{ textAlign: "right" }}>
            <div style={{ ...playfair(400, { fontSize: "48px", color: C.navy2, lineHeight: 1 }) }}>4.9 ★</div>
            <div style={{ ...nunito(400, { fontSize: "13px", color: C.gray, marginTop: "4px" }) }}>Based on 300+ family reviews</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              ref={addReveal}
              className={`reveal d${i + 1} testi-card-hc`}
              style={{
                background: C.white,
                padding: "36px 32px",
                border: `1.5px solid ${C.lightgray}`,
                borderRadius: "4px",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "18px" }}>
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  ...playfair(400, {
                    fontSize: "16px",
                    fontStyle: "italic",
                    lineHeight: 1.75,
                    color: C.navy2,
                    marginBottom: "24px",
                  }),
                }}
              >
                <span style={{ ...playfair(400, { fontSize: "52px", lineHeight: 0, verticalAlign: "-20px", color: C.sage, opacity: 0.25, marginRight: "2px" }) }}>
                  &ldquo;
                </span>
                {t.quote}
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", borderTop: `1px solid ${C.lightgray}`, paddingTop: "18px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: C.navy,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...playfair(500, { fontSize: "18px", color: C.white }),
                    flexShrink: 0,
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div style={{ ...nunito(700, { fontSize: "14px", color: C.navy2 }) }}>{t.name}</div>
                  <div style={{ ...nunito(400, { fontSize: "11px", color: C.gray, marginTop: "2px" }) }}>{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA / CONTACT ───────────────────────────────────────────── */}
      <section id="contact" style={{ padding: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", minHeight: "520px" }}>
          {/* Left — image + overlay */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src="/images/demos/home-care/HOMECARE2.png"
              alt="Senior at peace at home"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(28,43,60,0.96) 0%, rgba(28,43,60,0.78) 55%, rgba(28,43,60,0.4) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, padding: "64px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ ...nunito(700, { fontSize: "11px", letterSpacing: "0.24em", textTransform: "uppercase", color: C.sageLt, marginBottom: "14px" }) }}>
                Schedule a Consultation
              </div>
              <div style={{ ...playfair(500, { fontSize: "clamp(30px, 3.5vw, 50px)", lineHeight: 1.15, color: C.white, marginBottom: "16px" }) }}>
                Let&apos;s talk about
                <br />
                how we can <em style={{ fontStyle: "italic", color: C.sageLt }}>help.</em>
              </div>
              <p style={{ ...nunito(300, { fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "400px" }) }}>
                A free, no-pressure consultation with our care coordinator. We listen first — and only recommend what your loved one truly needs.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { icon: <PhoneIcon size={15} color={C.sageLt} />, text: "(555) 438-7200", href: "tel:5554387200" },
                  { icon: <MailIcon size={15} color={C.sageLt} />, text: "care@gracefullivingcare.com", href: "mailto:care@gracefullivingcare.com" },
                  { icon: <LocationIcon size={15} color={C.sageLt} />, text: "Indianapolis, IN · Hamilton & Marion Counties" },
                  { icon: <ClockIcon size={15} color={C.sageLt} />, text: "Available 7 days a week · Flexible scheduling" },
                ].map((item) => (
                  <div key={item.text} style={{ ...nunito(400, { fontSize: "13px", color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: "10px" }) }}>
                    {item.icon}
                    {item.href ? (
                      <a href={item.href} style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: C.warm, padding: "64px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ ...playfair(500, { fontSize: "26px", color: C.navy2, marginBottom: "6px" }) }}>
              Schedule a Consultation
            </div>
            <div style={{ ...nunito(300, { fontSize: "13px", color: C.gray, marginBottom: "28px" }) }}>
              We&apos;ll respond within one business day. No pressure, no commitment.
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    ...nunito(400, {
                      fontSize: "13px",
                      background: C.white,
                      border: `1.5px solid ${C.lightgray}`,
                      color: C.navy2,
                      padding: "14px 18px",
                      outline: "none",
                      borderRadius: "2px",
                    }),
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  style={{
                    ...nunito(400, {
                      fontSize: "13px",
                      background: C.white,
                      border: `1.5px solid ${C.lightgray}`,
                      color: C.navy2,
                      padding: "14px 18px",
                      outline: "none",
                      borderRadius: "2px",
                    }),
                  }}
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                style={{
                  ...nunito(400, {
                    fontSize: "13px",
                    background: C.white,
                    border: `1.5px solid ${C.lightgray}`,
                    color: C.navy2,
                    padding: "14px 18px",
                    outline: "none",
                    borderRadius: "2px",
                  }),
                }}
              />
              <input
                type="text"
                placeholder="Your Location (City)"
                style={{
                  ...nunito(400, {
                    fontSize: "13px",
                    background: C.white,
                    border: `1.5px solid ${C.lightgray}`,
                    color: C.navy2,
                    padding: "14px 18px",
                    outline: "none",
                    borderRadius: "2px",
                  }),
                }}
              />
              <select
                defaultValue=""
                style={{
                  ...nunito(400, {
                    fontSize: "13px",
                    background: C.white,
                    border: `1.5px solid ${C.lightgray}`,
                    color: C.navy2,
                    padding: "14px 18px",
                    outline: "none",
                    borderRadius: "2px",
                    appearance: "none" as const,
                  }),
                }}
              >
                <option value="" disabled>Type of Care Needed</option>
                <option>Companionship & Daily Assistance</option>
                <option>Light Housekeeping & Meal Prep</option>
                <option>Medication Reminders</option>
                <option>Transportation & Errands</option>
                <option>Respite Care for Families</option>
                <option>Multiple Services</option>
                <option>Not Sure Yet</option>
              </select>
              <textarea
                placeholder="Tell us a little about your loved one and their situation..."
                style={{
                  ...nunito(400, {
                    fontSize: "13px",
                    background: C.white,
                    border: `1.5px solid ${C.lightgray}`,
                    color: C.navy2,
                    padding: "14px 18px",
                    outline: "none",
                    borderRadius: "2px",
                    resize: "none" as const,
                    height: "90px",
                  }),
                }}
              />
              <button
                style={{
                  ...nunito(700, {
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: C.white,
                    background: C.sage,
                    border: "none",
                    padding: "18px",
                    cursor: "pointer",
                    borderRadius: "2px",
                  }),
                }}
              >
                Request a Free Consultation
              </button>
              <p style={{ ...nunito(400, { fontSize: "11px", color: C.gray, marginTop: "10px", textAlign: "center" }) }}>
                Your information is private and secure · No obligation · Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer style={{ background: C.navy2, padding: "64px 56px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ ...playfair(500, { fontSize: "20px", color: C.white, letterSpacing: "0.01em", marginBottom: "4px" }) }}>
              Graceful Living Home Care
            </div>
            <div style={{ ...nunito(700, { fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.sageLt, marginBottom: "16px" }) }}>
              Indianapolis · Hamilton & Marion Counties
            </div>
            <div style={{ ...nunito(300, { fontSize: "13px", lineHeight: 1.7, color: "rgba(255,255,255,0.38)", maxWidth: "260px" }) }}>
              Compassionate, licensed in-home care for seniors and adults across the Indianapolis area. Because they deserve to feel at home.
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ ...nunito(700, { fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.sageLt, marginBottom: "18px" }) }}>
              Our Services
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Companionship & Assistance", "Housekeeping & Meals", "Medication Reminders", "Transportation", "Respite Care"].map((s) => (
                <li key={s}>
                  <a href="#" style={{ ...nunito(300, { fontSize: "13px", color: "rgba(255,255,255,0.38)", textDecoration: "none" }) }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div style={{ ...nunito(700, { fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.sageLt, marginBottom: "18px" }) }}>
              Company
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {["About Us", "Our Caregivers", "Family Stories", "Service Area", "Careers"].map((s) => (
                <li key={s}>
                  <a href="#" style={{ ...nunito(300, { fontSize: "13px", color: "rgba(255,255,255,0.38)", textDecoration: "none" }) }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ ...nunito(700, { fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.sageLt, marginBottom: "18px" }) }}>
              Contact
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li><a href="tel:5554387200" style={{ ...nunito(300, { fontSize: "13px", color: "rgba(255,255,255,0.38)", textDecoration: "none" }) }}>(555) 438-7200</a></li>
              <li><a href="mailto:care@gracefullivingcare.com" style={{ ...nunito(300, { fontSize: "13px", color: "rgba(255,255,255,0.38)", textDecoration: "none" }) }}>care@gracefullivingcare.com</a></li>
              <li><a href="#" style={{ ...nunito(300, { fontSize: "13px", color: "rgba(255,255,255,0.38)", textDecoration: "none" }) }}>Indianapolis, IN</a></li>
              <li><a href="#" style={{ ...nunito(300, { fontSize: "13px", color: "rgba(255,255,255,0.38)", textDecoration: "none" }) }}>Available 7 Days a Week</a></li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ ...nunito(400, { fontSize: "12px", color: "rgba(255,255,255,0.25)" }) }}>
            &copy; 2026 Graceful Living Home Care. All rights reserved. · Licensed & Insured
          </div>
          <div style={{ ...nunito(400, { fontSize: "12px", color: "rgba(255,255,255,0.2)" }) }}>
            Built by{" "}
            <a href="/" style={{ color: "rgba(255,255,255,0.32)", textDecoration: "none" }}>
              <span style={{ fontWeight: 300 }}>Jador</span><span style={{ fontWeight: 700 }}>Works</span> Web Studio →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
