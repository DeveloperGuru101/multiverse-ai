// App.jsx
import React from "react";
import "./styles.css";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <div className="app">
      {/* HERO */}
      <div className="logo-wrapper">
        <img src={logo} alt="Multiverse AI Logo" className="logo-centered" />
      </div>

      <section className="hero">
        <div className="hero-content">
          <span className="badge">All‑in‑One AI Platform</span>
          <h1>
            One Dashboard.
            <span> Every AI Model.</span>
          </h1>
          <p>
            Multiverse AI gives you instant access to GPT, Gemini, Claude, Grok,
            DALL·E, Stable Diffusion, AI Video and Voice tools – all in one
            powerful cloud dashboard.
          </p>
          <div className="buttons">
            <a href="https://warriorplus.com/o2/a/hffvq05/0" className="btn primary">
              Get Instant Access
            </a>
            <a href="#features" className="btn secondary">
              Explore Features
            </a>
          </div>
        </div>

        <div className="hero-card">
          {tools.map((t) => (
            <div key={t} className="tool">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features">
        <h2>Everything You Need to Build With AI</h2>
        <div className="feature-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="models">
        <h2>Supported AI Models & Engines</h2>

        <div className="model-grid">
          <div className="model-card">
            <h3>ChatGPT Family</h3>
            <p>
              GPT-5, GPT-4, GPT-4 Turbo, GPT-4.1, GPT-4.5, GPT-4o Mini, GPT-3.5
              Turbo Nano & more
            </p>
          </div>

          <div className="model-card">
            <h3>Google Gemini Suite</h3>
            <p>Gemini 1.5 Pro, Gemini 1.5 Flash, Gemini 2.0 Flash</p>
          </div>

          <div className="model-card">
            <h3>Grok AI Models</h3>
            <p>Grok-1, Grok-1.5, Grok-2, Grok-3, Grok-4</p>
          </div>

          <div className="model-card">
            <h3>Claude Models</h3>
            <p>Claude 3 Opus, Claude 3.7 Sonnet, Claude 3.7 Haiku</p>
          </div>

          <div className="model-card">
            <h3>DeepSeek AI</h3>
            <p>DeepSeek V3, DeepSeek R1, DeepSeek Coder V2</p>
          </div>

          <div className="model-card">
            <h3>DALL·E Image AI</h3>
            <p>DALL·E 2, DALL·E 3</p>
          </div>

          <div className="model-card">
            <h3>Kling Video Models</h3>
            <p>Kling 1.5 Pro, 1.6 Pro, 2.1 Standard, 2.1 Master</p>
          </div>

          <div className="model-card">
            <h3>Google Veo</h3>
            <p>Veo 2, Veo 3</p>
          </div>

          <div className="model-card">
            <h3>ElevenLabs Voice</h3>
            <p>v3 Alpha, Multilingual v2, Flash v2.5, Turbo v2.5</p>
          </div>

          <div className="model-card">
            <h3>Stable Diffusion</h3>
            <p>1.x, 2.x, XL (SDXL)</p>
          </div>

          <div className="model-card">
            <h3>Meta LLaMA</h3>
            <p>LLaMA 1, 2, 3, Code LLaMA</p>
          </div>

          <div className="model-card">
            <h3>FLUX AI</h3>
            <p>Schnell, Dev, Pro, Pro Ultra</p>
          </div>
        </div>
      </section>

      <section className="platform-features">
        <h2>Why Multiverse AI Is Different</h2>

        <ul className="feature-list">
          <li>No Monthly Fees – One-time payment, unlimited access</li>
          <li>Free Future Versions & Unlimited Updates</li>
          <li>Turbo Mode – Priority faster AI engines</li>
          <li>Single Login – No platform switching</li>
          <li>Auto-AI Selection Mode</li>
          <li>All-In-One Super Dashboard</li>
          <li>Team Collaboration</li>
          <li>1-Click Export (Video, Voice, Images, Text)</li>
          <li>DFY Prompt Library (1000+ prompts)</li>
          <li>Quick-Start Templates</li>
          <li>Commercial License Included</li>
          <li>Client Project Manager</li>
          <li>Beginner Friendly Interface</li>
          <li>30-Day Risk-Free Guarantee</li>
          <li>Early Access to Beta Models</li>
          <li>24/7 Priority Support</li>
          <li>Exclusive Community Access</li>
        </ul>
      </section>

      {/* BENEFITS */}
      <section className="benefits">
        <div className="benefits-box">
          <h2>Why Multiverse AI?</h2>
          <ul>
            {benefits.map((b, i) => (
              <li key={i}> {b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="pricing">
        <h2>Unlock Unlimited AI Power Today</h2>
        <p>One-time payment. No subscriptions. No limits.</p>

        <div className="price-card">
          <span>Lifetime Access</span>
          <h3>$14.95</h3>

          <a
            href="https://warriorplus.com/o2/a/hffvq05/0"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
          >
            Click Here To Unlock Multiverse AI 2.0 Now!
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © {new Date().getFullYear()} Multiverse AI. All rights reserved.
      </footer>
    </div>
  );
}

const tools = ["GPT", "Claude", "Gemini", "DALL·E", "AI Video", "AI Voice"];

const features = [
  {
    title: "All AI Models in One Place",
    desc: "Access GPT, Gemini, Claude, Grok, image, video & voice AI tools from a single dashboard.",
  },
  {
    title: "Text, Image, Video & Voice",
    desc: "Create any type of AI content without switching platforms.",
  },
  { title: "No Monthly Fees", desc: "Pay once and enjoy unlimited AI access." },
  {
    title: "Cloud Based Platform",
    desc: "Use from anywhere with secure cloud infrastructure.",
  },
  {
    title: "Always Up‑to‑Date Models",
    desc: "New AI versions are automatically added to your dashboard.",
  },
  {
    title: "Creator & Business Ready",
    desc: "Perfect for marketers, agencies, startups and developers.",
  },
];

const benefits = [
  "Save thousands on AI subscriptions",
  "Boost productivity 10x",
  "Create professional content instantly",
  "Future‑proof AI access",
  "Secure & private cloud environment",
];
