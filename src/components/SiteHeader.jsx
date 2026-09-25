import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "AI Tools", to: "/#ai-tools" },
  {
    label: "Marketing",
    to: "/#marketing",
    children: [
      { label: "Marketing topics", to: "/#marketing" },
      { label: "Systeme.io", to: "/systeme" },
      { label: "Marketing article", to: "/blog/marketing" },
    ],
  },
  { label: "Automation", to: "/#automation" },
  { label: "Guides", to: "/#guides" },
  { label: "Comparisons", to: "/#comparisons" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [marketingOpen, setMarketingOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setMarketingOpen(false);
  }, [location.pathname, location.hash]);

  function close() {
    setOpen(false);
  }

  function onNavClick(event, to) {
    close();
    if (!to.startsWith("/#") || location.pathname !== "/") return;
    const id = to.slice(2);
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="site-header">
      <div className="container header-bar">
        <Link to="/" className="brand" onClick={close}>
          <img src={logo} alt="MultiverseAI" />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id="site-nav"
          className={open ? "site-nav is-open" : "site-nav"}
          aria-label="Primary"
        >
          {links.map((link) =>
            link.children ? (
              <div
                className={marketingOpen ? "nav-group is-open" : "nav-group"}
                key={link.label}
                onMouseEnter={() => setMarketingOpen(true)}
                onMouseLeave={() => setMarketingOpen(false)}
              >
                <Link to={link.to} onClick={(event) => onNavClick(event, link.to)}>
                  {link.label}
                </Link>
                <button
                  type="button"
                  className="sub-toggle"
                  aria-expanded={marketingOpen}
                  aria-controls="marketing-submenu"
                  onClick={() => setMarketingOpen((value) => !value)}
                >
                  <span className="sr-only">Show Marketing links</span>
                  <span aria-hidden="true">▾</span>
                </button>
                <div id="marketing-submenu" className="sub-menu">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      onClick={(event) => onNavClick(event, child.to)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                onClick={(event) => onNavClick(event, link.to)}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link
            className="btn primary nav-cta"
            to="/#tools"
            onClick={(event) => onNavClick(event, "/#tools")}
          >
            Explore Tools
          </Link>
        </nav>
      </div>
    </header>
  );
}
