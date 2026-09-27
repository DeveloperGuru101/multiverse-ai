import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SeoHead from "../components/SeoHead";
import Breadcrumbs from "../components/Breadcrumbs";
import TableOfContents from "../components/guide/TableOfContents";
import WorkflowDiagram from "../components/guide/WorkflowDiagram";
import FAQ from "../components/guide/FAQ";
import AffiliateDisclosure from "../components/guide/AffiliateDisclosure";
import {
  HIGHLEVEL_MISSED_CALL_HELP_URL,
  HIGHLEVEL_AI_HELP_URL,
  HIGHLEVEL_PRICING_URL,
  HIGHLEVEL_REVIEW_HELP_URL,
  HIGHLEVEL_SMS_HELP_URL,
  HIGHLEVEL_URL,
  HIGHLEVEL_WEBSITE_HELP_URL,
} from "../links";
import { SITE } from "../seo";
import {
  PAGE,
  audiences,
  comparisons,
  cons,
  dailyWorkflows,
  faqs,
  features,
  glance,
  pros,
  toc,
} from "../data/highLevelGuide";
import "../styles/guide.css";
import "../styles/highlevel-guide.css";

export default function HighLevelGuide() {
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
        author: { "@type": "Organization", name: "MultiverseAI", url: `${SITE}/` },
        publisher: { "@type": "Organization", name: "MultiverseAI" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: "Automation", item: `${SITE}/blog/automation` },
          { "@type": "ListItem", position: 4, name: "HighLevel Review", item: PAGE.canonical },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <div className="page guide-page highlevel-guide">
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
            <p className="badge">CRM • Lead Generation • Automation</p>
            <h1>{PAGE.h1}</h1>
            <p className="lede">{PAGE.summary}</p>
            <p>
              Businesses often choose GoHighLevel, also called HighLevel, when
              customer enquiries are spread across forms, calls, calendars, and
              inboxes. It combines a CRM, pipelines, marketing automation,
              email and SMS conversations, funnels, and appointment tools so a
              team can follow a lead from first contact to the next sales step.
            </p>
            <p>
              This HighLevel review explains what the platform does, how those
              pieces fit into everyday operations, what the public plans
              currently cost, and where alternatives may fit better. It is a
              product and documentation review, not a claim of personal testing
              or guaranteed results. Features, usage charges, and trial terms
              can change, so check the official page before subscribing.
            </p>
            <p className="updated-note">Last updated: {PAGE.updated}</p>
            {/* <AffiliateDisclosure /> */}
            <div className="actions">
              <a
                className="btn primary"
                href={HIGHLEVEL_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
              >
                Explore HighLevel
              </a>
              <a className="btn secondary" href="#at-a-glance">
                See the quick review
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
              { label: "HighLevel Review" },
            ]}
          />

          <section id="at-a-glance" className="card highlevel-glance">
            <p className="eyebrow">HighLevel review at a glance</p>
            <h2>What to know before you evaluate it</h2>
            <div className="table-wrap" role="region" aria-label="HighLevel review summary" tabIndex="0">
              <table className="compare-table highlevel-summary-table">
                <thead>
                  <tr><th scope="col">Topic</th><th scope="col">Summary</th></tr>
                </thead>
                <tbody>
                  {glance.map(([topic, summary]) => (
                    <tr key={topic}><th scope="row">{topic}</th><td>{summary}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="table-scroll-hint">Scroll horizontally to read the full table.</p>
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
                <h2>What is HighLevel?</h2>
                <p>
                  HighLevel is a customer relationship management and marketing
                  platform operated under the HighLevel brand. Its main purpose
                  is to connect lead capture with sales follow-up: contacts,
                  conversations, opportunities, calendars, websites, funnels,
                  and workflows can be managed from a business account.
                </p>
                <p>
                  Agencies use it to organize work across client sub-accounts.
                  Small businesses use it when enquiries need an owner, a next
                  action, and a reliable response. The attraction is not that
                  every company needs a large software suite; it is that a team
                  with several disconnected lead steps may be able to bring
                  those steps into one operating process.
                </p>
                <p>
                  The scope also creates a trade-off. HighLevel needs setup:
                  teams decide which pipeline stages to use, which messages are
                  allowed, what starts a workflow, and who handles exceptions.
                  It does not decide your offer or your customer service policy.
                  Read our <Link to="/blog/automation">lead follow-up workflow</Link>{" "}
                  for a simpler view of the process before adding software.
                </p>
              </section>

              <section id="how-it-works">
                <h2>How does HighLevel work?</h2>
                <p>
                  A typical HighLevel CRM workflow starts when a person fills in
                  a form, calls, or replies to a campaign. The contact record
                  keeps their details and interaction history; a configured
                  workflow can route the enquiry, and the sales pipeline gives
                  the team a shared view of what happens next.
                </p>
                <WorkflowDiagram
                  label="HighLevel workflow from visitor through lead follow-up and retention"
                  steps={[
                    "Visitor",
                    "Lead captured",
                    "CRM contact",
                    "Automated follow-up",
                    "Appointment",
                    "Sales pipeline",
                    "Customer",
                    "Retention or review",
                  ]}
                />
                <ol className="highlevel-stage-list">
                  <li><strong>Visitor:</strong> arrives from an ad, referral, call, or website.</li>
                  <li><strong>Lead:</strong> submits a form or starts a conversation; the system creates or updates a contact.</li>
                  <li><strong>CRM:</strong> the team records the source, owner, and requested service.</li>
                  <li><strong>Automated follow-up:</strong> a tested email, text, task, or internal notification runs according to the configured rules.</li>
                  <li><strong>Appointment:</strong> the prospect can book an available calendar slot and receive the selected confirmations or reminders.</li>
                  <li><strong>Sales pipeline:</strong> staff update the opportunity as it moves through qualification, proposal, and outcome.</li>
                  <li><strong>Customer:</strong> the team starts the appropriate onboarding or delivery process.</li>
                  <li><strong>Retention or review:</strong> after service is complete, an appropriate follow-up can request feedback or support.</li>
                </ol>
                <p>
                  The diagram is a workflow example, not an automatic default.
                  You choose the triggers, messages, pipeline stages, and human
                  handoffs, then test the full path with a test contact before
                  using real customer data.
                </p>
              </section>

              <section id="features">
                <h2>HighLevel features</h2>
                <p>
                  These HighLevel features are most useful when connected to a
                  real process. Availability and usage may differ by plan,
                  account configuration, and location, so check the current
                  product and pricing documentation for the parts you need.
                </p>
                <div className="highlevel-feature-list">
                  {features.map((feature) => (
                    <section className="card highlevel-feature" key={feature.title}>
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </section>
                  ))}
                </div>
                <p>
                  For example, a HighLevel sales funnel can capture a lead, but
                  the wider process also needs a relevant offer, a correctly
                  assigned contact, a response path, and a way to measure what
                  happened. For funnel-first businesses with simpler email and
                  course needs, compare our <Link to="/systeme">Systeme.io review</Link>.
                </p>
              </section>

              <section id="daily-life">
                <h2>How HighLevel can help in day-to-day business operations</h2>
                <p>
                  The practical benefit of HighLevel automation is fewer routine
                  handoffs to remember. These examples show a starting point;
                  each business should adapt the message, timing, permissions,
                  and exception path to the way it actually serves customers.
                </p>
                <div className="highlevel-daily-list">
                  {dailyWorkflows.map(([title, text]) => (
                    <article className="card" key={title}>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </article>
                  ))}
                </div>
                <p>
                  In a normal day, a business owner might check unassigned leads,
                  confirm today’s appointments, review overdue tasks, and look at
                  deals with no next step. Automation can prepare those tasks or
                  send routine acknowledgements. Staff still handle judgment,
                  unusual requests, and the conversations that need a personal
                  answer.
                </p>
              </section>

              <section id="pros-cons">
                <h2>HighLevel pros and cons</h2>
                <p>
                  A balanced GoHighLevel review should consider both the
                  connected toolkit and the work required to operate it.
                </p>
                <div className="pros-cons-grid">
                  <div className="card pros-card">
                    <h3>HighLevel pros</h3>
                    <ul className="plain-list">
                      {pros.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="card cons-card">
                    <h3>HighLevel cons</h3>
                    <ul className="plain-list">
                      {cons.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
                <p>
                  The strongest case is a business already doing CRM-led follow-up
                  across several channels. The weaker case is paying for a broad
                  platform before defining the process or naming someone to own
                  it.
                </p>
              </section>

              <section id="best-for">
                <h2>Who is HighLevel best for?</h2>
                <p>
                  HighLevel for agencies is an obvious use case, but it can also
                  suit local businesses, service teams, and consultants that
                  handle a steady stream of leads. Consider the workflow and the
                  limitations for each group:
                </p>
                <div className="card-grid">
                  {audiences.map(([title, text]) => (
                    <article className="card" key={title}>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section id="not-for">
                <h2>Who might not need HighLevel?</h2>
                <p>
                  A smaller product may be easier to set up and maintain if you
                  only need one job done. HighLevel may be unnecessary when:
                </p>
                <ul className="plain-list">
                  <li>You send a basic newsletter and do not need a sales CRM.</li>
                  <li>You only need appointment scheduling; a dedicated calendar may be simpler.</li>
                  <li>You need a brochure website with no lead routing or workflow automation.</li>
                  <li>You have very few enquiries and can respond personally without losing track.</li>
                  <li>No one on the team can own configuration, data hygiene, and message review.</li>
                </ul>
                <p>
                  Those are not reasons to avoid the product forever. They are
                  signs to map the process first and choose the smallest tool
                  that can support it reliably.
                </p>
              </section>

              <section id="pricing">
                <h2>HighLevel pricing</h2>
                <p>
                  HighLevel’s public agency pricing page currently lists three
                  monthly plans and a custom Enterprise option. The figures below
                  were checked on {PAGE.updated}. The page also advertises a
                  14-day free trial. Annual billing has separate totals; taxes,
                  usage charges, and optional services can affect the total cost.
                </p>
                <div className="table-wrap" role="region" aria-label="HighLevel current public plan pricing" tabIndex="0">
                  <table className="compare-table pricing-table">
                    <caption>Public HighLevel agency plan prices shown in USD per month; verify current terms before subscribing.</caption>
                    <thead>
                      <tr>
                        <th scope="col">Plan</th>
                        <th scope="col">Price</th>
                        <th scope="col">Key plan detail</th>
                        <th scope="col">Best suited to</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Agency Starter</th><td>$97/month</td><td>3 sub-accounts; core platform features</td><td>One business or an early-stage agency</td></tr>
                      <tr><th scope="row">Agency Unlimited</th><td>$297/month</td><td>Unlimited sub-accounts; rebilling features</td><td>Growing agencies managing multiple clients</td></tr>
                      <tr><th scope="row">Agency Pro</th><td>$497/month</td><td>SaaS Mode, automated sub-account creation, advanced API access</td><td>Agencies packaging the platform as software</td></tr>
                      <tr><th scope="row">Enterprise</th><td>Custom</td><td>Custom plan and support arrangement</td><td>Organizations that need a tailored agreement</td></tr>
                    </tbody>
                  </table>
                  <p className="table-scroll-hint">Swipe or scroll horizontally to compare the plans.</p>
                </div>
                <p>
                  The subscription is not necessarily the full operating cost.
                  Phone and email usage, AI features, branded apps, listings,
                  compliance options, or other add-ons may have separate charges.
                  Read the plan details and usage pricing before estimating cost
                  for a client or high-volume account.
                </p>
                <div className="inline-cta">
                  <a className="btn primary" href={HIGHLEVEL_PRICING_URL} target="_blank" rel="noopener noreferrer">
                    View official HighLevel pricing
                  </a>
                </div>
              </section>

              <section id="alternatives">
                <h2>HighLevel alternatives and comparisons</h2>
                <p>
                  Alternatives are organized around different jobs. This
                  comparison is a starting point, not a feature-by-feature
                  guarantee; products and plan limits change, so verify the
                  details on each provider’s current site.
                </p>
                <div className="table-wrap" role="region" aria-label="HighLevel alternatives comparison" tabIndex="0">
                  <table className="compare-table pricing-table">
                    <thead>
                      <tr><th scope="col">Platform</th><th scope="col">Main focus</th><th scope="col">CRM and automation</th><th scope="col">Funnels, email, or courses</th><th scope="col">Consider it when</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">HighLevel</th><td>CRM-led follow-up and agency client operations</td><td>Contact pipelines, conversations, and configurable workflows</td><td>Funnels, email, and SMS are part of the wider marketing toolkit</td><td>You coordinate leads and client accounts across steps</td></tr>
                      <tr><th scope="row">Systeme.io</th><td>All-in-one marketing and selling for creators and small businesses</td><td>Contact management and simpler automation</td><td>Funnels, email, courses, and product delivery</td><td>You need a straightforward offer, list, and course workflow</td></tr>
                      <tr><th scope="row">ClickFunnels</th><td>Sales funnels and conversion paths</td><td>Compare current CRM and automation scope by plan</td><td>Funnel-centered sales pages and checkout</td><td>Funnel creation is the main job to solve</td></tr>
                      <tr><th scope="row">HubSpot</th><td>CRM platform with sales, marketing, and service products</td><td>CRM breadth; automation varies by product and plan</td><td>Marketing tools are organized in product hubs and tiers</td><td>You need a broader CRM ecosystem and can compare its tiered cost</td></tr>
                      <tr><th scope="row">Kajabi</th><td>Creator businesses, courses, and memberships</td><td>Marketing and customer tools around creator products</td><td>Course, membership, email, and offer workflows</td><td>Course delivery and creator products are central</td></tr>
                    </tbody>
                  </table>
                  <p className="table-scroll-hint">Swipe or scroll to compare each platform.</p>
                </div>
                {comparisons.map((comparison) => (
                  <section className="highlevel-comparison" key={comparison.name}>
                    <h3>{comparison.name}</h3>
                    <p>{comparison.text}</p>
                  </section>
                ))}
              </section>

              <section id="worth-it">
                <h2>Is HighLevel worth it?</h2>
                <p>
                  HighLevel may be worth evaluating if you handle enough leads
                  to need a shared CRM, messaging, booking, and automation
                  process—and if a team member can own setup and quality checks.
                  Agencies should also model the subscription alongside usage
                  costs and the number of client accounts they need.
                </p>
                <p>
                  It may be excessive if all you need is a calendar, a simple
                  email list, or a basic website. Before a trial, write down one
                  workflow you want to improve, who is responsible for each
                  step, and how you will know the system is working. Build that
                  single path first and decide from actual fit, not a feature
                  count.
                </p>
              </section>

              <section id="faq">
                <h2>HighLevel frequently asked questions</h2>
                <FAQ items={faqs.map(([question, answer]) => ({ question, answer }))} />
              </section>

              <section className="highlevel-author card">
                <p className="eyebrow">Review method and sources</p>
                <h2>About this HighLevel review</h2>
                <p>
                  Published by MultiverseAI. This review summarizes HighLevel’s
                  public plan page and help documentation, then explains how the
                  documented tools fit common business workflows. It does not
                  claim personal testing, customer results, or guaranteed
                  outcomes. The Explore HighLevel links are affiliate links;
                  MultiverseAI may receive a commission if you sign up, at no
                  additional cost to you.
                </p>
                <p>Last updated: {PAGE.updated}</p>
                <ul>
                  <li><a href={HIGHLEVEL_PRICING_URL} target="_blank" rel="noopener noreferrer">Official HighLevel pricing and plan details</a></li>
                  <li><a href={HIGHLEVEL_MISSED_CALL_HELP_URL} target="_blank" rel="noopener noreferrer">Missed Call Text Back documentation</a></li>
                  <li><a href={HIGHLEVEL_AI_HELP_URL} target="_blank" rel="noopener noreferrer">Conversation AI documentation</a></li>
                  <li><a href={HIGHLEVEL_SMS_HELP_URL} target="_blank" rel="noopener noreferrer">SMS campaign documentation</a></li>
                  <li><a href={HIGHLEVEL_WEBSITE_HELP_URL} target="_blank" rel="noopener noreferrer">Website and funnel builder overview</a></li>
                  <li><a href={HIGHLEVEL_REVIEW_HELP_URL} target="_blank" rel="noopener noreferrer">Review request documentation</a></li>
                </ul>
              </section>

              <section className="guide-cta" aria-labelledby="highlevel-final-cta">
                <p className="eyebrow">Explore the platform</p>
                <h2 id="highlevel-final-cta">Ready to try HighLevel?</h2>
                <p>
                  Review the current plan, confirm any usage costs, and use the
                  advertised trial period to see whether one real lead workflow
                  fits your business.
                </p>
                <a className="btn primary" href={HIGHLEVEL_URL} target="_blank" rel="noopener noreferrer sponsored">
                  Explore HighLevel →
                </a>
              </section>

              <section className="highlevel-related">
                <h2>Related MultiverseAI guides</h2>
                <ul>
                  <li><Link to="/systeme">Systeme.io review: funnels, email, and courses</Link></li>
                  <li><Link to="/blog/automation">How to automate lead follow-up</Link></li>
                  <li><Link to="/blog/marketing">A practical marketing workflow</Link></li>
                  <li><Link to="/blog/adcreative-ai-review">AdCreative.ai review: advertising creative workflow</Link></li>
                  <li><Link to="/blog/agency-growth">Agency and service-business workflows</Link></li>
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
