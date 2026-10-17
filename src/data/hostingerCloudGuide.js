export const PAGE = {
  title: "Hostinger Cloud Hosting Review: Plans, Price & 20% Off",
  description:
    "Compare Hostinger cloud hosting plans, resources, backups, security, and renewal pricing, then confirm a 20% discount on eligible plans at checkout.",
  path: "/hostinger-cloud-hosting-review",
  canonical: "https://www.multiverseaiapp.com/hostinger-cloud-hosting-review",
  updated: "October 17, 2026",
  dateModified: "2026-10-17",
  h1: "Hostinger Cloud Hosting Review: Features, Pricing, and 20% Off",
  excerpt:
    "A practical Hostinger cloud hosting review of plans, resources, security, add-ons, renewal pricing, and how to check a 20% discount.",
};

export const toc = [
  { id: "what-is", label: "What is Hostinger cloud hosting?" },
  { id: "pricing", label: "Plans and pricing" },
  { id: "features", label: "Features explained" },
  { id: "addons", label: "Add-ons and extra services" },
  { id: "performance", label: "Performance and scalability" },
  { id: "security", label: "Security and reliability" },
  { id: "who-for", label: "Who it fits" },
  { id: "pros-cons", label: "Pros and cons" },
  { id: "compare", label: "Cloud vs shared vs VPS" },
  { id: "choose", label: "How to choose a plan" },
  { id: "discount", label: "How to check 20% off" },
  { id: "verdict", label: "Is it worth it?" },
  { id: "faq", label: "FAQ" },
];

export const plans = [
  {
    name: "Cloud Startup",
    audience: "Business sites, stores, and publishers that have outgrown a small shared plan.",
    websites: "Plan card: unlimited websites and 10 web apps. A Hostinger limits article still lists numeric website caps, so confirm the card before you buy.",
    resources: "4 CPU cores, 4 GB RAM, 100 GB NVMe, 2,000,000 inodes, 100 PHP workers. Pricing comparison also lists 300 databases and a 6 GB database size.",
    security: "Dedicated IP, CDN, unlimited SSL, daily and on-demand backups on the pricing page, malware scanning listed among hosting tools.",
    included: "Free domain for 1 year, unlimited mailboxes per website free for 1 year, managed WordPress and WooCommerce, Node.js, 1,000 one-time AI credits, priority support.",
    intro: "$7.99/month on the 48-month term ($383.52 upfront). Crossed rate shown as $27.99/month. Taxes extra.",
    renewal: "$25.99/month when that term renews, as shown on the US plan card.",
    limits: "Resources are capped. “Unlimited” websites and bandwidth are still subject to fair use and the CPU, RAM, inode, and PHP-worker limits.",
  },
  {
    name: "Cloud Professional",
    audience: "Busier WordPress sites, stores, and teams that need more RAM and storage than Startup.",
    websites: "Not printed on the Startup card. Confirm the Professional card for website and web-app allowances.",
    resources: "Hostinger’s hosting-cost article lists 5 CPU cores, 6 GB RAM, and 200 GB NVMe. The limits article lists 6 GB RAM for this tier. Confirm storage and inodes on the live card.",
    security: "Hostinger says every cloud package includes SSL, a free domain, domain email, and priority support. Confirm backups, CDN, and dedicated IP on this tier’s card.",
    included: "Treat included email, AI credits, and migration as plan-card items, not as identical to Startup, until the selector shows them.",
    intro: "$15.99/month for the 48-month term on the US cloud page. The upfront total and taxes appear at checkout.",
    renewal: "Not shown in the page copy we reviewed. Read the renewal line on the plan card before paying.",
    limits: "A higher tier still has fixed CPU, RAM, disk, and database limits. It does not add root access.",
  },
  {
    name: "Cloud Enterprise",
    audience: "Higher-traffic sites and agencies that want the largest managed cloud allocation on the public three-plan menu.",
    websites: "Confirm the website allowance on the Enterprise card. Do not assume it matches Startup’s “unlimited” label.",
    resources: "Hostinger’s hosting-cost article lists 6 CPU cores, 12 GB RAM, and 300 GB NVMe. The limits article also lists 12 GB RAM and a separate Cloud Enterprise Plus row that was not in the three-plan FAQ.",
    security: "Same caution as Professional: confirm CDN, backups, and dedicated IP on the selected card.",
    included: "The FAQ says every cloud package includes a free domain, SSL, domain-based email, and 24/7 priority support.",
    intro: "$29.99/month for the 48-month term on the US cloud page. Pay the full term upfront.",
    renewal: "Not shown in the copy we reviewed. Check the renewal price for the billing term you select.",
    limits: "Enterprise Plus appears in a limits article but not in the public three-plan FAQ. Do not buy against a tier you cannot see at checkout.",
  },
];

export const addons = [
  ["Domain for the first year", "Use a custom domain with the site.", "New sites that do not already have a domain.", "Included for 1 year on annual cloud plans, then claimed in hPanel.", "The first year is included. Renewal and premium domains are separate.", "Not every extension is free. The domain is not free forever."],
  ["WHOIS privacy", "Hide personal contact details on eligible domains.", "Anyone registering a personal domain.", "Listed on the pricing comparison with a displayed value of $9.99.", "Shown as a value, not a line item we could price separately.", "Confirm it is actually selected at checkout."],
  ["CDN", "Cache content closer to visitors.", "Sites with visitors outside one city.", "Included on the Cloud Startup card and described as integrated on cloud plans.", "No separate CDN price was listed for the cloud plans we reviewed.", "A CDN does not fix slow application code."],
  ["Business email", "Send mail from your domain.", "Businesses that want name@domain mailboxes.", "Startup card: unlimited mailboxes per website, free for 1 year.", "After the free period, use Hostinger’s current email price page.", "Server scripts are capped at 10 messages a minute and 100 a day."],
  ["Backups", "Restore files and databases after a mistake or failure.", "Every production site.", "Cloud Startup pricing row: daily and on-demand backups.", "Included on that published row. Confirm retention on higher tiers.", "A host backup is not a copy you control. Keep your own export too."],
  ["Website migration", "Move an existing site to Hostinger.", "Sites already live elsewhere.", "Described as a free, request-based migration.", "No migration fee was listed.", "DNS can still take time. Email and domains may need separate steps."],
  ["AI credits and builder tools", "Help draft or assemble a site inside Hostinger’s tools.", "Beginners who want a starting layout.", "Startup includes 1,000 vibe-coding credits as a one-time gift, plus AI tools on the pricing page.", "The gift is one-time. Extra credits were not priced here.", "AI output still needs editing. It does not replace a content plan."],
  ["Dedicated IP", "Give the hosting account its own address.", "Stores and sites that send mail from the server.", "Included on the Cloud Startup card. Hostinger also advertises it for cloud hosting generally.", "No add-on price was shown for that included IP.", "A dedicated IP does not by itself improve rankings."],
];

export const faqs = [
  {
    question: "What is Hostinger Cloud Hosting?",
    answer:
      "It is Hostinger’s managed cloud web hosting. The site runs in a prebuilt environment with hPanel, more published CPU and memory than Hostinger’s shared plans, and provider-managed server care. It is not a root-access VPS.",
  },
  {
    question: "Is Hostinger Cloud Hosting suitable for beginners?",
    answer:
      "Yes, if you want WordPress or a simple business site without administering Linux. You still choose a plan, point a domain, keep software updated, and understand renewal pricing. People who need custom server software should look at VPS hosting instead.",
  },
  {
    question: "How much does Hostinger Cloud Hosting cost?",
    answer:
      "On the US cloud page reviewed October 17, 2026, the 48-month introductory rates were $7.99, $15.99, and $29.99 per month for Startup, Professional, and Enterprise. Startup showed a $383.52 upfront total and a $25.99 renewal. Prices exclude tax and can differ by country and term.",
  },
  {
    question: "Does Hostinger offer a 20% discount?",
    answer:
      "MultiverseAI’s Hostinger link is meant to show a 20% promotional discount. The public cloud page we reviewed did not display a 20% coupon code. It did show Hostinger’s own longer-term introductory discount. Confirm any extra 20% on the checkout page before you pay.",
  },
  {
    question: "What features are included in Hostinger Cloud Hosting?",
    answer:
      "Hostinger says every cloud package includes a free domain, SSL, domain-based email, and priority support. The Startup card also lists NVMe storage, a dedicated IP, CDN, managed WordPress, WooCommerce, Node.js web apps, and a one-time AI credit gift. Higher tiers can differ, so read the selected card.",
  },
  {
    question: "Are backups and SSL included?",
    answer:
      "SSL is included and Hostinger says it is installed automatically. The US pricing comparison lists daily and on-demand backups for Cloud Startup. Confirm the backup schedule and how many copies you can restore on the plan you select.",
  },
  {
    question: "Does Hostinger Cloud Hosting include a free domain?",
    answer:
      "Annual cloud plans include a domain free for one year. You claim it in the dashboard. Renewals, transfers, and premium names can cost extra. The domain is not free for the life of the hosting plan.",
  },
  {
    question: "Can I migrate my existing website to Hostinger?",
    answer:
      "Hostinger offers a free migration request and says the current site can stay online while files move. You still need to plan DNS changes. Email, databases, and very custom applications may need extra checks.",
  },
  {
    question: "Is Hostinger Cloud Hosting suitable for WordPress?",
    answer:
      "Yes. Cloud plans are marketed as managed hosting for WordPress and WooCommerce, with one-click install and tools such as staging, WP-CLI, and PHP version controls listed among Hostinger hosting features. It does not remove the need for lean themes and maintained plugins.",
  },
  {
    question: "What is the difference between Hostinger Cloud Hosting and VPS hosting?",
    answer:
      "Cloud hosting is managed through hPanel and does not give you a general-purpose root server. VPS hosting gives administrative access and asks you to maintain the operating system and stack. Choose cloud for a managed site and VPS when you need server-level control.",
  },
  {
    question: "Are there additional charges for hosting add-ons?",
    answer:
      "There can be. The first year of a domain and the first year of included mailboxes are promotional. Premium domains, email after the free period, and other products are priced separately. Buy only the services the site will use.",
  },
  {
    question: "What happens when the introductory hosting term ends?",
    answer:
      "The plan renews at the renewal rate for that term, which is higher than the introductory monthly price. For Cloud Startup on a 48-month term, Hostinger showed $25.99 per month at renewal. The charge is for the new term, not a surprise one-month bill at the intro rate.",
  },
  {
    question: "Is Hostinger Cloud Hosting suitable for business websites?",
    answer:
      "It can fit a brochure site, a content site, or a modest store that needs more resources than shared hosting and does not need root access. Check storage, PHP workers, and backup retention against the size of the catalog and the traffic you already have.",
  },
  {
    question: "Can Hostinger Cloud Hosting handle increasing website traffic?",
    answer:
      "You can move to a larger cloud plan if you hit CPU, RAM, or storage limits. That is planned capacity, not unlimited scaling. A traffic spike can still exhaust PHP workers or memory. Measure real usage and upgrade before the site is already failing.",
  },
];
