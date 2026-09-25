import { Link } from "react-router-dom";

export default function AuthorBox() {
  return (
    <aside className="card author-box">
      <p className="eyebrow">Published by</p>
      <h2>MultiverseAI</h2>
      <p>
        MultiverseAI is a resource for AI tools, marketing software, and
        automation workflows. The site publishes practical tutorials, software
        comparisons, and explanations of how tools fit together. This guide
        describes what Systeme.io is built to do. It is not a customer review
        with a star rating, and it does not promise business results.
      </p>
      <p className="section-link">
        <Link to="/blog">Read more from the blog</Link>
      </p>
    </aside>
  );
}
