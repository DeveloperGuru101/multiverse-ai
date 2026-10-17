import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SeoHead from "../components/SeoHead";
import { SITE } from "../seo";

export default function Terms() {
  return (
    <div className="page">
      <SeoHead
        title="Terms and Conditions | MultiverseAI"
        description="Terms for using MultiverseAI’s software reviews, guides, editorial content, and links to third-party services."
        path="/terms"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms & Conditions",
          description: "Terms for using the MultiverseAI website.",
          url: `${SITE}/terms`,
          isPartOf: { "@type": "WebSite", name: "MultiverseAI", url: `${SITE}/` },
        }}
      />
      <SiteHeader />
      <main className="section">
        <article className="container narrow legal-content">
          <p className="eyebrow">Transparency</p>
          <h1>Terms &amp; Conditions</h1>
          <p className="fine-print">Last updated: October 6, 2026</p>

          <h2>1. Acceptance of these terms</h2>
          <p>
            These terms apply when you access or use MultiverseAI. By using the
            site, you agree to them to the extent permitted by applicable law.
            Nothing here limits a consumer right or liability that cannot
            legally be limited or excluded.
          </p>

          <h2>2. What the site provides</h2>
          <p>
            MultiverseAI publishes information, reviews, comparisons, and
            practical guides about AI tools, marketing and automation
            platforms, business workflows, and web hosting. It also links to
            third-party products. The site code reviewed for these terms does
            not provide an AI tool, user account, or paid service operated by
            MultiverseAI.
          </p>

          <h2>3. Acceptable use</h2>
          <p>You agree not to use the site to:</p>
          <ul className="plain-list">
            <li>Break the law or violate another person’s rights.</li>
            <li>Attempt unauthorized access or bypass security controls.</li>
            <li>Upload or distribute malicious code through site features.</li>
            <li>Disrupt the site or make excessive automated requests.</li>
            <li>Abuse or interfere with third-party services linked from the site.</li>
          </ul>

          <h2>4. Information, reviews, and affiliate links</h2>
          <p>
            Content is provided for general informational purposes. Product
            features, prices, plans, availability, and third-party information
            may change. Information may be incomplete, approximate, delayed, or
            inaccurate. Some links are affiliate links; if you purchase through
            them, MultiverseAI may earn a commission at no additional cost to
            you. Affiliate relationships do not guarantee that a product is
            suitable for your needs.
          </p>

          <h2>5. AI-related information</h2>
          <p>
            Some articles discuss products that generate AI content. AI output
            from those third-party products can contain errors, fabricated
            statements, outdated information, bias, or omissions. MultiverseAI
            does not guarantee the accuracy of third-party AI output. Verify
            important information independently before relying on it.
          </p>

          <h2>6. Your responsibility</h2>
          <p>
            You are responsible for deciding whether information or a linked
            product is appropriate for your situation, checking important
            claims, and complying with laws and third-party terms when using
            products or material discussed here. Do not treat general site
            content as legal, medical, financial, security, or other
            professional advice.
          </p>

          <h2>7. Third-party services</h2>
          <p>
            External services and websites have their own terms, privacy
            practices, prices, availability, and support. MultiverseAI does not
            control them and cannot guarantee their operation, content, or
            accuracy. Your use of them is governed by the applicable provider’s
            terms.
          </p>

          <h2>8. Intellectual property</h2>
          <p>
            Unless otherwise indicated, MultiverseAI’s branding, site design,
            original text, software, and other site materials belong to or are
            licensed to the site operator and are protected by applicable
            intellectual-property laws. Product names and marks belong to their
            respective owners. You may link to public pages and quote limited
            portions where permitted by law, with appropriate attribution. No
            ownership of user content is claimed; the site has no user-content
            submission feature in the code reviewed for these terms.
          </p>

          <h2>9. Availability and changes</h2>
          <p>
            The site or its content may be updated, changed, suspended, or
            discontinued, and access may occasionally be interrupted. We may
            revise these terms by publishing an updated version here. Changes
            apply when published, subject to any notice or consent required by
            law. Continued use after an update means the revised terms apply to
            future use to the extent legally permitted.
          </p>

          <h2>10. Disclaimer of warranties</h2>
          <p>
            To the maximum extent permitted by law, the site and its content
            are provided “as is” and “as available,” without warranties that
            cannot lawfully be excluded. We do not promise uninterrupted access,
            error-free content, or a particular result from using information
            or following a link.
          </p>

          <h2>11. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by applicable law, the site
            operator is not liable for indirect or consequential loss arising
            from use of the site, reliance on information, third-party services,
            service interruptions, technical errors, or inaccurate information.
            Nothing in these terms excludes or limits liability or consumer
            rights that cannot legally be excluded or limited.
          </p>

          <h2>12. Governing law</h2>
          <p>
            The project files do not identify the site operator’s legal entity
            or jurisdiction. The governing law and courts must be completed by
            the operator after confirming those details and obtaining
            jurisdiction-specific review. No jurisdiction is designated by this
            draft.
          </p>

          <h2>13. Contact</h2>
          <p>
            Questions about these terms: <a href="mailto:support@multiverseaiapp.com">support@multiverseaiapp.com</a>.
            The site operator’s legal name and address are not specified in the
            project files.
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
