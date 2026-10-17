import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SeoHead from "../components/SeoHead";
import { SITE } from "../seo";

export default function Privacy() {
  return (
    <div className="page">
      <SeoHead
        title="Privacy Policy | MultiverseAI"
        description="Read how MultiverseAI’s website uses Google measurement tags, what information may be processed, and how to contact the site about privacy."
        path="/privacy"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          description: "Privacy information for the MultiverseAI website.",
          url: `${SITE}/privacy`,
          isPartOf: { "@type": "WebSite", name: "MultiverseAI", url: `${SITE}/` },
        }}
      />
      <SiteHeader />
      <main className="section">
        <article className="container narrow legal-content">
          <p className="eyebrow">Transparency</p>
          <h1>Privacy Policy</h1>
          <p className="fine-print">Last updated: October 6, 2026</p>

          <p>
            This policy describes data handling visible in the MultiverseAI
            website code. The site is an editorial resource for AI tools,
            marketing software, automation workflows, and hosting. It does not
            provide an account, submit user content to an AI service, or include
            a contact form in this codebase.
          </p>

          <h2>Information processed when you visit</h2>
          <p>
            The site loads Google Analytics and Google Ads measurement scripts.
            The code sends page-view configuration when routes change. Google’s
            scripts may use cookies or similar
            technologies and may process technical and interaction data such as
            page URLs, browser or device information, and network identifiers.
            The exact data, cookie behavior, retention, and settings are
            controlled in part by Google’s services and the site owner’s Google
            account configuration; these cannot be confirmed from this
            repository alone.
          </p>
          <p>
            The site is configured for deployment on Vercel. The deployment
            provider may process request and security logs to deliver and protect
            the site. The repository does not specify log fields or retention
            periods. Please consult the provider’s current privacy information
            for its processing details.
          </p>

          <h2>Information you choose to provide</h2>
          <p>
            There are no registration, payment, or website forms in the main
            MultiverseAI site. A mail link is provided for support. If you
            contact the site at <a href="mailto:support@multiverseaiapp.com">support@multiverseaiapp.com</a>,
            you choose what to include in your message; the email provider and
            mail systems involved may process that information. The site does
            not specify how support messages are retained.
          </p>

          <h2>Affiliate and other external links</h2>
          <p>
            Some reviews link to third-party products using affiliate URLs. If
            you follow one, the destination may receive ordinary connection
            information and the referral identifier in the link. Those
            providers operate under their own privacy practices. The site also
            links to external documentation and product pages. No third-party
            content is embedded by the main site code reviewed for this policy.
          </p>

          <h2>Cookies and choices</h2>
          <p>
            Google Analytics and Google Ads scripts are present. Depending on
            their configuration and your settings, Google may use cookies or
            similar technologies for measurement or advertising. This site does
            not currently show a cookie preference banner or consent-management
            tool. You can review cookie controls in your browser and Google’s
            privacy and advertising controls. Blocking cookies or scripts may
            affect measurement, but the editorial pages remain available.
          </p>

          <h2>Retention, security, and international processing</h2>
          <p>
            The repository does not disclose Google Analytics retention
            settings, Vercel log retention, or support-email retention. These
            should be confirmed by the site operator in the relevant service
            accounts. Google, Vercel, and email providers may process
            information in locations outside your own; their policies describe
            their safeguards and transfer practices. This code inspection does
            not establish a particular security certification or guarantee.
          </p>

          <h2>Your privacy rights</h2>
          <p>
            Rights and available complaint channels depend on where you live
            and which privacy laws apply. You may contact the site about a
            privacy question using the address below. Requests involving
            Google, Vercel, or your email provider may need to be made directly
            to that provider. The site operator should confirm the applicable
            jurisdiction, responsible legal entity, and any designated privacy
            or grievance contact before relying on this page as a complete
            statutory notice.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            Updates will be published on this page with a revised update date.
            The policy should be reviewed when analytics, advertising, hosting,
            or other data practices change.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, email <a href="mailto:support@multiverseaiapp.com">support@multiverseaiapp.com</a>.
            The individual or legal entity operating MultiverseAI and its
            jurisdiction are not identified in the project files and need to be
            confirmed by the site owner.
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
