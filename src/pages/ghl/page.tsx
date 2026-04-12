import { useState, useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:      #ffffff;
    --surface: #f7f8fa;
    --surface2: #eef0f4;
    --text:    #0f1623;
    --sub:     #5a6478;
    --accent:  #1a56db;
    --accent2: #1344b8;
    --red:     #dc2626;
    --green:   #16a34a;
    --border:  #e2e6ee;
    --shadow:  0 1px 4px rgba(0,0,0,0.07);
    --font-head: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: ariel;
    font-size: 30px;
    line-height: 1.6;
    overflow-x: hidden;
  }

  .wrap { max-width: 1500px; margin: 0 auto; padding: 0 20px; }

  /* ── URGENCY BAR ── */
  .urgency-bar {
    background: var(--red);
    padding: 9px 20px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.01em;
    color: #fff;
  }
  .urgency-bar b { font-weight: 700; }
  .ub-timer { font-family: ariel; font-weight: 700; letter-spacing: 0.05em; }

  /* ── NAV ── */
  nav {
    position: sticky; top: 0; z-index: 99;
    background: rgba(255,255,255,0.97);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    padding: 0 24px;
    display: flex; align-items: center; justify-content: space-between;
    height: 56px;
    box-shadow: var(--shadow);
  }
  .logo { font-family: ariel; font-size: 30px; font-weight: 800; letter-spacing: -0.4px; color: var(--text); }
  .logo span { color: var(--accent); }
  .nav-r { display: flex; align-items: center; gap: 16px; }
  .nav-timer { font-size: 18px; color: var(--red); font-weight: 700; font-family: ariel; letter-spacing: 0.04em; }
  .nav-btn {
    background: var(--accent); color: #fff;
    padding: 8px 18px; border-radius: 6px;
    font-size: 20px; font-weight: 600;
    text-decoration: none;
    animation: pulse 2.8s ease-in-out infinite;
    transition: background 0.15s;
  }
  .nav-btn:hover { background: var(--accent2); }

  @keyframes pulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(26,86,219,0.35); }
    50%      { box-shadow: 0 0 0 7px rgba(26,86,219,0); }
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

  /* ── HERO ── */
  .hero {
    padding: 10px 0 52px;
    border-bottom: 1px solid var(--border);
    background: var(--bg);
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 7px;
    background: #eff4ff; border: 1px solid #c7d9fc; color: var(--accent);
    font-size: 21px; font-weight: 600; letter-spacing: 0.09em;
    text-transform: uppercase; padding: 5px 12px; border-radius: 20px;
    margin-bottom: 22px;
  }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: blink 1.3s ease-in-out infinite; flex-shrink: 0; }

  .hero h1 {
    font-family: ariel;
    font-size: clamp(36px, 6.5vw, 66px);
    font-weight: 800; line-height: 1.0;
    letter-spacing: -2px; margin-bottom: 16px;
    color: var(--text);
  }
  .hero h1 em { color: var(--accent); font-style: normal; }

  .hero-sub {
    font-size: 20px; color: var(--sub); max-width: 520px;
    line-height: 1.7; margin-bottom: 28px; font-weight: 300;
  }
  .hero-sub b { color: black;font-weight: 600; }

  .hero-cta { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
  .btn-hero {
    display: inline-block;
    background: var(--accent); color: #fff;
    padding: 15px 34px; border-radius: 6px;
    font-size: 30px; font-weight: 700;
    text-decoration: none;
    animation: pulse 2.8s ease-in-out infinite;
    transition: background 0.15s;
  }
  .btn-hero:hover { background: var(--accent2); }
  .trust-pills { display: flex; gap: 16px; flex-wrap: wrap; }
  .trust-pill { font-size: 22px; color: var(--sub); display: flex; align-items: center; gap: 5px; }
  .trust-pill::before { content: '✓'; color: var(--green); font-size: 13px; font-weight: 700; }

  /* ── COUNTDOWN IN HERO ── */
  .hero-cd {
    display: flex; align-items: center; gap: 14px;
    background: #fff5f5; border: 1px solid #fecaca;
    border-left: 3px solid var(--red);
    padding: 14px 18px; margin-top: 24px;
    flex-wrap: wrap; border-radius: 4px;
  }
  .cd-label { font-size: 15px; color: var(--red); font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .cd-units { display: flex; align-items: center; gap: 8px; }
  .cd-block { text-align: center; min-width: 38px; }
  .cd-n { font-family: ariel; font-size: 22px; font-weight: 800; display: block; line-height: 1; color: var(--text); }
  .cd-s { font-size: 13px; color: var(--sub); text-transform: uppercase; letter-spacing: 0.06em; }
  .cd-sep { font-family: ariel; font-size: 18px; color: var(--border); }
  .cd-note { font-size: 18px; color: var(--sub); margin-left: auto; }

  /* ── STAT STRIP ── */
  .stat-strip {
    display: grid; grid-template-columns: repeat(4,1fr);
    border-bottom: 1px solid var(--border);
    background: var(--surface);
  }
  .stat-cell { text-align: center; padding: 18px 12px; border-right: 1px solid var(--border); }
  .stat-cell:last-child { border-right: none; }
  .stat-n { font-family: ariel; font-size: 24px; font-weight: 800; color: var(--accent); display: block; letter-spacing: -0.5px; }
  .stat-l { font-size: 11px; color: var(--sub); margin-top: 2px; }

  /* ── BENEFITS ── */
  .benefits { padding: 60px 0; border-bottom: 1px solid var(--border); background: var(--bg); }
  .sec-tag { font-size: 30px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; }
  .sec-h { font-family: ariel; font-size: clamp(22px, 3.5vw, 36px); font-weight: 800; letter-spacing: -1px; line-height: 1.1; margin-bottom: 32px; color: var(--text); }
  .sec-h em { color: var(--accent); font-style: normal; }

  .ben-grid {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 1px; background: var(--border);
    border: 1px solid var(--border);
    border-radius: 8px; overflow: hidden;
  }
  .ben-card {
    background: var(--bg);
    padding: 24px 20px;
    transition: background 0.15s;
  }
  .ben-card:hover { background: var(--surface); }
  .ben-ico { font-size: 20px; margin-bottom: 10px; display: block; }
  .ben-card h3 { font-family: ariel; font-size: 24px; font-weight: 700; margin-bottom: 6px; letter-spacing: -0.2px; color: var(--text); }
  .ben-card p  { font-size: 22px; color: var(--sub); line-height: 1.6; }
  .ben-tag {
    display: inline-block; margin-top: 10px;
    background: #eff4ff; color: var(--accent);
    border: 1px solid #c7d9fc;
    font-size: 20px; font-weight: 600; padding: 3px 9px; border-radius: 20px;
  }

  /* ── COMPARISON ── */
  .comparison { padding: 60px 0; border-bottom: 1px solid var(--border); background: var(--surface); }
  .cmp-table { width: 100%; border-collapse: collapse; margin-top: 28px; background: var(--bg); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
  .cmp-table thead tr { border-bottom: 1px solid var(--border); background: var(--surface); }
  .cmp-table th {
    padding: 12px 14px; text-align: left;
    font-family: ariel; font-size: 22px; font-weight: 700;
    letter-spacing: -0.2px; color: var(--text);
  }
  .cmp-table th:first-child { color: var(--sub); font-weight: 400; font-family: ariel; }
  .th-ghl   { color: var(--accent); }
  .th-other { color: #aab0bc; }
  .cmp-table td {
    padding: 11px 14px;
    border-bottom: 1px solid var(--border);
    font-size: 23px;
    vertical-align: middle;
  }
  .cmp-table td:first-child { color: var(--sub); font-size: 20px; }
  .cmp-table tr:last-child td { border-bottom: none; }
  .cmp-table tr:hover td { background: #f9fafc; }
  .td-ghl { background: #f0f6ff; }
  .chk { color: var(--green); font-size: 30px; font-weight: 700; }
  .crs { color: #d1d5db; font-size: 30px; }
  .ghl-val { color: var(--accent); font-family: ariel; font-size: 23px; font-weight: 700; }
  .dim-val {  font-size: 19px; }

  /* ── CTA ── */
  .cta-sec {
    padding: 72px 0;
    text-align: center;
    position: relative; overflow: hidden;
    background: var(--text);
  }
  .cta-sec::before {
    content: '';
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    width: 500px; height: 280px;
    background: radial-gradient(ellipse, rgba(26,86,219,0.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .cta-urg-badge {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(220,38,38,0.15); border: 1px solid rgba(220,38,38,0.3);
    color: #fc8181; font-size: 11px; font-weight: 600;
    padding: 5px 13px; margin-bottom: 22px; border-radius: 20px;
    text-transform: uppercase; letter-spacing: 0.08em;
  }
  .cta-sec h2 {
    font-family: ariel;
    font-size: clamp(28px, 4.5vw, 50px);
    font-weight: 800; letter-spacing: -1.5px;
    line-height: 1.0; margin-bottom: 12px;
    color: #fff;
  }
  .cta-sec h2 em { color: #60a5fa; font-style: normal; }
  .cta-sec p {
    font-size: 30px; color: #94a3b8; max-width: 420px;
    margin: 0 auto 24px; line-height: 1.7; font-weight: 300;
  }
  .cta-sec p b { color: #cbd5e1; font-weight: 500; }

  .price-box {
    display: inline-flex; align-items: center; gap: 20px;
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
    padding: 12px 22px; margin-bottom: 24px;
    flex-wrap: wrap; justify-content: center; border-radius: 6px;
  }
  .p-old { font-family: ariel; font-size: 30px; color: #475569; text-decoration: line-through; }
  .p-arr { color: #334155; font-size: 18px; }
  .p-new { font-family: ariel; font-size: 28px; font-weight: 800; color: #60a5fa; }
  .p-note { font-size: 17px; color: #64748b; }

  .btn-cta {
    display: inline-block;
    background: var(--accent); color: #fff;
    padding: 17px 42px; border-radius: 6px;
    font-size: 16px; font-weight: 700;
    text-decoration: none;
    animation: pulse 2.8s ease-in-out infinite;
    transition: background 0.15s;
    letter-spacing: 0.01em;
  }
  .btn-cta:hover { background: var(--accent2); }

  .cta-micro { font-size: 12px; color: #475569; margin-top: 11px; }
  .cta-micro span { color: #4ade80; }

  /* ── BIG COUNTDOWN ── */
  .big-cd {
    display: flex; justify-content: center; align-items: center; gap: 10px;
    margin-top: 36px; padding-top: 28px;
    border-top: 1px solid rgba(255,255,255,0.08);
    flex-wrap: wrap;
  }
  .big-cd-block { text-align: center; min-width: 60px; }
  .big-cd-n { font-family: ariel; font-size: 40px; font-weight: 800; color: #fff; display: block; line-height: 1; }
  .big-cd-l { font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 3px; }
  .big-cd-sep { font-family: ariel; font-size: 32px; color: #1e293b; padding-bottom: 16px; }

  /* ── FOOTER ── */
  footer {
    border-top: 1px solid var(--border);
    padding: 22px 0;
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;
    background: var(--bg);
  }
  .f-logo { font-family: ariel; font-size: 14px; font-weight: 800; color: var(--text); }
  .f-logo span { color: var(--accent); }
  .f-note { font-size: 11px; color: #aab0bc; }

  @media (max-width: 640px) {
    .ben-grid { grid-template-columns: 1fr 1fr; }
    .stat-strip { grid-template-columns: 1fr 1fr; }
    .stat-cell:nth-child(2) { border-right: none; }
    .stat-cell:nth-child(3) { border-right: 1px solid var(--border); }
    .nav-timer { display: none; }
    .cd-note { display: none; }
    footer { flex-direction: column; text-align: center; }
  }
  @media (max-width: 480px) {
    .ben-grid { grid-template-columns: 1fr; }
  }
`;

const benefits = [
  { ico: "⚡", title: "All-in-one CRM",        desc: "Contacts, pipelines, and deals in one dashboard. No more tab-switching.",          tag: "Replaces HubSpot" },
  { ico: "🤖", title: "Auto follow-ups",       desc: "SMS, email & voicemail sequences fire the moment a lead comes in — 24/7.",        tag: "10x response rate" },
  { ico: "📱", title: "White-label & resell",  desc: "Brand GHL as your own SaaS. Charge clients ₹5K–₹20K/month recurring.",            tag: "New income stream" },
  { ico: "🌐", title: "Funnels & pages",       desc: "Drag-and-drop builder included. No Clickfunnels, no WordPress, no extra cost.",   tag: "Save ₹8,000/month" },
  { ico: "📅", title: "Booking & calendar",    desc: "Clients book directly. Auto-reminders increase show-up rates by 80%.",            tag: "Zero manual work" },
  { ico: "📊", title: "Live client reports",   desc: "Every client sees their results in real time. No manual reporting, no churn.",    tag: "Retain clients 3x longer" },
];

const rows = [
  { f: "CRM & pipelines",       ghl: true,    hs: "Paid add-on",       other: "Separate tool" },
  { f: "Email automation",      ghl: true,    hs: true,                 other: "Mailchimp extra" },
  { f: "SMS automation",        ghl: true,    hs: false,                other: false },
  { f: "Funnel builder",        ghl: true,    hs: false,                other: "Clickfunnels extra" },
  { f: "Appointment booking",   ghl: true,    hs: "Paid add-on",        other: "Calendly extra" },
  { f: "White-label & resell",  ghl: true,    hs: false,                other: false },
  { f: "Client dashboards",     ghl: true,    hs: "Paid tier only",     other: false },
  { f: "Monthly cost (agency)", ghl: "$297",  hs: "$800–$3,200",        other: "$400–$700" },
];

const pad = n => String(n).padStart(2, "0");

function useCountdown() {
  const [t, setT] = useState({ h: 23, m: 47, s: 33 });
  useEffect(() => {
    const iv = setInterval(() => setT(p => {
      if (p.s > 0) return { ...p, s: p.s - 1 };
      if (p.m > 0) return { ...p, m: p.m - 1, s: 59 };
      if (p.h > 0) return { h: p.h - 1, m: 59, s: 59 };
      return p;
    }), 1000);
    return () => clearInterval(iv);
  }, []);
  return t;
}

function Cell({ v }) {
  if (v === true)  return <span className="chk">✓</span>;
  if (v === false) return <span className="crs">✗</span>;
  if (v === "$297") return <span className="ghl-val">{v}</span>;
  return <span className="dim-val">{v}</span>;
}

const URL = "https://www.gohighlevel.com/?fp_ref=guruprasad57";

export default function GHLPage() {
  const t = useCountdown();
  const ts = `${pad(t.h)}:${pad(t.m)}:${pad(t.s)}`;

  return (
    <>
      <style>{styles}</style>

      {/* URGENCY BAR */}
      <div className="urgency-bar">
        <b>⏰ Free trial expires in <span className="ub-timer">{ts}</span></b> — Don't lose another lead today.
      </div>

      {/* NAV */}
      <nav>
        <div className="logo">MultiverseAIApp</div>
        <div className="nav-r">
          <span className="nav-timer">{ts} left</span>
          <a href={URL} className="nav-btn" target="_blank" rel="noopener noreferrer">Claim Free Trial →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-badge"><span className="dot"></span>For digital marketers & agency owners</div>
          <h1>
            Stop losing leads.<br />
            <em>Start closing</em><br />
            on autopilot.
          </h1>
          <p className="hero-sub">
            <b>GoHighLevel</b> replaces your CRM, email tool, funnels, booking app, and reporting — in one platform. Built for agencies that want to scale without adding headcount.
          </p>
          <div className="hero-cta">
            <a href={URL} className="btn-hero" target="_blank" rel="noopener noreferrer">Start Free 14-Day Trial →</a>
            <div className="trust-pills">
              <span className="trust-pill">No credit card</span>
              <span className="trust-pill">Full access instantly</span>
              <span className="trust-pill">Cancel anytime</span>
            </div>
          </div>
          <div className="hero-cd">
            <span className="cd-label">⏰ Offer closes in</span>
            <div className="cd-units">
              <div className="cd-block"><span className="cd-n">{pad(t.h)}</span><span className="cd-s">hrs</span></div>
              <span className="cd-sep">:</span>
              <div className="cd-block"><span className="cd-n">{pad(t.m)}</span><span className="cd-s">min</span></div>
              <span className="cd-sep">:</span>
              <div className="cd-block"><span className="cd-n">{pad(t.s)}</span><span className="cd-s">sec</span></div>
            </div>
            <span className="cd-note">Standard pricing resumes after.</span>
          </div>
        </div>
      </section>


      {/* BENEFITS */}
      <section className="benefits">
        <div className="wrap">
          <div className="sec-tag">What you get</div>
          <h2 className="sec-h">6 tools. <em>One price.</em> Zero excuses.</h2>
          <div className="ben-grid">
            {benefits.map((b, i) => (
              <div className="ben-card" key={i}>
                <span className="ben-ico">{b.ico}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                <span className="ben-tag">{b.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="comparison">
        <div className="wrap">
          <div className="sec-tag">How it stacks up</div>
          <h2 className="sec-h">GHL vs. <em>everything else</em></h2>
          <table className="cmp-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="th-ghl">GoHighLevel</th>
                <th className="th-other">HubSpot</th>
                <th className="th-other">Multiple tools</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.f}</td>
                  <td className="td-ghl"><Cell v={r.ghl} /></td>
                  <td><Cell v={r.hs} /></td>
                  <td><Cell v={r.other} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec">
        <div className="wrap">
          <div className="cta-urg-badge">
            <span className="dot" style={{background:'#fc8181'}}></span>
            Offer expires in {ts}
          </div>
          <h2>
            Your competitors signed up<br />
            <em>while you were deciding.</em>
          </h2>
          <p>Every hour without a system is a lead gone cold. <b>Start free — no card needed.</b></p>

          <div className="price-box">
            <div><div className="p-old">$297/mo normally</div><div className="p-note">Agency Unlimited Plan</div></div>
            <span className="p-arr">→</span>
            <div><div className="p-new">$0 today</div><div className="p-note">14-day full access</div></div>
          </div>

          <br />
          <a href={URL} className="btn-cta" target="_blank" rel="noopener noreferrer">
            Yes — Claim My Free Trial Now →
          </a>
          <p className="cta-micro">
            <span>✓ No credit card</span> &nbsp;·&nbsp; <span>✓ Cancel anytime</span> &nbsp;·&nbsp; <span>✓ Setup in under 1 hour</span>
          </p>

          <div className="big-cd">
            <div className="big-cd-block"><span className="big-cd-n">{pad(t.h)}</span><div className="big-cd-l">Hours</div></div>
            <span className="big-cd-sep">:</span>
            <div className="big-cd-block"><span className="big-cd-n">{pad(t.m)}</span><div className="big-cd-l">Minutes</div></div>
            <span className="big-cd-sep">:</span>
            <div className="big-cd-block"><span className="big-cd-n">{pad(t.s)}</span><div className="big-cd-l">Seconds</div></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <div className="wrap">
        <footer>
          <div className="f-logo">MultiverseAIAPP</div>
        </footer>
      </div> */}
    </>
  );
}