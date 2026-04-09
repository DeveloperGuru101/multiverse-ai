import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --black: #0a0a0a;
    --white: #f5f2ee;
    --accent: #ff5c00;
    --accent2: #ffb800;
    --gray: #1a1a1a;
    --gray2: #2a2a2a;
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

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(10,10,10,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #222;
    padding: 16px 24px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .nav-logo { font-family: var(--font-head); font-weight: 800; font-size: 18px; letter-spacing: -0.5px; }
  .nav-logo span { color: var(--accent); }
  .nav-cta {
    background: var(--accent); color: #fff;
    border: none; padding: 10px 20px;
    font-family: var(--font-body); font-size: 13px; font-weight: 500;
    cursor: pointer; border-radius: 4px; text-decoration: none;
    transition: opacity 0.2s;
  }
  .nav-cta:hover { opacity: 0.85; }

  /* HOOK */
  .hook {
    min-height: 100vh;
    display: flex; flex-direction: column; justify-content: center;
    padding-top: 80px;
    position: relative;
    overflow: hidden;
  }
  .hook::before {
    content: '';
    position: absolute; top: -200px; right: -200px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(255,92,0,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .hook-tag {
    display: inline-block;
    border: 1px solid var(--accent);
    color: var(--accent);
    font-size: 11px; font-weight: 500; letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 6px 14px; border-radius: 2px;
    margin-bottom: 32px;
  }
  .hook h1 {
    font-family: var(--font-head);
    font-size: clamp(42px, 7vw, 80px);
    font-weight: 800;
    line-height: 1.0;
    letter-spacing: -2px;
    margin-bottom: 28px;
  }
  .hook h1 em { color: var(--accent); font-style: normal; }
  .hook h1 .line2 { color: var(--muted); }
  .hook-sub {
    font-size: 18px; color: #aaa; max-width: 560px;
    line-height: 1.7; margin-bottom: 44px;
    font-weight: 300;
  }
  .hook-sub strong { color: var(--white); font-weight: 500; }
  .cta-group { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
  .btn-primary {
    background: var(--accent); color: #fff;
    border: none; padding: 16px 32px;
    font-family: var(--font-body); font-size: 15px; font-weight: 500;
    cursor: pointer; border-radius: 4px; text-decoration: none;
    transition: transform 0.2s, opacity 0.2s;
    display: inline-block;
  }
  .btn-primary:hover { transform: translateY(-2px); opacity: 0.9; }
  .btn-ghost {
    background: transparent; color: var(--white);
    border: 1px solid #333; padding: 16px 32px;
    font-family: var(--font-body); font-size: 15px; font-weight: 400;
    cursor: pointer; border-radius: 4px;
    transition: border-color 0.2s;
  }
  .btn-ghost:hover { border-color: #666; }
  .hook-note { font-size: 13px; color: var(--muted); margin-top: 16px; }

  /* STATS BAR */
  .stats-bar {
    border-top: 1px solid #1e1e1e;
    border-bottom: 1px solid #1e1e1e;
    padding: 32px 0;
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }
  .stat-item {
    text-align: center;
    padding: 0 24px;
    border-right: 1px solid #1e1e1e;
  }
  .stat-item:last-child { border-right: none; }
  .stat-num {
    font-family: var(--font-head);
    font-size: 36px; font-weight: 800;
    color: var(--accent); letter-spacing: -1px;
  }
  .stat-label { font-size: 13px; color: var(--muted); margin-top: 4px; }

  /* SECTION COMMONS */
  section { padding: 96px 0; }
  .section-tag {
    font-size: 11px; font-weight: 500; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--accent);
    margin-bottom: 16px;
  }
  .section-title {
    font-family: var(--font-head);
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 700; letter-spacing: -1px;
    line-height: 1.1; margin-bottom: 20px;
  }
  .section-sub { font-size: 17px; color: #aaa; max-width: 560px; font-weight: 300; line-height: 1.7; }

  /* FEATURES */
  .features-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2px; margin-top: 56px;
    border: 1px solid #1e1e1e;
  }
  .feature-card {
    background: var(--gray);
    padding: 32px 28px;
    border: 1px solid #222;
    transition: background 0.2s;
  }
  .feature-card:hover { background: #1f1f1f; }
  .feature-icon {
    width: 40px; height: 40px;
    background: rgba(255,92,0,0.1);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; margin-bottom: 20px;
  }
  .feature-card h3 {
    font-family: var(--font-head); font-size: 17px; font-weight: 700;
    margin-bottom: 10px; letter-spacing: -0.3px;
  }
  .feature-card p { font-size: 14px; color: #888; line-height: 1.6; }

  /* PROBLEMS */
  .problems-section { background: #0d0d0d; }
  .problems-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 24px; margin-top: 56px;
  }
  .problem-card {
    background: var(--gray);
    border: 1px solid #222;
    border-left: 3px solid #ff3333;
    padding: 28px 24px;
  }
  .problem-card h4 {
    font-family: var(--font-head); font-size: 15px; font-weight: 700;
    margin-bottom: 8px; color: #ff6666;
  }
  .problem-card p { font-size: 14px; color: #888; line-height: 1.6; }

  /* SOLUTION */
  .solution-list { margin-top: 56px; }
  .solution-item {
    display: flex; gap: 24px; align-items: flex-start;
    padding: 28px 0;
    border-bottom: 1px solid #1a1a1a;
  }
  .solution-item:last-child { border-bottom: none; }
  .solution-num {
    font-family: var(--font-head); font-size: 48px; font-weight: 800;
    color: #1e1e1e; line-height: 1; flex-shrink: 0; min-width: 60px;
  }
  .solution-content h3 {
    font-family: var(--font-head); font-size: 20px; font-weight: 700;
    margin-bottom: 8px; letter-spacing: -0.3px;
  }
  .solution-content p { font-size: 15px; color: #888; line-height: 1.7; }
  .solution-badge {
    display: inline-block; margin-top: 12px;
    background: rgba(255,184,0,0.1); color: var(--accent2);
    border: 1px solid rgba(255,184,0,0.2);
    font-size: 12px; padding: 4px 12px; border-radius: 2px;
  }

  /* REVIEWS */
  .reviews-section { background: #0d0d0d; }
  .reviews-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px; margin-top: 56px;
  }
  .review-card {
    background: var(--gray); border: 1px solid #222;
    padding: 28px 24px;
  }
  .stars { color: var(--accent2); font-size: 14px; margin-bottom: 16px; }
  .review-text { font-size: 15px; color: #ccc; line-height: 1.7; margin-bottom: 20px; font-style: italic; }
  .review-author { display: flex; align-items: center; gap: 12px; }
  .avatar {
    width: 36px; height: 36px; border-radius: 50%;
    background: var(--accent); display: flex; align-items: center;
    justify-content: center; font-size: 13px; font-weight: 700;
    color: #fff; flex-shrink: 0;
  }
  .author-name { font-size: 14px; font-weight: 500; }
  .author-role { font-size: 12px; color: var(--muted); }

  /* CTA SECTION */
  .cta-section {
    text-align: center;
    background: linear-gradient(135deg, #0f0f0f 0%, #150a00 100%);
    border-top: 1px solid #1e1e1e;
    border-bottom: 1px solid #1e1e1e;
    position: relative; overflow: hidden;
  }
  .cta-section::before {
    content: '';
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    width: 500px; height: 300px;
    background: radial-gradient(ellipse, rgba(255,92,0,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .cta-section h2 {
    font-family: var(--font-head); font-size: clamp(32px, 5vw, 56px);
    font-weight: 800; letter-spacing: -1.5px; margin-bottom: 20px;
    position: relative;
  }
  .cta-section h2 em { color: var(--accent); font-style: normal; }
  .cta-section p { font-size: 17px; color: #888; max-width: 500px; margin: 0 auto 40px; font-weight: 300; }
  .cta-features {
    display: flex; justify-content: center; gap: 32px;
    flex-wrap: wrap; margin-top: 32px;
  }
  .cta-feature { font-size: 13px; color: #666; display: flex; align-items: center; gap: 8px; }
  .cta-feature::before { content: '✓'; color: var(--accent); font-weight: 700; }

  /* FAQ */
  .faq-list { margin-top: 56px; }
  .faq-item {
    border-bottom: 1px solid #1a1a1a;
    overflow: hidden;
  }
  .faq-question {
    width: 100%; background: none; border: none; color: var(--white);
    font-family: var(--font-body); font-size: 16px; font-weight: 500;
    text-align: left; padding: 24px 0;
    cursor: pointer; display: flex; justify-content: space-between; align-items: center;
    gap: 16px;
  }
  .faq-question:hover { color: var(--accent); }
  .faq-arrow { color: var(--accent); font-size: 20px; flex-shrink: 0; transition: transform 0.3s; }
  .faq-arrow.open { transform: rotate(45deg); }
  .faq-answer { font-size: 15px; color: #888; line-height: 1.7; padding-bottom: 24px; max-width: 680px; }

  /* FOOTER */
  footer {
    padding: 48px 0; border-top: 1px solid #1a1a1a;
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
  }
  .footer-logo { font-family: var(--font-head); font-weight: 800; font-size: 16px; }
  .footer-logo span { color: var(--accent); }
  .footer-note { font-size: 13px; color: var(--muted); }

  @media (max-width: 640px) {
    .problems-grid { grid-template-columns: 1fr; }
    .stats-bar { grid-template-columns: 1fr; }
    .stat-item { border-right: none; border-bottom: 1px solid #1e1e1e; padding: 20px 0; }
    .stat-item:last-child { border-bottom: none; }
    .solution-num { font-size: 32px; min-width: 40px; }
    footer { flex-direction: column; text-align: center; }
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
  { title: "Losing leads daily", desc: "You run ads, get enquiries, then forget to follow up. Those leads go cold and your ad spend is wasted." },
  { title: "Too many tools, too much cost", desc: "Paying for CRM + email tool + funnel builder + booking app + analytics = ₹30,000+/month in subscriptions." },
  { title: "Manual follow-ups killing time", desc: "You spend hours sending the same messages to leads instead of closing deals or doing client work." },
  { title: "No system for client reporting", desc: "Clients ask 'what results am I getting?' and you scramble to pull numbers from 4 different platforms." },
  { title: "Can't scale without hiring", desc: "Every new client means more manual work. You hit a ceiling because your business runs on you, not systems." },
  { title: "Inconsistent client results", desc: "Without automation, results depend on how much time you have that week. Inconsistency loses clients." },
];

const solutions = [
  { title: "One platform replaces everything", desc: "GHL replaces your CRM, email marketing, funnel builder, booking system, and reporting tool. One login, one monthly fee.", badge: "Saves ₹25,000+/month in tools" },
  { title: "Automated follow-up sequences", desc: "Set up once: when a lead comes in, GHL automatically sends SMS, email, and even voicemail drops — until they respond or opt out.", badge: "10x lead response rate" },
  { title: "Sell GHL as your own product", desc: "White-label the entire platform under your brand. Charge clients ₹5,000–₹20,000/month for access. Pure profit.", badge: "New recurring revenue stream" },
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

export default function GHLPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <style>{styles}</style>

      <nav>
        <div className="nav-logo">MultiverseAIApp</div>
        <a href="https://www.gohighlevel.com/?fp_ref=guruprasad57" className="nav-cta" target="_blank" rel="noopener noreferrer">
          Start Free Trial →
        </a>
      </nav>

      {/* HOOK */}
      <section className="hook">
        <div className="page">
          <div className="hook-tag">For Digital Marketers & Agency Owners</div>
          <h1>
            Stop running your<br />
            agency on <em>chaos.</em><br />
            <span className="line2">Build it on systems.</span>
          </h1>
          <p className="hook-sub">
            GoHighLevel is the <strong>all-in-one platform</strong> that replaces your CRM, email tool, funnel builder, booking app, and reporting dashboard — so you can scale without burning out.
          </p>
          <div className="cta-group">
            <a href="https://www.gohighlevel.com/?fp_ref=guruprasad57" className="btn-primary" target="_blank" rel="noopener noreferrer">
              Start Your 14-Day Free Trial
            </a>
            <button className="btn-ghost" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
              See What's Inside
            </button>
          </div>
          <p className="hook-note">No credit card required · Cancel anytime · Full access from day 1</p>
        </div>
      </section>

      {/* STATS */}
      <div className="page">
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-num">60K+</div>
            <div className="stat-label">Agencies using GHL worldwide</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">6-in-1</div>
            <div className="stat-label">Tools replaced in one platform</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">14 days</div>
            <div className="stat-label">Free trial — no card needed</div>
          </div>
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
          <div className="section-tag">The Problem</div>
          <h2 className="section-title">Sound familiar?</h2>
          <p className="section-sub">These are the exact problems killing most digital marketing agencies and freelancers right now.</p>
          <div className="problems-grid">
            {problems.map((p, i) => (
              <div className="problem-card" key={i}>
                <h4>✗ {p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
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

      {/* CTA */}
      <section className="cta-section">
        <div className="page">
          <div className="section-tag">Get Started Today</div>
          <h2>Ready to build an agency<br />that runs on <em>systems?</em></h2>
          <p>Join 60,000+ marketers who replaced chaos with GoHighLevel. Your 14-day free trial starts the moment you click.</p>
          <a href="https://www.gohighlevel.com/?fp_ref=guruprasad57" className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '17px', padding: '18px 40px' }}>
            Start Free Trial — No Card Needed →
          </a>
          <div className="cta-features">
            <span className="cta-feature">Full platform access</span>
            <span className="cta-feature">Cancel anytime</span>
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
        </div>
      </section>

      {/* FOOTER */}
      <div className="page">
        <footer>
          <div className="footer-logo">MultiverseAIApp</div>
        </footer>
      </div>
    </>
  );
}