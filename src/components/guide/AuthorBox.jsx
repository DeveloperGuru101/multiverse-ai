import { Link } from "react-router-dom";
import { PAGE } from "../../data/systemeGuide";
import { SYSTEME_PRICING_URL } from "../../links";

export default function AuthorBox() {
  return (
    <aside className="card author-box">
      <p className="eyebrow">Published by</p>
      <h2>MultiverseAI</h2>
      <p>
        MultiverseAI publishes practical guides to AI tools, marketing software,
        and automation. This page summarizes Systeme.io’s published features and
        pricing and maps them to common marketing workflows; it is not a claim
        that the author personally tested the platform or achieved a particular
        business result.
      </p>
      <p>
        <strong>How this review was prepared:</strong> product and pricing details
        were checked against the{" "}
        <a href={SYSTEME_PRICING_URL} target="_blank" rel="noopener noreferrer">
          official Systeme.io pricing page
        </a>{" "}
        on {PAGE.updated}. Check it again before subscribing because plan details
        can change.
      </p>
      <p className="section-link">
        <Link to="/blog">Read more from the blog</Link>
      </p>
    </aside>
  );
}
