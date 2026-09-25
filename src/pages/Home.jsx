import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SeoHead from "../components/SeoHead";
import { SITE } from "../seo";

const topics = [
  {
    id: "ai-tools",
    icon: "AI",
    title: "AI Tools",
    covers: [
      "AI productivity",
      "AI content creation",
      "AI research",
      "AI design",
      "AI business tools",
      "AI automation",
    ],
    desc: "Discover useful AI tools and learn where they fit into real-world workflows.",
    post: "/blog/ai-tools",
  },
  {
    id: "marketing",
    icon: "MKT",
    title: "Marketing & Advertising",
    covers: [
      "Digital marketing",
      "Advertising",
      "AI advertising",
      "Ad creatives",
      "Conversion",
      "Campaign workflows",
    ],
    desc: "Learn how marketing platforms and AI tools can support modern advertising workflows.",
    post: "/blog/marketing",
  },
  {
    id: "automation",
    icon: "AUTO",
    title: "Marketing Automation",
    covers: [
      "Email automation",
      "Funnels",
      "Lead nurturing",
      "Customer workflows",
      "CRM",
      "Follow-ups",
    ],
    desc: "Explore ways to automate repetitive marketing and customer-management tasks.",
    post: "/blog/automation",
  },
  {
    id: "agency",
    icon: "GROW",
    title: "Agency Growth",
    covers: [
      "CRM",
      "Lead management",
      "Client workflows",
      "Appointment booking",
      "Agency automation",
      "Reporting",
    ],
    desc: "Explore tools and workflows useful for agencies, freelancers and service businesses.",
    post: "/blog/agency-growth",
  },
  {
    id: "tutorials",
    icon: "GUIDE",
    title: "Tutorials & Guides",
    covers: [
      "Setup tutorials",
      "How-to guides",
      "Step-by-step workflows",
      "Tool configuration",
      "Practical examples",
    ],
    desc: "Learn how to actually use the tools rather than simply reading about them.",
  },
  {
    id: "comparisons",
    icon: "VS",
    title: "Tool Comparisons",
    covers: [
      "Feature comparisons",
      "Pricing comparisons",
      "Use cases",
      "Pros and limitations",
      "Who each tool is suitable for",
    ],
    desc: "Understand the differences between software before deciding which solution fits a particular use case.",
  },
];

const tools = [
  {
    name: "Systeme.io",
    category: "Funnels • Email Marketing • Automation",
    desc: "An all-in-one platform covering areas such as sales funnels, email marketing, automation and digital business workflows.",
    tags: ["Funnels", "Email Marketing", "Automation", "Courses", "CRM"],
    to: "/systeme",
    cta: "Explore Systeme.io",
  },
  {
    name: "HighLevel",
    category: "CRM • Lead Generation • Automation",
    desc: "A platform focused on CRM, lead management, sales pipelines, appointment booking, marketing automation and agency workflows.",
    tags: ["CRM", "Lead Management", "Pipelines", "Booking", "Automation", "Agency Tools"],
    to: "/highlevel",
    cta: "Explore HighLevel",
  },
  {
    name: "AdCreative.ai",
    category: "AI Advertising • Creative Generation",
    desc: "An AI-focused advertising tool for creating advertising creatives and supporting modern marketing workflows.",
    tags: ["AI Creatives", "Advertising", "Creative Generation", "Marketing", "Optimization"],
    to: "/adcreative",
    cta: "Explore AdCreative.ai",
  },
];

const workflows = [
  {
    title: "Lead Generation",
    steps: ["Traffic", "Landing Page", "Lead Capture", "CRM", "Follow-up"],
  },
  {
    title: "Marketing Automation",
    steps: ["Visitor", "Email Capture", "Email Sequence", "Nurturing", "Conversion"],
  },
  {
    title: "AI Advertising",
    steps: ["Product", "AI Creative", "Ad Campaign", "Testing", "Optimization"],
  },
  {
    title: "Agency Workflow",
    steps: ["Lead", "CRM", "Appointment", "Follow-up", "Client"],
  },
];

const guideTypes = [
  {
    title: "Step-by-Step Tutorials",
    desc: "Show how to configure and use a tool from setup through a working workflow.",
  },
  {
    title: "Practical Workflows",
    desc: "Show how multiple tools can work together on a real marketing or operations task.",
  },
  {
    title: "Comparisons & Reviews",
    desc: "Explain differences between software and the use cases each one fits.",
  },
];

const upcoming = [
  "How to Build a Simple Marketing Funnel",
  "Systeme.io Tutorial for Beginners",
  "HighLevel CRM Workflow Explained",
  "Systeme.io vs HighLevel",
  "How AI Can Help Create Advertising Creatives",
  "AI Tools for Marketing Workflows",
  "How to Automate Lead Follow-Up",
  "Best AI Tools for Small Businesses",
];

const audiences = [
  {
    title: "Content Creators",
    desc: "AI tools for content, research and productivity.",
  },
  {
    title: "Freelancers",
    desc: "Automation and software for managing work and clients.",
  },
  {
    title: "Marketing Agencies",
    desc: "CRM, automation, advertising and client workflows.",
  },
  {
    title: "Small Businesses",
    desc: "Lead generation, marketing and customer workflows.",
  },
  {
    title: "Entrepreneurs",
    desc: "Tools for building efficient digital businesses.",
  },
  {
    title: "Developers",
    desc: "AI and SaaS tools for productivity and development workflows.",
  },
];

const reasons = [
  {
    title: "Practical",
    desc: "Focus on how tools can actually be used.",
  },
  {
    title: "Educational",
    desc: "Explain concepts and workflows clearly.",
  },
  {
    title: "Tool-Focused",
    desc: "Explore useful software instead of generic theory.",
  },
  {
    title: "Workflow-Oriented",
    desc: "Show how multiple technologies can work together.",
  },
];

const ecosystem = ["AI Tools", "Marketing", "Automation", "Agency Growth"];

function Flow({ steps }) {
  return (
    <ol className="flow">
      {steps.map((step, index) => (
        <li key={step} className="flow-item">
          <span className="flow-step">{step}</span>
          {index < steps.length - 1 && (
            <span className="flow-arrow" aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  return (
    <div className="page">
      <SeoHead
        title="MultiverseAI – AI Tools, Marketing Automation & Growth Strategies"
        description="Discover AI tools, marketing software, automation workflows, tutorials and practical strategies to help you work smarter and grow your online business."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "MultiverseAI",
              url: `${SITE}/`,
              logo: `${SITE}/logo.png`,
            },
            {
              "@type": "WebSite",
              name: "MultiverseAI",
              url: `${SITE}/`,
              description:
                "AI tools, marketing automation, tutorials, and software guides.",
              publisher: { "@type": "Organization", name: "MultiverseAI" },
            },
          ],
        }}
      />
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="badge">AI • Marketing • Automation • Growth</p>
              <h1>AI Tools, Marketing Automation & Strategies to Grow Smarter</h1>
              <p className="lede">
                Explore AI tools, marketing platforms, automation software,
                practical workflows and step-by-step guides designed to help
                creators, entrepreneurs, agencies and businesses work smarter
                and grow online.
              </p>
              <div className="actions">
                <a className="btn primary" href="#tools">
                  Explore Tools
                </a>
                <a className="btn secondary" href="#guides">
                  Read Guides
                </a>
              </div>
            </div>

            <div className="ecosystem" aria-label="From AI tools to business growth">
              {ecosystem.map((label, index) => (
                <div key={label} className="eco-item">
                  <div className="eco-card">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{label}</strong>
                  </div>
                  {index < ecosystem.length - 1 && (
                    <span className="eco-arrow" aria-hidden="true">
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="intro" className="section">
          <div className="container narrow">
            <p className="eyebrow">What is MultiverseAI?</p>
            <h2>Tools and techniques for growing online</h2>
            <p>
              MultiverseAI is a resource platform focused on AI tools, marketing
              software, automation platforms and practical online-business
              workflows.
            </p>
            <p>
              We will share useful tools, tutorials, comparisons and techniques
              that can help people understand how modern software can be used
              for productivity, marketing, lead generation, automation and
              business growth.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="cover-heading">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Topics</p>
              <h2 id="cover-heading">AI Tools, Marketing Automation, and Business Growth Tools</h2>
            </div>
            <div className="card-grid">
              {topics.map((topic) => (
                <article className="card" id={topic.id} key={topic.id}>
                  <p className="icon-label">{topic.icon}</p>
                  <h3>{topic.title}</h3>
                  <p>{topic.desc}</p>
                  <ul className="tags">
                    {topic.covers.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {topic.post && (
                    <p className="section-link">
                      <Link to={topic.post}>Read the article →</Link>
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="section section-alt" aria-labelledby="tools-heading">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Featured tools</p>
              <h2 id="tools-heading">Featured Tools</h2>
              <p>Tools we are exploring and creating practical guides around.</p>
            </div>
            <div className="tools-grid">
              {tools.map((tool) => (
                <article className="card tool-card" key={tool.name}>
                  <p className="eyebrow">{tool.category}</p>
                  <h3>{tool.name}</h3>
                  <p>{tool.desc}</p>
                  <ul className="tags">
                    {tool.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <Link className="btn primary" to={tool.to}>
                    {tool.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflows" className="section" aria-labelledby="workflow-heading">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Techniques</p>
              <h2 id="workflow-heading">Practical AI Workflows</h2>
            </div>
            <div className="workflow-grid">
              {workflows.map((flow) => (
                <article className="card" key={flow.title}>
                  <h3>{flow.title}</h3>
                  <Flow steps={flow.steps} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="guides" className="section section-alt" aria-labelledby="guides-heading">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Tutorials & guides</p>
              <h2 id="guides-heading">Tutorials & Guides</h2>
            </div>
            <div className="card-grid cols-3">
              {guideTypes.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
            <p className="section-link">
              <Link to="/guides">View All Guides →</Link>
            </p>

            <h3 className="upcoming-title">Guides in progress</h3>
            <ul className="upcoming">
              {upcoming.map((title) => (
                <li key={title}>{title}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="software-comparisons" className="section section-alt" aria-labelledby="compare-heading">
          <div className="container narrow">
            <p className="eyebrow">Comparisons</p>
            <h2 id="compare-heading">Software Comparisons</h2>
            <p>
              A comparison on MultiverseAI explains which job a product is built
              for. It does not name a universal winner.
            </p>
            <ul className="plain-list">
              <li>
                <Link to="/systeme#vs-highlevel">Compare Systeme.io and HighLevel</Link>
              </li>
              <li>
                <Link to="/systeme#vs-clickfunnels">
                  See how Systeme.io differs from ClickFunnels
                </Link>
              </li>
              <li>
                <Link to="/systeme#vs-kajabi">See how Systeme.io differs from Kajabi</Link>
              </li>
              <li>
                <Link to="/adcreative">Explore AI advertising creatives</Link>
              </li>
            </ul>
          </div>
        </section>

        <section id="audience" className="section" aria-labelledby="audience-heading">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Who it is for</p>
              <h2 id="audience-heading">Built for People Building Online</h2>
            </div>
            <div className="card-grid">
              {audiences.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="why-heading">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Why MultiverseAI</p>
              <h2 id="why-heading">Why Follow MultiverseAI?</h2>
            </div>
            <div className="card-grid cols-4">
              {reasons.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section final-cta" aria-labelledby="cta-heading">
          <div className="container narrow">
            <h2 id="cta-heading">Ready to Explore Better Tools?</h2>
            <p>
              Discover AI tools, marketing platforms, automation software and
              practical guides designed to help you work smarter.
            </p>
            <div className="actions">
              <a className="btn primary" href="#tools">
                Explore Tools
              </a>
              <a className="btn secondary" href="#guides">
                Read Guides
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
