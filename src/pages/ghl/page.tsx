import React, { useEffect, useState } from "react";

const GHL_LINK = "https://www.gohighlevel.com/?fp_ref=guruprasad57";

const features = [
  {
    icon: "🤖",
    title: "AI-Powered CRM",
    desc: "Smart contact management with AI that scores leads, predicts churn, and surfaces your hottest opportunities automatically.",
  },
  {
    icon: "📣",
    title: "Omni-Channel Marketing",
    desc: "Email, SMS, WhatsApp, Facebook, Google Ads — build and automate every campaign from one unified dashboard.",
  },
  {
    icon: "🔁",
    title: "Drag-and-Drop Automation",
    desc: "Visual workflow builder lets you create complex nurture sequences, follow-ups, and pipelines without writing a single line of code.",
  },
  {
    icon: "📅",
    title: "Appointment Booking",
    desc: "Calendars, reminders, round-robin routing, and automated confirmations — zero no-shows, zero manual scheduling.",
  },
  {
    icon: "🌐",
    title: "Funnels & Websites",
    desc: "High-converting landing pages and full websites with built-in A/B testing, payment gateways, and form builders.",
  },
  {
    icon: "⭐",
    title: "Reputation Management",
    desc: "Auto-request Google and Facebook reviews after every job. Monitor and respond to reviews without leaving GHL.",
  },
  {
    icon: "📊",
    title: "Reporting & Analytics",
    desc: "Real-time dashboards for ad spend, pipeline value, conversion rates, and team performance — all in one view.",
  },
  {
    icon: "🏷️",
    title: "White-Label & Resell",
    desc: "Rebrand GHL as your own SaaS. Charge clients monthly and keep 100% of the revenue — unlimited sub-accounts.",
  },
];

const testimonials = [
  {
    name: "Rahul M.",
    role: "Digital Marketing Agency, Mumbai",
    quote:
      "We replaced 7 tools with GHL. Our team saves 20+ hours per week and our client retention jumped 40% in 3 months.",
    stars: 5,
  },
  {
    name: "Sarah K.",
    role: "Local Business Coach, UK",
    quote:
      "The automation alone is worth every penny. My sales pipeline runs on autopilot while I focus on coaching my clients.",
    stars: 5,
  },
  {
    name: "James T.",
    role: "E-commerce Consultant, US",
    quote:
      "GHL's white-label feature turned my agency into a SaaS business. I now have 30 paying clients on my own branded platform.",
    stars: 5,
  },
];

const compared = [
  { tool: "HubSpot CRM", price: "$800+/mo", ghl: "✅ Included" },
  { tool: "ActiveCampaign", price: "$149/mo", ghl: "✅ Included" },
  { tool: "Clickfunnels", price: "$197/mo", ghl: "✅ Included" },
  { tool: "Calendly Pro", price: "$16/mo", ghl: "✅ Included" },
  { tool: "Birdeye (Reviews)", price: "$299/mo", ghl: "✅ Included" },
  { tool: "Twilio SMS", price: "$25+/mo", ghl: "✅ Included" },
];

export default function GHL() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible((prev) => ({ ...prev, [e.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const reveal = (id) =>
    visible[id] ? "ghl-reveal ghl-revealed" : "ghl-reveal";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        :root {
          --gold: #F5C518;
          --gold-light: #FFE168;
          --gold-dark: #C9A000;
          --bg: #080B10;
          --surface: #0E1420;
          --surface2: #141C2E;
          --border: rgba(245,197,24,0.15);
          --text: #E8EAF0;
          --muted: #8A91A8;
          --accent: #F5C518;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .ghl-wrap {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
          color: var(--text);
          overflow-x: hidden;
          min-height: 100vh;
        }

        /* NAV */
        .ghl-nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 18px 6%;
          display: flex; align-items: center; justify-content: space-between;
          transition: background 0.4s, backdrop-filter 0.4s, border-bottom 0.4s;
        }
        .ghl-nav.scrolled {
          background: rgba(8,11,16,0.9);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border);
        }
        .ghl-nav-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 2px;
          color: var(--gold);
        }
        .ghl-nav-logo span { color: #fff; }
        .ghl-nav-cta {
          text-decoration: none;
          background: var(--gold);
          color: #080B10;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.05em;
          padding: 10px 22px;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .ghl-nav-cta:hover { background: var(--gold-light); transform: translateY(-1px); }

        /* HERO */
        .ghl-hero {
          min-height: 100vh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: 120px 6% 80px;
          position: relative;
          overflow: hidden;
        }
        .ghl-hero::before {
          content: '';
          position: absolute;
          top: -200px; left: 50%; transform: translateX(-50%);
          width: 900px; height: 900px;
          background: radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .ghl-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(245,197,24,0.1);
          border: 1px solid rgba(245,197,24,0.3);
          border-radius: 100px;
          padding: 6px 18px;
          font-family: 'Syne', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--gold);
          margin-bottom: 32px;
          text-transform: uppercase;
        }
        .ghl-badge-dot {
          width: 6px; height: 6px;
          background: var(--gold);
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100%{ opacity:1; transform:scale(1); }
          50%{ opacity:0.5; transform:scale(1.4); }
        }
        .ghl-hero h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem, 9vw, 7.5rem);
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: #fff;
          margin-bottom: 24px;
        }
        .ghl-hero h1 .gold { color: var(--gold); }
        .ghl-hero-sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--muted);
          max-width: 600px;
          line-height: 1.7;
          margin-bottom: 48px;
        }
        .ghl-hero-sub strong { color: var(--text); font-weight: 500; }
        .ghl-hero-ctas {
          display: flex; gap: 16px; flex-wrap: wrap; justify-content: center;
          margin-bottom: 70px;
        }
        .ghl-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          text-decoration: none;
          background: var(--gold);
          color: #080B10;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          padding: 18px 36px;
          border-radius: 8px;
          transition: all 0.25s;
          box-shadow: 0 0 40px rgba(245,197,24,0.25);
        }
        .ghl-btn-primary:hover {
          background: var(--gold-light);
          transform: translateY(-3px);
          box-shadow: 0 0 60px rgba(245,197,24,0.4);
        }
        .ghl-btn-secondary {
          display: inline-flex; align-items: center; gap: 10px;
          text-decoration: none;
          border: 1px solid var(--border);
          color: var(--text);
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          padding: 18px 36px;
          border-radius: 8px;
          transition: all 0.25s;
        }
        .ghl-btn-secondary:hover {
          border-color: rgba(245,197,24,0.5);
          color: var(--gold);
        }
        .ghl-hero-stats {
          display: flex; gap: 48px; flex-wrap: wrap; justify-content: center;
        }
        .ghl-stat { text-align: center; }
        .ghl-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.8rem;
          color: var(--gold);
          line-height: 1;
        }
        .ghl-stat-label { font-size: 0.82rem; color: var(--muted); margin-top: 4px; letter-spacing: 0.05em; }

        /* SECTION COMMONS */
        .ghl-section {
          padding: 100px 6%;
        }
        .ghl-section-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 14px;
        }
        .ghl-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          line-height: 1;
          color: #fff;
          margin-bottom: 16px;
          letter-spacing: 0.02em;
        }
        .ghl-section-sub {
          color: var(--muted);
          max-width: 560px;
          line-height: 1.7;
          font-size: 1rem;
        }
        .ghl-section-header { margin-bottom: 60px; }
        .ghl-section-header.center { text-align: center; }
        .ghl-section-header.center .ghl-section-sub { margin: 0 auto; }

        /* FEATURES GRID */
        .ghl-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .ghl-feat-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 32px 28px;
          transition: all 0.3s;
        }
        .ghl-feat-card:hover {
          border-color: rgba(245,197,24,0.4);
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }
        .ghl-feat-icon { font-size: 2rem; margin-bottom: 16px; }
        .ghl-feat-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #fff;
          margin-bottom: 10px;
        }
        .ghl-feat-desc { color: var(--muted); font-size: 0.92rem; line-height: 1.65; }

        /* COMPARISON */
        .ghl-compare-wrap {
          max-width: 900px; margin: 0 auto;
        }
        .ghl-compare-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
        }
        .ghl-compare-table thead {
          background: var(--surface2);
        }
        .ghl-compare-table th {
          padding: 18px 24px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted);
          text-align: left;
        }
        .ghl-compare-table th:last-child { color: var(--gold); }
        .ghl-compare-table td {
          padding: 16px 24px;
          border-top: 1px solid var(--border);
          font-size: 0.95rem;
          color: var(--text);
        }
        .ghl-compare-table tr:hover td { background: rgba(245,197,24,0.03); }
        .ghl-compare-table .price { color: #F87171; font-weight: 500; }
        .ghl-compare-table .included { color: #4ADE80; font-weight: 600; }
        .ghl-compare-total {
          margin-top: 20px;
          display: flex; justify-content: space-between; align-items: center;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 20px 24px;
        }
        .ghl-compare-total-label {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.9rem; color: var(--muted);
        }
        .ghl-compare-total-val { font-size: 1.4rem; font-weight: 600; }
        .ghl-compare-total-val .cross { text-decoration: line-through; color: #F87171; margin-right: 12px; }
        .ghl-compare-total-val .ghl-price { color: var(--gold); font-family: 'Bebas Neue'; font-size: 1.8rem; letter-spacing: 0.04em; }

        /* TESTIMONIALS */
        .ghl-testimonials {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .ghl-testi-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 32px 28px;
          transition: all 0.3s;
        }
        .ghl-testi-card:hover { border-color: rgba(245,197,24,0.4); }
        .ghl-stars { color: var(--gold); font-size: 1.1rem; margin-bottom: 16px; letter-spacing: 2px; }
        .ghl-testi-quote {
          color: var(--text);
          font-size: 0.97rem;
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 24px;
        }
        .ghl-testi-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700; font-size: 0.9rem; color: #fff;
        }
        .ghl-testi-role { font-size: 0.8rem; color: var(--muted); margin-top: 3px; }

        /* CTA SECTION */
        .ghl-cta-section {
          padding: 120px 6%;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ghl-cta-section::before {
          content: '';
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .ghl-cta-box {
          max-width: 760px; margin: 0 auto;
          position: relative; z-index: 1;
        }
        .ghl-cta-box h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          line-height: 1;
          color: #fff;
          margin-bottom: 20px;
        }
        .ghl-cta-box h2 .gold { color: var(--gold); }
        .ghl-cta-box p { color: var(--muted); font-size: 1.05rem; line-height: 1.7; margin-bottom: 40px; }
        .ghl-cta-note { margin-top: 20px; font-size: 0.82rem; color: var(--muted); }
        .ghl-cta-note span { color: #4ADE80; }

        /* FOOTER */
        .ghl-footer {
          border-top: 1px solid var(--border);
          padding: 30px 6%;
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
        }
        .ghl-footer-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem; letter-spacing: 2px; color: var(--gold);
        }
        .ghl-footer-logo span { color: #fff; }
        .ghl-footer-copy { font-size: 0.8rem; color: var(--muted); }
        .ghl-footer-disclaimer {
          font-size: 0.73rem; color: var(--muted); opacity: 0.6;
          max-width: 100%; text-align: center; padding: 0 6% 20px;
        }

        /* DIVIDER */
        .ghl-divider {
          height: 1px; background: var(--border); margin: 0 6%;
        }

        /* REVEAL ANIMATION */
        .ghl-reveal {
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ghl-reveal.ghl-revealed { opacity: 1; transform: none; }

        /* STAGGER */
        .ghl-stagger > *:nth-child(1) { transition-delay: 0s; }
        .ghl-stagger > *:nth-child(2) { transition-delay: 0.08s; }
        .ghl-stagger > *:nth-child(3) { transition-delay: 0.16s; }
        .ghl-stagger > *:nth-child(4) { transition-delay: 0.24s; }
        .ghl-stagger > *:nth-child(5) { transition-delay: 0.32s; }
        .ghl-stagger > *:nth-child(6) { transition-delay: 0.40s; }
        .ghl-stagger > *:nth-child(7) { transition-delay: 0.48s; }
        .ghl-stagger > *:nth-child(8) { transition-delay: 0.56s; }

        @media (max-width: 640px) {
          .ghl-hero h1 { font-size: 3.2rem; }
          .ghl-hero-stats { gap: 28px; }
          .ghl-footer { flex-direction: column; text-align: center; }
        }
      `}</style>

      <div className="ghl-wrap">
        {/* NAV */}
        <nav className={`ghl-nav ${scrolled ? "scrolled" : ""}`}>
          <div className="ghl-nav-logo">HighLevel<span>HQ</span></div>
          <a href={GHL_LINK} target="_blank" rel="noopener noreferrer" className="ghl-nav-cta">
            Start Free Trial →
          </a>
        </nav>

        {/* HERO */}
        <section className="ghl-hero">
          <div className="ghl-hero-badge">
            <span className="ghl-badge-dot" />
            #1 Platform for Marketing Agencies
          </div>
          <h1>
            REPLACE <span className="gold">10 TOOLS.</span><br />
            RUN ONE PLATFORM.
          </h1>
          <p className="ghl-hero-sub">
            GoHighLevel gives agencies and freelancers <strong>CRM, automation, funnels, booking, email, SMS, reputation management</strong> — everything in one roof. Stop paying for 10 tools. Start scaling.
          </p>
          <div className="ghl-hero-ctas">
            <a href={GHL_LINK} target="_blank" rel="noopener noreferrer" className="ghl-btn-primary">
              🚀 Start 14-Day Free Trial
            </a>
            <a href="#features" className="ghl-btn-secondary">
              See What's Inside ↓
            </a>
          </div>
          <div className="ghl-hero-stats">
            <div className="ghl-stat">
              <div className="ghl-stat-num">60K+</div>
              <div className="ghl-stat-label">Agencies Using GHL</div>
            </div>
            <div className="ghl-stat">
              <div className="ghl-stat-num">$1,400</div>
              <div className="ghl-stat-label">Avg. Monthly Savings</div>
            </div>
            <div className="ghl-stat">
              <div className="ghl-stat-num">14</div>
              <div className="ghl-stat-label">Days Free — No Card Needed</div>
            </div>
          </div>
        </section>

        <div className="ghl-divider" />

        {/* FEATURES */}
        <section className="ghl-section" id="features">
          <div className={`ghl-section-header center ${reveal("feat-header")}`} data-id="feat-header">
            <div className="ghl-section-label">Everything You Need</div>
            <div className="ghl-section-title">ONE PLATFORM.<br />INFINITE LEVERAGE.</div>
            <p className="ghl-section-sub">
              GoHighLevel replaces your entire marketing stack. Here's what's waiting inside your account.
            </p>
          </div>
          <div className={`ghl-features-grid ghl-stagger ${reveal("feat-grid")}`} data-id="feat-grid">
            {features.map((f, i) => (
              <div className="ghl-feat-card" key={i}>
                <div className="ghl-feat-icon">{f.icon}</div>
                <div className="ghl-feat-title">{f.title}</div>
                <div className="ghl-feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="ghl-divider" />

        {/* COMPARISON */}
        <section className="ghl-section">
          <div className={`ghl-section-header center ${reveal("comp-header")}`} data-id="comp-header">
            <div className="ghl-section-label">Cost Comparison</div>
            <div className="ghl-section-title">WHY PAY MORE<br />FOR LESS?</div>
            <p className="ghl-section-sub">
              See how much agencies are burning on fragmented tools — and what GHL consolidates for you.
            </p>
          </div>
          <div className={`ghl-compare-wrap ${reveal("comp-table")}`} data-id="comp-table">
            <table className="ghl-compare-table">
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Their Price</th>
                  <th>With GHL</th>
                </tr>
              </thead>
              <tbody>
                {compared.map((r, i) => (
                  <tr key={i}>
                    <td>{r.tool}</td>
                    <td className="price">{r.price}</td>
                    <td className="included">{r.ghl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="ghl-compare-total">
              <div className="ghl-compare-total-label">Your Monthly Savings</div>
              <div className="ghl-compare-total-val">
                <span className="cross">$1,486+/mo</span>
                <span className="ghl-price">GHL from $97/mo</span>
              </div>
            </div>
          </div>
        </section>

        <div className="ghl-divider" />

        {/* TESTIMONIALS */}
        <section className="ghl-section">
          <div className={`ghl-section-header center ${reveal("testi-header")}`} data-id="testi-header">
            <div className="ghl-section-label">Real Results</div>
            <div className="ghl-section-title">AGENCIES LOVE IT.<br />CLIENTS STAY LONGER.</div>
          </div>
          <div className={`ghl-testimonials ghl-stagger ${reveal("testi-grid")}`} data-id="testi-grid">
            {testimonials.map((t, i) => (
              <div className="ghl-testi-card" key={i}>
                <div className="ghl-stars">{"★".repeat(t.stars)}</div>
                <div className="ghl-testi-quote">"{t.quote}"</div>
                <div className="ghl-testi-name">{t.name}</div>
                <div className="ghl-testi-role">{t.role}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="ghl-divider" />

        {/* CTA */}
        <section className="ghl-cta-section">
          <div className={`ghl-cta-box ${reveal("cta-box")}`} data-id="cta-box">
            <div className="ghl-section-label" style={{ marginBottom: "14px" }}>Limited Time Offer</div>
            <h2>STOP PAYING<br /><span className="gold">FOR 10 TOOLS.</span></h2>
            <p>
              Your 14-day free trial starts the moment you sign up. No credit card required. Cancel anytime. Try the full platform, white-label it, resell it, or simply use it to 10x your agency — the choice is yours.
            </p>
            <a href={GHL_LINK} target="_blank" rel="noopener noreferrer" className="ghl-btn-primary" style={{ fontSize: "1.15rem", padding: "20px 48px" }}>
              🔥 Claim My Free 14-Day Trial
            </a>
            <div className="ghl-cta-note">
              <span>✓</span> No credit card &nbsp;|&nbsp; <span>✓</span> Full access &nbsp;|&nbsp; <span>✓</span> Cancel anytime
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="ghl-footer">
          <div className="ghl-footer-logo">HighLevel<span>HQ</span></div>
          <div className="ghl-footer-copy">© {new Date().getFullYear()} HighLevelHQ. All rights reserved.</div>
        </footer>
        {/* <p className="ghl-footer-disclaimer">
          This page contains affiliate links. We may earn a commission if you sign up through our link, at no extra cost to you.
        </p> */}
      </div>
    </>
  );
}
