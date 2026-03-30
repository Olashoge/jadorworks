"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  GreenLine Landscaping — Full One-Page Landscaping Demo             */
/*  Built by JadorWorks Web Studio                                     */
/* ------------------------------------------------------------------ */

// -- colour tokens --
const C = {
  green: "#2D5A3D",
  green2: "#1E3D2A",
  greenLt: "#3D7A52",
  brown: "#8B6F47",
  brownLt: "#A88458",
  stone: "#F5F3EF",
  stone2: "#EAE6DF",
  white: "#FFFFFF",
  gray: "#6B7060",
  lightgray: "#D8D4CB",
};

// -- font helpers --
const outfit = (
  weight: number,
  extra?: React.CSSProperties
): React.CSSProperties => ({
  fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
  fontWeight: weight,
  ...extra,
});

const lora = (
  weight: number,
  extra?: React.CSSProperties
): React.CSSProperties => ({
  fontFamily: "var(--font-lora), 'Lora', serif",
  fontWeight: weight,
  ...extra,
});

// -- image paths --
const IMG = "/images/demos/landscaping";

// -- star SVG path --
const STAR_D = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

/* ================================================================== */
/*  MAIN COMPONENT                                                     */
/* ================================================================== */
export function GreenLineLandscaping() {
  const mainRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // -- scroll reveal via IntersectionObserver --
  useEffect(() => {
    const els = mainRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // -- sticky nav scroll shadow --
  useEffect(() => {
    const handler = () => {
      navRef.current?.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // -- hide custom cursor on demo sites --
  useEffect(() => {
    document.body.style.cursor = "auto";
    const dot = document.querySelector(".cursor-dot") as HTMLElement;
    const ring = document.querySelector(".cursor-ring") as HTMLElement;
    if (dot) dot.style.display = "none";
    if (ring) ring.style.display = "none";
    return () => {
      document.body.style.cursor = "";
      if (dot) dot.style.display = "";
      if (ring) ring.style.display = "";
    };
  }, []);

  return (
    <div ref={mainRef} style={{ ...outfit(400), color: C.green2, background: C.white, overflowX: "hidden" }}>
      {/* -- injected CSS for animations & hover effects -- */}
      <style>{`
        .reveal{opacity:0;transform:translateY(22px);transition:opacity .8s cubic-bezier(0.22,1,0.36,1),transform .8s cubic-bezier(0.22,1,0.36,1)}
        .reveal.on{opacity:1;transform:translateY(0)}
        .d1{transition-delay:.08s}.d2{transition-delay:.16s}.d3{transition-delay:.24s}
        .d4{transition-delay:.32s}.d5{transition-delay:.40s}
        .scrolled{box-shadow:0 2px 20px rgba(30,61,42,.1)!important}

        .port-item img{transition:transform .6s cubic-bezier(0.22,1,0.36,1)}
        .port-item:hover img{transform:scale(1.06)}
        .port-overlay{opacity:0;transition:opacity .35s}
        .port-item:hover .port-overlay{opacity:1}
        .port-label{transform:translateY(8px);opacity:0;transition:transform .35s,opacity .35s}
        .port-item:hover .port-label{transform:translateY(0);opacity:1}

        .svc-card{transition:all .25s cubic-bezier(0.22,1,0.36,1)}
        .svc-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:${C.green};transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(0.22,1,0.36,1)}
        .svc-card:hover{background:${C.green}!important;transform:translateY(-5px);box-shadow:0 12px 40px rgba(30,61,42,.2)}
        .svc-card:hover::after{transform:scaleX(1);background:${C.brownLt}}
        .svc-card:hover .svc-num{color:rgba(255,255,255,.06)!important}
        .svc-card:hover .svc-ico svg{stroke:rgba(255,255,255,.8)!important}
        .svc-card:hover .svc-title{color:${C.white}!important}
        .svc-card:hover .svc-body{color:rgba(255,255,255,.55)!important}
        .svc-card:hover .svc-link{color:${C.brownLt}!important}

        .why-item{transition:all .25s}
        .why-item:hover{border-left-color:${C.green}!important;background:rgba(255,255,255,.8)!important}

        .plan-card{transition:background .25s}
        .plan-card:hover{background:rgba(255,255,255,.06)!important}

        .area-city{transition:all .2s}
        .area-city:hover{background:${C.green}!important;color:${C.white}!important;border-color:${C.green}!important}

        .testi-card{transition:all .25s cubic-bezier(0.22,1,0.36,1)}
        .testi-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:${C.green};transform:scaleX(0);transition:transform .4s cubic-bezier(0.22,1,0.36,1)}
        .testi-card:hover{border-color:${C.green}!important;transform:translateY(-4px);box-shadow:0 12px 40px rgba(30,61,42,.1)}
        .testi-card:hover::before{transform:scaleX(1)}

        .gl-nav-link{transition:color .2s}
        .gl-nav-link:hover{color:${C.greenLt}!important}
        .gl-nav-cta{transition:background .2s}
        .gl-nav-cta:hover{background:${C.greenLt}!important}
        .gl-top-phone{transition:color .2s}
        .gl-top-phone:hover{color:${C.brown}!important}
        .gl-btn-primary{transition:background .2s,transform .2s}
        .gl-btn-primary:hover{background:${C.brown}!important;transform:translateY(-2px)}
        .gl-btn-ghost{transition:all .2s}
        .gl-btn-ghost:hover{border-color:${C.brownLt}!important;color:${C.brownLt}!important}
        .gl-hero-phone{transition:color .2s}
        .gl-hero-phone:hover{color:${C.brownLt}!important}
        .gl-area-phone{transition:color .2s}
        .gl-area-phone:hover{color:${C.brownLt}!important}
        .gl-cta-link{transition:color .2s}
        .gl-cta-link:hover{color:${C.brownLt}!important}
        .gl-input{transition:border-color .2s}
        .gl-input:focus{border-color:${C.green}!important;outline:none}
        .gl-submit{transition:background .2s}
        .gl-submit:hover{background:${C.greenLt}!important}
        .gl-svc-link{transition:color .25s,gap .2s}
        .gl-svc-link:hover{gap:10px!important}
        .gl-footer-link{transition:color .2s}
        .gl-footer-link:hover{color:${C.white}!important}
        .gl-footer-built a{transition:color .2s}
        .gl-footer-built a:hover{color:${C.brownLt}!important}

        /* ===== MOBILE NAV ===== */
        .gl-nav-links{display:flex;gap:32;list-style:none;margin:0;padding:0}
        .gl-nav-cta-desktop{display:block}
        .gl-hamburger{display:none;background:none;border:none;cursor:pointer;padding:8px;flex-direction:column;gap:5px;justify-content:center;align-items:center}
        .gl-hamburger span{display:block;width:24px;height:2px;background:${C.green2};transition:transform .25s,opacity .25s}
        .gl-hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
        .gl-hamburger.open span:nth-child(2){opacity:0}
        .gl-hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
        .gl-mobile-menu{display:none;position:absolute;top:100%;left:0;right:0;background:${C.white};border-bottom:1px solid ${C.lightgray};box-shadow:0 8px 30px rgba(30,61,42,.12);padding:24px;flex-direction:column;gap:16px;z-index:99}
        .gl-mobile-menu.open{display:flex}
        .gl-mobile-menu a{font-size:14px;color:${C.green2};text-decoration:none;letter-spacing:.04em;text-transform:uppercase;padding:8px 0;border-bottom:1px solid ${C.stone2}}
        .gl-mobile-menu button{width:100%;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:${C.white};background:${C.green};border:none;padding:14px;cursor:pointer;margin-top:8px}

        /* ===== RESPONSIVE BREAKPOINTS ===== */
        @media(max-width:768px){
          .gl-hamburger{display:flex}
          .gl-nav-links{display:none!important}
          .gl-nav-cta-desktop{display:none!important}
          .gl-topbar{display:none!important}
          .gl-nav{padding:0 20px!important}
          .gl-hero-content{padding:0 20px!important;max-width:100%!important}
          .gl-hero-phone-text{font-size:22px!important}
          .gl-hero-stats{padding:14px 20px!important;flex-direction:column!important;gap:12px!important;align-items:flex-start!important}
          .gl-hero-stats .gl-stat-divider{display:none!important}
          .gl-hero-stats .gl-stat-item{gap:12px!important}
          .gl-hero-stats .gl-stat-num{font-size:24px!important}
          .gl-trust-bar{padding:14px 20px!important;gap:16px!important;justify-content:flex-start!important}
          .gl-trust-bar .gl-trust-divider{display:none!important}
          .gl-portfolio-header{padding:40px 20px 32px!important;grid-template-columns:1fr!important;gap:20px!important}
          .gl-portfolio-grid{grid-template-columns:1fr!important}
          .gl-portfolio-grid .gl-port-wide{grid-column:span 1!important}
          .gl-portfolio-btn{padding:28px 20px!important}
          .gl-services-section{padding:56px 20px!important}
          .gl-services-header{grid-template-columns:1fr!important;gap:20px!important}
          .gl-services-grid{grid-template-columns:1fr!important}
          .gl-about-section{padding:56px 20px!important}
          .gl-about-grid{grid-template-columns:1fr!important;gap:40px!important}
          .gl-about-images{height:320px!important}
          .gl-seasonal-section{padding:56px 20px!important}
          .gl-seasonal-header{grid-template-columns:1fr!important;gap:20px!important}
          .gl-seasonal-grid{grid-template-columns:1fr!important}
          .gl-area-section{padding:56px 20px!important}
          .gl-area-grid{grid-template-columns:1fr!important;gap:40px!important}
          .gl-area-phone-text{font-size:28px!important}
          .gl-testimonials-section{padding:56px 20px!important}
          .gl-testimonials-header{flex-direction:column!important;align-items:flex-start!important;gap:16px!important}
          .gl-testimonials-rating{text-align:left!important}
          .gl-testimonials-grid{grid-template-columns:1fr!important}
          .gl-contact-grid{grid-template-columns:1fr!important}
          .gl-contact-left{min-height:380px!important}
          .gl-contact-left-inner{padding:40px 20px!important}
          .gl-contact-right{padding:40px 20px!important}
          .gl-contact-form-row{grid-template-columns:1fr!important}
          .gl-footer{padding:40px 20px 24px!important}
          .gl-footer-grid{grid-template-columns:1fr!important;gap:32px!important}
          .gl-footer-bottom{flex-direction:column!important;text-align:center!important}
          .gl-hero-buttons .gl-btn-primary,.gl-hero-buttons .gl-btn-ghost{width:100%!important;justify-content:center!important;text-align:center!important}
        }
        @media(min-width:769px) and (max-width:1024px){
          .gl-topbar{padding:9px 28px!important}
          .gl-nav{padding:0 28px!important}
          .gl-hero-content{padding:0 28px!important}
          .gl-hero-stats{padding:16px 28px!important}
          .gl-trust-bar{padding:16px 28px!important}
          .gl-portfolio-header{padding:60px 28px 40px!important}
          .gl-portfolio-btn{padding:32px 28px!important}
          .gl-services-section{padding:72px 28px!important}
          .gl-services-grid{grid-template-columns:repeat(3,1fr)!important}
          .gl-about-section{padding:72px 28px!important}
          .gl-seasonal-section{padding:72px 28px!important}
          .gl-seasonal-grid{grid-template-columns:repeat(2,1fr)!important}
          .gl-area-section{padding:72px 28px!important}
          .gl-testimonials-section{padding:72px 28px!important}
          .gl-contact-left-inner{padding:48px 28px!important}
          .gl-contact-right{padding:48px 28px!important}
          .gl-footer{padding:48px 28px 28px!important}
          .gl-footer-grid{grid-template-columns:1fr 1fr!important;gap:32px!important}
        }
        @media(max-width:480px){
          .gl-hero-section{min-height:500px!important;height:auto!important}
          .gl-hero-h1{font-size:clamp(36px,10vw,50px)!important}
          .gl-area-cta-box{padding:28px 20px!important}
          .gl-area-phone-text{font-size:24px!important}
        }
      `}</style>

      {/* =========== 1. DEMO BANNER =========== */}
      <div style={{ background: C.green2, textAlign: "center", padding: "8px 16px", fontSize: 12, letterSpacing: ".08em", color: "rgba(255,255,255,.45)", ...outfit(500) }}>
        This is a demo site built by{" "}
        <a href="https://jadorworks.com" target="_blank" rel="noopener noreferrer" style={{ color: C.brownLt, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, ...outfit(600) }}>
          <svg width="10" height="16" viewBox="0 0 28 44" fill="none"><rect x="0" y="0" width="12" height="12" fill={C.brownLt}/><rect x="16" y="0" width="12" height="12" fill={C.brownLt}/><rect x="16" y="16" width="12" height="12" fill={C.brownLt}/><rect x="16" y="32" width="12" height="12" fill={C.brownLt}/><rect x="0" y="32" width="12" height="12" fill={C.brownLt}/></svg>
          <span><span style={{ fontWeight: 300 }}>Jador</span><span style={{ fontWeight: 700 }}>Works</span> Web Studio</span>
        </a>
      </div>

      {/* =========== 2. TOP BAR =========== */}
      <div className="gl-topbar" style={{ background: C.stone2, padding: "9px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${C.lightgray}` }}>
        <div style={{ display: "flex", gap: 28 }}>
          <span style={{ fontSize: 12, color: C.gray }}>Indianapolis, IN &middot; Hendricks &amp; Marion Counties</span>
          <span style={{ fontSize: 12, color: C.gray }}>Mon&ndash;Sat 7am&ndash;6pm &middot; Seasonal Hours May Vary</span>
        </div>
        <a href="tel:5552749600" className="gl-top-phone" style={{ fontSize: 13, color: C.green, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, ...outfit(700) }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>
          (555) 274-9600
        </a>
      </div>

      {/* =========== 3. NAV =========== */}
      <nav ref={navRef} className="gl-nav" style={{ background: C.white, padding: "0 56px", height: 74, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, borderBottom: `1px solid ${C.lightgray}`, transition: "box-shadow .25s" }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, background: C.green, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: "white" }}><path d="M17 8C8 10 5.9 16.17 3.82 21H5.71c.51-1.2 1.06-2.38 1.7-3.47 1.56.02 3.12.26 4.59.89 2.85 1.22 5.07 3.78 5.39 6.84l2-.22c-.31-2.82-1.79-5.27-3.86-7.06C18.77 17.07 21 16 21 16c0-6-4.18-8-4-8z"/></svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 18, color: C.green2, letterSpacing: "-.01em", lineHeight: 1, ...outfit(800) }}>GreenLine</div>
            <div style={{ fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", color: C.brown, ...outfit(600) }}>Landscaping &middot; Est. 2014</div>
          </div>
        </a>
        <ul className="gl-nav-links" style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
          {[
            { label: "Services", href: "#services" },
            { label: "Our Work", href: "#portfolio" },
            { label: "About", href: "#about" },
            { label: "Reviews", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <li key={l.label}>
              <a href={l.href} className="gl-nav-link" style={{ fontSize: 13, color: C.green2, textDecoration: "none", letterSpacing: ".04em", textTransform: "uppercase", ...outfit(600) }}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button className="gl-nav-cta gl-nav-cta-desktop" style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: C.white, background: C.green, border: "none", padding: "13px 26px", cursor: "pointer", ...outfit(700) }}>Request a Quote</button>
        <button className={`gl-hamburger${mobileNavOpen ? " open" : ""}`} onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <div className={`gl-mobile-menu${mobileNavOpen ? " open" : ""}`} style={outfit(600)}>
          {[
            { label: "Services", href: "#services" },
            { label: "Our Work", href: "#portfolio" },
            { label: "About", href: "#about" },
            { label: "Reviews", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMobileNavOpen(false)}>{l.label}</a>
          ))}
          <button onClick={() => setMobileNavOpen(false)} style={outfit(700)}>Request a Quote</button>
        </div>
      </nav>

      {/* =========== 4. HERO =========== */}
      <section className="gl-hero-section" style={{ position: "relative", height: "94vh", minHeight: 640, overflow: "hidden", display: "flex", alignItems: "center", padding: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMG}/LANDSCAPE7.png)`, backgroundSize: "cover", backgroundPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(30,61,42,.93) 0%, rgba(30,61,42,.78) 45%, rgba(30,61,42,.35) 100%)" }} />
        <div className="gl-hero-content" style={{ position: "relative", zIndex: 2, padding: "0 56px", maxWidth: 680 }}>
          <div style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: C.brownLt, marginBottom: 22, display: "flex", alignItems: "center", gap: 14, ...outfit(700) }}>
            <span style={{ width: 28, height: 2, background: C.brownLt, flexShrink: 0, display: "inline-block" }} />
            Indianapolis Landscaping Experts
          </div>
          <h1 className="gl-hero-h1" style={{ fontSize: "clamp(50px,6.5vw,84px)", lineHeight: .95, letterSpacing: "-.02em", color: C.white, textTransform: "uppercase", marginBottom: 20, ...outfit(900) }}>
            A Landscape That<br />Works As <span style={{ color: C.brownLt }}>Hard</span><br />As You Do.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.7)", maxWidth: 500, marginBottom: 40, ...outfit(300) }}>
            Professional landscaping, lawn care, and hardscaping for homeowners who want to look their best — year-round, every season.
          </p>
          <div className="gl-hero-buttons" style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 56, flexWrap: "wrap" as const }}>
            <button className="gl-btn-primary" style={{ fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase", color: C.white, background: C.greenLt, border: "none", padding: "18px 36px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, ...outfit(700) }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Request a Free Quote
            </button>
            <button className="gl-btn-ghost" style={{ fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase", color: C.white, background: "none", border: "2px solid rgba(255,255,255,.4)", padding: "16px 32px", cursor: "pointer", ...outfit(600) }}>View Our Work</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.15)" }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.45)", ...outfit(700) }}>Call or Text Anytime</div>
              <a href="tel:5552749600" className="gl-hero-phone gl-hero-phone-text" style={{ fontSize: 28, color: C.white, textDecoration: "none", letterSpacing: ".02em", ...outfit(900) }}>(555) 274-9600</a>
            </div>
          </div>
        </div>
        {/* Hero bottom stats bar */}
        <div className="gl-hero-stats" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3, background: "rgba(30,61,42,.92)", backdropFilter: "blur(8px)", padding: "18px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" as const }}>
          {[
            { num: "10+", label: "Years Serving Indianapolis" },
            { num: "600+", label: "Properties Maintained" },
            { num: "4.9\u2605", label: "Google Rating" },
            { num: "52", label: "Weeks of Service" },
          ].map((s, i) => (
            <div key={s.label} style={{ display: "contents" }}>
              {i > 0 && <div className="gl-stat-divider" style={{ width: 1, height: 32, background: "rgba(255,255,255,.15)" }} />}
              <div className="gl-stat-item" style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div className="gl-stat-num" style={{ fontSize: 32, color: C.white, lineHeight: 1, ...outfit(900) }}>{s.num}</div>
                <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", ...outfit(600) }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========== 5. TRUST BAR =========== */}
      <div className="gl-trust-bar" style={{ background: C.brown, padding: "18px 56px", display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" as const }}>
        {[
          { icon: <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "rgba(255,255,255,.85)", flexShrink: 0 }}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>, label: "Seasonal Service Plans" },
          { icon: <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "rgba(255,255,255,.85)", flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>, label: "Design + Install" },
          { icon: <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "rgba(255,255,255,.85)", flexShrink: 0 }}><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>, label: "Reliable Weekly Scheduling" },
          { icon: <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "rgba(255,255,255,.85)", flexShrink: 0 }}><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>, label: "Licensed & Insured" },
        ].map((t, i) => (
          <div key={t.label} style={{ display: "contents" }}>
            {i > 0 && <div className="gl-trust-divider" style={{ width: 1, height: 18, background: "rgba(255,255,255,.3)" }} />}
            <div style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: C.white, display: "flex", alignItems: "center", gap: 10, ...outfit(700) }}>
              {t.icon}
              {t.label}
            </div>
          </div>
        ))}
      </div>

      {/* =========== 6. PORTFOLIO / GALLERY =========== */}
      <section id="portfolio" style={{ background: C.stone, padding: 0 }}>
        <div className="gl-portfolio-header" style={{ padding: "80px 56px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end" }}>
          <div>
            <div className="reveal" style={{ fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: C.brown, marginBottom: 12, display: "flex", alignItems: "center", gap: 12, ...outfit(700) }}>
              <span style={{ width: 24, height: 2, background: C.brown, flexShrink: 0, display: "inline-block" }} />
              Our Work
            </div>
            <h2 className="reveal d1" style={{ fontSize: "clamp(34px,4vw,54px)", lineHeight: 1, letterSpacing: "-.02em", textTransform: "uppercase", color: C.green2, marginBottom: 16, ...outfit(900) }}>
              Your Yard,<br /><span style={{ color: C.greenLt }}>Elevated.</span>
            </h2>
          </div>
          <p className="reveal d2" style={{ fontSize: 16, lineHeight: 1.75, color: C.gray, maxWidth: 560, ...outfit(300) }}>
            Every project starts with a conversation and ends with a yard that turns heads. Here&apos;s a sample of what we&apos;ve built across Indianapolis and surrounding communities.
          </p>
        </div>
        <div className="gl-portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 3 }}>
          {/* Row 1: wide + single */}
          <PortfolioItem wide src={`${IMG}/LANDSCAPE7.png`} alt="Full landscape design aerial" type="Full Design" name="Complete Landscape Installation" cls="reveal d1" h={440} />
          <PortfolioItem src={`${IMG}/LANDSCAPE1.png`} alt="Night landscape lighting water feature" type="Lighting & Water" name="Evening Garden Feature" cls="reveal d2" h={340} />
          {/* Row 2: single + single + wide */}
          <PortfolioItem src={`${IMG}/LANDSCAPE5.png`} alt="Hardscape patio fire pit" type="Hardscaping" name="Stone Patio & Fire Pit" cls="reveal d1" h={340} />
          <PortfolioItem src={`${IMG}/LANDSCAPE3.png`} alt="Flower bed installation" type="Planting" name="Perennial Garden Design" cls="reveal d2" h={340} />
          <PortfolioItem wide src={`${IMG}/LANDSCAPE6.png`} alt="Before and after backyard" type="Before & After" name="Full Backyard Transformation" cls="reveal d3" h={440} />
        </div>
        <div className="gl-portfolio-btn" style={{ padding: "40px 56px", display: "flex", justifyContent: "center" }}>
          <button className="gl-btn-primary" style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: C.white, background: C.greenLt, border: "none", padding: "18px 36px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, ...outfit(700) }}>View Full Portfolio</button>
        </div>
      </section>

      {/* =========== 7. SERVICES =========== */}
      <section id="services" className="gl-services-section" style={{ background: C.white, padding: "96px 56px" }}>
        <div className="gl-services-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 60 }}>
          <div>
            <div className="reveal" style={{ fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: C.brown, marginBottom: 12, display: "flex", alignItems: "center", gap: 12, ...outfit(700) }}>
              <span style={{ width: 24, height: 2, background: C.brown, flexShrink: 0, display: "inline-block" }} />
              What We Do
            </div>
            <h2 className="reveal d1" style={{ fontSize: "clamp(34px,4vw,54px)", lineHeight: 1, letterSpacing: "-.02em", textTransform: "uppercase", color: C.green2, marginBottom: 16, ...outfit(900) }}>
              Every Service<br />Your Yard <span style={{ color: C.greenLt }}>Needs.</span>
            </h2>
          </div>
          <p className="reveal d2" style={{ fontSize: 16, lineHeight: 1.75, color: C.gray, maxWidth: 560, ...outfit(300) }}>
            From weekly mowing to full landscape design and hardscaping — we handle every aspect of your outdoor space so you don&apos;t have to.
          </p>
        </div>
        <div className="gl-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 3, background: C.stone2, border: `3px solid ${C.stone2}` }}>
          {[
            { num: "01", title: "Lawn Maintenance & Mowing", body: "Consistent, professional mowing, edging, trimming, and cleanup. Your lawn looking sharp every single week.", icon: <svg viewBox="0 0 48 48" style={svcIcoStyle}><path d="M8 36 Q24 20 40 36"/><path d="M16 28 Q24 16 32 28"/><line x1="24" y1="36" x2="24" y2="44"/><line x1="16" y1="44" x2="32" y2="44"/></svg>, d: "d1" },
            { num: "02", title: "Landscape Design & Installation", body: "Custom designs using plants, trees, shrubs, and beds that thrive in Indiana's climate and enhance your curb appeal.", icon: <svg viewBox="0 0 48 48" style={svcIcoStyle}><path d="M12 38 L24 14 L36 38"/><path d="M8 38 L40 38"/><path d="M18 26 Q24 18 30 26"/></svg>, d: "d2" },
            { num: "03", title: "Hardscaping", body: "Patios, walkways, retaining walls, fire pits, and outdoor living spaces built to last for decades.", icon: <svg viewBox="0 0 48 48" style={svcIcoStyle}><rect x="8" y="28" width="32" height="12"/><path d="M12 28 L16 16 L32 16 L36 28"/><line x1="20" y1="16" x2="20" y2="28"/><line x1="28" y1="16" x2="28" y2="28"/></svg>, d: "d3" },
            { num: "04", title: "Seasonal Cleanup", body: "Spring and fall cleanups, leaf removal, bed prep, and winterization to keep your property looking great year-round.", icon: <svg viewBox="0 0 48 48" style={svcIcoStyle}><path d="M8 36 L20 20 Q24 12 28 20 L40 36"/><path d="M8 40 L40 40"/><path d="M16 28 L24 20 L32 28"/></svg>, d: "d4" },
            { num: "05", title: "Irrigation Systems", body: "Design, installation, and maintenance of smart irrigation systems that keep your lawn healthy and your water bills low.", icon: <svg viewBox="0 0 48 48" style={svcIcoStyle}><circle cx="24" cy="24" r="12"/><path d="M24 12 L24 8"/><path d="M24 40 L24 36"/><path d="M12 24 L8 24"/><path d="M40 24 L36 24"/><path d="M16.7 16.7 L13.9 13.9"/><path d="M34.1 34.1 L31.3 31.3"/></svg>, d: "d5" },
          ].map((svc) => (
            <div key={svc.num} className={`svc-card reveal ${svc.d}`} style={{ background: C.white, padding: "36px 26px", position: "relative", overflow: "hidden", cursor: "default" }}>
              <div className="svc-num" style={{ fontSize: 52, color: "rgba(30,61,42,.05)", lineHeight: 1, marginBottom: 16, ...outfit(900) }}>{svc.num}</div>
              <div className="svc-ico" style={{ marginBottom: 16 }}>{svc.icon}</div>
              <div className="svc-title" style={{ fontSize: 16, textTransform: "uppercase", letterSpacing: ".04em", color: C.green2, marginBottom: 10, ...outfit(800) }}>{svc.title}</div>
              <div className="svc-body" style={{ fontSize: 13, lineHeight: 1.65, color: C.gray, marginBottom: 18, ...outfit(300) }}>{svc.body}</div>
              <a href="#contact" className="svc-link gl-svc-link" style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: C.greenLt, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, ...outfit(700) }}>Get a Quote &rarr;</a>
            </div>
          ))}
        </div>
      </section>

      {/* =========== 8. ABOUT =========== */}
      <section id="about" className="gl-about-section" style={{ background: C.stone, padding: "96px 56px" }}>
        <div className="gl-about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div className="reveal gl-about-images" style={{ position: "relative", height: 580 }}>
            <img src={`${IMG}/LANDSCAPE2.png`} alt="Perfect front yard lawn" style={{ position: "absolute", left: 0, top: 0, width: "68%", height: "76%", objectFit: "cover", objectPosition: "center" }} />
            <img src={`${IMG}/LANDSCAPE4.png`} alt="GreenLine crew at work" style={{ position: "absolute", right: 0, bottom: 0, width: "54%", height: "54%", objectFit: "cover", border: `8px solid ${C.stone}`, boxShadow: "0 8px 40px rgba(30,61,42,.12)" }} />
            <div style={{ position: "absolute", left: 0, bottom: 0, background: C.green, padding: "24px 28px", textAlign: "center" }}>
              <div style={{ fontSize: 44, color: C.white, lineHeight: 1, ...outfit(900) }}>10+</div>
              <div style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.7)", marginTop: 4, ...outfit(700) }}>Years of<br />Excellence</div>
            </div>
          </div>
          <div>
            <div className="reveal" style={{ fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: C.brown, marginBottom: 12, display: "flex", alignItems: "center", gap: 12, ...outfit(700) }}>
              <span style={{ width: 24, height: 2, background: C.brown, flexShrink: 0, display: "inline-block" }} />
              About GreenLine
            </div>
            <h2 className="reveal d1" style={{ fontSize: "clamp(34px,4vw,54px)", lineHeight: 1, letterSpacing: "-.02em", textTransform: "uppercase", color: C.green2, marginBottom: 16, ...outfit(900) }}>
              Shaping Outdoor<br />Spaces That <span style={{ color: C.greenLt }}>Last.</span>
            </h2>
            <p className="reveal d2" style={{ fontSize: 16, lineHeight: 1.75, color: C.gray, maxWidth: 560, ...outfit(300) }}>
              GreenLine Landscaping has been transforming outdoor spaces across the Indianapolis area for over 10 years. We&apos;re a local team that takes pride in showing up on time, doing the work right, and treating every property like it&apos;s our own.
            </p>
            <div className="reveal d3" style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 36 }}>
              {[
                { icon: <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "white" }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>, title: "We Show Up — Every Time", body: "Reliable weekly scheduling you can set your calendar by. No no-shows, no excuses." },
                { icon: <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "white" }}><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>, title: "Licensed, Insured & Background-Checked", body: "Every member of our crew is licensed, insured, and trusted to be on your property." },
                { icon: <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "white" }}><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>, title: "Transparent, Flat-Rate Pricing", body: "No surprise invoices. You know what you're paying before we start, and we stick to it." },
              ].map((w) => (
                <div key={w.title} className="why-item" style={{ display: "flex", gap: 18, alignItems: "flex-start", padding: 20, background: C.white, borderLeft: "3px solid transparent" }}>
                  <div style={{ width: 42, height: 42, background: C.green, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{w.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: ".04em", color: C.green2, marginBottom: 4, ...outfit(800) }}>{w.title}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.65, color: C.gray, ...outfit(300) }}>{w.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========== 9. SEASONAL PLANS =========== */}
      <section className="gl-seasonal-section" style={{ background: C.green2, padding: "96px 56px" }}>
        <div className="gl-seasonal-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 56 }}>
          <div>
            <div className="reveal" style={{ fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: C.brownLt, marginBottom: 12, display: "flex", alignItems: "center", gap: 12, ...outfit(700) }}>
              <span style={{ width: 24, height: 2, background: C.brownLt, flexShrink: 0, display: "inline-block" }} />
              Seasonal Services
            </div>
            <h2 className="reveal d1" style={{ fontSize: "clamp(34px,4vw,54px)", lineHeight: 1, letterSpacing: "-.02em", textTransform: "uppercase", color: C.white, marginBottom: 16, ...outfit(900) }}>
              We Work Every<br />Season <span style={{ color: C.brownLt }}>You Do.</span>
            </h2>
          </div>
          <p className="reveal d2" style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.5)", maxWidth: 560, ...outfit(300) }}>
            Indiana yards need attention in every season. We provide consistent, reliable service all year long — so your property always looks its best.
          </p>
        </div>
        <div className="gl-seasonal-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3, background: "rgba(255,255,255,.08)", border: "3px solid rgba(255,255,255,.08)" }}>
          {[
            { season: "Spring", title: "Spring Startup", items: ["Spring cleanup & bed prep", "Mulch installation", "Fertilization program start", "Irrigation startup & check", "Mowing season begins"], d: "d1" },
            { season: "Summer", title: "Summer Maintenance", items: ["Weekly mowing & edging", "Fertilization treatments", "Weed control", "Irrigation monitoring", "Pruning & trimming"], d: "d2" },
            { season: "Fall", title: "Fall Cleanup", items: ["Leaf removal & hauling", "Bed cleanup & cut-back", "Winterizer fertilization", "Irrigation winterization", "Final mowing & aeration"], d: "d3" },
            { season: "Winter", title: "Winter Prep", items: ["Plant wrapping & protection", "Snow removal services", "Ice management", "Spring planning consultation", "System checks & maintenance"], d: "d4" },
          ].map((p) => (
            <div key={p.season} className={`plan-card reveal ${p.d}`} style={{ background: C.green2, padding: "36px 28px" }}>
              <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: C.brownLt, marginBottom: 16, ...outfit(700) }}>{p.season}</div>
              <div style={{ fontSize: 22, textTransform: "uppercase", color: C.white, marginBottom: 16, letterSpacing: ".02em", ...outfit(900) }}>{p.title}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, margin: 0, padding: 0 }}>
                {p.items.map((item) => (
                  <li key={item} style={{ fontSize: 13, color: "rgba(255,255,255,.55)", display: "flex", alignItems: "center", gap: 10, ...outfit(300) }}>
                    <span style={{ width: 6, height: 6, background: C.brownLt, borderRadius: "50%", flexShrink: 0, display: "inline-block" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* =========== 10. SERVICE AREA =========== */}
      <section className="gl-area-section" style={{ background: C.stone2, padding: "96px 56px" }}>
        <div className="gl-area-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <div className="reveal" style={{ fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: C.brown, marginBottom: 12, display: "flex", alignItems: "center", gap: 12, ...outfit(700) }}>
              <span style={{ width: 24, height: 2, background: C.brown, flexShrink: 0, display: "inline-block" }} />
              Service Area
            </div>
            <h2 className="reveal d1" style={{ fontSize: "clamp(34px,4vw,54px)", lineHeight: 1, letterSpacing: "-.02em", textTransform: "uppercase", color: C.green2, marginBottom: 16, ...outfit(900) }}>
              Serving Hendricks<br />& <span style={{ color: C.greenLt }}>Marion Counties.</span>
            </h2>
            <p className="reveal d2" style={{ fontSize: 16, lineHeight: 1.75, color: C.gray, maxWidth: 560, ...outfit(300) }}>
              We serve homeowners and properties throughout Indianapolis and surrounding communities. Call us to confirm coverage in your area.
            </p>
            <div className="reveal d3" style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginTop: 28 }}>
              {["Indianapolis", "Brownsburg", "Avon", "Plainfield", "Danville", "Speedway", "Clermont", "Pittsboro", "Carmel", "Zionsville", "Fishers", "Westfield"].map((city) => (
                <div key={city} className="area-city" style={{ fontSize: 12, letterSpacing: ".06em", color: C.green2, background: C.white, border: `1.5px solid ${C.lightgray}`, padding: "8px 16px", ...outfit(600) }}>{city}</div>
              ))}
            </div>
          </div>
          <div>
            <div className="reveal d2 gl-area-cta-box" style={{ background: C.green, padding: 44 }}>
              <div style={{ fontSize: 28, textTransform: "uppercase", color: C.white, marginBottom: 12, letterSpacing: "-.01em", ...outfit(900) }}>Ready to Get Started?</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.6)", lineHeight: 1.7, marginBottom: 28, ...outfit(300) }}>Free estimates with no pressure and no commitment. We come to your property, assess what&apos;s needed, and give you a clear quote.</div>
              <a href="tel:5552749600" className="gl-area-phone gl-area-phone-text" style={{ fontSize: 38, color: C.white, textDecoration: "none", display: "block", marginBottom: 6, ...outfit(900) }}>(555) 274-9600</a>
              <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.45)", ...outfit(600) }}>Call or text &middot; Mon&ndash;Sat 7am&ndash;6pm</div>
            </div>
            <div className="reveal d3" style={{ background: C.white, padding: 32, marginTop: 20 }}>
              <div style={{ fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: C.brown, marginBottom: 14, ...outfit(700) }}>Service Hours</div>
              <div style={{ fontSize: 13, color: C.gray, lineHeight: 2 }}>Monday &ndash; Saturday: 7:00am &ndash; 6:00pm</div>
              <div style={{ fontSize: 13, color: C.gray, lineHeight: 2 }}>Sunday: Closed</div>
              <div style={{ fontSize: 13, color: C.gray, lineHeight: 2 }}>Seasonal hours may vary</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== 11. TESTIMONIALS =========== */}
      <section id="testimonials" className="gl-testimonials-section" style={{ background: C.white, padding: "96px 56px" }}>
        <div className="gl-testimonials-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
          <div>
            <div className="reveal" style={{ fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: C.brown, marginBottom: 12, display: "flex", alignItems: "center", gap: 12, ...outfit(700) }}>
              <span style={{ width: 24, height: 2, background: C.brown, flexShrink: 0, display: "inline-block" }} />
              Reviews
            </div>
            <h2 className="reveal d1" style={{ fontSize: "clamp(34px,4vw,54px)", lineHeight: 1, letterSpacing: "-.02em", textTransform: "uppercase", color: C.green2, marginBottom: 16, ...outfit(900) }}>
              What Our Customers<br /><span style={{ color: C.greenLt }}>Say.</span>
            </h2>
          </div>
          <div className="reveal d2 gl-testimonials-rating" style={{ textAlign: "right" }}>
            <div style={{ fontSize: 48, color: C.green2, lineHeight: 1, ...outfit(900) }}>4.9 &#9733;</div>
            <div style={{ fontSize: 13, color: C.gray, marginTop: 4 }}>Based on 500+ verified reviews</div>
          </div>
        </div>
        <div className="gl-testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {[
            { quote: "GreenLine completely transformed our backyard from an overgrown mess into something we actually use every weekend. They were on time, communicated clearly, and the quality of their hardscaping work is exceptional. Our neighbors keep asking who did it.", initials: "C", name: "Chris & Amy F.", loc: "Brownsburg, IN \u00b7 Hardscaping & Design" },
            { quote: "I've had three different lawn services over the years and GreenLine is the only one that shows up exactly when they say they will, every single week. My lawn has never looked better. The mowing patterns alone make my yard the nicest on the street.", initials: "P", name: "Patricia H.", loc: "Avon, IN \u00b7 Weekly Lawn Maintenance" },
            { quote: "They installed a full patio, retaining wall, and garden beds at our new home. The team worked clean, stayed on schedule, and the result is better than I imagined. GreenLine is the only landscaping company I'll ever call in Plainfield.", initials: "D", name: "Darren M.", loc: "Plainfield, IN \u00b7 Full Landscape Install" },
          ].map((t, i) => (
            <div key={t.name} className={`testi-card reveal d${i + 1}`} style={{ background: C.stone, padding: "36px 32px", border: "2px solid transparent", position: "relative", overflow: "hidden" }}>
              <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <svg key={s} viewBox="0 0 24 24" style={{ width: 17, height: 17, fill: C.brown }}><path d={STAR_D} /></svg>
                ))}
              </div>
              <p style={{ fontSize: 16, fontStyle: "italic", lineHeight: 1.7, color: C.green2, marginBottom: 24, ...lora(400) }}>
                <span style={{ fontSize: 52, lineHeight: 0, verticalAlign: -20, color: C.brown, opacity: .3, marginRight: 2 }}>&ldquo;</span>
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: `1px solid ${C.lightgray}`, paddingTop: 18 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.white, flexShrink: 0, ...outfit(900) }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 14, color: C.green2, ...outfit(700) }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: C.gray, marginTop: 2 }}>{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========== 12. CTA / CONTACT =========== */}
      <section id="contact" style={{ padding: 0 }}>
        <div className="gl-contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 520 }}>
          {/* Left: image + overlay */}
          <div className="gl-contact-left" style={{ position: "relative", overflow: "hidden" }}>
            <img src={`${IMG}/LANDSCAPE1.png`} alt="Beautiful night landscape" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(30,61,42,.96) 0%, rgba(30,61,42,.78) 55%, rgba(30,61,42,.4) 100%)" }} />
            <div className="gl-contact-left-inner" style={{ position: "absolute", inset: 0, padding: "64px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: C.brownLt, marginBottom: 14, ...outfit(700) }}>Start Your Project</div>
              <div style={{ fontSize: "clamp(32px,4vw,52px)", textTransform: "uppercase", lineHeight: .95, color: C.white, marginBottom: 16, letterSpacing: "-.02em", ...outfit(900) }}>
                Ready for a Yard<br />You&apos;re <span style={{ color: C.brownLt }}>Proud Of?</span>
              </div>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 400, ...outfit(300) }}>
                Get a free, no-pressure quote from our team. We&apos;ll assess your property and give you a clear plan within 48 hours.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.55)", display: "flex", alignItems: "center", gap: 10 }}>
                  <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, fill: C.brownLt, opacity: .8, flexShrink: 0 }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  <a href="tel:5552749600" className="gl-cta-link" style={{ color: "rgba(255,255,255,.55)", textDecoration: "none" }}>(555) 274-9600</a>
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.55)", display: "flex", alignItems: "center", gap: 10 }}>
                  <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, fill: C.brownLt, opacity: .8, flexShrink: 0 }}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  <a href="mailto:info@greenlinelandscaping.com" className="gl-cta-link" style={{ color: "rgba(255,255,255,.55)", textDecoration: "none" }}>info@greenlinelandscaping.com</a>
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.55)", display: "flex", alignItems: "center", gap: 10 }}>
                  <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, fill: C.brownLt, opacity: .8, flexShrink: 0 }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                  Hendricks &amp; Marion Counties, Indianapolis IN
                </div>
              </div>
            </div>
          </div>
          {/* Right: form */}
          <div className="gl-contact-right" style={{ background: C.stone, padding: "64px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: 26, textTransform: "uppercase", color: C.green2, marginBottom: 6, letterSpacing: "-.01em", ...outfit(900) }}>Request a Free Quote</div>
            <div style={{ fontSize: 13, color: C.gray, marginBottom: 28 }}>We&apos;ll respond within one business day.</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="gl-contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <input type="text" className="gl-input" placeholder="Your Name" style={inputStyle} />
                <input type="tel" className="gl-input" placeholder="Phone Number" style={inputStyle} />
              </div>
              <input type="email" className="gl-input" placeholder="Email Address" style={inputStyle} />
              <input type="text" className="gl-input" placeholder="Property Address or City" style={inputStyle} />
              <select className="gl-input" defaultValue="" style={{ ...inputStyle, appearance: "none" as const, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%232D5A3D' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                <option value="" disabled>Service Needed</option>
                <option>Lawn Maintenance &amp; Mowing</option>
                <option>Landscape Design &amp; Installation</option>
                <option>Hardscaping</option>
                <option>Seasonal Cleanup</option>
                <option>Irrigation Systems</option>
                <option>Multiple Services</option>
              </select>
              <textarea className="gl-input" placeholder="Tell us about your yard and what you're hoping to achieve..." style={{ ...inputStyle, resize: "none" as const, height: 100 }} />
              <button className="gl-submit" style={{ fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", color: C.white, background: C.green, border: "none", padding: 18, cursor: "pointer", ...outfit(700) }}>Request My Free Quote</button>
              <p style={{ fontSize: 11, color: C.gray, marginTop: 10, textAlign: "center" }}>No pressure &middot; No commitment &middot; Response within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========== 13. FOOTER =========== */}
      <footer className="gl-footer" style={{ background: C.green2, padding: "64px 56px 32px" }}>
        <div className="gl-footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ fontSize: 20, color: C.white, textTransform: "uppercase", letterSpacing: "-.01em", marginBottom: 4, ...outfit(900) }}>GreenLine Landscaping</div>
            <div style={{ fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: C.brownLt, marginBottom: 16, ...outfit(700) }}>Indianapolis &middot; Est. 2014</div>
            <div style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,.4)", maxWidth: 260, ...outfit(300) }}>Professional landscaping, lawn care, and hardscaping for homeowners and properties across the Indianapolis metro. Licensed, insured, and trusted for over 10 years.</div>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: C.brownLt, marginBottom: 18, ...outfit(700) }}>Services</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, margin: 0, padding: 0 }}>
              {["Lawn Maintenance", "Landscape Design", "Hardscaping", "Seasonal Cleanup", "Irrigation Systems"].map((s) => (
                <li key={s}><a href="#" className="gl-footer-link" style={{ fontSize: 13, color: "rgba(255,255,255,.4)", textDecoration: "none", ...outfit(300) }}>{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: C.brownLt, marginBottom: 18, ...outfit(700) }}>Company</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, margin: 0, padding: 0 }}>
              {["About Us", "Our Portfolio", "Reviews", "Service Area", "Contact"].map((s) => (
                <li key={s}><a href="#" className="gl-footer-link" style={{ fontSize: 13, color: "rgba(255,255,255,.4)", textDecoration: "none", ...outfit(300) }}>{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: C.brownLt, marginBottom: 18, ...outfit(700) }}>Contact</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, margin: 0, padding: 0 }}>
              <li><a href="tel:5552749600" className="gl-footer-link" style={{ fontSize: 13, color: "rgba(255,255,255,.4)", textDecoration: "none", ...outfit(300) }}>(555) 274-9600</a></li>
              <li><a href="mailto:info@greenlinelandscaping.com" className="gl-footer-link" style={{ fontSize: 13, color: "rgba(255,255,255,.4)", textDecoration: "none", ...outfit(300) }}>info@greenlinelandscaping.com</a></li>
              <li><a href="#" className="gl-footer-link" style={{ fontSize: 13, color: "rgba(255,255,255,.4)", textDecoration: "none", ...outfit(300) }}>Brownsburg &middot; Avon &middot; Plainfield</a></li>
              <li><a href="#" className="gl-footer-link" style={{ fontSize: 13, color: "rgba(255,255,255,.4)", textDecoration: "none", ...outfit(300) }}>Mon&ndash;Sat 7am&ndash;6pm</a></li>
            </ul>
          </div>
        </div>
        <div className="gl-footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 12 }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.28)" }}>&copy; 2026 GreenLine Landscaping. All rights reserved. &middot; Licensed &amp; Insured</div>
          <div className="gl-footer-built" style={{ fontSize: 12, color: "rgba(255,255,255,.2)" }}>
            Built by <a href="https://jadorworks.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,.35)", textDecoration: "none" }}><span style={{ fontWeight: 300 }}>Jador</span><span style={{ fontWeight: 700 }}>Works</span> Web Studio &rarr;</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================================================================== */
/*  Portfolio Item sub-component                                       */
/* ================================================================== */
function PortfolioItem({ src, alt, type, name, wide, cls, h }: { src: string; alt: string; type: string; name: string; wide?: boolean; cls: string; h: number }) {
  return (
    <div className={`port-item ${cls}${wide ? " gl-port-wide" : ""}`} style={{ position: "relative", overflow: "hidden", cursor: "pointer", ...(wide ? { gridColumn: "span 2" } : {}) }}>
      <img src={src} alt={alt} style={{ width: "100%", height: h, objectFit: "cover", display: "block" }} />
      <div className="port-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,61,42,.85) 0%, transparent 55%)" }} />
      <div className="port-label" style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 22px" }}>
        <div style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: C.brownLt, marginBottom: 4, ...outfit(700) }}>{type}</div>
        <div style={{ fontSize: 18, textTransform: "uppercase", color: C.white, ...outfit(800) }}>{name}</div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Shared style objects                                               */
/* ================================================================== */
const svcIcoStyle: React.CSSProperties = {
  width: 36,
  height: 36,
  stroke: C.green,
  fill: "none",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  transition: "stroke .25s",
};

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
  fontSize: 13,
  fontWeight: 400,
  background: C.white,
  border: `1.5px solid ${C.lightgray}`,
  color: C.green2,
  padding: "14px 18px",
  outline: "none",
};
