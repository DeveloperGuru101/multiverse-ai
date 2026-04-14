import { useState, useEffect } from "react";

/* ── COUNTDOWN HOOK ── */
function useCountdown() {
  const [t, setT] = useState({ h: 23, m: 59, s: 59 });
  useEffect(() => {
    const iv = setInterval(() => setT(p => {
      if (p.s > 0) return { ...p, s: p.s - 1 };
      if (p.m > 0) return { ...p, m: p.m - 1, s: 59 };
      if (p.h > 0) return { h: p.h - 1, m: 59, s: 59 };
      return { h: 0, m: 0, s: 0 };
    }), 1000);
    return () => clearInterval(iv);
  }, []);
  return t;
}
const pad = n => String(n).padStart(2, "0");

const BUY_URL = "https://warriorplus.com/o2/a/j4cr1bz/0";

export default function BookSalesRocket() {
  const t = useCountdown();
  const ts = `${pad(t.h)}:${pad(t.m)}:${pad(t.s)}`;

  return (
    <div style={s.page}>

      {/* ── URGENCY BAR ── */}
      <div style={s.urgencyBar}>
        ⚡ Launch pricing ends tonight at midnight — price increases when the clock hits zero &nbsp;
        <span style={s.timerBadge}>{ts}</span>
      </div>

      {/* ── NAV ── */}
      <nav style={s.nav}>
        <span style={s.navLogo}>MultiverseAIAPP</span>
        <div style={s.navLinks}>
          {["#solution","#features","#bonuses","#pricing","#faq"].map((href, i) => (
            <a key={i} href={href} style={s.navLink}>
              {["The Tool","Features","Bonuses","Pricing","FAQ"][i]}
            </a>
          ))}
          <a href={BUY_URL} style={s.navBtn} target="_blank" rel="noopener noreferrer">Get Access Now</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={s.hero}>
        <div style={s.badge}>⚡ Attention: Amazon KDP Authors & Self-Publishers</div>
        <h1 style={s.h1}>
          From <em style={s.em}>Invisible Author</em><br />
          to Everywhere Overnight
        </h1>
        <p style={s.heroSub}>"Publish-Once-Promote-Everywhere" 24/7 AI Traffic Engine</p>

        <div style={s.bonusPill}>
          ⚡ <strong>Quick-Start Bonus:</strong> First 100 customers unlock 2 extra book uploads FREE — promote 3 books instead of 1. Once gone, it's gone.
        </div>

        <a href={BUY_URL} style={s.btnHero} target="_blank" rel="noopener noreferrer">
          🚀 Get AI Sales Rocket Now — Only $27
        </a>
        <p style={s.heroMeta}>Works On Mac • PC • iPhone • Android &nbsp;|&nbsp; 14-Day Money-Back Guarantee</p>
      </section>

      {/* ── PROBLEM ── */}
      <section style={s.section}>
        <SectionLabel>Sound Familiar?</SectionLabel>
        <H2>You Wrote the Book.<br />Now Nobody's Reading It.</H2>
        <p style={s.bodyText}>
          You spent weeks — maybe months — writing your book. You formatted it carefully, got the cover just right, uploaded it to Amazon KDP, and hit publish. Then you waited. And waited. Your book is buried on page 47 of Amazon results — invisible to the very readers who would love it.
        </p>
        <p style={{...s.bodyText, marginTop:'16px'}}>
          The brutal truth nobody tells you before you hit publish?
        </p>
        <div style={s.quoteBlock}>
          "Writing the book was the easy part. Marketing it — consistently, every single day — is the full-time job nobody warned you about."
        </div>

        <div style={s.painGrid}>
          {[
            { ico:"😩", title:"Daily manual posting", desc:"Writing captions, hunting hashtags, uploading images — only to get 3 likes from bots and your cousin." },
            { ico:"💸", title:"Ads that bleed cash", desc:"Spending $50 to make $12 on Facebook Ads. Not sustainable on $2.99 royalties." },
            { ico:"⏳", title:"Content treadmill", desc:"You became an author to write — not to spend every night as a part-time social media manager." },
            { ico:"🤷", title:"Posting into the void", desc:"No clicks, no traffic, no sales. Just hollow silence while your motivation quietly drains away." },
            { ico:"🔄", title:"Tools that deliver complexity", desc:"47-step setups, webhooks, Zapier chains. You needed a computer science degree to schedule one post." },
            { ico:"😴", title:"Zero sales after working all weekend", desc:"The most demoralising feeling for any author who poured their heart into their writing." },
          ].map((p, i) => (
            <div key={i} style={s.painCard}>
              <div style={s.painIco}>{p.ico}</div>
              <h4 style={s.painTitle}>{p.title}</h4>
              <p style={s.painDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section id="solution" style={{...s.section, ...s.sectionDark}}>
        <SectionLabel>But Here's the Truth…</SectionLabel>
        <H2>It's Not Your Fault.<br />And It's Completely Fixable.</H2>
        <p style={{...s.bodyText, maxWidth:'700px', margin:'0 auto 24px', textAlign:'center'}}>
          The authors making real, consistent money on Amazon aren't necessarily better writers. They're just better at showing up everywhere their readers spend their time — <strong style={s.strong}>automatically.</strong>
        </p>

        <div style={s.solutionIntro} id="solution">
          <div style={s.solutionBadge}>🚀 Introducing</div>
          <h3 style={s.solutionTitle}>AI Sales Rocket</h3>
          <p style={s.solutionDesc}>
            The World's Simplest Book Marketing Automation Platform.<br />
            <strong style={s.strong}>Upload Your Book. Generate Everything. Post Everywhere. Reach More Readers.</strong>
          </p>
          <p style={{...s.bodyText, textAlign:'center', maxWidth:'680px', margin:'0 auto 28px'}}>
            AI Sales Rocket is the first platform built specifically for Amazon KDP authors that connects your book to every major social media platform — and uses AI to generate, schedule, and publish your marketing content automatically, around the clock.
          </p>
          <div style={s.checkList}>
            {["Upload your manuscript — AI reads it instantly","Connect your accounts once — takes under 10 minutes","AI writes posts, generates images, schedules everything","Your book gets promoted on 7 platforms every single day"].map((item, i) => (
              <div key={i} style={s.checkItem}><span style={s.checkMark}>✔</span>{item}</div>
            ))}
          </div>
          <a href={BUY_URL} style={s.btnPrimary} target="_blank" rel="noopener noreferrer">
            🚀 Get AI Sales Rocket — See Pricing Below
          </a>
        </div>
      </section>

      {/* ── 3 STEPS ── */}
      <section style={s.section}>
        <SectionLabel>The Process</SectionLabel>
        <H2>Your Entire Book Marketing Done<br />in Three Simple Steps</H2>
        <p style={{...s.bodyText, textAlign:'center', maxWidth:'580px', margin:'0 auto 48px'}}>
          From first login to your first automated post going live — the whole process takes under 10 minutes.
        </p>
        <div style={s.stepsGrid}>
          {[
            { num:"1", title:"Upload Your Book", desc:"Upload your manuscript (DOC, PDF, or EPUB). AI Sales Rocket reads your content and instantly builds the complete foundation for all your marketing." },
            { num:"2", title:"Generate AI Content", desc:"One click generates weeks of marketing posts — articles, social captions, promo images — written by AI in your book's actual voice." },
            { num:"3", title:"Post Everywhere", desc:"Schedule and publish to every connected platform simultaneously. Facebook, Instagram, Pinterest, LinkedIn, WordPress, Threads, Bluesky — all at once, automatically." },
          ].map((step, i) => (
            <div key={i} style={s.stepCard}>
              <div style={s.stepNum}>{step.num}</div>
              <h3 style={s.stepTitle}>{step.title}</h3>
              <p style={s.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section style={{...s.section, ...s.sectionDark}}>
        <SectionLabel>Why AI Sales Rocket</SectionLabel>
        <H2>Everything Else Leaves You<br />Back at Square One</H2>
        <div style={s.compareGrid}>
          {[
            { ico:"😤", title:"Posting Manually", desc:"Hours every week for inconsistent results. The moment you stop posting, traffic dries up completely.", bad:true },
            { ico:"💸", title:"Paid Ads", desc:"Easy to spend $500 and make $80. Requires real budget, constant testing, and expertise most authors don't have.", bad:true },
            { ico:"🤖", title:"Generic AI (ChatGPT)", desc:"You still have to prompt it, copy output, design images, log into each platform, and post manually.", bad:true },
            { ico:"👔", title:"Marketing Agency", desc:"$1,500–$5,000/month. They don't understand KDP — you'll spend more in month one than most authors make all year.", bad:true },
            { ico:"🔧", title:"Buffer / Hootsuite", desc:"Schedule content — but don't write it, don't generate images, have zero Amazon integration. You're still doing all the work.", bad:true },
            { ico:"🚀", title:"AI Sales Rocket", desc:"Reads your book. Writes the content. Generates images. Connects to 7 platforms. Publishes daily. Links to your Amazon listing. One setup. Runs forever.", bad:false },
          ].map((item, i) => (
            <div key={i} style={{...s.compareCard, ...(item.bad ? {} : s.compareCardGood)}}>
              <div style={s.compareIco}>{item.ico}</div>
              <h4 style={{...s.compareTitle, ...(item.bad ? {} : {color:'#a5b4fc'})}}>{item.title}</h4>
              <p style={s.compareDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={s.section}>
        <SectionLabel>Every Feature You Need</SectionLabel>
        <H2>Built for Authors Who Want<br />to Sell, Not Suffer</H2>
        <div style={s.featGrid}>
          {[
            { ico:"🤖", title:"AI-Powered Content Engine", desc:"Generate articles, posts, captions, and promo copy at scale — written directly from your book's content." },
            { ico:"🖼️", title:"AI Image Generation", desc:"Auto-generate platform-optimised visuals for Instagram, Pinterest, and Facebook. Zero design skills needed." },
            { ico:"🌐", title:"7-Platform Publishing", desc:"Facebook, Instagram, Pinterest, LinkedIn, WordPress, Threads, Bluesky — all managed from one dashboard." },
            { ico:"🔗", title:"Direct Amazon Integration", desc:"Every post links straight to your Amazon listing, driving real buyer traffic to your book automatically." },
            { ico:"🎯", title:"Audience-Tuned Messaging", desc:"Set your target audience once — every post is written for your ideal reader, on the right platform, every time." },
            { ico:"🔑", title:"OpenAI + Claude API Support", desc:"Use whichever AI you prefer. Plug in your own API key — pennies-per-post cost, fully transparent." },
            { ico:"🎓", title:"Full Step-by-Step Training", desc:"Video walkthrough plus quick-start PDF. From first setup to first automated post, even beginners are live in 10 minutes." },
            { ico:"✍️", title:"Author & Pen Name Manager", desc:"Manage multiple author identities from one clean dashboard — perfect for prolific publishers." },
          ].map((f, i) => (
            <div key={i} style={s.featCard}>
              <div style={s.featIco}>{f.ico}</div>
              <h3 style={s.featTitle}>{f.title}</h3>
              <p style={s.featDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section style={{...s.section, ...s.sectionDark, textAlign:'center'}}>
        <SectionLabel>Cross-Platform Reach</SectionLabel>
        <H2>Your Book Gets Promoted<br />Everywhere Readers Already Are</H2>
        <p style={{...s.bodyText, textAlign:'center', maxWidth:'560px', margin:'0 auto 40px'}}>
          Connect all your accounts once — AI Sales Rocket posts to all 7 platforms automatically, every single day.
        </p>
        <div style={s.platformGrid}>
          {[
            { ico:"📘", name:"Facebook", sub:"Pages & Profiles" },
            { ico:"📸", name:"Instagram", sub:"Posts & Feed" },
            { ico:"📌", name:"Pinterest", sub:"Pins & Boards" },
            { ico:"💼", name:"LinkedIn", sub:"Professional Posts" },
            { ico:"📝", name:"WordPress", sub:"Blog Articles" },
            { ico:"🧵", name:"Threads", sub:"Short-Form Posts" },
            { ico:"🦋", name:"Bluesky", sub:"Social Posts" },
          ].map((p, i) => (
            <div key={i} style={s.platformCard}>
              <div style={s.platformIco}>{p.ico}</div>
              <div style={s.platformName}>{p.name}</div>
              <div style={s.platformSub}>{p.sub}</div>
            </div>
          ))}
        </div>
        <p style={{...s.bodyText, textAlign:'center', marginTop:'28px', color:'#818cf8', fontWeight:600}}>
          One setup. Seven platforms. Posting every day — automatically.
        </p>
      </section>

      {/* ── BONUSES ── */}
      <section id="bonuses" style={s.section}>
        <SectionLabel>Fast Action Bonuses</SectionLabel>
        <H2>5 Fast-Action Bonuses<br />Yours FREE With Your Order Today</H2>
        <div style={s.warnPill}>⚠️ These bonuses are only available during the special launch window. Once it closes, they're gone for good.</div>
        <div style={s.bonusGrid}>
          {[
            { num:"Bonus #1", title:"Bestseller Book Cover Generator", value:"$67", desc:"Create stunning bestseller-style book covers without a designer. AI art backgrounds, drag-and-drop editing, 3D mockup generator.", points:["Bestseller-style layout","AI art background generation","Drag-and-drop title editing","3D mockup generator"] },
            { num:"Bonus #2", title:"Multilingual — Sell Worldwide", value:"$97", desc:"Turn one book into a global asset. Reach readers in 20+ countries without writing a single word in another language.", points:["Translate into 20+ languages","Generate multilingual social content","Create localized Amazon listings","Country-specific keyword variations"] },
            { num:"Bonus #3", title:"1-Click Amazon Niche Keyword Tool", value:"$37", desc:"Discover exact keywords real buyers type into Amazon when they're ready to purchase. Find low-competition, high-traffic niches.", points:["Find low-competition niches instantly","See exactly what buyers search for","Feed keywords into your AI content"] },
            { num:"Bonus #4", title:"10-Minute Fast-Track Guide", value:"$27", desc:"Step-by-step from zero to your first automated campaign live in 10 minutes or less. Exact click-by-click setup sequence.", points:["Click-by-click setup sequence","API key setup in under 2 minutes","First campaign live same day"] },
            { num:"Bonus #5 ⭐", title:"KDP Royalties Hub — Free Skool Community", value:"$97", desc:"Private Skool community, custom GPT that writes unlimited books, plug-and-play prompt pack, and full video training library.", points:["Private Skool community","Custom GPT for unlimited books","Matching prompt pack","Full video training library"] },
          ].map((b, i) => (
            <div key={i} style={s.bonusCard}>
              <div style={s.bonusNum}>{b.num}</div>
              <div style={s.bonusValue}>Value: {b.value} — <span style={{color:'#22c55e', fontWeight:700}}>FREE</span></div>
              <h3 style={s.bonusTitle}>{b.title}</h3>
              <p style={s.bonusDesc}>{b.desc}</p>
              <ul style={s.bonusPoints}>
                {b.points.map((pt, j) => <li key={j} style={s.bonusPt}><span style={s.chk}>✔</span>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={s.totalBonusBox}>
          <span style={s.totalLabel}>Total Bonus Value:</span>
          <span style={s.totalValue}>$325 — FREE with your order</span>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section style={{...s.section, ...s.sectionDark, textAlign:'center'}}>
        <div style={s.guaranteeBox}>
          <div style={s.guaranteeIco}>🛡️</div>
          <h3 style={s.guaranteeTitle}>14-Day Money-Back Guarantee</h3>
          <p style={{...s.bodyText, maxWidth:'600px', margin:'0 auto'}}>
            We give you a full 14 days to try the platform — set it up, connect your accounts, generate your content, and see it in action. If you genuinely try the software and it doesn't work for you, contact support and we'll issue a full refund — no hassle, no hard feelings.
          </p>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{...s.section, textAlign:'center'}}>
        <SectionLabel>Special Launch Offer</SectionLabel>
        <H2>Get Everything Above For<br />One Low, One-Time Price</H2>
        <p style={{...s.bodyText, textAlign:'center', marginBottom:'40px'}}>
          This special launch price will not last. Once the launch window closes, the price goes up. Lock in your access now.
        </p>

        <div style={s.priceCard} id="value-stack">
          <div style={s.priceStrike}>Regular Price: $97/year</div>
          <div style={s.priceAmount}>$27</div>
          <div style={s.priceSub}>One-Time Payment · No Monthly Fees · Instant Access</div>

          <div style={s.priceIncludes}>
            {[
              "Advanced AI-Powered Marketing Engine",
              "Bulk AI Content Generator",
              "Built-in Real Consumer Traffic from 7 Platforms",
              "AI Image Generation for Scroll-Stopping Book Ads",
              "Multi-Platform Publishing",
              "Author & Pen Name Manager",
              "Direct Amazon Listing Integration",
              "Priority Support + Video Training Library",
              "BONUS #1: Bestseller Book Cover Generator ($67 value)",
              "BONUS #2: Multilingual — Sell Worldwide ($97 value)",
              "BONUS #3: 1-Click Amazon Niche Keyword Tool ($37 value)",
              "BONUS #4: 10-Minute Fast-Track Guide ($27 value)",
              "BONUS #5: KDP Royalties Hub — Free Skool Community ($97 value)",
            ].map((item, i) => (
              <div key={i} style={{...s.priceItem, ...(i >= 8 ? {color:'#818cf8'} : {})}}>
                <span style={s.priceChk}>{i >= 8 ? '🎁' : '✔'}</span>{item}
              </div>
            ))}
          </div>

          <div style={s.countdownBox}>
            <div style={s.countdownLabel}>⏰ Launch price expires in</div>
            <div style={s.countdownUnits}>
              <div style={s.cdUnit}><span style={s.cdNum}>{pad(t.h)}</span><span style={s.cdSub}>hrs</span></div>
              <span style={s.cdSep}>:</span>
              <div style={s.cdUnit}><span style={s.cdNum}>{pad(t.m)}</span><span style={s.cdSub}>min</span></div>
              <span style={s.cdSep}>:</span>
              <div style={s.cdUnit}><span style={s.cdNum}>{pad(t.s)}</span><span style={s.cdSub}>sec</span></div>
            </div>
          </div>

          <a href={BUY_URL} style={s.btnHero} target="_blank" rel="noopener noreferrer">
            🚀 Get AI Sales Rocket Now For $27
          </a>
          <p style={{...s.heroMeta, marginTop:'14px'}}>Works On Mac • PC • iPhone • Android &nbsp;|&nbsp; 14-Day Money-Back Guarantee</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{...s.section, ...s.sectionDark}}>
        <SectionLabel>Have Questions?</SectionLabel>
        <H2>Frequently Asked Questions</H2>
        <div style={s.faqList}>
          {[
            { q:"Do I need any technical skills?", a:"Not at all. AI Sales Rocket was built specifically for non-technical users — authors, not programmers. If you can copy a link and click a button, you're all set. Most users are fully set up within 10 minutes." },
            { q:"How many books can I promote?", a:"The Front-End version gets you started with one book, giving it powerful daily, multi-channel marketing across all 7 platforms. Additional book slots are available as an upgrade after purchase." },
            { q:"Do I need my own AI API key?", a:"Yes — you provide your own OpenAI or Claude API key to power content generation. This keeps costs transparent and under your control. Most users spend less than $1–2/month on API costs even with daily posting active." },
            { q:"What social platforms does it connect to?", a:"Facebook, Instagram, Pinterest, LinkedIn, WordPress (self-hosted), Threads, and Bluesky — all the major platforms where your ideal readers spend time every day." },
            { q:"Is this a monthly subscription?", a:"No. This is a single one-time payment at the special launch price of $27. No recurring fees, no hidden charges, no subscription surprises. Pay once and use the platform for as long as you want." },
            { q:"How is this different from just using ChatGPT?", a:"ChatGPT can write a post — but it can't connect to your social accounts, schedule a full week of content, publish to 7 platforms simultaneously, generate platform-optimised images, or link every post to your Amazon buy page. AI Sales Rocket does all of that automatically." },
            { q:"What if my book isn't selling well right now?", a:"That's exactly the situation this was built for. A book that isn't selling is almost always a visibility problem, not a quality problem. AI Sales Rocket creates a consistent daily presence across 7 platforms, driving fresh traffic to your listing every day." },
            { q:"Does the AI content actually sound like it's about my book?", a:"It reads your actual manuscript. The AI generates content based on your book's real themes, characters, topics, and audience — not generic 'buy my book' posts. Every piece of content is tailored to what your specific readers care about." },
          ].map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{...s.section, textAlign:'center', background:'linear-gradient(135deg, #312e81, #020617)'}}>
        <H2>Your Book Deserves to Be Seen.</H2>
        <p style={{...s.bodyText, textAlign:'center', maxWidth:'600px', margin:'0 auto 32px'}}>
          You've done the hardest part — you wrote the book. Don't let it gather digital dust on Amazon page 47 while readers who would genuinely love it never even know it exists.
        </p>
        <a href={BUY_URL} style={s.btnHero} target="_blank" rel="noopener noreferrer">
          🚀 Get AI Sales Rocket Now For $27
        </a>
        <p style={{...s.heroMeta, marginTop:'14px'}}>Works On Mac • PC • iPhone • Android &nbsp;|&nbsp; 14-Day Money-Back Guarantee</p>
      </section>

      {/* ── FOOTER ── */}
      <footer style={s.footer}>
        <p>© 2026 AI Sales Rocket · Andreas Quintana & Ryan Mac · All Rights Reserved</p>
        <p style={{marginTop:'8px'}}>Support: <a href="mailto:support@aisalesrocket.zohodesk.eu" style={s.footerLink}>support@aisalesrocket.zohodesk.eu</a></p>
        <div style={s.footerLinks}>
          <a href="/privacy" style={s.footerLink}>Privacy Policy</a>
          <a href="/terms" style={s.footerLink}>Terms of Use</a>
        </div>
        <p style={{...s.footerNote}}>Results may vary. Testimonials shown are illustrative of potential results and individual experiences may differ. This product requires your own AI API key for content generation.</p>
      </footer>

    </div>
  );
}

/* ── FAQ ACCORDION ── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={s.faqItem}>
      <button style={s.faqQ} onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span style={{color:'#818cf8', fontSize:'20px', flexShrink:0}}>{open ? '−' : '+'}</span>
      </button>
      {open && <p style={s.faqA}>{a}</p>}
    </div>
  );
}

/* ── SHARED LABEL COMPONENTS ── */
function SectionLabel({ children }) {
  return <div style={s.sectionLabel}>{children}</div>;
}
function H2({ children }) {
  return <h2 style={s.h2}>{children}</h2>;
}

/* ── STYLES ── */
const s = {
  page: {
    minHeight: '100vh',
    background: 'radial-gradient(circle at top, #0f1b3d, #020617 70%)',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    overflowX: 'hidden',
  },

  urgencyBar: {
    background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
    padding: '10px 20px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  timerBadge: {
    background: 'rgba(0,0,0,0.3)',
    padding: '3px 12px',
    borderRadius: '20px',
    fontWeight: 700,
    fontFamily: 'monospace',
    fontSize: '15px',
    letterSpacing: '0.1em',
  },

  nav: {
    position: 'sticky', top: 0, zIndex: 99,
    background: 'rgba(2,6,23,0.95)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #1e293b',
    padding: '0 5%', height: '60px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    flexWrap: 'wrap', gap: '8px',
  },
  navLogo: { fontWeight: 800, fontSize: '18px', letterSpacing: '-0.5px' },
  purple: { color: '#818cf8' },
  navLinks: { display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' },
  navLink: { color: '#94a3b8', textDecoration: 'none', fontSize: '13px', fontWeight: 500 },
  navBtn: {
    background: 'linear-gradient(135deg,#6366f1,#7c3aed)',
    color: '#fff', padding: '8px 18px', borderRadius: '8px',
    textDecoration: 'none', fontSize: '13px', fontWeight: 700,
    boxShadow: '0 4px 15px rgba(99,102,241,0.4)',
  },

  hero: {
    padding: '80px 10% 72px',
    textAlign: 'center',
    borderBottom: '1px solid #1e293b',
  },
  badge: {
    display: 'inline-block',
    background: 'rgba(129,140,248,0.15)', color: '#818cf8',
    padding: '6px 16px', borderRadius: '20px',
    fontSize: '13px', fontWeight: 600, marginBottom: '24px',
  },
  h1: {
    fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
    fontWeight: 800, lineHeight: 1.1,
    marginBottom: '16px', letterSpacing: '-1px',
  },
  em: { color: '#818cf8', fontStyle: 'normal' },
  heroSub: { fontSize: '18px', color: '#94a3b8', marginBottom: '32px', fontStyle: 'italic' },
  bonusPill: {
    display: 'inline-block',
    background: 'rgba(245,158,11,0.1)', color: '#fbbf24',
    border: '1px solid rgba(245,158,11,0.25)',
    padding: '12px 24px', borderRadius: '10px',
    fontSize: '14px', maxWidth: '600px',
    lineHeight: 1.6, marginBottom: '32px',
  },
  btnHero: {
    display: 'inline-block',
    background: 'linear-gradient(135deg,#6366f1,#7c3aed)',
    color: '#fff', padding: '18px 40px', borderRadius: '12px',
    fontSize: '18px', fontWeight: 800,
    textDecoration: 'none',
    boxShadow: '0 10px 30px rgba(99,102,241,0.5)',
    transition: 'transform 0.2s',
  },
  heroMeta: { fontSize: '13px', color: '#475569', marginTop: '14px' },

  section: { padding: '80px 10%' },
  sectionDark: { background: '#020617' },
  sectionLabel: {
    display: 'inline-block',
    background: 'rgba(129,140,248,0.12)', color: '#818cf8',
    border: '1px solid rgba(129,140,248,0.25)',
    padding: '4px 14px', borderRadius: '20px',
    fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em',
    textTransform: 'uppercase', marginBottom: '16px',
  },
  h2: {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
    fontWeight: 800, letterSpacing: '-0.5px',
    marginBottom: '20px', lineHeight: 1.15,
  },
  bodyText: { fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 },
  strong: { color: '#e2e8f0', fontWeight: 600 },

  quoteBlock: {
    background: 'rgba(99,102,241,0.08)',
    border: '1px solid rgba(99,102,241,0.2)',
    borderLeft: '4px solid #6366f1',
    padding: '20px 24px', borderRadius: '0 10px 10px 0',
    fontSize: '16px', color: '#a5b4fc', fontStyle: 'italic',
    lineHeight: 1.7, margin: '28px 0',
  },

  painGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '18px', marginTop: '40px',
  },
  painCard: {
    background: '#020617', border: '1px solid #1e293b',
    borderRadius: '14px', padding: '22px',
    transition: 'all 0.25s',
  },
  painIco: { fontSize: '28px', marginBottom: '10px' },
  painTitle: { fontSize: '15px', fontWeight: 700, color: '#e2e8f0', marginBottom: '8px' },
  painDesc: { fontSize: '13px', color: '#64748b', lineHeight: 1.65 },

  solutionIntro: {
    background: 'radial-gradient(circle at top, #1e1b4b, #020617)',
    border: '1px solid #312e81',
    borderRadius: '20px', padding: '48px',
    textAlign: 'center', maxWidth: '800px', margin: '40px auto 0',
  },
  solutionBadge: {
    color: '#818cf8', fontWeight: 700, fontSize: '13px',
    textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px',
  },
  solutionTitle: { fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, marginBottom: '16px' },
  solutionDesc: { fontSize: '16px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '24px' },
  checkList: { textAlign: 'left', display: 'inline-block', marginBottom: '32px' },
  checkItem: {
    display: 'flex', gap: '10px', alignItems: 'flex-start',
    fontSize: '15px', color: '#cbd5e1', marginBottom: '10px',
  },
  checkMark: { color: '#22c55e', fontWeight: 700, flexShrink: 0, marginTop: '2px' },

  stepsGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px', marginTop: '0',
  },
  stepCard: {
    background: '#020617', border: '1px solid #1e293b',
    borderRadius: '16px', padding: '32px 24px',
    position: 'relative', textAlign: 'center',
  },
  stepNum: {
    width: '52px', height: '52px', borderRadius: '50%',
    background: 'linear-gradient(135deg,#6366f1,#7c3aed)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '22px', fontWeight: 800, margin: '0 auto 18px',
  },
  stepTitle: { fontSize: '18px', fontWeight: 700, marginBottom: '12px' },
  stepDesc: { fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 },

  compareGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '16px', marginTop: '40px',
  },
  compareCard: {
    background: '#0f172a', border: '1px solid #1e293b',
    borderRadius: '14px', padding: '24px',
    opacity: 0.8,
  },
  compareCardGood: {
    background: 'radial-gradient(circle at top, #1e1b4b, #020617)',
    border: '1px solid #4f46e5',
    opacity: 1,
    boxShadow: '0 10px 30px rgba(99,102,241,0.2)',
  },
  compareIco: { fontSize: '28px', marginBottom: '10px' },
  compareTitle: { fontSize: '15px', fontWeight: 700, color: '#94a3b8', marginBottom: '8px' },
  compareDesc: { fontSize: '13px', color: '#475569', lineHeight: 1.65 },

  featGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px', marginTop: '48px',
  },
  featCard: {
    background: '#020617', border: '1px solid #1e293b',
    borderRadius: '16px', padding: '26px',
    transition: 'all 0.25s',
  },
  featIco: { fontSize: '26px', marginBottom: '12px' },
  featTitle: { fontSize: '16px', fontWeight: 700, color: '#818cf8', marginBottom: '8px' },
  featDesc: { fontSize: '13px', color: '#64748b', lineHeight: 1.65 },

  platformGrid: {
    display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
    gap: '16px', marginTop: '0',
  },
  platformCard: {
    background: '#020617', border: '1px solid #1e293b',
    borderRadius: '14px', padding: '20px 24px',
    textAlign: 'center', minWidth: '110px',
    transition: 'all 0.25s',
  },
  platformIco: { fontSize: '28px', marginBottom: '8px' },
  platformName: { fontSize: '15px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' },
  platformSub: { fontSize: '11px', color: '#475569' },

  bonusGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px', marginTop: '40px',
  },
  bonusCard: {
    background: '#020617', border: '1px solid #1e293b',
    borderRadius: '16px', padding: '28px',
    position: 'relative',
  },
  bonusNum: {
    display: 'inline-block', background: 'rgba(129,140,248,0.15)', color: '#818cf8',
    padding: '3px 12px', borderRadius: '20px',
    fontSize: '11px', fontWeight: 700, marginBottom: '8px',
  },
  bonusValue: { fontSize: '13px', color: '#64748b', marginBottom: '10px' },
  bonusTitle: { fontSize: '16px', fontWeight: 700, color: '#e2e8f0', marginBottom: '10px' },
  bonusDesc: { fontSize: '13px', color: '#94a3b8', lineHeight: 1.65, marginBottom: '14px' },
  bonusPoints: { listStyle: 'none' },
  bonusPt: {
    display: 'flex', gap: '8px', alignItems: 'flex-start',
    fontSize: '13px', color: '#64748b', marginBottom: '6px',
  },
  chk: { color: '#22c55e', fontWeight: 700, flexShrink: 0 },
  warnPill: {
    background: 'rgba(245,158,11,0.1)', color: '#fbbf24',
    border: '1px solid rgba(245,158,11,0.2)',
    padding: '12px 20px', borderRadius: '8px',
    fontSize: '14px', marginBottom: '0',
  },
  totalBonusBox: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px',
    background: 'linear-gradient(135deg,#312e81,#1e1b4b)',
    border: '1px solid #4f46e5', borderRadius: '12px',
    padding: '20px 32px', marginTop: '32px', flexWrap: 'wrap',
  },
  totalLabel: { fontSize: '16px', color: '#94a3b8', fontWeight: 600 },
  totalValue: { fontSize: '20px', fontWeight: 800, color: '#818cf8' },

  guaranteeBox: {
    background: 'radial-gradient(circle at top, #1e1b4b, #020617)',
    border: '1px solid #312e81', borderRadius: '20px',
    padding: '48px', maxWidth: '700px', margin: '0 auto',
    textAlign: 'center',
  },
  guaranteeIco: { fontSize: '48px', marginBottom: '16px' },
  guaranteeTitle: { fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: '#e2e8f0' },

  priceCard: {
    background: 'linear-gradient(135deg,#1e1b4b,#020617)',
    border: '2px solid #4f46e5', borderRadius: '24px',
    padding: '48px 40px', maxWidth: '600px', margin: '0 auto',
    boxShadow: '0 20px 60px rgba(99,102,241,0.3)',
  },
  priceStrike: { fontSize: '16px', color: '#475569', textDecoration: 'line-through', marginBottom: '8px' },
  priceAmount: { fontSize: '72px', fontWeight: 800, color: '#818cf8', lineHeight: 1, marginBottom: '8px' },
  priceSub: { fontSize: '14px', color: '#64748b', marginBottom: '32px' },
  priceIncludes: { textAlign: 'left', marginBottom: '28px' },
  priceItem: {
    display: 'flex', gap: '10px', alignItems: 'flex-start',
    fontSize: '14px', color: '#cbd5e1', marginBottom: '8px',
  },
  priceChk: { color: '#22c55e', fontWeight: 700, flexShrink: 0 },

  countdownBox: {
    background: 'rgba(0,0,0,0.3)', borderRadius: '12px',
    padding: '16px', marginBottom: '28px',
  },
  countdownLabel: { fontSize: '12px', color: '#ef4444', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' },
  countdownUnits: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' },
  cdUnit: { textAlign: 'center' },
  cdNum: { fontFamily: 'monospace', fontSize: '36px', fontWeight: 800, display: 'block', lineHeight: 1 },
  cdSub: { fontSize: '10px', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.06em' },
  cdSep: { fontSize: '28px', color: '#1e293b', paddingBottom: '12px' },

  faqList: { maxWidth: '760px', margin: '40px auto 0' },
  faqItem: { borderBottom: '1px solid #1e293b', overflow: 'hidden' },
  faqQ: {
    width: '100%', background: 'none', border: 'none',
    color: '#e2e8f0', fontFamily: 'Arial, sans-serif',
    fontSize: '16px', fontWeight: 600,
    textAlign: 'left', padding: '20px 0',
    cursor: 'pointer', display: 'flex',
    justifyContent: 'space-between', alignItems: 'center', gap: '16px',
  },
  faqA: { fontSize: '14px', color: '#94a3b8', lineHeight: 1.8, paddingBottom: '20px' },

  btnPrimary: {
    display: 'inline-block',
    background: 'linear-gradient(135deg,#6366f1,#7c3aed)',
    color: '#fff', padding: '16px 36px', borderRadius: '10px',
    fontSize: '16px', fontWeight: 700,
    textDecoration: 'none',
    boxShadow: '0 8px 24px rgba(99,102,241,0.4)',
  },

  footer: {
    borderTop: '1px solid #1e293b',
    padding: '32px 10%',
    textAlign: 'center',
    color: '#475569', fontSize: '13px',
    lineHeight: 1.8,
  },
  footerLinks: { display: 'flex', justifyContent: 'center', gap: '24px', margin: '10px 0' },
  footerLink: { color: '#6366f1', textDecoration: 'none', fontSize: '13px' },
  footerNote: { fontSize: '12px', color: '#334155', maxWidth: '700px', margin: '12px auto 0', lineHeight: 1.7 },
};
