import { Link, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SeoHead from "../components/SeoHead";
import Breadcrumbs from "../components/Breadcrumbs";
import posts, { getPost } from "../data/posts";
import { SITE } from "../seo";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  return (
    <div className="page">
      <SiteHeader />
      <main className="section">
        <div className="container narrow">
          {post ? <Article post={post} /> : <Missing />}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Article({ post }) {
  const others = posts.filter((item) => item.slug !== post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        mainEntityOfPage: `${SITE}/blog/${post.slug}`,
        author: { "@type": "Organization", name: "MultiverseAI", url: `${SITE}/` },
        publisher: { "@type": "Organization", name: "MultiverseAI" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
        ],
      },
    ],
  };

  return (
    <article className="article">
      <SeoHead
        title={`${post.title} | MultiverseAI`}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={jsonLd}
      />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Blog", to: "/blog" },
          { label: post.title },
        ]}
      />
      <p className="eyebrow">{post.category}</p>
      <h1>{post.title}</h1>
      <p className="lede">{post.description}</p>

      {post.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.list && (
            <ul className="plain-list">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <h2>Related</h2>
      <ul className="plain-list">
        {post.related.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <h2>More from the blog</h2>
      <ul className="post-list">
        {others.map((item) => (
          <li key={item.slug}>
            <Link to={`/blog/${item.slug}`}>
              <span>{item.category}</span>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <p className="section-link">
        <Link to="/blog">Back to the blog</Link>
      </p>
    </article>
  );
}

function Missing() {
  return (
    <>
      <SeoHead
        title="Article not found | MultiverseAI"
        description="That article is not published on MultiverseAI. Browse the blog for AI tools, marketing, automation, and agency workflows."
        noindex
      />
      <h1>Article not found</h1>
      <p>That blog page is not on MultiverseAI.</p>
      <p className="section-link">
        <Link to="/blog">Back to the blog</Link>
      </p>
    </>
  );
}
