import { useMemo } from "react";
import { Link } from "react-router-dom";
import { SYSTEME_PRICING_URL } from "../links";
import "../styles/guide.css";
import "../styles/systeme-guide.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SeoHead from "../components/SeoHead";
import Breadcrumbs from "../components/Breadcrumbs";
import TableOfContents from "../components/guide/TableOfContents";
import FeatureCard from "../components/guide/FeatureCard";
import ProblemSolutionCard from "../components/guide/ProblemSolutionCard";
import WorkflowDiagram from "../components/guide/WorkflowDiagram";
import ComparisonTable from "../components/guide/ComparisonTable";
import FAQ from "../components/guide/FAQ";
import CTASection from "../components/guide/CTASection";
import AuthorBox from "../components/guide/AuthorBox";
import AffiliateDisclosure from "../components/guide/AffiliateDisclosure";
import AffiliateButton from "../components/guide/AffiliateButton";
import {
  PAGE,
  advantages,
  audiences,
  breadcrumbs,
  clickfunnelsRows,
  faqs,
  features,
  highlevelRows,
  kajabiRows,
  limits,
  plans,
  problems,
  reviewSummary,
  steps,
  toc,
  workflowNotes,
  workflowSteps,
} from "../data/systemeGuide";

export default function SystemeGuide() {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: PAGE.h1,
          description: PAGE.description,
          mainEntityOfPage: PAGE.canonical,
          image: PAGE.image,
          author: {
            "@type": "Organization",
            name: "MultiverseAI",
            url: "https://www.multiverseaiapp.com/",
          },
          publisher: {
            "@type": "Organization",
            name: "MultiverseAI",
            url: "https://www.multiverseaiapp.com/",
          },
          dateModified: PAGE.dateModified,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.multiverseaiapp.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Marketing",
              item: "https://www.multiverseaiapp.com/blog/marketing",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Systeme.io",
              item: PAGE.canonical,
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      ],
    }),
    [],
  );

  return (
    <div className="page guide-page systeme-guide">
      <SeoHead
        title={PAGE.title}
        description={PAGE.description}
        canonical={PAGE.canonical}
        image={PAGE.image}
        imageAlt={PAGE.imageAlt}
        jsonLd={jsonLd}
        type="article"
      />
      <SiteHeader />
      <main>
        <section className="guide-hero">
          <div className="container narrow">
            <p className="badge">AI tools • Marketing • Automation</p>
            <h1>{PAGE.h1}</h1>
            <p className="lede">{PAGE.subhead}</p>
            {/* <AffiliateDisclosure /> */}
            <div className="actions">
              <AffiliateButton>Explore Systeme.io</AffiliateButton>
              <a className="btn secondary" href="#what-is">
                Read the complete guide
              </a>
            </div>
          </div>
        </section>

        <div className="container guide-wrap">
          <Breadcrumbs items={breadcrumbs} />

          <section className="card review-summary" aria-labelledby="glance-title">
            <div className="review-summary-heading">
              <div>
                <p className="eyebrow">Independent overview</p>
                <h2 id="glance-title">Systeme.io review summary</h2>
              </div>
              <p className="updated-note">Last updated: {PAGE.updated}</p>
            </div>
            <dl>
              {reviewSummary.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="review-summary-cta">
              <p>Try the free plan to see whether the funnel and email tools fit your workflow.</p>
              <AffiliateButton>Try Systeme.io free</AffiliateButton>
            </div>
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
                <h2>What is Systeme.io?</h2>
                <p>
                  Systeme.io is an online business platform. It combines a
                  website and landing page builder, a sales funnel builder,
                  email marketing, marketing automation, online courses, digital
                  products, checkout, a contact record, booking, and an
                  affiliate program for your own offer.
                </p>
                <p>
                  People look it up with questions like “what is Systeme.io”
                  because the name does not say which job it does. It is not
                  only an email tool, and it is not only a page builder. The
                  practical description is an all-in-one marketing platform for
                  publishing an offer and following up with the people who
                  respond.
                </p>
                <p>
                  A business often pays separately for a landing page, a list,
                  and a checkout. Systeme.io is one answer to that split: the
                  page that collects the email and the tool that sends the
                  email share a login. That is the reason it gets compared with
                  other online business platforms. It does not remove the need
                  to decide what you are selling.
                </p>
              </section>

              <section id="who-for">
                <h2>Who is Systeme.io for?</h2>
                <p>
                  It fits people who need to publish a page and talk to the
                  people who respond. That includes entrepreneurs launching a
                  first product, coaches booking calls, course creators selling
                  lessons, freelancers collecting project enquiries, and small
                  businesses that want a promotion to go to a list instead of
                  only to a social feed.
                </p>
                <p>
                  It is a weaker fit when the main system is already a
                  specialized shop, a help desk, or a sales CRM with a large
                  team. In those cases Systeme.io can still run a campaign, but
                  it should not be forced to replace the system of record.
                </p>
              </section>

              <section id="features">
                <h2>Systeme.io features</h2>
                <p>
                  The feature list is long because the product tries to cover
                  the path from a visit to a customer. These are the parts you
                  will actually touch. Later sections explain how each one is
                  used.
                </p>
                <div className="card-grid feature-grid systeme-feature-grid">
                  {features.map((feature, index) => (
                    <FeatureCard
                      key={feature.title}
                      title={feature.title}
                      number={String(index + 1).padStart(2, "0")}
                    >
                      <p>{feature.text}</p>
                    </FeatureCard>
                  ))}
                </div>
              </section>

              <section id="funnels">
                <h2>Sales funnel builder</h2>
                <p>
                  A sales funnel is the sequence a person walks through: they
                  see an offer, land on a page, take an action, and either
                  leave or continue to checkout. Systeme.io’s funnel builder
                  lets you stack those steps in one campaign.
                </p>
                <ul className="plain-list">
                  <li>A landing page that states one offer.</li>
                  <li>A form for lead capture.</li>
                  <li>A sales page and a checkout page when something is for sale.</li>
                  <li>A thank-you page that tells the person what happens next.</li>
                  <li>Optional order bumps and one-click upsells, which the pricing page lists as part of funnel checkout.</li>
                </ul>
                <p>
                  Funnel automation is the connection between those steps and
                  email. Someone who opts in can enter a sequence. Someone who
                  buys can enter a different one. The software does not invent
                  the sequence. You do, then you test it with a real submission.
                </p>
              </section>

              <section id="email">
                <h2>Email marketing</h2>
                <p>
                  Email marketing in Systeme.io covers two jobs. A campaign is
                  a message you send when you choose, such as a newsletter or a
                  promotion. A sequence is a series that starts because someone
                  joined a list, booked, or bought.
                </p>
                <p>
                  Contact management is what makes either of those useful. Tags
                  separate people who downloaded one guide from people who
                  bought a course. Without that split, lead nurturing turns into
                  one message sent to everyone. Promotional emails and ordinary
                  customer communication can both live here. Write them as
                  different messages.
                </p>
                <p>
                  Systeme.io states that email sending is unlimited across
                  plans, including the free plan. Deliverability still depends
                  on permission, content, and whether people want the mail.
                  Unlimited sends are not a reason to email people who did not
                  ask.
                </p>
              </section>

              <section id="automation">
                <h2>Marketing automation</h2>
                <p>
                  Marketing automation is the set of steps that should happen
                  every time, without someone pressing send. A typical path on
                  this platform looks like this: a visitor submits a form, the
                  contact is added, an email sequence starts, a follow-up email
                  goes out, an offer is presented, and a purchase is recorded
                  on that same contact.
                </p>
                <WorkflowDiagram
                  label="A basic Systeme.io automation path"
                  steps={[
                    "Form submitted",
                    "Contact added",
                    "Sequence starts",
                    "Follow-up email",
                    "Offer",
                    "Purchase recorded",
                  ]}
                />
                <p>
                  That is business automation only for the marketing path. It
                  does not invoice your accountant or update a warehouse. Use
                  it where the task is the same every time. Leave custom replies
                  to a person.
                </p>
              </section>

              <section id="website">
                <h2>Website and landing page builder</h2>
                <p>
                  The website builder and the landing page builder share an
                  editor. Use a website page for information that should stay
                  available, such as a service description or a simple blog
                  post. The free plan includes one blog. Use a landing page
                  when the visit has one goal, such as an opt-in or a checkout.
                </p>
                <p>
                  Sales pages, opt-in pages, and ordinary business pages are
                  different jobs even when the editor is the same. A sales page
                  asks for payment. An opt-in page asks for an email. A business
                  page explains who you are. Mixing all three on one screen
                  lowers the chance that anyone finishes.
                </p>
              </section>

              <section id="courses">
                <h2>Online courses</h2>
                <p>
                  The online course tools let you organize modules and lessons,
                  sell access, and send students into the course after payment.
                  Drip schedules and quizzes are part of the course product
                  Systeme.io describes. The free plan includes one course, which
                  is enough to learn the structure before you commit a catalog.
                </p>
                <p>
                  Student communication still matters. An enrollment email
                  should say where to log in and what the first lesson is.
                  Automation can send that note. It cannot teach the lesson.
                </p>
              </section>

              <section id="products">
                <h2>Digital products</h2>
                <p>
                  Digital products are files and access you deliver online:
                  ebooks, templates, guides, courses, and other downloads. The
                  useful part of selling them inside Systeme.io is that the
                  sales page, the payment, and the delivery email are not three
                  projects.
                </p>
                <p>
                  A digital product platform still needs a clear file, a price,
                  and a test order. Buy the product yourself before you announce
                  it. Confirm the link in the email opens the file you intended.
                </p>
              </section>

              <section id="affiliates">
                <h2>Affiliate management</h2>
                <p>
                  Systeme.io includes affiliate program tools so other people
                  can promote your product with a tracked link. You set the
                  commission and connect the program to a funnel. That is
                  affiliate management software for your offer.
                </p>
                <p>
                  This is separate from you promoting someone else’s product.
                  You can also use landing pages and email to promote an offer
                  you do not own. Do not treat either setup as income. A program
                  with no traffic and no clear offer does not pay anyone.
                </p>
              </section>

              <section id="affiliate-marketing">
                <h2>Is Systeme.io good for affiliate marketing?</h2>
                <p>
                  It can support an affiliate campaign by giving you a landing page,
                  an opt-in form, email follow-up, and a place to track contacts.
                  The practical sequence is simple: publish a useful page, offer a
                  relevant lead magnet, send the promised resource, then explain an
                  affiliate product that fits the reader’s needs.
                </p>
                <ol className="plain-list">
                  <li>Build a focused landing page and disclose the affiliate relationship clearly.</li>
                  <li>Collect permission before sending marketing email, then deliver the promised resource.</li>
                  <li>Use a short sequence to explain the problem and the product; include your affiliate disclosure near recommendations.</li>
                  <li>Use the merchant’s tracking link and check its reporting. Systeme.io’s own affiliate feature is for managing partners who promote your offer.</li>
                </ol>
                <p>
                  These tools organize the campaign; they do not guarantee traffic,
                  conversions, or commissions. For a related workflow, see the{" "}
                  <Link to="/blog/marketing">marketing guides</Link>.
                </p>
                <div className="inline-cta">
                  <AffiliateButton>Explore Systeme.io for your funnel</AffiliateButton>
                </div>
              </section>

              <section id="crm">
                <h2>CRM and pipelines</h2>
                <p>
                  The contact list is the simple CRM: leads and customers, with
                  tags for segmentation and follow-up. Pipelines add stages, so
                  a new enquiry is not stored the same way as a customer.
                  Systeme.io’s pricing page lists contacts, tags, and CRM
                  pipelines as part of the product.
                </p>
                <p>
                  Use a pipeline when a person moves through visible stages,
                  such as new lead, call booked, and customer. Use tags when
                  you only need to remember which form they filled in. Both can
                  be true at once.
                </p>
              </section>

              <section id="booking">
                <h2>Appointment and booking tools</h2>
                <p>
                  A booking calendar can be placed on a landing page. The path
                  is short: visitor, landing page, booking, reminder,
                  consultation, follow-up. The reminder and the follow-up are
                  the parts people skip when the calendar lives in a different
                  product from the contact.
                </p>
                <p>
                  Connect the booking to a tag or a pipeline stage so a booked
                  call is not still sitting in the “new lead” sequence. Send a
                  different note to someone who does not book.
                </p>
              </section>

              <section id="webinars">
                <h2>Webinars</h2>
                <p>
                  A webinar workflow is still a funnel. You need a registration
                  page, lead capture, reminders, the session itself, and a
                  follow-up that points at one offer. Systeme.io’s Webinar plan
                  adds automated evergreen webinars, which replay a session on
                  a schedule instead of only as a live event.
                </p>
                <p>
                  The free and Startup plans are for the pages and email around
                  an event you host elsewhere, unless your current plan includes
                  the webinar feature. Confirm that on the pricing page before
                  you design the campaign around it.
                </p>
              </section>

              <section id="workflows">
                <h2>Automation workflows</h2>
                <p>
                  Workflows are the rules that connect the pieces above. A
                  small set is more reliable than a large map. Start with one
                  trigger, one tag, and one email. Add a branch only when you
                  have seen the first path work.
                </p>
                <p>
                  Examples that stay understandable: tag a contact when a form
                  is submitted, start the matching sequence, stop that sequence
                  when they buy, and start the customer sequence instead. If
                  you cannot explain the rule in one sentence, it is probably
                  too early to build it.
                </p>
              </section>

              <section id="ecommerce">
                <h2>Ecommerce</h2>
                <p>
                  Checkout is how a funnel becomes an order. Systeme.io supports
                  digital checkout and physical products with shipping. The
                  pricing page lists payment connections that include Stripe,
                  PayPal, Apple Pay, Razorpay, Flutterwave, Mercado Pago, and
                  Xendit, plus cash on delivery. Availability can depend on
                  your country and the gateway’s own rules.
                </p>
                <p>
                  Systeme.io says it does not charge a platform transaction fee.
                  The payment processor still does. Read that processor’s fee
                  before you set a price. Ecommerce here is enough for a
                  straightforward catalog. A store that needs complex inventory,
                  marketplaces, or a large variant system may still want a
                  dedicated shop.
                </p>
              </section>

              <section id="problems">
                <h2>What problems can Systeme.io help with?</h2>
                <p>
                  Features only matter if they remove a task you already do.
                  These are ordinary situations, and the kind of fix this
                  platform is shaped for.
                </p>
                <div className="card-grid">
                  {problems.map((item) => (
                    <ProblemSolutionCard key={item.title} {...item} />
                  ))}
                </div>
                <div className="inline-cta">
                  <AffiliateButton>Try Systeme.io for your business</AffiliateButton>
                </div>
              </section>

              <section id="small-business">
                <h2>How Systeme.io can automate a small business</h2>
                <p>
                  This is one complete path. You do not have to launch every
                  stage on day one. The order matters more than the software
                  name.
                </p>
                <WorkflowDiagram
                  label="Small business path from visitor to follow-up"
                  steps={workflowSteps}
                />
                <dl className="stage-list">
                  {workflowNotes.map(([title, text]) => (
                    <div key={title}>
                      <dt>{title}</dt>
                      <dd>{text}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section id="use-cases">
                <h2>How different people can use Systeme.io</h2>
                <p>
                  The same account looks different depending on the offer. Pick
                  the row that matches the work, and ignore the rest until that
                  first path is live.
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

              <section id="before-after">
                <h2>Separate tools compared with one account</h2>
                <p>
                  This is a workflow comparison, not a promise that one login
                  is always better. It shows what changes when the page, the
                  list, and the email are the same system.
                </p>
                <div className="before-after">
                  <article className="card">
                    <h3>Separate tools</h3>
                    <WorkflowDiagram
                      label="Work split across tools"
                      steps={[
                        "Several subscriptions",
                        "Manual connections",
                        "Disconnected contacts",
                        "Follow-up by hand",
                      ]}
                    />
                  </article>
                  <article className="card">
                    <h3>One Systeme.io account</h3>
                    <WorkflowDiagram
                      label="Work inside Systeme.io"
                      steps={[
                        "Landing page",
                        "Lead capture",
                        "Automation",
                        "Email",
                        "Funnel",
                        "Customer",
                      ]}
                    />
                  </article>
                </div>
              </section>

              <section id="stack">
                <h2>How Systeme.io fits into a modern marketing stack</h2>
                <p>
                  Systeme.io does not create the ad, and it is not the deepest
                  CRM. On MultiverseAI those jobs belong to other tools. A
                  practical stack looks like this.
                </p>
                <WorkflowDiagram
                  label="How AdCreative.ai, Systeme.io, and HighLevel can sit in one path"
                  steps={[
                    "AdCreative.ai",
                    "Advertising creative",
                    "Traffic",
                    "Systeme.io",
                    "Page and funnel",
                    "Email automation",
                    "Lead or customer",
                    "HighLevel",
                    "CRM follow-up",
                  ]}
                />
                <p>
                  <Link to="/adcreative">Learn how AdCreative.ai works</Link> if
                  the missing piece is the advertising creative. Stay in
                  Systeme.io if the missing piece is the page, the list, or the
                  checkout. <Link to="/highlevel">Read the HighLevel guide</Link>{" "}
                  if the missing piece is a pipeline and client follow-up.
                  These are different products. You do not need all three to
                  publish one offer.
                </p>
                <p>
                  More context sits on the{" "}
                  <Link to="/blog/marketing">marketing workflow article</Link>,
                  the{" "}
                  <Link to="/blog/automation">lead follow-up article</Link>, and
                  the <Link to="/guides">guides index</Link>.
                </p>
              </section>

              <section id="pricing">
                <h2>Systeme.io pricing</h2>
                <p>
                  Prices and limits below were checked against Systeme.io’s
                  official pricing page on September 27, 2026; its pricing FAQ
                  is marked as updated in April 2026. Plans are
                  organized mainly by contact limits. Every plan includes the
                  core tools. The Webinar plan adds automated webinars. The
                  Unlimited is the plan for unlimited contacts and free migration;
                  Systeme.io says sub-accounts are available on every plan.
                </p>
                <p>
                  Confirm the numbers on the{" "}
                  <a
                    href={SYSTEME_PRICING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Systeme.io pricing page
                  </a>{" "}
                  before you pay. This guide is updated in one place when those
                  figures change. Annual billing is offered, and the pricing
                  page advertises two months included when you pay yearly.
                </p>
                <div
                  className="table-wrap"
                  role="region"
                  aria-label="Systeme.io plan pricing comparison"
                  tabIndex="0"
                >
                  <table className="compare-table pricing-table">
                    <caption>
                      Systeme.io plans and listed limits, checked September 27, 2026.
                      Prices shown in USD per month.
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Plan detail</th>
                        {plans.map((plan) => (
                          <th scope="col" key={plan.name}>{plan.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Price", (plan) => <><strong>{plan.price}</strong> {plan.detail}</>],
                        ["Contacts", (plan) => plan.contacts],
                        ["Sales funnels", (plan) => plan.funnels],
                        ["Courses", (plan) => plan.courses],
                        ["Automation rules", (plan) => plan.automations],
                        ["Custom domains", (plan) => plan.domains],
                        ["Plan highlight", (plan) => plan.highlight],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <th scope="row">{label}</th>
                          {plans.map((plan) => (
                            <td key={plan.name}>{value(plan)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="table-scroll-hint">
                    Swipe or scroll horizontally to compare every plan.
                  </p>
                  <p className="pricing-footnote">
                    All plans list unlimited email sends and no additional
                    platform transaction fee; payment processor fees still
                    apply. Systeme.io states sub-accounts are available on every
                    plan. Feature limits can change.
                  </p>
                </div>
                <p>
                  Choose a plan from the constraint you will hit first:
                  contacts, number of funnels, number of courses, or the
                  webinar feature. Do not buy the top plan because a comparison
                  article called another product expensive. Compare the limit
                  you need with the limit printed on the current pricing page.
                </p>
              </section>

              <section id="free-plan">
                <h2>Is Systeme.io free?</h2>
                <p>
                  There is a free plan. Systeme.io describes it as permanent,
                  with no credit card. The limits in the pricing FAQ are 2,000
                  contacts, 3 sales funnels, 1 blog, 1 course, 1 affiliate
                  program, and 1 custom domain. Email sends and file storage
                  are described as unlimited.
                </p>
                <p>
                  Use the free plan to build one funnel, collect a small list,
                  and send a short sequence. Move to Startup, at the listed $17
                  per month, when you need more than three funnels, more than
                  one course, or more than 2,000 contacts. Startup lists up to
                  10 funnels; Webinar lists up to 50. The free plan is a
                  real way to judge the editor. It is not a hidden trial that
                  deletes the account.
                </p>
                <div className="inline-cta">
                  <AffiliateButton>See how Systeme.io works</AffiliateButton>
                </div>
              </section>

              <section id="pros">
                <h2>Systeme.io pros and cons</h2>
                <p>
                  This is not a star rating. It is a list of what the platform
                  is built to cover, and what you should still check.
                </p>
                <div className="pros-cons-grid">
                  <div className="card pros-card">
                    <h3>Pros</h3>
                    <ul className="plain-list">
                      {advantages.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="card cons-card">
                    <h3>Cons and trade-offs</h3>
                    <ul className="plain-list">
                      {limits.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </section>

              <section id="alternatives">
                <h2>Systeme.io alternatives and comparisons</h2>
                <p>
                  An alternative is only better if it matches the job. The
                  three comparisons below are the ones people search for most
                  often next to this product. None of them is a universal
                  winner.
                </p>
              </section>

              <section id="vs-highlevel">
                <h2>Systeme.io vs HighLevel</h2>
                <p>
                  HighLevel, sold as GoHighLevel, is the comparison when the
                  question is CRM and agency work. Systeme.io is the comparison
                  when the question is funnels, email, courses, and checkout.
                </p>
                <ComparisonTable
                  caption="Systeme.io compared with HighLevel"
                  columns={["Systeme.io", "HighLevel"]}
                  rows={highlevelRows}
                />
                <p>
                  Choose Systeme.io if you are publishing your own pages and
                  selling your own offer. Consider HighLevel if the work is a
                  pipeline, conversations, and client accounts. Read{" "}
                  <Link to="/highlevel">what HighLevel is used for</Link> before
                  you treat them as substitutes.
                </p>
              </section>

              <section id="vs-clickfunnels">
                <h2>Systeme.io vs ClickFunnels</h2>
                <p>
                  ClickFunnels is funnel software. Systeme.io also builds
                  funnels, and it includes email, courses, and product delivery
                  in the same account. If you already have email and a course
                  platform you like, a dedicated funnel builder can be enough.
                </p>
                <ComparisonTable
                  caption="Systeme.io compared with ClickFunnels"
                  columns={["Systeme.io", "ClickFunnels"]}
                  rows={clickfunnelsRows}
                />
                <p>
                  Choose Systeme.io if you want the list, the course, and the
                  funnel on one bill, including a free plan you can test.
                  Consider ClickFunnels if your team mainly builds and tests
                  funnel pages and you are comfortable paying for that focus.
                  Check ClickFunnels’ current pricing rather than relying on an
                  old screenshot.
                </p>
              </section>

              <section id="vs-kajabi">
                <h2>Systeme.io vs Kajabi</h2>
                <p>
                  Kajabi is aimed at creators who sell courses and memberships,
                  with email and pages around that content. Systeme.io covers
                  courses too, alongside funnels and a free starting plan.
                </p>
                <ComparisonTable
                  caption="Systeme.io compared with Kajabi"
                  columns={["Systeme.io", "Kajabi"]}
                  rows={kajabiRows}
                />
                <p>
                  Choose Systeme.io if you are validating an offer or you need
                  funnels and email before you have a large course library.
                  Consider Kajabi if the business is already a course or
                  membership and you want the product built around that. Compare
                  Kajabi’s current plan limits with the course limit on the
                  Systeme.io plan you would actually use.
                </p>
              </section>

              <section id="tutorial">
                <h2>Systeme.io tutorial for beginners</h2>
                <p>
                  This is the order of work, not a gallery of screens. The
                  editor changes, so a screenshot of a button would go stale.
                  Follow the labels inside your account if a name differs
                  slightly.
                </p>
                <ol className="steps">
                  {steps.map(([title, text], index) => (
                    <li key={title}>
                      <h3>
                        Step {index + 1}. {title}
                      </h3>
                      <p>{text}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="faq">
                <h2>Frequently asked questions</h2>
                <FAQ items={faqs} />
              </section>

              <section id="verdict">
                <h2>Who should consider Systeme.io</h2>
                <p>
                  Consider Systeme.io if you want to put a landing page, an
                  email list, a simple automation, and an optional checkout or
                  course in one account, and you are willing to start on the
                  free plan to see whether the editor matches how you work.
                </p>
                <p>
                  Look elsewhere if you need a specialist email platform, a
                  large ecommerce operation, or an agency CRM as the center of
                  the business. The{" "}
                  <Link to="/#tools">featured tools on MultiverseAI</Link> and
                  the <Link to="/#comparisons">comparison topics</Link> are
                  there for that decision. This page does not rank the
                  platform, and it does not claim a business result from
                  signing up.
                </p>
                <AuthorBox />
              </section>

              <CTASection
                id="ready"
                title="Ready to explore Systeme.io?"
                text="Open the platform, use the free plan if you want to learn the editor, and build one page before you add another tool."
                label="Explore Systeme.io"
              />

              <section id="more-guides" aria-labelledby="more-guides-title">
                <h2 id="more-guides-title">Related marketing guides</h2>
                <p>Continue with a related guide already available on MultiverseAI.</p>
                <ul>
                  <li><Link to="/blog/marketing">Marketing workflows</Link></li>
                  <li><Link to="/blog/automation">Lead follow-up automation</Link></li>
                  <li><Link to="/highlevel">HighLevel CRM guide</Link></li>
                  <li><Link to="/adcreative">AdCreative.ai guide</Link></li>
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
