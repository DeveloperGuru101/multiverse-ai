export const SITE = "https://www.multiverseaiapp.com";
export const SITE_NAME = "MultiverseAI";
export const SHARE_IMAGE = `${SITE}/logo.png`;

export const STATIC_PAGE_METADATA = {
  "/": {
    title: "MultiverseAI | AI Tools, Marketing Automation & Software Guides",
    description:
      "Explore practical AI tool reviews, marketing automation, CRM workflows, software comparisons, and VPS hosting guides for online businesses and developers.",
    category: "AI tools and business software",
    type: "website",
  },
  "/blog": {
    title: "AI Tools, Marketing & Automation Blog | MultiverseAI",
    description:
      "Practical guides to AI tools, marketing workflows, lead follow-up automation, agency CRM, software reviews, and VPS hosting for developers and small businesses.",
    category: "Articles and practical guides",
    type: "website",
  },
  "/guides": {
    title: "AI, Marketing & Software Guides | MultiverseAI",
    description:
      "Browse practical guides and reviews of AI tools, marketing automation, sales funnels, CRM software, agency workflows, and VPS hosting.",
    category: "Software guides and reviews",
    type: "website",
  },
  "/privacy": {
    title: "Privacy Policy | MultiverseAI",
    description:
      "Read how MultiverseAI’s website uses Google measurement tags, what information may be processed, and how to contact the site about privacy.",
    category: "Privacy and transparency",
    type: "website",
  },
  "/terms": {
    title: "Terms and Conditions | MultiverseAI",
    description:
      "Terms for using MultiverseAI’s software reviews, guides, editorial content, and links to third-party services.",
    category: "Terms of use",
    type: "website",
  },
};

export function buildPageMetadata({
  title,
  description,
  path,
  canonicalUrl,
  image = SHARE_IMAGE,
  imageAlt,
  ogTitle = title,
  ogDescription = description,
  twitterTitle = ogTitle,
  twitterDescription = ogDescription,
  twitterImage = image,
  pagePath,
  noindex = false,
  type = "website",
}) {
  if (!title || !description) {
    throw new Error("Page metadata requires a title and description.");
  }

  const resolvedPath = path || pagePath;
  const canonical = canonicalUrl || (resolvedPath === "/" ? `${SITE}/` : resolvedPath ? `${SITE}${resolvedPath}` : undefined);
  if (!noindex && !canonical) {
    throw new Error(`Indexable metadata for "${title}" requires a path or canonicalUrl.`);
  }

  return {
    title,
    description,
    canonical,
    image,
    imageAlt: imageAlt || ogTitle,
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    twitterImage,
    robots: noindex ? "noindex, follow" : "index, follow",
    noindex,
    type,
  };
}

export const indexablePaths = [
  "/",
  "/systeme",
  "/highlevel",
  "/adcreative",
  "/guides",
  "/blog",
  "/blog/ai-tools",
  "/blog/marketing",
  "/blog/automation",
  "/blog/agency-growth",
  "/blog/hostinger-vps-agencies",
  "/blog/adcreative-ai-review",
  "/blog/highlevel-review",
  "/hostinger-vps-review",
  "/hostinger-cloud-hosting-review",
  "/blog/hostinger-cloud-professional",
  "/privacy",
  "/terms",
];
