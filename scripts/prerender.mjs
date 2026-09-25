import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { indexablePaths, SITE } from "../src/seo.js";

const root = process.cwd();
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const serverEntry = path.join(dist, "server", "entry-server.js");
const { render } = await import(pathToFileURL(serverEntry).href);

const routes = [...indexablePaths, "/page-not-found-preview"];

function extractHead(rendered) {
  const tags = [];
  let rest = rendered;
  const pattern = /^(?:<link\s[^>]*>|<title>[\s\S]*?<\/title>|<meta\s[^>]*\/?>|<script type="application\/ld\+json">[\s\S]*?<\/script>)/;
  while (pattern.test(rest)) {
    const match = rest.match(pattern);
    tags.push(match[0]);
    rest = rest.slice(match[0].length);
  }
  const jsonLd = rest.match(/<script type="application\/ld\+json"[\s\S]*?<\/script>/);
  if (jsonLd) {
    tags.push(jsonLd[0]);
    rest = rest.replace(jsonLd[0], "");
  }
  return { tags: tags.join("\n    "), body: rest };
}

function stripTemplateHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/, "")
    .replace(/<meta\s+name="description"[\s\S]*?>\s*/, "")
    .replace(/<meta\s+name="robots"[\s\S]*?>\s*/, "")
    .replace(/<link\s+rel="canonical"[\s\S]*?>\s*/, "")
    .replace(/<meta\s+property="og:[^"]+"[\s\S]*?>\s*/g, "")
    .replace(/<meta\s+name="twitter:[^"]+"[\s\S]*?>\s*/g, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/, "");
}

function writePage(route, html) {
  const rendered = render(route === "/page-not-found-preview" ? "/does-not-exist" : route);
  const { tags, body } = extractHead(rendered);
  const shell = stripTemplateHead(html).replace("</head>", `    ${tags}\n  </head>`);
  const page = shell.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  if (route === "/") {
    fs.writeFileSync(path.join(dist, "index.html"), page);
    return;
  }
  if (route === "/page-not-found-preview") {
    fs.writeFileSync(path.join(dist, "404.html"), page);
    return;
  }
  const directory = path.join(dist, route);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.html"), page);
}

for (const route of routes) {
  writePage(route, template);
}

const urls = indexablePaths
  .map((route) => `  <url>\n    <loc>${route === "/" ? `${SITE}/` : `${SITE}${route}`}</loc>\n  </url>`)
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(dist, "robots.txt"), robots);
fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(root, "public", "robots.txt"), robots);

const home = fs.readFileSync(path.join(dist, "index.html"), "utf8");
if (!home.includes("AI Tools, Marketing Automation")) {
  throw new Error("Prerendered homepage is missing its H1");
}
if (!home.includes("<title>")) {
  throw new Error("Prerendered homepage is missing a title");
}
