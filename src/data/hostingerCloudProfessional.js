export const PAGE = {
  title: "Hostinger Cloud Professional Plan: Features & Cost",
  description:
    "See whether the Hostinger Cloud Professional plan fits your websites. Check resources, WordPress tools, backups, security, and renewal pricing first.",
  path: "/blog/hostinger-cloud-professional",
  canonical: "https://www.multiverseaiapp.com/blog/hostinger-cloud-professional",
  updated: "October 19, 2026",
  dateModified: "2026-10-19",
  h1: "Hostinger Cloud Professional Plan: A Practical Guide for Agencies and Growing Websites",
  excerpt:
    "What Cloud Professional includes, who it suits, and how to judge the renewal price before you pay.",
};

export const toc = [
  { id: "what-is", label: "What the plan is" },
  { id: "features", label: "What the plan includes" },
  { id: "agencies", label: "Why agencies should consider it" },
  { id: "business", label: "Why business owners should consider it" },
  { id: "use-cases", label: "Real-world use cases" },
  { id: "compare", label: "Cloud Professional vs other hosting" },
  { id: "pricing", label: "Pricing and renewal cost" },
  { id: "pros-cons", label: "Advantages and limitations" },
  { id: "setup", label: "How to get started" },
  { id: "verdict", label: "Is it worth it?" },
  { id: "faq", label: "FAQ" },
];

export const snapshot = [
  ["CPU / RAM / disk", "5 cores, 6 GB RAM, 200 GB NVMe", "Plan card and limits table agree"],
  ["PHP workers", "200", "Limits table"],
  ["Inodes", "3,000,000", "Limits table"],
  ["Websites", "“Unlimited” on the plan card; 100 in the v3 limits table", "Read both, then the live card"],
  ["Databases", "“Unlimited” on the card; 300 databases, 9 GB each, in the limits table", "Use the table for sizing"],
  ["Bandwidth", "Unlimited", "Both sources. CPU, RAM, and workers still cap traffic"],
  ["Backups", "Daily on the card; daily kept 7 days and weekly kept 6 weeks", "Backup article"],
  ["SSL / domain / IP", "Unlimited SSL, domain for 1 year, dedicated IP", "Plan card"],
  ["WordPress", "Managed WordPress, acceleration, object cache, staging", "Plan card"],
  ["Intro price, 48-month", "$15.99/month in the US; ₹899/month in India", "CMS card and India FAQ"],
  ["Renewal", "$44.99/month on the US 48-month card", "US CMS card. India Professional renewal was not in the FAQ text"],
];

export const useCases = [
  ["Digital agency", "Several client WordPress sites and campaign pages in one panel", "200 GB NVMe, 6 GB RAM, staging, daily backups, priority support", "Shared pool. Busy or high-risk clients may need their own account or Agency hosting"],
  ["Freelance developer", "A few client sites plus personal projects", "hPanel, Git, SSH, WP-CLI, free migration requests", "Confirm per-site access before promising a client their own login"],
  ["Consultant", "One main site and a lead-magnet page", "SSL, backups, enough RAM for forms and a lightweight theme", "A single new brochure may be cheaper on shared hosting"],
  ["Local business", "Service site, location pages, occasional offers", "HTTPS, daily backups, a CDN for visitors outside the city", "Choose a data-center region near your customers"],
  ["Startup", "First marketing site with room for a second product site", "Upgrade path inside managed cloud, 30-day money-back window", "Pay attention to the renewal, not the first-term monthly price"],
  ["Content publisher", "A WordPress magazine with regular posts and media", "Object cache, NVMe, 3 million inodes if the library is cleaned up", "Image-heavy archives can exhaust inodes or disk first"],
  ["Growing company", "The main site has outgrown shared hosting", "5 cores and 200 PHP workers versus Hostinger’s smaller shared plans", "If one app needs root or a custom service, compare VPS instead"],
];

export const faqs = [
  {
    question: "What is Hostinger Cloud Professional hosting?",
    answer:
      "It is the middle tier of Hostinger’s managed cloud hosting. The published allocation is 5 CPU cores, 6 GB RAM, and 200 GB NVMe storage, with hPanel, WordPress tools, SSL, and priority support. Hostinger runs the platform. You run the websites. It does not include a self-managed root server.",
  },
  {
    question: "Who should choose the Cloud Professional plan?",
    answer:
      "Choose it if you operate several business or WordPress sites that need more resources than Hostinger’s shared plans, and you want backups, staging, and a control panel. A single light brochure site, a custom server workload, or a portfolio that needs strict client isolation should be compared with a smaller plan, Agency hosting, or a VPS.",
  },
  {
    question: "Is Hostinger Cloud Professional good for agencies?",
    answer:
      "It can be, for a studio hosting its own sites and a few modest client projects in one account. Staging, migration requests, and a larger resource pool help day-to-day WordPress work. Clients who need separate ownership, separate billing, or access limited to one site are better served by separate accounts or Hostinger’s Agency plans.",
  },
  {
    question: "Can I host multiple client websites?",
    answer:
      "Yes, within the plan’s website allowance and resource caps. The sales card says unlimited websites. Hostinger’s v3 limits table still lists 100 for Cloud Professional. All of those sites share one pool of CPU, RAM, and PHP workers. That is convenient, and it is also the reason a heavy site can affect the others.",
  },
  {
    question: "Is it suitable for WordPress websites?",
    answer:
      "Yes. The Professional card lists managed WordPress, acceleration, object cache, and staging. Hostinger’s managed WordPress article includes install, updates, WP-CLI, and on-demand backups on Cloud plans. Lean themes and maintained plugins still matter. The plan does not repair an overloaded page builder.",
  },
  {
    question: "Is cloud hosting better than shared hosting for businesses?",
    answer:
      "It is a better fit when the business has outgrown shared CPU and storage. Hostinger’s shared Unlimited plan lists 2 cores, 3 GB RAM, and 50 GB disk. Cloud Professional lists 5 cores, 6 GB RAM, and 200 GB. For a new, low-traffic site, shared hosting can still be the proportionate choice. The better option depends on the workload.",
  },
  {
    question: "What is the difference between cloud hosting and VPS hosting?",
    answer:
      "Hostinger’s cloud plans are a managed environment with hPanel and a fixed resource pool. VPS hosting provides root access and asks you to maintain the server. Cloud Professional is the simpler choice for WordPress. A VPS is the choice when you need software or control the managed image does not allow.",
  },
  {
    question: "Can this plan support an e-commerce website?",
    answer:
      "A small WooCommerce store can run here. The cloud product is marketed with WooCommerce tools, and the limits table lists 200 PHP workers and a 9 GB database size. A large catalog, heavy search, or many simultaneous buyers can exhaust that pool. Test with your real catalog and compare a higher plan if CPU or database size is already tight.",
  },
  {
    question: "Does the plan include SSL and backups?",
    answer:
      "The Professional card includes unlimited SSL and daily backups. Hostinger’s backup article says daily copies are kept for 7 days and weekly copies for 6 weeks, stored outside the disk quota. Download your own copy as well. Host backups expire, and the agreement says you are responsible for your content.",
  },
  {
    question: "What happens when website traffic increases?",
    answer:
      "The account uses its fixed CPU, RAM, and PHP workers until those caps are reached. Unlimited bandwidth does not remove those caps. If the panel shows sustained pressure, move up to Cloud Enterprise or split the busy site onto its own plan. Decide before pages are already timing out.",
  },
  {
    question: "How much does Cloud Professional cost after renewal?",
    answer:
      "On the US card checked on 19 October 2026, the 48-month plan was $15.99 per month at introduction and $44.99 per month at renewal, before tax. India’s FAQ listed ₹899 per month for the 48-month introduction and did not state the Professional renewal in that answer. The renewal line at checkout is the figure that applies to your country and term.",
  },
  {
    question: "How do I decide whether to upgrade to a higher hosting plan?",
    answer:
      "Upgrade when you are near the disk, inode, RAM, or PHP-worker limits, or when a client needs isolation this account cannot give. Cloud Enterprise is the next managed cloud tier. Agency plans publish larger RAM and a different access model. A VPS is the step when you need root access. A quiet site that fits in shared hosting does not need a larger plan yet.",
  },
];
