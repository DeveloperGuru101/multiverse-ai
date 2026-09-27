import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SeoHead from "../components/SeoHead";
import Breadcrumbs from "../components/Breadcrumbs";
import posts from "../data/posts";

export default function Blog() {
  return (
    <div className="page">
      <SeoHead
        title="AI Tools, Marketing & Automation Blog | MultiverseAI"
        description="Practical guides to AI tools, marketing workflows, lead follow-up automation, agency CRM, software reviews, and VPS hosting for developers and small businesses."
        path="/blog"
      />
      <SiteHeader />
      <main className="section">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
          <p className="eyebrow">Blog</p>
          <h1>AI Tools, Marketing & Automation Guides</h1>
          <p className="lede">
            Explore practical AI software guides, marketing workflows, CRM and
            lead follow-up advice, and reviews of tools for creators, agencies,
            developers, and small businesses.
          </p>
          <article className="card featured-guide">
            <p className="eyebrow">Marketing guide</p>
            <h2>
              <Link to="/systeme">
                Systeme.io review: funnels, email, and automation
              </Link>
            </h2>
            <p>
              A full guide to what Systeme.io includes, who it fits, how
              pricing works, and where it differs from HighLevel, ClickFunnels,
              and Kajabi.
            </p>
            <p className="section-link">
              <Link to="/systeme">Read the Systeme.io guide →</Link>
            </p>
          </article>
          <article className="card featured-guide">
            <p className="eyebrow">Automation and AI advertising</p>
            <h2>
              <Link to="/blog/adcreative-ai-review">
                AdCreative.ai review: features, pros, cons, and business workflow
              </Link>
            </h2>
            <p>
              See how AI ad creative generation, brand profiles, creative review,
              and ad account handoff fit into everyday marketing work.
            </p>
            <p className="section-link">
              <Link to="/blog/adcreative-ai-review">Read the AdCreative.ai review →</Link>
            </p>
          </article>
          <article className="card featured-guide">
            <p className="eyebrow">CRM and automation</p>
            <h2>
              <Link to="/blog/highlevel-review">
                GoHighLevel review: CRM, features, pricing, pros and cons
              </Link>
            </h2>
            <p>
              A practical GoHighLevel CRM review covering lead capture,
              pipelines, appointments, messaging, agencies, and small businesses.
            </p>
            <p className="section-link">
              <Link to="/blog/highlevel-review">Read the HighLevel review →</Link>
            </p>
          </article>
          <article className="card featured-guide">
            <p className="eyebrow">Web hosting and infrastructure</p>
            <h2><Link to="/hostinger-vps-review">Hostinger VPS review: pricing, features, pros and cons</Link></h2>
            <p>A practical look at Hostinger VPS plans, server control, security, setup, everyday developer workflows, and alternatives.</p>
            <p className="section-link"><Link to="/hostinger-vps-review">Read the Hostinger VPS review →</Link></p>
          </article>
          <div className="card-grid post-grid">
            {posts.map((post) => (
              <article className="card" key={post.slug}>
                <p className="eyebrow">{post.category}</p>
                <h2>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
                <p className="section-link">
                  <Link to={`/blog/${post.slug}`}>Read article →</Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
