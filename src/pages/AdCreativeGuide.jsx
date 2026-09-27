import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SeoHead from "../components/SeoHead";
import Breadcrumbs from "../components/Breadcrumbs";
import TableOfContents from "../components/guide/TableOfContents";
import FeatureCard from "../components/guide/FeatureCard";
import WorkflowDiagram from "../components/guide/WorkflowDiagram";
import FAQ from "../components/guide/FAQ";
import AffiliateDisclosure from "../components/guide/AffiliateDisclosure";
import {
  ADCREATIVE_AD_PACKAGE_HELP_URL,
  ADCREATIVE_OFFICIAL_URL,
  ADCREATIVE_PRICING_URL,
  ADCREATIVE_PUBLISH_HELP_URL,
  ADCREATIVE_URL,
} from "../links";
import { SITE } from "../seo";
import {
  PAGE,
  cons,
  dailySteps,
  faqs,
  features,
  pros,
  toc,
  useCases,
} from "../data/adCreativeGuide";
import "../styles/guide.css";
import "../styles/adcreative-guide.css";

export default function AdCreativeGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: PAGE.h1,
        description: PAGE.description,
        mainEntityOfPage: PAGE.canonical,
        datePublished: PAGE.dateModified,
        dateModified: PAGE.dateModified,
        author: {
          "@type": "Organization",
          name: "MultiverseAI",
          url: `${SITE}/`,
        },
        publisher: { "@type": "Organization", name: "MultiverseAI" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Automation",
            item: `${SITE}/blog/automation`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "AdCreative.ai Review",
            item: PAGE.canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <div className="page guide-page adcreative-guide">
      <SeoHead
        title={PAGE.title}
        description={PAGE.description}
        canonical={PAGE.canonical}
        jsonLd={jsonLd}
        type="article"
      />
      <SiteHeader />
      <main>
        <section className="guide-hero">
          <div className="container narrow">
            <p className="badge">AI Tools • Advertising • Automation</p>
            <h1>{PAGE.h1}</h1>
            <p className="lede">{PAGE.summary}</p>
            <p className="updated-note">Last updated: {PAGE.updated}</p>
            {/* <AffiliateDisclosure /> */}
            <div className="actions">
              <a
                className="btn primary"
                href={ADCREATIVE_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
              >
                Explore AdCreative.ai
              </a>
              <a className="btn secondary" href="#verdict">
                Read the review
              </a>
            </div>
          </div>
        </section>

        <div className="container guide-wrap">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Blog", to: "/blog" },
              { label: "Automation", to: "/blog/automation" },
              { label: "AdCreative.ai Review" },
            ]}
          />

          <section className="card adcreative-verdict" id="verdict">
            <div>
              <p className="eyebrow">Quick review</p>
              <h2>What to know before you try it</h2>
            </div>
            <dl>
              <div><dt>Best fit</dt><dd>Teams that produce paid social or display ad creative regularly.</dd></div>
              <div><dt>Main value</dt><dd>More structured first drafts and format variations from a brand brief.</dd></div>
              <div><dt>Main trade-off</dt><dd>Human review and real campaign testing still take time.</dd></div>
              <div><dt>Publishing</dt><dd>Connected creative files are not automatically turned into live ads.</dd></div>
            </dl>
          </section>

          <div className="guide-layout">
            <div className="toc-slot">
              <details className="toc-mobile">
                <summary>On this page</summary>
                <TableOfContents items={toc} />
              </details>
              <div className="toc-desktop">
                <TableOfContents items={toc} />
              </div>
            </div>

            <article className="guide-body">
              <section id="what-is">
                <h2>What is AdCreative.ai?</h2>
                <p>
                  AdCreative.ai is an AI advertising creative platform. It helps
                  a marketer turn a product or campaign brief into draft ad
                  visuals, copy, and related assets. Its brand setup, creative
                  tools, and ad account connections are aimed at making creative
                  production more repeatable.
                </p>
                <p>
                  It fits one part of a marketing workflow: preparing and
                  reviewing assets for paid campaigns. It does not replace the
                  choices behind an effective campaign, such as the offer,
                  audience, budget, landing page, and success measure. Think of
                  an AI ad generator as a production assistant whose drafts need
                  a clear brief and a human editor.
                </p>
                <p>
                  This is a feature and workflow review based on AdCreative.ai’s
                  public product information and help documentation. We do not
                  claim personal hands-on testing or promise a particular
                  advertising result.
                </p>
              </section>

              <section id="features">
                <h2>AdCreative.ai features</h2>
                <p>
                  The feature set centers on brand-aware ad generation,
                  variations, analysis tools, and handoff to an ad account.
                  Availability can depend on the plan, so compare the current
                  feature list before committing.
                </p>
                <div className="card-grid feature-grid">
                  {features.map((feature) => (
                    <FeatureCard key={feature.title} title={feature.title}>
                      <p>{feature.text}</p>
                    </FeatureCard>
                  ))}
                </div>
              </section>

              <section id="workflow">
                <h2>How AdCreative.ai works in a day-to-day marketing workflow</h2>
                <p>
                  A practical daily use is preparing one campaign batch, not
                  generating ads without a plan. This sequence keeps the offer
                  and review process in view:
                </p>
                <WorkflowDiagram
                  label="AdCreative.ai campaign workflow from brief to measured results"
                  steps={[
                    "Campaign brief",
                    "Brand profile",
                    "Creative drafts",
                    "Human review",
                    "Ad platform",
                    "Measure results",
                  ]}
                />
                <ol className="steps">
                  {dailySteps.map(([title, text], index) => (
                    <li key={title}>
                      <h3>Step {index + 1}. {title}</h3>
                      <p>{text}</p>
                    </li>
                  ))}
                </ol>
                <p>
                  Connected accounts help move selected creatives into the
                  platform’s media library. According to AdCreative.ai’s help
                  center, that handoff does not publish the campaign for you.
                  You choose what to launch and review results in the ad account.
                </p>
              </section>

              <section id="business-use">
                <h2>How AdCreative.ai can help with everyday business work</h2>
                <p>
                  The value depends on whether ad creative is a recurring task.
                  For a business running campaigns every week, a prepared brand
                  profile and a repeatable brief can make it easier to start a
                  creative batch, organize alternatives, and hand approved
                  assets to the person who manages advertising.
                </p>
                <div className="card-grid">
                  {useCases.map(([title, text]) => (
                    <article className="card" key={title}>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </article>
                  ))}
                </div>
                <p>
                  It is less likely to help with daily work if a business rarely
                  runs ads, has no defined offer, or cannot spare time to inspect
                  generated output. Build the brief and review habit first; the
                  software cannot supply missing customer knowledge.
                </p>
              </section>

              <section id="pros-cons">
                <h2>AdCreative.ai pros and cons</h2>
                <p>
                  The main advantage is a more repeatable path to draft options.
                  The main limitation is that generating an asset is not the
                  same as validating it with customers or campaign data.
                </p>
                <div className="pros-cons-grid">
                  <div className="card pros-card">
                    <h3>Pros</h3>
                    <ul className="plain-list">
                      {pros.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="card cons-card">
                    <h3>Cons</h3>
                    <ul className="plain-list">
                      {cons.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
                <p>
                  <strong>Best practice:</strong> treat each output as a draft,
                  check product and offer details, and run a small controlled
                  test before increasing spend.
                </p>
              </section>

              <section id="pricing">
                <h2>AdCreative.ai pricing and value</h2>
                <p>
                  AdCreative.ai’s official pricing page shows paid plans with
                  different monthly credit allowances, brand limits, team seats,
                  and feature access. Billing term and selected allowance affect
                  the displayed price. Check the current plan and total before
                  starting a subscription rather than relying on a third-party
                  price list.
                </p>
                <p>
                  To judge value, estimate how many campaign concepts your team
                  needs each month, how many brands and collaborators need
                  access, and how much editing each output requires. Compare that
                  workload with the plan’s credits and limits. A larger number of
                  generated variants is only useful if your team can review and
                  test them.
                </p>
                <p className="inline-cta">
                  <a
                    className="btn primary"
                    href={ADCREATIVE_PRICING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Review current plans and pricing
                  </a>
                </p>
              </section>

              <section id="alternatives">
                <h2>When should you compare AdCreative.ai alternatives?</h2>
                <p>
                  Compare other options if you need a full design suite, custom
                  production from a designer, campaign management, or an ad
                  platform’s own creative tools. If the bottleneck is the page
                  and follow-up after someone clicks, see our{" "}
                  <Link to="/systeme">Systeme.io funnels and email guide</Link>.
                  For the larger path from advertising to landing page and lead
                  follow-up, read our{" "}
                  <Link to="/blog/marketing">marketing workflow article</Link>.
                </p>
                <p>
                  If your team spends time following up with leads after the
                  campaign, our guide to{" "}
                  <Link to="/blog/automation">lead follow-up automation</Link>{" "}
                  covers that separate workflow.
                </p>
              </section>

              <section id="faq">
                <h2>AdCreative.ai frequently asked questions</h2>
                <FAQ items={faqs} />
              </section>

              <section className="adcreative-author card">
                <p className="eyebrow">Review method</p>
                <h2>About this AdCreative.ai review</h2>
                <p>
                  Published by MultiverseAI. This article summarizes public
                  product information and help documentation, then maps the
                  features to common small-business and marketing-team workflows.
                  It is not a claim of hands-on testing. The AdCreative.ai
                  sign-up CTAs use an affiliate link; MultiverseAI may receive a
                  commission if you sign up, at no additional cost to you. The
                  product, pricing, and help-center source links are direct links.
                </p>
                <p>Last updated: {PAGE.updated}</p>
                <ul>
                  <li>
                    <a href={ADCREATIVE_OFFICIAL_URL} target="_blank" rel="noopener noreferrer">
                      AdCreative.ai official product and pricing information
                    </a>
                  </li>
                  <li>
                    <a href={ADCREATIVE_AD_PACKAGE_HELP_URL} target="_blank" rel="noopener noreferrer">
                      Ad package workflow documentation
                    </a>
                  </li>
                  <li>
                    <a href={ADCREATIVE_PUBLISH_HELP_URL} target="_blank" rel="noopener noreferrer">
                      Ad account handoff documentation
                    </a>
                  </li>
                </ul>
              </section>

              <section className="guide-cta" aria-labelledby="adcreative-final-cta">
                <p className="eyebrow">Put the workflow to work</p>
                <h2 id="adcreative-final-cta">Ready to explore AdCreative.ai?</h2>
                <p>
                  Review the current features and plan limits, prepare one real
                  campaign brief, and decide whether the generated drafts save
                  your team useful time.
                </p>
                <a
                  className="btn primary"
                  href={ADCREATIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                >
                  Explore AdCreative.ai
                </a>
              </section>

              <section className="adcreative-related">
                <h2>Related workflows</h2>
                <ul>
                  <li><Link to="/blog/automation">Automate lead follow-up</Link></li>
                  <li><Link to="/blog/marketing">Plan a practical marketing workflow</Link></li>
                  <li><Link to="/systeme">Build the landing page and email follow-up with Systeme.io</Link></li>
                  <li><Link to="/adcreative">Read the AdCreative.ai quick overview</Link></li>
                </ul>
              </section>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
