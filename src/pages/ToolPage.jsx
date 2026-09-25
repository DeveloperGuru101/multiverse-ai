import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SeoHead from "../components/SeoHead";
import Breadcrumbs from "../components/Breadcrumbs";
import { ADCREATIVE_URL, HIGHLEVEL_URL } from "../links";
import { SITE } from "../seo";

const pages = {
  highlevel: {
    name: "HighLevel",
    category: "CRM • Lead Generation • Automation",
    summary:
      "HighLevel is a CRM and marketing platform used for lead management, pipelines, appointment booking, messaging and agency workflows.",
    points: [
      "Track leads and move them through a sales pipeline",
      "Automate follow-up by email, SMS and internal tasks",
      "Book appointments and manage conversations",
      "Run client workspaces from one agency account",
    ],
    cta: "Visit HighLevel",
    href: HIGHLEVEL_URL,
    affiliate: true,
    title: "HighLevel Review: CRM, Lead Follow-up, and Agency Workflows",
    description:
      "Learn what HighLevel is used for: pipelines, lead follow-up, appointment booking, and agency workspaces, and where it differs from a funnel platform.",
    h1: "HighLevel: CRM, Pipelines, and Agency Follow-up",
    path: "/highlevel",
    crumbs: [
      { label: "Home", to: "/" },
      { label: "Automation", to: "/blog/automation" },
      { label: "HighLevel" },
    ],
    extra: [
      "HighLevel, also called GoHighLevel, is organized around a sales pipeline. A lead can move through stages, receive email or SMS follow-up, and book an appointment without the record leaving the account.",
      "It is a closer fit for agencies and service businesses that manage conversations and client work. It is a weaker fit when the main job is hosting a course or selling a download. That job is described in the Systeme.io guide.",
    ],
    limits: "A pipeline does not create the offer or the traffic. Confirm the current plan and any trial terms on HighLevel’s own site before you sign up.",
    links: [
      ["/systeme#vs-highlevel", "Compare Systeme.io and HighLevel"],
      ["/blog/agency-growth", "Read the agency workflow article"],
    ],
  },
  adcreative: {
    name: "AdCreative.ai",
    category: "AI Advertising • Creative Generation",
    summary:
      "AdCreative.ai is an AI advertising tool for generating ad creatives and supporting creative testing in marketing campaigns.",
    points: [
      "Generate advertising creatives from a product or brand brief",
      "Produce variations for different placements and audiences",
      "Support creative testing inside an advertising workflow",
      "Compare concepts before spending more on a campaign",
    ],
    cta: "Visit AdCreative.ai",
    href: ADCREATIVE_URL,
    affiliate: false,
    title: "AdCreative.ai Review: AI Ad Creatives for Campaigns",
    description:
      "See what AdCreative.ai is for: generating advertising creatives and variations so a campaign can be tested before more of the budget is spent.",
    h1: "AdCreative.ai: AI Advertising Creatives",
    path: "/adcreative",
    crumbs: [
      { label: "Home", to: "/" },
      { label: "AI Tools", to: "/blog/ai-tools" },
      { label: "AdCreative.ai" },
    ],
    extra: [
      "AdCreative.ai is an advertising tool. You give it a product or brand brief and it produces creative variations for different placements. It does not build the landing page, send the email, or decide the budget.",
      "Use it at the start of a campaign, then send the traffic to a page you control. On this site, that page-and-follow-up job is covered by the Systeme.io guide.",
    ],
    limits: "Generated creatives still need a human check for accuracy and brand fit. This page links to the official site. MultiverseAI does not have an AdCreative.ai affiliate link configured.",
    links: [
      ["/blog/marketing", "Read the marketing workflow article"],
      ["/systeme", "See how a landing page and funnel fit after the ad"],
    ],
  },
};

export default function ToolPage({ slug }) {
  const page = pages[slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: page.h1,
        description: page.description,
        mainEntityOfPage: `${SITE}${page.path}`,
        author: { "@type": "Organization", name: "MultiverseAI", url: `${SITE}/` },
        publisher: { "@type": "Organization", name: "MultiverseAI" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: page.crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.label,
          item: crumb.to ? `${SITE}${crumb.to}` : `${SITE}${page.path}`,
        })),
      },
    ],
  };

  return (
    <div className="page">
      <SeoHead
        title={page.title}
        description={page.description}
        path={page.path}
        type="article"
        jsonLd={jsonLd}
      />
      <SiteHeader />
      <main className="section">
        <div className="container narrow">
          <Breadcrumbs items={page.crumbs} />
          <p className="eyebrow">{page.category}</p>
          <h1>{page.h1}</h1>
          <p className="lede">{page.summary}</p>
          {page.extra.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className="plain-list">
            {page.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p>{page.limits}</p>
          <ul className="plain-list">
            {page.links.map(([to, label]) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className="actions">
            <a
              className="btn primary"
              href={page.href}
              target="_blank"
              rel={page.affiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
            >
              {page.cta}
            </a>
            <Link className="btn secondary" to="/#tools">
              Back to featured tools
            </Link>
          </div>
          {page.affiliate && (
            <p className="fine-print">
              Disclosure: this is an affiliate link. MultiverseAI may earn a
              commission if you sign up, at no additional cost to you.
            </p>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
