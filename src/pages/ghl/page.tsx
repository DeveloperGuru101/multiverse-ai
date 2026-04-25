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
  }

  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--text); font-family: arial; font-size: 16px; line-height: 1.6; overflow-x: hidden; }
  .wrap { max-width: 1500px; margin: 0 auto; padding: 0 20px; }

  /* ────────────────────────────────────────
     MODAL SHARED
  ──────────────────────────────────────── */
  .modal-overlay {
    position: fixed; inset: 0; z-index: 1000;
    display: flex; align-items: center; justify-content: center;
    padding: 20px;
    animation: fadeIn 0.25s ease;
  }
  .apple-overlay  { background: rgba(0,0,0,0.5);    backdrop-filter: blur(10px); }
  .desktop-overlay{ background: rgba(8,16,40,0.72); backdrop-filter: blur(6px);  }

  @keyframes fadeIn  { from{opacity:0}           to{opacity:1} }
  @keyframes slideUp { from{opacity:0;transform:translateY(28px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }

  /* ────────────────────────────────────────
     APPLE MODAL  (glassmorphism iOS style)
  ──────────────────────────────────────── */
  .apple-modal {
    background: rgba(255,255,255,0.88);
    backdrop-filter: blur(28px) saturate(1.8);
    border-radius: 24px;
    padding: 36px 32px 28px;
    max-width: 380px; width: 100%;
    text-align: center;
    box-shadow: 0 32px 80px rgba(0,0,0,0.20), 0 0 0 1px rgba(255,255,255,0.55) inset;
    animation: slideUp 0.38s cubic-bezier(0.34,1.56,0.64,1);
    position: relative;
  }
  .apple-modal .m-close {
    position: absolute; top: 12px; right: 14px;
    background: #e5e5ea; border: none; border-radius: 50%;
    width: 26px; height: 26px; font-size: 13px; color: #8e8e93;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background .15s;
  }
  .apple-modal .m-close:hover { background: #d1d1d6; }

  .apple-modal .m-pill {
    display: inline-flex; align-items: center; gap: 5px;
    background: #f2f2f7; border-radius: 20px;
    padding: 3px 11px; font-size: 11px; font-weight: 700;
    color: #6c6c70; letter-spacing: 0.07em; text-transform: uppercase;
    margin-bottom: 14px;
    font-family: -apple-system, sans-serif;
  }
  .apple-modal .m-icon { font-size: 48px; display: block; margin-bottom: 10px; line-height: 1; }
  .apple-modal h2 {
    font-size: 21px; font-weight: 700; color: #1c1c1e;
    letter-spacing: -0.4px; line-height: 1.2; margin-bottom: 10px;
    font-family: -apple-system, 'SF Pro Display', sans-serif;
  }
  .apple-modal p {
    font-size: 14px; color: #6c6c70; line-height: 1.65; margin-bottom: 22px;
    font-family: -apple-system, 'SF Pro Text', sans-serif;
  }
  .apple-modal .m-divider { height: 1px; background: rgba(60,60,67,0.12); margin: 0 -32px 20px; }
  .apple-modal .m-btns { display: flex; flex-direction: column; gap: 9px; }

  .apple-btn-primary {
    background: #007aff; color: #fff; border: none; border-radius: 13px;
    padding: 14px; font-size: 17px; font-weight: 600; cursor: pointer;
    font-family: -apple-system, 'SF Pro Text', sans-serif;
    transition: background .15s, transform .1s; letter-spacing: -0.2px;
  }
  .apple-btn-primary:hover  { background: #0066d6; }
  .apple-btn-primary:active { transform: scale(0.97); }

  .apple-btn-secondary {
    background: transparent; color: #007aff; border: none; border-radius: 13px;
    padding: 11px; font-size: 17px; font-weight: 400; cursor: pointer;
    font-family: -apple-system, 'SF Pro Text', sans-serif;
    transition: background .15s;
  }
  .apple-btn-secondary:hover { background: rgba(0,122,255,0.07); }

  /* ────────────────────────────────────────
     DESKTOP MODAL  (sharp, professional)
  ──────────────────────────────────────── */
  .desktop-modal {
    background: #fff;
    border-radius: 12px;
    max-width: 500px; width: 100%;
    box-shadow: 0 24px 64px rgba(0,0,0,0.28), 0 0 0 1px var(--border);
    animation: slideUp 0.3s cubic-bezier(0.22,1,0.36,1);
    overflow: hidden; position: relative;
  }
  .desktop-modal-head {
    background: linear-gradient(135deg, #0f1623 0%, #1c2b4a 100%);
    padding: 26px 28px 22px; position: relative; overflow: hidden;
  }
  .desktop-modal-head::after {
    content: '';
    position: absolute; top: -60px; right: -60px;
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(26,86,219,0.28) 0%, transparent 70%);
    pointer-events: none;
  }
  .desktop-modal .m-close {
    position: absolute; top: 12px; right: 14px; z-index: 2;
    background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18);
    border-radius: 6px; width: 28px; height: 28px; font-size: 14px; color: #94a3b8;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background .15s;
  }
  .desktop-modal .m-close:hover { background: rgba(255,255,255,0.2); color: #fff; }

  .desktop-modal-head .m-eyebrow {
    font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    color: #60a5fa; margin-bottom: 8px;
    display: flex; align-items: center; gap: 6px;
  }
  .desktop-modal-head h2 {
    font-size: 23px; font-weight: 800; color: #fff;
    letter-spacing: -0.5px; line-height: 1.2; font-family: arial;
  }
  .desktop-modal-head h2 em { color: #60a5fa; font-style: normal; }

  .desktop-modal-body { padding: 22px 28px 20px; }
  .desktop-modal-body .m-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: #eff4ff; border: 1px solid #c7d9fc; color: var(--accent);
    font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px;
    margin-bottom: 14px;
  }
  .desktop-modal-body p { font-size: 14px; color: var(--sub); line-height: 1.7; margin-bottom: 16px; }
  .desktop-feature-list { list-style: none; margin-bottom: 0; display: flex; flex-direction: column; gap: 9px; }
  .desktop-feature-list li { display: flex; align-items: flex-start; gap: 9px; font-size: 14px; color: var(--text); line-height: 1.4; }
  .desktop-feature-list li .fc { color: var(--green); font-weight: 700; font-size: 14px; flex-shrink: 0; margin-top: 1px; }

  .desktop-modal-foot {
    display: flex; gap: 10px; align-items: center;
    border-top: 1px solid var(--border);
    padding: 14px 28px;
    background: var(--surface);
  }
  .desktop-btn-primary {
    flex: 1; background: var(--accent); color: #fff; border: none; border-radius: 6px;
    padding: 12px 20px; font-size: 14px; font-weight: 700; cursor: pointer;
    transition: background .15s; letter-spacing: 0.01em;
  }
  .desktop-btn-primary:hover { background: var(--accent2); }
  .desktop-btn-secondary {
    background: transparent; color: var(--sub); border: 1px solid var(--border);
    border-radius: 6px; padding: 12px 16px; font-size: 13px; font-weight: 500;
    cursor: pointer; white-space: nowrap; transition: background .15s, color .15s;
  }
  .desktop-btn-secondary:hover { background: var(--surface2); color: var(--text); }

  /* ────────────────────────────────────────
     PAGE STYLES
  ──────────────────────────────────────── */
  .urgency-bar {
    background: var(--red); padding: 9px 20px; text-align: center;
    font-size: 14px; font-weight: 500; color: #fff;
  }
  .urgency-bar b { font-weight: 700; }
  .ub-timer { font-weight: 700; letter-spacing: 0.05em; }

  nav {
    position: sticky; top: 0; z-index: 99;
    background: rgba(255,255,255,0.97); backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border); padding: 0 24px;
    display: flex; align-items: center; justify-content: space-between;
    height: 56px; box-shadow: var(--shadow);
  }
  .logo { font-size: 18px; font-weight: 800; letter-spacing: -0.4px; color: var(--text); }
  .logo span { color: var(--accent); }
  .nav-r { display: flex; align-items: center; gap: 16px; }
  .nav-timer { font-size: 13px; color: var(--red); font-weight: 700; letter-spacing: 0.04em; }
  .nav-btn {
    background: var(--accent); color: #fff; padding: 8px 18px; border-radius: 6px;
    font-size: 14px; font-weight: 600; text-decoration: none;
    animation: pulse 2.8s ease-in-out infinite; transition: background .15s;
  }
  .nav-btn:hover { background: var(--accent2); }

  @keyframes pulse {
    0%,100%{ box-shadow: 0 0 0 0 rgba(26,86,219,0.35); }
    50%    { box-shadow: 0 0 0 7px rgba(26,86,219,0); }
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

  .hero { padding: 48px 0 52px; border-bottom: 1px solid var(--border); }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 7px;
    background: #eff4ff; border: 1px solid #c7d9fc; color: var(--accent);
    font-size: 12px; font-weight: 600; letter-spacing: 0.09em; text-transform: uppercase;
    padding: 5px 12px; border-radius: 20px; margin-bottom: 22px;
  }
  .dot { width:6px; height:6px; border-radius:50%; background:var(--accent); animation:blink 1.3s ease-in-out infinite; flex-shrink:0; }
  .hero h1 { font-size: clamp(36px,6.5vw,66px); font-weight:800; line-height:1.0; letter-spacing:-2px; margin-bottom:16px; color:var(--text); }
  .hero h1 em { color:var(--accent); font-style:normal; }
  .hero-sub { font-size:17px; color:var(--sub); max-width:520px; line-height:1.7; margin-bottom:28px; font-weight:300; }
  .hero-sub b { color:black; font-weight:600; }
  .hero-cta { display:flex; flex-direction:column; align-items:flex-start; gap:10px; }
  .btn-hero {
    display:inline-block; background:var(--accent); color:#fff;
    padding:15px 34px; border-radius:6px; font-size:17px; font-weight:700;
    text-decoration:none; animation:pulse 2.8s ease-in-out infinite; transition:background .15s;
  }
  .btn-hero:hover { background:var(--accent2); }
  .trust-pills { display:flex; gap:16px; flex-wrap:wrap; }
  .trust-pill { font-size:13px; color:var(--sub); display:flex; align-items:center; gap:5px; }
  .trust-pill::before { content:'✓'; color:var(--green); font-size:13px; font-weight:700; }

  .hero-cd {
    display:flex; align-items:center; gap:14px;
    background:#fff5f5; border:1px solid #fecaca; border-left:3px solid var(--red);
    padding:14px 18px; margin-top:24px; flex-wrap:wrap; border-radius:4px;
  }
  .cd-label { font-size:12px; color:var(--red); font-weight:700; text-transform:uppercase; letter-spacing:0.08em; }
  .cd-units { display:flex; align-items:center; gap:8px; }
  .cd-block { text-align:center; min-width:38px; }
  .cd-n { font-size:22px; font-weight:800; display:block; line-height:1; color:var(--text); }
  .cd-s { font-size:11px; color:var(--sub); text-transform:uppercase; letter-spacing:0.06em; }
  .cd-sep { font-size:18px; color:var(--border); }
  .cd-note { font-size:13px; color:var(--sub); margin-left:auto; }

  .benefits { padding:60px 0; border-bottom:1px solid var(--border); }
  .sec-tag { font-size:12px; font-weight:700; letter-spacing:0.13em; text-transform:uppercase; color:var(--accent); margin-bottom:10px; }
  .sec-h { font-size:clamp(22px,3.5vw,36px); font-weight:800; letter-spacing:-1px; line-height:1.1; margin-bottom:32px; color:#ffffff; }
  .sec-h em { color:var(--accent); font-style:normal; }
  .ben-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--border); border:1px solid var(--border); border-radius:8px; overflow:hidden; }
  .ben-card { background:var(--bg); padding:24px 20px; transition:background .15s; }
  .ben-card:hover { background:var(--surface); }
  .ben-ico { font-size:20px; margin-bottom:10px; display:block; }
  .ben-card h3 { font-size:16px; font-weight:700; margin-bottom:6px; color:var(--text); }
  .ben-card p { font-size:14px; color:var(--sub); line-height:1.6; }
  .ben-tag { display:inline-block; margin-top:10px; background:#eff4ff; color:var(--accent); border:1px solid #c7d9fc; font-size:12px; font-weight:600; padding:3px 9px; border-radius:20px; }

  .comparison { padding:60px 0; border-bottom:1px solid var(--border); background:var(--surface); }
  .cmp-table { width:100%; border-collapse:collapse; margin-top:28px; background:var(--bg); border:1px solid var(--border); border-radius:8px; overflow:hidden; }
  .cmp-table thead tr { border-bottom:1px solid var(--border); background:var(--surface); }
  .cmp-table th { padding:12px 14px; text-align:left; font-size:14px; font-weight:700; color:var(--text); }
  .cmp-table th:first-child { color:var(--sub); font-weight:400; }
  .th-ghl { color:var(--accent); }
  .th-other { color:#aab0bc; }
  .cmp-table td { padding:11px 14px; border-bottom:1px solid var(--border); font-size:14px; vertical-align:middle; }
  .cmp-table td:first-child { color:var(--sub); font-size:13px; }
  .cmp-table tr:last-child td { border-bottom:none; }
  .cmp-table tr:hover td { background:#f9fafc; }
  .td-ghl { background:#f0f6ff; }
  .chk { color:var(--green); font-size:18px; font-weight:700; }
  .crs { color:#d1d5db; font-size:18px; }
  .ghl-val { color:var(--accent); font-size:15px; font-weight:700; }
  .dim-val { font-size:13px; }

  .cta-sec { padding:72px 0; text-align:center; position:relative; overflow:hidden; background:var(--text); }
  .cta-sec::before {
    content:''; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
    width:500px; height:280px;
    background:radial-gradient(ellipse,rgba(26,86,219,0.18) 0%,transparent 70%);
    pointer-events:none;
  }
  .cta-urg-badge {
    display:inline-flex; align-items:center; gap:7px;
    background:rgba(220,38,38,0.15); border:1px solid rgba(220,38,38,0.3);
    color:#fc8181; font-size:11px; font-weight:600;
    padding:5px 13px; margin-bottom:22px; border-radius:20px;
    text-transform:uppercase; letter-spacing:0.08em;
  }
  .cta-sec h2 { font-size:clamp(28px,4.5vw,50px); font-weight:800; letter-spacing:-1.5px; line-height:1.0; margin-bottom:12px; color:#fff; }
  .cta-sec h2 em { color:#60a5fa; font-style:normal; }
  .cta-sec > .wrap > p { font-size:16px; color:#94a3b8; max-width:420px; margin:0 auto 24px; line-height:1.7; font-weight:300; }
  .cta-sec > .wrap > p b { color:#cbd5e1; font-weight:500; }
  .price-box {
    display:inline-flex; align-items:center; gap:20px;
    background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1);
    padding:12px 22px; margin-bottom:24px; flex-wrap:wrap; justify-content:center; border-radius:6px;
  }
  .p-old { font-size:16px; color:#475569; text-decoration:line-through; }
  .p-arr { color:#334155; font-size:18px; }
  .p-new { font-size:28px; font-weight:800; color:#60a5fa; }
  .p-note { font-size:12px; color:#64748b; }
  .btn-cta {
    display:inline-block; background:var(--accent); color:#fff;
    padding:17px 42px; border-radius:6px; font-size:16px; font-weight:700;
    text-decoration:none; animation:pulse 2.8s ease-in-out infinite; transition:background .15s;
  }
  .btn-cta:hover { background:var(--accent2); }
  .cta-micro { font-size:12px; color:#475569; margin-top:11px; }
  .cta-micro span { color:#4ade80; }

  .big-cd { display:flex; justify-content:center; align-items:center; gap:10px; margin-top:36px; padding-top:28px; border-top:1px solid rgba(255,255,255,0.08); flex-wrap:wrap; }
  .big-cd-block { text-align:center; min-width:60px; }
  .big-cd-n { font-size:40px; font-weight:800; color:#fff; display:block; line-height:1; }
  .big-cd-l { font-size:10px; color:#64748b; text-transform:uppercase; letter-spacing:0.08em; margin-top:3px; }
  .big-cd-sep { font-size:32px; color:#1e293b; padding-bottom:16px; }

  @media (max-width:640px) {
    .ben-grid { grid-template-columns:1fr 1fr; }
    .nav-timer { display:none; }
    .cd-note { display:none; }
  }
  @media (max-width:480px) {
    .ben-grid { grid-template-columns:1fr; }
  }
`;

const benefits = [
  { ico:"⚡", title:"All-in-one CRM",       desc:"Contacts, pipelines, and deals in one dashboard. No more tab-switching.",        tag:"Replaces HubSpot" },
  { ico:"🤖", title:"Auto follow-ups",      desc:"SMS, email & voicemail sequences fire the moment a lead comes in — 24/7.",      tag:"10x response rate" },
  { ico:"📱", title:"White-label & resell", desc:"Brand GHL as your own SaaS. Charge clients ₹5K–₹20K/month recurring.",          tag:"New income stream" },
  { ico:"🌐", title:"Funnels & pages",      desc:"Drag-and-drop builder included. No Clickfunnels, no WordPress, no extra cost.", tag:"Save ₹8,000/month" },
  { ico:"📅", title:"Booking & calendar",   desc:"Clients book directly. Auto-reminders increase show-up rates by 80%.",          tag:"Zero manual work" },
  { ico:"📊", title:"Live client reports",  desc:"Every client sees their results in real time. No manual reporting, no churn.",  tag:"Retain clients 3x longer" },
];

const rows = [
  { f:"CRM & pipelines",       ghl:true,   hs:"Paid add-on",    other:"Separate tool" },
  { f:"Email automation",      ghl:true,   hs:true,             other:"Mailchimp extra" },
  { f:"SMS automation",        ghl:true,   hs:false,            other:false },
  { f:"Funnel builder",        ghl:true,   hs:false,            other:"Clickfunnels extra" },
  { f:"Appointment booking",   ghl:true,   hs:"Paid add-on",    other:"Calendly extra" },
  { f:"White-label & resell",  ghl:true,   hs:false,            other:false },
  { f:"Client dashboards",     ghl:true,   hs:"Paid tier only", other:false },
  { f:"Monthly cost (agency)", ghl:"$297", hs:"$800–$3,200",    other:"$400–$700" },
];

const pad = n => String(n).padStart(2, "0");
const CTA_URL = "https://www.gohighlevel.com/?fp_ref=guruprasad57";


//APPLE 
const APPLE_CTA_URL = "https://singingfiles.com/show.php?l=0&u=786185&id=74676";

//ANDROID_CTA_URL

const ANDROID_CTA_URL = "https://singingfiles.com/show.php?l=0&u=786185&id=74784";

// ── DEVICE DETECTION ──────────────────────────────────────────────
function detectDevice() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1); // iPadOS 13+
  const isAndroid = /android/i.test(ua);
  if (isIOS) return "apple";
  if (isAndroid) return "android";
  return "desktop";
}

// ── APPLE MODAL ────────────────────────────────────────────────────
function AppleModal({ onClose }) {
  return (
    <div className="modal-overlay apple-overlay" onClick={onClose}>
      <div className="apple-modal" onClick={e => e.stopPropagation()}>
        <button className="m-close" onClick={onClose}>✕</button>

        <span className="m-icon">💸</span>
        <div className="m-pill">Earn Rewards · iPhone / iPad</div>

        <h2>
          Earn Rewards on Oobyte —<br />Turn Everyday Actions into Income
        </h2>

        <p>
          Shop, share, and complete simple actions — and get rewarded with real, withdrawable cash. 
          The more you engage, the more you earn.
        </p>

        <div className="m-features">
          <p>✔️ Earn real money (not just points)</p>
          <p>✔️ Get paid for inviting friends</p>
          <p>✔️ Earn from their activity — ongoing income</p>
          <p>✔️ Cashback, tasks & rewards in one app</p>
          <p>✔️ Track earnings live in your wallet</p>
        </div>

        <div className="m-divider" />

        <p className="m-offer">
          🎁 <strong>Bonus unlocked:</strong> New users can start earning instantly after joining.
        </p>

        <p className="m-highlight">
          🚀 <strong>Download now to get started — it only takes seconds.</strong>
        </p>

        <div className="m-btns">
          <button
            className="apple-btn-primary"
            onClick={() => { window.open(APPLE_CTA_URL, "_blank"); onClose(); }}
          >
            Start Earning Now →
          </button>

          <button className="apple-btn-secondary" onClick={onClose}>
            Maybe later
          </button>
        </div>

        <p className="m-disclaimer">
          Rewards depend on your activity. Subscription may apply. Cancel anytime.
        </p>
      </div>
    </div>
  );
}

// ── ANDROID MODAL ────────────────────────────────────────────────────
function AndroideModal({ onClose }) {
  return (
    <div className="modal-overlay apple-overlay" onClick={onClose}>
      <div className="apple-modal" onClick={e => e.stopPropagation()}>
        <button className="m-close" onClick={onClose}>✕</button>

        <span className="m-icon">💳</span>
        <div className="m-pill">Exclusive Reward · Limited Access</div>

        <h2>
          Get a £500 Gift Card —<br />Limited Spots Available
        </h2>

        <p>
          A select number of users can unlock a £500 reward through our exclusive promotion. 
          Enter your details to check eligibility and start your reward journey.
        </p>

        <div className="m-features">
          <p>✔️ High-value £500 reward opportunity</p>
          <p>✔️ Simple steps to qualify</p>
          <p>✔️ Fast & secure process</p>
          <p>✔️ Available for a limited time only</p>
        </div>

        <div className="m-divider" />

        <p className="m-offer">
          🎁 <strong>Act now:</strong> Spots are filling quickly — don’t miss your chance.
        </p>

        <p className="m-highlight">
          ⚡ <strong>Enter your information now to get started.</strong>
        </p>

        <div className="m-btns">
          <button
            className="apple-btn-primary"
            onClick={() => { window.open(ANDROID_CTA_URL, "_blank"); onClose(); }}
          >
            Unlock My Reward →
          </button>

          <button className="apple-btn-secondary" onClick={onClose}>
            Maybe later
          </button>
        </div>

        <p className="m-disclaimer">
          Eligibility criteria apply. Rewards are subject to verification and completion of required steps.
        </p>
      </div>
    </div>
  );
}


// ── DESKTOP MODAL ──────────────────────────────────────────────────
function DesktopModal({ onClose }) {
  return (
    <div className="modal-overlay desktop-overlay" onClick={onClose}>
      <div className="desktop-modal" onClick={e => e.stopPropagation()}>

        <div className="desktop-modal-head">
          <button className="m-close" onClick={onClose}>✕</button>
          <div className="m-eyebrow">🖥️ &nbsp;Desktop Modal · Full Power Mode</div>
          <h2>You're on desktop.<br /><em>Time to scale your agency.</em></h2>
        </div>

        <div className="desktop-modal-body">
          <div className="m-badge">
            <span style={{width:6,height:6,borderRadius:"50%",background:"#1a56db",display:"inline-block"}}></span>
            GoHighLevel — Agency Unlimited
          </div>
          <p>
            Desktop is the best environment to set up GHL. Build funnels, configure
            automations, and onboard clients — all inside one browser tab.
          </p>
          <ul className="desktop-feature-list">
            <li><span className="fc">✓</span> Full CRM with pipelines & deal tracking</li>
            <li><span className="fc">✓</span> Email, SMS & voicemail sequences — automated</li>
            <li><span className="fc">✓</span> White-label the platform & charge clients monthly</li>
            <li><span className="fc">✓</span> 14-day free trial · no credit card required</li>
          </ul>
        </div>

        <div className="desktop-modal-foot">
          <button
            className="desktop-btn-primary"
            onClick={() => { window.open(CTA_URL, "_blank"); onClose(); }}
          >
            Claim My Free Trial Now →
          </button>
          <button className="desktop-btn-secondary" onClick={onClose}>
            Dismiss
          </button>
        </div>

      </div>
    </div>
  );
}

// ── COUNTDOWN HOOK ─────────────────────────────────────────────────
function useCountdown() {
  const [t, setT] = useState({ h:23, m:47, s:33 });
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
  if (v === true)   return <span className="chk">✓</span>;
  if (v === false)  return <span className="crs">✗</span>;
  if (v === "$297") return <span className="ghl-val">{v}</span>;
  return <span className="dim-val">{v}</span>;
}

// ── PAGE ───────────────────────────────────────────────────────────
export default function GHLPage() {
  const t = useCountdown();
  const ts = `${pad(t.h)}:${pad(t.m)}:${pad(t.s)}`;

  const [device,    setDevice]    = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const d = detectDevice();
    setDevice(d);
    // Show modal 800 ms after page load
    const timer = setTimeout(() => setModalOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{styles}</style>

      {/* ── MODALS ── */}
      {modalOpen && device === "apple"   && <AppleModal   onClose={() => setModalOpen(false)} />}
      {modalOpen && device === "android" && <AndroideModal onClose={() => setModalOpen(false)} />}
      {/* Android: add <AndroidModal> here the same way if needed */}

      {/* URGENCY BAR */}
      <div className="urgency-bar">
        <b>⏰ Free trial expires in <span className="ub-timer">{ts}</span></b> — Don't lose another lead today.
      </div>

      {/* NAV */}
      <nav>
        <div className="logo">MultiverseAIApp</div>
        <div className="nav-r">
          <span className="nav-timer">{ts} left</span>
          <a href={CTA_URL} className="nav-btn" target="_blank" rel="noopener noreferrer">Claim Free Trial →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-badge"><span className="dot"></span>For digital marketers & agency owners</div>
          <h1>Stop losing leads.<br /><em>Start closing</em><br />on autopilot.</h1>
          <p className="hero-sub">
            <b>GoHighLevel</b> replaces your CRM, email tool, funnels, booking app, and reporting — in one platform. Built for agencies that want to scale without adding headcount.
          </p>
          <div className="hero-cta">
            <a href={CTA_URL} className="btn-hero" target="_blank" rel="noopener noreferrer">Start Free 14-Day Trial →</a>
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
            <span className="dot" style={{background:"#fc8181"}}></span>
            Offer expires in {ts}
          </div>
          <h2>Your competitors signed up<br /><em>while you were deciding.</em></h2>
          <p>Every hour without a system is a lead gone cold. <b>Start free — no card needed.</b></p>
          <div className="price-box">
            <div><div className="p-old">$297/mo normally</div><div className="p-note">Agency Unlimited Plan</div></div>
            <span className="p-arr">→</span>
            <div><div className="p-new">$0 today</div><div className="p-note">14-day full access</div></div>
          </div>
          <br />
          <a href={CTA_URL} className="btn-cta" target="_blank" rel="noopener noreferrer">
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
    </>
  );
}
