import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SeoHead from "../components/SeoHead";
import Breadcrumbs from "../components/Breadcrumbs";

const groups = [
  {
    title: "Step-by-Step Tutorials",
    desc: "Configuration walkthroughs for individual tools.",
  },
  {
    title: "Practical Workflows",
    desc: "How several tools fit together on one job.",
  },
  {
    title: "Comparisons & Reviews",
    desc: "Feature, pricing and use-case differences.",
  },
];

const published = [
  { title: "Systeme.io review: funnels, email, and automation", desc: "A detailed review of Systeme.io features, pricing, strengths, limitations, and alternatives for creators and small businesses.", to: "/systeme" },
  { title: "AdCreative.ai review: AI ad creative features", desc: "How AI ad generation and creative workflows fit into campaign planning, review, and testing.", to: "/blog/adcreative-ai-review" },
  { title: "GoHighLevel review: CRM and marketing automation", desc: "Explore GoHighLevel CRM, lead pipelines, follow-up workflows, appointments, pricing, and trade-offs.", to: "/blog/highlevel-review" },
  { title: "Hostinger VPS review: plans and server management", desc: "Compare Hostinger VPS pricing and plans, server control, security, use cases, and alternatives.", to: "/hostinger-vps-review" },
  { title: "How to choose AI tools for work", desc: "Evaluate AI software with real writing, research, design, and business tasks before adding another subscription.", to: "/blog/ai-tools" },
  { title: "Digital marketing workflow: ads to follow-up", desc: "Connect advertising, landing pages, email, and the next step in one practical marketing workflow.", to: "/blog/marketing" },
  { title: "Lead follow-up automation: email and CRM", desc: "Map a useful sequence from lead capture to email follow-up, CRM ownership, and human response.", to: "/blog/automation" },
  { title: "Agency workflow: CRM and client follow-up", desc: "Organize agency lead management, appointments, client handoffs, and pipeline reporting.", to: "/blog/agency-growth" },
];

export default function Guides() {
  return (
    <div className="page">
      <SeoHead
        title="AI, Marketing & Software Guides | MultiverseAI"
        description="Browse practical guides and reviews of AI tools, marketing automation, sales funnels, CRM software, agency workflows, and VPS hosting."
        path="/guides"
      />
      <SiteHeader />
      <main className="section">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Guides" }]} />
          <p className="eyebrow">Resources</p>
          <h1>AI, Marketing & Software Guides</h1>
          <p className="lede">
            Find published reviews, tutorials, and workflow guides for choosing
            software and applying it to everyday marketing, sales, and hosting
            tasks.
          </p>
          <div className="card-grid cols-3">
            {groups.map((group) => (
              <article className="card" key={group.title}>
                <h2>{group.title}</h2>
                <p>{group.desc}</p>
              </article>
            ))}
          </div>
          <h2 className="upcoming-title">Published guides and reviews</h2>
          <div className="card-grid cols-3">
            {published.map((item) => (
              <article className="card" key={item.to}>
                <h3><Link to={item.to}>{item.title}</Link></h3>
                <p>{item.desc}</p>
                <p className="section-link"><Link to={item.to}>Read the guide →</Link></p>
              </article>
            ))}
          </div>
          <p className="section-link">
            <Link to="/">Back to homepage</Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
