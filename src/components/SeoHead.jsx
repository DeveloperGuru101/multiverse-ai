import { useEffect } from "react";
import {
  buildPageMetadata,
  SHARE_IMAGE,
  SITE_NAME,
  STATIC_PAGE_METADATA,
} from "../seo";

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${CSS.escape(key)}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    element.setAttribute("data-seo", "page");
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SeoHead({
  page,
  title,
  description,
  path,
  canonical,
  image = SHARE_IMAGE,
  imageAlt,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  twitterImage,
  jsonLd,
  noindex = false,
  type = "website",
}) {
  const pageConfig = page ? STATIC_PAGE_METADATA[page] : null;
  if (page && !pageConfig) {
    throw new Error(`No shared metadata configuration exists for ${page}.`);
  }
  const metadata = buildPageMetadata({
    title: title || pageConfig?.title,
    description: description || pageConfig?.description,
    path: path || pageConfig?.path || page,
    canonicalUrl: canonical,
    image,
    imageAlt,
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    twitterImage,
    noindex,
    type: pageConfig?.type || type,
  });

  useEffect(() => {
    document.title = metadata.title;
    upsertMeta("name", "description", metadata.description);
    upsertMeta("name", "robots", metadata.robots);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:type", metadata.type);
    upsertMeta("property", "og:title", metadata.ogTitle);
    upsertMeta("property", "og:description", metadata.ogDescription);
    if (metadata.canonical) upsertMeta("property", "og:url", metadata.canonical);
    upsertMeta("property", "og:image", metadata.image);
    upsertMeta("property", "og:image:alt", metadata.imageAlt);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", metadata.twitterTitle);
    upsertMeta("name", "twitter:description", metadata.twitterDescription);
    upsertMeta("name", "twitter:image", metadata.twitterImage);
    upsertMeta("name", "twitter:image:alt", metadata.imageAlt);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!metadata.noindex) {
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("data-seo", "page");
      link.setAttribute("href", metadata.canonical);
    } else if (link) {
      link.remove();
    }

    let script = document.head.querySelector('script[data-seo="jsonld"]');
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "jsonld");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [metadata, jsonLd]);

  if (typeof window !== "undefined") return null;

  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="robots" content={metadata.robots} />
      {metadata.noindex ? null : <link rel="canonical" href={metadata.canonical} data-seo="page" />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={metadata.type} />
      <meta property="og:title" content={metadata.ogTitle} />
      <meta property="og:description" content={metadata.ogDescription} />
      {metadata.canonical ? <meta property="og:url" content={metadata.canonical} /> : null}
      <meta property="og:image" content={metadata.image} />
      <meta property="og:image:alt" content={metadata.imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.twitterTitle} />
      <meta name="twitter:description" content={metadata.twitterDescription} />
      <meta name="twitter:image" content={metadata.twitterImage} />
      <meta name="twitter:image:alt" content={metadata.imageAlt} />
      {jsonLd ? (
        <script
          type="application/ld+json"
          data-seo="jsonld"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </>
  );
}
