const posts = [
  {
    slug: "ai-tools",
    category: "AI Tools",
    title: "How to choose AI tools that fit the work",
    description:
      "A practical way to sort AI tools for writing, research, design, and everyday business tasks before you add another subscription.",
    sections: [
      {
        heading: "Start from the task, not the tool",
        paragraphs: [
          "Most AI tools are built around one job: drafting text, searching through information, generating images, summarizing a meeting, or moving data between steps. The useful question is which job is slow or repetitive in your current work.",
          "A writing tool does not replace a design tool, and a research assistant does not run your email. Pick one task you already do every week, then look for software that shortens that task.",
        ],
      },
      {
        heading: "Categories worth knowing",
        paragraphs: [
          "These groups cover most of what people mean by “AI tools.” You rarely need one product from every group.",
        ],
        list: [
          "Productivity: notes, meeting summaries, inbox drafts, and document cleanup.",
          "Content: outlines, first drafts, rewrites, and repurposing a piece into another format.",
          "Research: gathering sources, comparing options, and turning a long document into a short brief.",
          "Design: images, simple layouts, and advertising creatives.",
          "Business tools: assistants inside CRM, support, or spreadsheet workflows.",
        ],
      },
      {
        heading: "A simple way to test a tool",
        paragraphs: [
          "Give the tool a real example from your work, not a demo prompt. Check whether the output is accurate enough to edit, whether you can export it into the tool you already use, and whether the time saved is larger than the time spent fixing mistakes.",
          "If the answer is unclear after two or three real tasks, the tool is probably not a fit yet. Keep the workflow you already have and revisit the category later.",
        ],
      },
      {
        heading: "Where this fits on MultiverseAI",
        paragraphs: [
          "Guides on this site will stay specific: what a tool does, where it belongs in a workflow, and what it does not do. Advertising creatives are one example. AdCreative.ai is an AI advertising tool for generating ad variations, not a general writing assistant.",
        ],
      },
    ],
    related: [
      { to: "/adcreative", label: "Explore AdCreative.ai" },
      { to: "/blog/marketing", label: "Marketing workflows" },
    ],
  },
  {
    slug: "marketing",
    category: "Marketing",
    title: "A practical marketing workflow",
    description:
      "How traffic, landing pages, advertising creatives, and follow-up fit together before you add more marketing software to the stack.",
    sections: [
      {
        heading: "One path from attention to a next step",
        paragraphs: [
          "Marketing software is easier to judge when you can see the path a person takes. Someone sees a message, lands on a page, and either leaves or takes a next step: a signup, a booking, or a purchase.",
          "Each tool on that path has a narrow job. An ad tool makes the message. A page builder holds the offer. An email or CRM tool handles what happens after someone responds.",
        ],
      },
      {
        heading: "Advertising and creatives",
        paragraphs: [
          "Advertising work is mostly variation. The same offer needs different headlines, images, and formats for different placements. AI creative tools can produce those variations faster. They do not decide the offer, the audience, or the budget.",
          "A useful test is small: a few creatives, one audience, and a clear result you can compare, such as clicks to a page or signups. Then keep the version that performed and replace the weaker one.",
        ],
      },
      {
        heading: "The page and the follow-up",
        paragraphs: [
          "The landing page should match the promise in the ad. If the ad offers a checklist, the page should deliver that checklist, not a different product. After the signup, a short email sequence can explain the next step without asking someone to remember to follow up by hand.",
          "Systeme.io is one platform that covers funnels, email, and simple automation in the same account. It is a fit when you want those pieces together. It is not a substitute for deciding what you are offering.",
        ],
      },
      {
        heading: "What to document",
        paragraphs: [
          "Write down the offer, the page, the creative, and the follow-up in one place. That note is more useful than a long list of marketing apps, because it shows which step is actually missing.",
        ],
      },
    ],
    related: [
      { to: "/systeme", label: "Explore Systeme.io" },
      { to: "/adcreative", label: "Explore AdCreative.ai" },
      { to: "/blog/automation", label: "Automate the follow-up" },
    ],
  },
  {
    slug: "automation",
    category: "Automation",
    title: "How to automate lead follow-up",
    description:
      "A straightforward sequence from a new visitor to a captured lead, an email series, and a CRM record you can actually maintain.",
    sections: [
      {
        heading: "Automate the repeat, keep the judgment",
        paragraphs: [
          "Follow-up fails when it depends on someone remembering. The parts that repeat — sending the same three emails, tagging a new lead, creating a task — can run from a form submission. The parts that need a decision, such as a custom reply or a pricing conversation, stay manual.",
        ],
      },
      {
        heading: "A sequence you can set up first",
        paragraphs: [
          "This is enough for most small sites. You can add SMS, scoring, or extra branches after the basic path is reliable.",
        ],
        list: [
          "Visitor arrives from an ad, a post, or a referral.",
          "A page collects a name and email in exchange for something specific.",
          "The contact is stored, with a tag for the offer they requested.",
          "An email sequence sends a short series over a few days.",
          "A person who replies, books, or buys is moved out of the generic sequence.",
        ],
      },
      {
        heading: "What belongs in the emails",
        paragraphs: [
          "The first email delivers what you promised. Later emails can explain how to use it, answer a common question, and point to one next step. Avoid a long series that repeats the same pitch. Three to five messages is enough to see whether people open and reply.",
        ],
      },
      {
        heading: "Where the CRM comes in",
        paragraphs: [
          "Email automation sends the sequence. A CRM keeps the record: where the lead came from, whether they booked, and who should reply if they answer. HighLevel is built around that combination of pipeline, messaging, and booking. Systeme.io covers a lighter version of the same idea inside a funnel and email account.",
          "Choose based on the work. A single offer and an email list can live in a funnel tool. A team that books calls and tracks stages usually needs a CRM.",
        ],
      },
    ],
    related: [
      { to: "/systeme", label: "Explore Systeme.io" },
      { to: "/highlevel", label: "Explore HighLevel" },
      { to: "/blog/agency-growth", label: "Agency workflows" },
    ],
  },
  {
    slug: "agency-growth",
    category: "Agency Growth",
    title: "Workflows for agencies and service businesses",
    description:
      "How leads, pipelines, appointments, and client follow-up fit together for freelancers and small marketing agencies.",
    sections: [
      {
        heading: "The work is the handoff",
        paragraphs: [
          "A service business loses time between steps: a new inquiry sits in an inbox, a call is booked in a separate calendar, and the notes never reach the person who will do the work. Agency tools are useful when they keep that handoff in one record.",
        ],
      },
      {
        heading: "A pipeline that matches how you sell",
        paragraphs: [
          "A simple pipeline is a list of stages you already use. New lead, conversation booked, proposal sent, won, and lost is enough. Each stage should mean one thing, so a lead is never “in progress” with no next action.",
          "The CRM is the place that record lives. HighLevel is one platform aimed at this work: pipelines, conversations, appointment booking, and follow-up for agencies that manage more than one client account.",
        ],
      },
      {
        heading: "Booking and follow-up",
        paragraphs: [
          "Appointment booking should write back to the same contact. When someone books, the pipeline stage changes and a reminder goes out. If they do not book, a short follow-up can offer another time. That is the same idea as email automation, pointed at a calendar instead of a download.",
        ],
      },
      {
        heading: "Reporting without a second system",
        paragraphs: [
          "A useful report answers a few questions: how many leads arrived, how many booked, and how many became clients. If those numbers already live on the pipeline, you do not need a separate spreadsheet for the weekly check. Add a reporting tool only when the pipeline cannot answer those questions.",
        ],
      },
    ],
    related: [
      { to: "/highlevel", label: "Explore HighLevel" },
      { to: "/blog/automation", label: "Lead follow-up" },
      { to: "/blog/marketing", label: "Marketing workflows" },
    ],
  },
];

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}

export default posts;
