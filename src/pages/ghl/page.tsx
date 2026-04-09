import { useState, useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --black: #0a0a0a;
    --white: #f5f2ee;
    --accent: #ff5c00;
    --accent2: #ffb800;
    --red: #ff2d2d;
    --gray: #1a1a1a;
    --muted: #888;
    --font-head: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--black);
    color: var(--white);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
  }

  .page { max-width: 900px; margin: 0 auto; padding: 0 24px; }

  .urgency-bar {
    background: var(--red);
    padding: 10px 24px;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.02em;
    position: relative; z-index: 101;
  }
  .urgency-bar strong { font-weight: 700; }

  nav {
    position: sticky; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(10,10,10,0.96);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #222;
    padding: 14px 24px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .nav-logo { font-family: var(--font-head); font-weight: 800; font-size: 18px; letter-spacing: -0.5px; }
  .nav-logo span { color: var(--accent); }
  .nav-right { display: flex; align-items: center; gap: 16px; }
  .nav-timer { font-size: 12px; color: var(--accent2); font-weight: 500; }
  .nav-cta {
    background: var(--accent); color: #fff;
    border: none; padding: 10px 20px;
    font-family: var(--font-body); font-size: 13px; font-weight: 500;
    cursor: pointer; border-radius: 4px; text-decoration: none;
    transition: opacity 0.2s, transform 0.15s;
    animation: pulse-btn 2.5s ease-in-out infinite;
  }
  .nav-cta:hover { opacity: 0.85; transform: scale(1.03); }

  @keyframes pulse-btn {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255,92,0,0.4); }
    50% { box-shadow: 0 0 0 6px rgba(255,92,0,0); }
  }

  .hook {
    min-height: 100vh;
    display: flex; flex-direction: column; justify-content: center;
    padding-top: 60px;
    position: relative; overflow: hidden;
  }
  .hook::before {
    content: '';
    position: absolute; top: -200px; right: -200px;
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(255,92,0,0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  .hook-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 28px; flex-wrap: wrap; }
  .hook-tag {
    display: inline-flex; align-items: center;
    border: 1px solid var(--accent); color: var(--accent);
    font-size: 11px; font-weight: 500; letter-spacing: 0.1em;
    text-transform: uppercase; padding: 6px 14px; border-radius: 2px;
  }
  .hook-live {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,45,45,0.1); border: 1px solid rgba(255,45,45,0.3);
    color: #ff6666; font-size: 11px; font-weight: 500;
    padding: 6px 12px; border-radius: 2px;
  }
  .live-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--red);
    animation: blink 1.2s ease-in-out infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

  .hook h1 {
    font-family: var(--font-head);
    font-size: clamp(40px, 7vw, 78px);
    font-weight: 800; line-height: 1.0;
    letter-spacing: -2px; margin-bottom: 12px;
  }
  .hook h1 em { color: var(--accent); font-style: normal; }
  .hook-subhead {
    font-family: var(--font-head);
    font-size: clamp(17px, 2.5vw, 24px);
    font-weight: 600; color: #aaa; letter-spacing: -0.3px;
    margin-bottom: 28px; line-height: 1.4;
  }
  .hook-sub {
    font-size: 17px; color: #999; max-width: 580px;
    line-height: 1.75; margin-bottom: 16px; font-weight: 300;
  }
  .hook-sub strong { color: var(--white); font-weight: 500; }

  .cost-callout {
    display: inline-flex; align-items: center; gap: 10px; flex-wrap: wrap;
    background: rgba(255,184,0,0.07); border: 1px solid rgba(255,184,0,0.2);
    padding: 10px 18px; border-radius: 4px; margin-bottom: 36px;
  }
  .cost-callout span { font-size: 13px; color: var(--accent2); font-weight: 500; }
  .cost-callout .cost-num { font-family: var(--font-head); font-size: 18px; font-weight: 800; color: var(--accent2); }

  .cta-group { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; margin-bottom: 20px; }
  .btn-primary {
    background: var(--accent); color: #fff;
    border: none; padding: 18px 36px;
    font-family: var(--font-body); font-size: 16px; font-weight: 600;
    cursor: pointer; border-radius: 4px; text-decoration: none;
    transition: transform 0.2s, opacity 0.2s; display: inline-block;
  }
  .btn-primary:hover { transform: translateY(-2px); opacity: 0.9; }
  .btn-ghost {
    background: transparent; color: var(--white);
    border: 1px solid #333; padding: 18px 32px;
    font-family: var(--font-body); font-size: 15px; font-weight: 400;
    cursor: pointer; border-radius: 4px; transition: border-color 0.2s;
  }
  .btn-ghost:hover { border-color: #666; }

  .hook-trust { display: flex; gap: 20px; flex-wrap: wrap; }
  .trust-item { font-size: 12px; color: var(--muted); display: flex; align-items: center; gap: 6px; }
  .trust-item::before { content: '✓'; color: #44cc88; font-weight: 700; font-size: 13px; }

  .countdown-wrapper {
    background: #0f0f0f; border: 1px solid #222; border-left: 3px solid var(--red);
    padding: 20px 28px; margin-top: 40px;
    display: flex; align-items: center; gap: 24px; flex-wrap: wrap;
  }
  .countdown-label { font-size: 13px; color: #ff6666; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; }
  .countdown-units { display: flex; gap: 12px; align-items: center; }
  .countdown-unit { text-align: center; }
  .countdown-num { font-family: var(--font-head); font-size: 28px; font-weight: 800; color: var(--white); display: block; line-height: 1; min-width: 48px; }
  .countdown-sub { font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; }
  .countdown-sep { font-family: var(--font-head); font-size: 24px; color: #333; }
  .countdown-msg { font-size: 13px; color: #666; margin-left: auto; max-width: 200px; text-align: right; line-height: 1.5; }

  .stats-bar {
    border-top: 1px solid #1e1e1e; border-bottom: 1px solid #1e1e1e;
    padding: 32px 0; display: grid; grid-template-columns: repeat(3, 1fr);
  }
  .stat-item { text-align: center; padding: 0 24px; border-right: 1px solid #1e1e1e; }
  .stat-item:last-child { border-right: none; }
  .stat-num { font-family: var(--font-head); font-size: 36px; font-weight: 800; color: var(--accent); letter-spacing: -1px; }
  .stat-label { font-size: 13px; color: var(--muted); margin-top: 4px; }

  section { padding: 96px 0; }
  .section-tag { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 16px; }
  .section-title { font-family: var(--font-head); font-size: clamp(28px, 4vw, 44px); font-weight: 700; letter-spacing: -1px; line-height: 1.1; margin-bottom: 20px; }
  .section-sub { font-size: 17px; color: #aaa; max-width: 560px; font-weight: 300; line-height: 1.7; }

  .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2px; margin-top: 56px; border: 1px solid #1e1e1e; }
  .feature-card { background: var(--gray); padding: 32px 28px; border: 1px solid #222; transition: background 0.2s; }
  .feature-card:hover { background: #1f1f1f; }
  .feature-icon { width: 40px; height: 40px; background: rgba(255,92,0,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 20px; }
  .feature-card h3 { font-family: var(--font-head); font-size: 17px; font-weight: 700; margin-bottom: 10px; letter-spacing: -0.3px; }
  .feature-card p { font-size: 14px; color: #888; line-height: 1.6; }

  .problems-section { background: #0d0d0d; }
  .problem-intro {
    background: rgba(255,45,45,0.04); border: 1px solid rgba(255,45,45,0.15);
    padding: 24px 28px; margin-top: 40px; margin-bottom: 40px;
    border-left: 3px solid var(--red);
  }
  .problem-intro p { font-size: 16px; color: #ccc; line-height: 1.8; }
  .problem-intro strong { color: var(--white); }
  .problems-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
  .problem-card {
    background: #111; border: 1px solid #1d1d1d; border-left: 3px solid #ff3333;
    padding: 28px 24px; position: relative; overflow: hidden; transition: background 0.2s;
  }
  .problem-card:hover { background: #141414; }
  .problem-card::before {
    content: attr(data-num);
    position: absolute; top: -10px; right: 12px;
    font-family: var(--font-head); font-size: 72px; font-weight: 800;
    color: rgba(255,45,45,0.04); line-height: 1; pointer-events: none;
  }
  .problem-card h4 { font-family: var(--font-head); font-size: 15px; font-weight: 700; margin-bottom: 10px; color: #ff6666; }
  .problem-card p { font-size: 14px; color: #777; line-height: 1.65; }
  .problem-cost { display: inline-block; margin-top: 12px; font-size: 12px; color: #ff4444; font-weight: 500; }

  .loss-banner {
    background: rgba(255,45,45,0.06); border: 1px solid rgba(255,45,45,0.12);
    padding: 20px 28px; margin-top: 40px;
    display: flex; align-items: flex-start; gap: 16px;
  }
  .loss-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
  .loss-text { font-size: 14px; color: #aaa; line-height: 1.7; }
  .loss-text strong { color: #ff6666; }

  .solution-list { margin-top: 56px; }
  .solution-item { display: flex; gap: 24px; align-items: flex-start; padding: 28px 0; border-bottom: 1px solid #1a1a1a; }
  .solution-item:last-child { border-bottom: none; }
  .solution-num { font-family: var(--font-head); font-size: 48px; font-weight: 800; color: #1e1e1e; line-height: 1; flex-shrink: 0; min-width: 60px; }
  .solution-content h3 { font-family: var(--font-head); font-size: 20px; font-weight: 700; margin-bottom: 8px; letter-spacing: -0.3px; }
  .solution-content p { font-size: 15px; color: #888; line-height: 1.7; }
  .solution-badge { display: inline-block; margin-top: 12px; background: rgba(255,184,0,0.1); color: var(--accent2); border: 1px solid rgba(255,184,0,0.2); font-size: 12px; padding: 4px 12px; border-radius: 2px; }

  .reviews-section { background: #0d0d0d; }
  .reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-top: 56px; }
  .review-card { background: var(--gray); border: 1px solid #222; padding: 28px 24px; }
  .stars { color: var(--accent2); font-size: 14px; margin-bottom: 16px; }
  .review-text { font-size: 15px; color: #ccc; line-height: 1.7; margin-bottom: 20px; font-style: italic; }
  .review-author { display: flex; align-items: center; gap: 12px; }
  .avatar { width: 36px; height: 36px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: #fff; flex-shrink: 0; }
  .author-name { font-size: 14px; font-weight: 500; }
  .author-role { font-size: 12px; color: var(--muted); }

  .cta-section {
    position: relative; overflow: hidden;
    background: #080808; border-top: 1px solid #1a1a1a; border-bottom: 1px solid #1a1a1a;
    text-align: center;
  }
  .cta-section::before {
    content: '';
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    width: 600px; height: 400px;
    background: radial-gradient(ellipse, rgba(255,92,0,0.07) 0%, transparent 70%);
    pointer-events: none;
  }
  .cta-urgency-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(255,45,45,0.1); border: 1px solid rgba(255,45,45,0.25);
    color: #ff6666; font-size: 12px; font-weight: 600;
    padding: 8px 18px; border-radius: 2px; margin-bottom: 28px;
    text-transform: uppercase; letter-spacing: 0.08em;
  }
  .cta-section h2 {
    font-family: var(--font-head); font-size: clamp(32px, 5vw, 56px);
    font-weight: 800; letter-spacing: -1.5px; margin-bottom: 16px;
    line-height: 1.05; position: relative;
  }
  .cta-section h2 em { color: var(--accent); font-style: normal; }
  .cta-sub { font-size: 17px; color: #777; max-width: 520px; margin: 0 auto 24px; font-weight: 300; line-height: 1.7; }
  .cta-sub strong { color: #ccc; font-weight: 500; }

  .cta-price-block {
    display: inline-flex; align-items: center; gap: 24px;
    margin: 0 auto 32px; flex-wrap: wrap; justify-content: center;
    background: #0f0f0f; border: 1px solid #222; padding: 16px 28px; border-radius: 4px;
  }
  .cta-price-old { font-family: var(--font-head); font-size: 18px; color: #444; text-decoration: line-through; }
  .cta-price-new { font-family: var(--font-head); font-size: 32px; font-weight: 800; color: var(--accent2); }
  .cta-price-label { font-size: 12px; color: var(--muted); }

  .btn-cta-big {
    display: inline-block; background: var(--accent); color: #fff;
    padding: 20px 48px; font-family: var(--font-body); font-size: 17px; font-weight: 600;
    border: none; cursor: pointer; border-radius: 4px; text-decoration: none;
    letter-spacing: 0.01em; transition: transform 0.2s, opacity 0.2s;
    animation: pulse-btn 2.5s ease-in-out infinite;
  }
  .btn-cta-big:hover { transform: translateY(-2px); opacity: 0.9; }

  .cta-below-btn { font-size: 13px; color: #555; margin-top: 14px; }
  .cta-below-btn span { color: #44cc88; }

  .cta-scarcity {
    display: flex; justify-content: center; gap: 40px; margin-top: 40px; flex-wrap: wrap;
    border-top: 1px solid #1a1a1a; padding-top: 32px;
  }
  .scarcity-item { text-align: center; }
  .scarcity-num { font-family: var(--font-head); font-size: 22px; font-weight: 800; color: var(--white); }
  .scarcity-label { font-size: 12px; color: var(--muted); margin-top: 2px; }

  .cta-features { display: flex; justify-content: center; gap: 28px; flex-wrap: wrap; margin-top: 28px; }
  .cta-feature { font-size: 13px; color: #555; display: flex; align-items: center; gap: 6px; }
  .cta-feature::before { content: '✓'; color: #44cc88; font-weight: 700; }

  .faq-list { margin-top: 56px; }
  .faq-item { border-bottom: 1px solid #1a1a1a; overflow: hidden; }
  .faq-question { width: 100%; background: none; border: none; color: var(--white); font-family: var(--font-body); font-size: 16px; font-weight: 500; text-align: left; padding: 24px 0; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
  .faq-question:hover { color: var(--accent); }
  .faq-arrow { color: var(--accent); font-size: 20px; flex-shrink: 0; transition: transform 0.3s; }
  .faq-arrow.open { transform: rotate(45deg); }
  .faq-answer { font-size: 15px; color: #888; line-height: 1.7; padding-bottom: 24px; max-width: 680px; }

  footer { padding: 48px 0; border-top: 1px solid #1a1a1a; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
  .footer-logo { font-family: var(--font-head); font-weight: 800; font-size: 16px; }
  .footer-logo span { color: var(--accent); }
  .footer-note { font-size: 13px; color: var(--muted); }

  @media (max-width: 640px) {
    .problems-grid { grid-template-columns: 1fr; }
    .stats-bar { grid-template-columns: 1fr; }
    .stat-item { border-right: none; border-bottom: 1px solid #1e1e1e; padding: 20px 0; }
    .stat-item:last-child { border-bottom: none; }
    .solution-num { font-size: 32px; min-width: 40px; }
    .countdown-wrapper { flex-direction: column; gap: 12px; }
    .countdown-msg { margin-left: 0; text-align: left; }
    footer { flex-direction: column; text-align: center; }
    .nav-timer { display: none; }
    .cta-scarcity { gap: 20px; }
  }
`;

const features = [
  { icon: "⚡", title: "All-in-One CRM", desc: "Contacts, pipelines, appointments, and deals — all in one place. No more juggling 5 different tools." },
  { icon: "🤖", title: "Smart Automation", desc: "Build workflows that follow up with leads automatically via SMS, email, and voicemail — 24/7 without you." },
  { icon: "📱", title: "White-Label Ready", desc: "Rebrand GoHighLevel as your own SaaS product. Charge clients monthly and build recurring revenue." },
  { icon: "🌐", title: "Website & Funnel Builder", desc: "Drag-and-drop landing pages and funnels that convert. No Clickfunnels or WordPress needed." },
  { icon: "📅", title: "Booking & Calendar", desc: "Clients book directly into your calendar. Automated reminders cut no-shows by up to 80%." },
  { icon: "📊", title: "Reporting Dashboard", desc: "See exactly which campaigns bring revenue. Prove your ROI to clients with one clean dashboard." },
];

const problems = [
  { title: "You're losing leads every single day", desc: "Ads fire. Enquiries come in. Then nothing — no follow-up, no system, no sale. Your competitors are capturing those exact leads while you sleep.", cost: "⚠ Cost: ₹15,000–50,000 in wasted ad spend/month", num: "01" },
  { title: "Your tool stack is bleeding you dry", desc: "CRM + email software + funnel builder + booking app + analytics = ₹30,000+/month. You're paying for 6 tools that don't even talk to each other.", cost: "⚠ Cost: ₹3,60,000+ per year in subscriptions", num: "02" },
  { title: "Manual work is your ceiling", desc: "Every new client means more hours. You copy-paste follow-ups, manually send reports, track leads in spreadsheets. You can't scale what you can't automate.", cost: "⚠ Cost: 15–20 hours of your time every week", num: "03" },
  { title: "Clients leave when they can't see results", desc: "Without a live dashboard, clients don't trust the value you deliver. Churn kills your recurring revenue before it even builds.", cost: "⚠ Cost: 1 lost client = ₹10,000–₹50,000/month gone", num: "04" },
  { title: "No recurring revenue — just one-off projects", desc: "You're stuck on project-to-project income. Every month starts at zero. There's no safety net, no predictability, no scale.", cost: "⚠ Cost: Unstable income, constant hustle stress", num: "05" },
  { title: "Decision fatigue is slowing everything down", desc: "Which tool do I use? How do I follow up? What do I send next? Without a system, every task requires a new decision — and that kills momentum.", cost: "⚠ Cost: Hours lost daily, deals not closed", num: "06" },
];

const solutions = [
  { title: "One platform replaces everything", desc: "GHL replaces your CRM, email marketing, funnel builder, booking system, and reporting tool. One login, one monthly fee.", badge: "Saves ₹25,000+/month in tools" },
  { title: "Automated follow-up sequences", desc: "Set up once: when a lead comes in, GHL automatically sends SMS, email, and voicemail drops — until they respond or opt out.", badge: "10x lead response rate" },
  { title: "Sell GHL as your own product", desc: "White-label the entire platform under your brand. Charge clients ₹5,000–₹20,000/month for access. Pure recurring profit.", badge: "New recurring revenue stream" },
  { title: "Client reporting on autopilot", desc: "Every client gets a live dashboard showing their leads, bookings, and campaign results. No more manual reports.", badge: "Retain clients 3x longer" },
];

const reviews = [
  { text: "I replaced 6 tools with GHL and cut my monthly software cost by ₹18,000. My leads now get followed up automatically — I closed 3 deals while sleeping.", name: "Arjun S.", role: "Digital Marketing Agency, Mumbai", initials: "AS" },
  { text: "The white-label feature changed everything. I now have 12 clients paying me £299/month each for 'my' CRM software. GoHighLevel is the backend.", name: "Marcus T.", role: "Agency Owner, Manchester UK", initials: "MT" },
  { text: "My show-up rate for sales calls went from 40% to 78% after setting up GHL's automated reminder sequences. That alone paid for the tool 10x over.", name: "Priya K.", role: "Freelance Funnel Builder, Bangalore", initials: "PK" },
  { text: "I was sceptical at first. Within 2 weeks of setting up automations, I recovered 4 dead leads that turned into paying clients. Unreal.", name: "David O.", role: "Growth Consultant, Lagos", initials: "DO" },
  { text: "Clients used to cancel when they didn't 'see results.' Now they log into their dashboard daily. Churn dropped to almost zero.", name: "Sarah M.", role: "Social Media Agency, London", initials: "SM" },
  { text: "As a solo freelancer, GHL let me operate like an agency. I handle 8 clients with the same effort I used to spend on 2. Game changer.", name: "Rohan V.", role: "Freelancer, Pune", initials: "RV" },
];

const faqs = [
  { q: "What exactly is GoHighLevel?", a: "GoHighLevel (GHL) is an all-in-one marketing and CRM platform built specifically for digital marketing agencies and freelancers. It combines CRM, email marketing, SMS automation, funnel building, appointment booking, and client reporting into one platform." },
  { q: "How much does GoHighLevel cost?", a: "GHL starts at $97/month for the Starter plan and $297/month for the Agency Unlimited plan — which lets you add unlimited client accounts. Most agency owners make this back within the first month by either saving on tools or reselling access to clients." },
  { q: "I'm not technical — can I still use it?", a: "Yes. GHL has drag-and-drop builders, pre-built automation templates, and an active community with thousands of tutorials. Most users are up and running within a week without any coding knowledge." },
  { q: "Can I white-label it and sell it as my own?", a: "Absolutely — this is one of GHL's most powerful features. On the Agency plan you can brand the entire platform with your logo, domain, and colours, then charge your clients monthly for access. Many agency owners generate ₹1–5L/month in pure recurring revenue this way." },
  { q: "Is there a free trial?", a: "Yes — GoHighLevel offers a 14-day free trial with full access to all features. No credit card required to start. You can click the button below to start your trial." },
  { q: "Does it work for freelancers or only agencies?", a: "Both. Freelancers use GHL to manage their own lead generation and client delivery. Agencies use it to manage multiple clients, automate reporting, and resell the platform. Whether you have 1 client or 100, GHL scales with you." },
  { q: "What's the difference between GHL and other CRMs like HubSpot?", a: "HubSpot and Salesforce are built for enterprise sales teams. GHL is built for digital marketers — it includes funnel builders, SMS/email automation, reputation management, and white-labelling that those platforms don't offer (or charge 10x more for)." },
];

function useCountdown() {
  const [time, setTime] = useState({ h: 23, m: 47, s: 33 });
  useEffect(() => {
    const iv = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev;
        if (s > 0) return { h, m, s: s - 1 };
        if (m > 0) return { h, m: m - 1, s: 59 };
        if (h > 0) return { h: h - 1, m: 59, s: 59 };
        return { h: 0, m: 0, s: 0 };
      });
    }, 1000);
    return () => clearInterval(iv);
  }, []);
  return time;
}

const pad = n => String(n).padStart(2, '0');

export default function GHLPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const time = useCountdown();

  return (
    <>
      <style>{styles}</style>

      <div className="urgency-bar">
        <strong>⚠ Limited Offer:</strong> 14-Day Free Trial expires in {pad(time.h)}:{pad(time.m)}:{pad(time.s)} — Don't lose another lead today.
      </div>

      <nav>
        <div className="nav-logo">MultiverseAIApp</div>
        <div className="nav-right">
          <span className="nav-timer">Trial ends: {pad(time.h)}:{pad(time.m)}:{pad(time.s)}</span>
          <a href="https://www.gohighlevel.com/?fp_ref=guruprasad57" className="nav-cta" target="_blank" rel="noopener noreferrer">
            Claim Free Trial →
          </a>
        </div>
      </nav>

      {/* HOOK */}
      <section className="hook">
        <div className="page">
          <div className="hook-eyebrow">
            <span className="hook-tag">For Digital Marketers & Agency Owners</span>
            <span className="hook-live"><span className="live-dot"></span>2,847 marketers reading this now</span>
          </div>
          <h1>
            Every day without<br />
            a system, you're<br />
            <em>leaving money</em><br />
            on the table.
          </h1>
          <p className="hook-subhead">
            Your leads are going cold. Your competitors are automating.<br />
            The gap widens every single hour you wait.
          </p>
          <p className="hook-sub">
            <strong>GoHighLevel</strong> is the all-in-one platform that replaces your CRM, email tool, funnel builder, booking app, and reporting dashboard — so you stop losing deals to agencies that have already systematised what you're still doing manually.
          </p>
          <div className="cost-callout">
            <span>You're currently paying</span>
            <span className="cost-num">₹30,000+/month</span>
            <span>for tools that don't work together. GHL fixes that from day one.</span>
          </div>
          <div className="cta-group">
            <a href="https://www.gohighlevel.com/?fp_ref=guruprasad57" className="btn-primary" target="_blank" rel="noopener noreferrer">
              Start Free 14-Day Trial Now
            </a>
            <button className="btn-ghost" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
              See What's Inside
            </button>
          </div>
          <div className="hook-trust">
            <span className="trust-item">No credit card required</span>
            <span className="trust-item">Full platform access from day 1</span>
            <span className="trust-item">Cancel anytime</span>
            <span className="trust-item">Setup in under 1 hour</span>
          </div>
          <div className="countdown-wrapper">
            <span className="countdown-label">⏰ Free trial offer expires in</span>
            <div className="countdown-units">
              <div className="countdown-unit">
                <span className="countdown-num">{pad(time.h)}</span>
                <span className="countdown-sub">hours</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-unit">
                <span className="countdown-num">{pad(time.m)}</span>
                <span className="countdown-sub">mins</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-unit">
                <span className="countdown-num">{pad(time.s)}</span>
                <span className="countdown-sub">secs</span>
              </div>
            </div>
            <p className="countdown-msg">After this, pricing returns to standard. Lock in your trial before it closes.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="page">
        <div className="stats-bar">
          <div className="stat-item"><div className="stat-num">60K+</div><div className="stat-label">Agencies using GHL worldwide</div></div>
          <div className="stat-item"><div className="stat-num">6-in-1</div><div className="stat-label">Tools replaced in one platform</div></div>
          <div className="stat-item"><div className="stat-num">14 days</div><div className="stat-label">Free trial — no card needed</div></div>
        </div>
      </div>

      {/* FEATURES */}
      <section id="features">
        <div className="page">
          <div className="section-tag">Key Features</div>
          <h2 className="section-title">Everything your agency needs.<br />Nothing it doesn't.</h2>
          <p className="section-sub">Six platforms in one subscription. One login. One dashboard. One monthly fee that pays for itself.</p>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="problems-section">
        <div className="page">
          <div className="section-tag">The Real Cost of Doing Nothing</div>
          <h2 className="section-title">Every problem below is<br />actively costing you money.</h2>
          <p className="section-sub">This isn't about features. This is about what happens to your business when you don't fix these — month after month.</p>
          <div className="problem-intro">
            <p>The average digital marketer loses <strong>₹2–6 lakhs per year</strong> to disorganised systems, missed follow-ups, and tool sprawl. Not because they lack skill — but because <strong>no one built them a system.</strong> That changes today.</p>
          </div>
          <div className="problems-grid">
            {problems.map((p, i) => (
              <div className="problem-card" key={i} data-num={p.num}>
                <h4>✗ {p.title}</h4>
                <p>{p.desc}</p>
                <span className="problem-cost">{p.cost}</span>
              </div>
            ))}
          </div>
          <div className="loss-banner">
            <span className="loss-icon">🔥</span>
            <p className="loss-text">If even <strong>2 of these 6 problems apply to you</strong>, you are losing a minimum of ₹50,000–₹1,00,000 per year in revenue, time, and wasted ad spend. GoHighLevel eliminates all six — from day one of your free trial.</p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section>
        <div className="page">
          <div className="section-tag">The Solution</div>
          <h2 className="section-title">How GoHighLevel fixes all of it</h2>
          <p className="section-sub">One platform, built specifically for marketers, that solves every problem above — permanently.</p>
          <div className="solution-list">
            {solutions.map((s, i) => (
              <div className="solution-item" key={i}>
                <div className="solution-num">0{i + 1}</div>
                <div className="solution-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="solution-badge">{s.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-section">
        <div className="page">
          <div className="section-tag">Real Reviews</div>
          <h2 className="section-title">What agency owners are saying</h2>
          <p className="section-sub">From freelancers in Bangalore to agency owners in London — here's what changed after switching to GHL.</p>
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div className="review-card" key={i}>
                <div className="stars">★★★★★</div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <div className="avatar">{r.initials}</div>
                  <div>
                    <div className="author-name">{r.name}</div>
                    <div className="author-role">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY CTA */}
      <section className="cta-section">
        <div className="page">
          <div className="cta-urgency-badge">
            <span className="live-dot" style={{background:'#ff6666'}}></span>
            ⏰ Offer expires in {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
          </div>
          <h2>
            Your competitors started<br />
            their trial <em>while you<br />were deciding.</em>
          </h2>
          <p className="cta-sub">
            Every hour you delay is another lead gone cold, another follow-up missed, another client won by someone who already has the system. <strong>Start your 14-day free trial right now — before this offer closes.</strong>
          </p>
          <div className="cta-price-block">
            <div>
              <div className="cta-price-old">$297/mo after trial</div>
              <div className="cta-price-label">Agency Unlimited Plan</div>
            </div>
            <div style={{color:'#333', fontSize:'24px', fontWeight:'300'}}>→</div>
            <div>
              <div className="cta-price-new">$0 today</div>
              <div className="cta-price-label">Full 14-day access</div>
            </div>
          </div>
          <a href="https://www.gohighlevel.com/?fp_ref=guruprasad57" className="btn-cta-big" target="_blank" rel="noopener noreferrer">
            Yes — Claim My Free Trial Now →
          </a>
          <p className="cta-below-btn">
            <span>✓ No credit card</span> &nbsp;·&nbsp; <span>✓ Cancel anytime</span> &nbsp;·&nbsp; <span>✓ Full access instantly</span>
          </p>
          <div className="cta-scarcity">
            <div className="scarcity-item"><div className="scarcity-num">60,000+</div><div className="scarcity-label">Agencies already inside</div></div>
            <div className="scarcity-item"><div className="scarcity-num">$0</div><div className="scarcity-label">Cost to start today</div></div>
            <div className="scarcity-item"><div className="scarcity-num">{pad(time.h)}:{pad(time.m)}:{pad(time.s)}</div><div className="scarcity-label">Until offer expires</div></div>
          </div>
          <div className="cta-features">
            <span className="cta-feature">Full platform access</span>
            <span className="cta-feature">All 6 tools included</span>
            <span className="cta-feature">Setup in under 1 hour</span>
            <span className="cta-feature">No technical skills needed</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="page">
          <div className="section-tag">FAQ</div>
          <h2 className="section-title">Questions before you start?</h2>
          <p className="section-sub">Everything you need to know about GoHighLevel before your free trial.</p>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item" key={i}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <span className={`faq-arrow ${openFaq === i ? 'open' : ''}`}>+</span>
                </button>
                {openFaq === i && <p className="faq-answer">{f.a}</p>}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', paddingTop: '56px', borderTop: '1px solid #1a1a1a', marginTop: '16px' }}>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>Still reading? The trial is still open — but the clock is ticking.</p>
            <a href="https://www.gohighlevel.com/?fp_ref=guruprasad57" className="btn-primary" target="_blank" rel="noopener noreferrer">
              Start Free Trial — {pad(time.h)}:{pad(time.m)}:{pad(time.s)} left →
            </a>
          </div>
        </div>
      </section>

      <div className="page">
        <footer>
          <div className="footer-logo">MultiverseAIApp</div>
        </footer>
      </div>
    </>
  );
}
