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
        title="AI, Marketing, and Automation Articles | MultiverseAI"
        description="Articles on choosing AI tools, marketing workflows, lead follow-up, and agency software, plus the full Systeme.io guide."
        path="/blog"
      />
      <SiteHeader />
      <main className="section">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
          <p className="eyebrow">Blog</p>
          <h1>Notes on tools and workflows</h1>
          <p className="lede">
            Four starting points for AI tools, marketing, automation, and
            agency work. Each article explains the workflow before the
            software.
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
