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

const planned = [
  "How to Build a Simple Marketing Funnel",
  "Systeme.io Tutorial for Beginners",
  "HighLevel CRM Workflow Explained",
  "Systeme.io vs HighLevel",
  "How AI Can Help Create Advertising Creatives",
  "AI Tools for Marketing Workflows",
  "How to Automate Lead Follow-Up",
  "Best AI Tools for Small Businesses",
];

export default function Guides() {
  return (
    <div className="page">
      <SeoHead
        title="AI and Marketing Guides | MultiverseAI"
        description="Guides on setup, workflows, and software comparisons for AI tools, marketing automation, sales funnels, and agency work."
        path="/guides"
      />
      <SiteHeader />
      <main className="section">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Guides" }]} />
          <p className="eyebrow">Resources</p>
          <h1>AI and marketing guides</h1>
          <p className="lede">
            Guides on MultiverseAI focus on setup, workflows and comparisons.
            Individual articles are being written and will be linked here when
            they are published.
          </p>
          <div className="card-grid cols-3">
            {groups.map((group) => (
              <article className="card" key={group.title}>
                <h2>{group.title}</h2>
                <p>{group.desc}</p>
              </article>
            ))}
          </div>
          <h2 className="upcoming-title">Planned guides</h2>
          <ul className="upcoming">
            {planned.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
          <p>
            Published reading: the{" "}
            <Link to="/systeme">Systeme.io guide</Link>,{" "}
            <Link to="/blog/ai-tools">how to choose AI tools</Link>,{" "}
            <Link to="/blog/marketing">a practical marketing workflow</Link>,{" "}
            <Link to="/blog/automation">how to automate lead follow-up</Link>, and{" "}
            <Link to="/blog/agency-growth">agency workflows</Link>.
          </p>
          <p className="section-link">
            <Link to="/">Back to homepage</Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
