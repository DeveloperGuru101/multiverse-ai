import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong>MultiverseAI</strong>
            <p>
              AI tools, marketing automation and practical online-business
              resources.
            </p>
          </div>

          <nav aria-label="Explore">
            <h2>Explore</h2>
            <ul>
              <li><Link to="/#ai-tools">AI Tools</Link></li>
              <li><Link to="/#marketing">Marketing</Link></li>
              <li><Link to="/systeme">Systeme.io</Link></li>
              <li><Link to="/#automation">Automation</Link></li>
              <li><Link to="/#agency">Agency Growth</Link></li>
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h2>Resources</h2>
            <ul>
              <li><Link to="/guides">Guides</Link></li>
              <li><Link to="/#guides">Tutorials</Link></li>
              <li><Link to="/#comparisons">Comparisons</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2>Company</h2>
            <ul>
              <li><Link to="/#intro">About</Link></li>
              <li>
                <a href="mailto:support@multiverseaiapp.com">Contact</a>
              </li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
          </nav>
        </div>

        <p className="disclosure">
          Some links on MultiverseAI may be affiliate links. We may earn a
          commission if you purchase through these links, at no additional cost
          to you.
        </p>
        <p className="copyright">
          © {new Date().getFullYear()} MultiverseAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
