import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SeoHead from "../components/SeoHead";

const links = [
  ["Home", "/"],
  ["Systeme.io guide", "/systeme"],
  ["HighLevel", "/highlevel"],
  ["AdCreative.ai", "/adcreative"],
  ["Guides", "/guides"],
  ["Blog", "/blog"],
];

export default function NotFound() {
  return (
    <div className="page">
      <SeoHead
        title="Page not found | MultiverseAI"
        description="This page is not on MultiverseAI. Browse the homepage, software guides, and articles on AI tools, marketing, and automation."
        noindex
      />
      <SiteHeader />
      <main className="section">
        <div className="container narrow">
          <p className="eyebrow">404</p>
          <h1>This page is not on MultiverseAI</h1>
          <p className="lede">
            The address may be mistyped, or the page may have moved. These
            sections are available.
          </p>
          <ul className="plain-list">
            {links.map(([label, to]) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
