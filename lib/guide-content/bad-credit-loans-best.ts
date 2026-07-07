import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A low score doesn't rule out borrowing — here's how to find and compare the Canadian lenders that actually work with imperfect credit.",
  blocks: [
    { type: "heading", level: 2, text: "Can You Still Borrow With Bad Credit?" },
    {
      type: "paragraph",
      text: "Yes. A score under 580 is generally treated as poor, but it's one input among several — income, job stability, existing debt load, and banking history all factor into a lender's decision too.",
    },
    {
      type: "paragraph",
      text: "Canada's alternative-lending and online-platform space has opened up access considerably in this range, all while still operating under provincial consumer lending rules and the federal 35% APR ceiling.",
    },

    { type: "heading", level: 2, text: "How These Loans Work in Practice" },
    {
      type: "paragraph",
      text: "Mechanically, it's the same as any personal loan: borrow a fixed amount, repay it monthly over a set term. Lenders in this segment commonly work with scores between 500 and 579, and many offer a soft-check pre-qualification step that won't touch your score.",
    },

    { type: "heading", level: 2, text: "What It Costs at Each Tier" },
    {
      type: "table",
      headers: ["Credit Tier", "Typical APR Range", "Example: Total Cost on $2,000 / 24 months"],
      rows: [
        ["Fair (580-669)", "18%–26%", "$2,380–$2,560"],
        ["Poor (500-579)", "26%–32%", "$2,560–$2,700"],
        ["Very Poor (below 500)", "32%–35%", "$2,700–$2,760"],
      ],
    },
    {
      type: "paragraph",
      text: "35% APR is the hard ceiling under Canada's Criminal Code — no legitimate lender can charge more.",
    },

    { type: "heading", level: 2, text: "What You'll Need to Qualify" },
    {
      type: "list",
      items: [
        "Canadian citizen or permanent resident, 18 or 19+ depending on province",
        "An active bank account with regular deposits",
        "Minimum monthly income, typically in the $1,000-$1,500 range",
        "Not currently in an active bankruptcy",
        "Valid government-issued ID",
        "A reachable phone number and email",
      ],
    },

    { type: "heading", level: 2, text: "What Matters Besides the Score Itself" },
    {
      type: "paragraph",
      text: "For most bad-credit lenders, how steady your income is matters more than almost anything else. Employment type, housing stability, and your recent payment record all get weighed too.",
    },

    { type: "heading", level: 2, text: "Finding the Right Lender" },
    {
      type: "paragraph",
      text: "A comparison platform lets you fill out one application and get back offers from multiple lenders willing to work with your credit profile, instead of applying one by one.",
    },
    {
      type: "list",
      negative: true,
      items: [
        "Never pay an upfront fee",
        "Skip any lender promising guaranteed approval",
        "Confirm the lender is licensed in your province",
        "Treat unsolicited offers with suspicion",
      ],
    },

    { type: "heading", level: 2, text: "How Fast Is Funding?" },
    {
      type: "paragraph",
      text: "Applications typically take minutes online, decisions often come the same day, and Interac e-Transfer usually gets funds to you the same or next business day after approval.",
    },

    { type: "heading", level: 2, text: "Protecting Yourself" },
    {
      type: "paragraph",
      text: "Used well, a bad credit loan can actually work in your favour long-term — consistent, full, on-time payments are one of the more direct ways to move your score upward.",
    },

    { type: "heading", level: 2, text: "Building Your Score From Here" },
    {
      type: "list",
      items: [
        "Pull your free credit reports and scan for errors",
        "Dispute anything that looks wrong",
        "Keep utilization under 30% across your accounts",
        "Pay every account on time, not just this loan",
        "Space out new credit applications rather than bunching them up",
      ],
    },

    { type: "heading", level: 2, text: "Other Routes Worth Considering" },
    {
      type: "list",
      items: [
        "Credit union loans",
        "Secured loans",
        "Borrowing from family",
        "Non-profit credit counselling",
        "Provincial emergency assistance programs",
        "Negotiating directly with an existing creditor",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What credit score is considered bad in Canada?",
          answer:
            "Below 580 is generally treated as poor. Within that band, lenders typically separate fair (580-669), poor (500-579), and very poor (below 500), with rates rising at each step down.",
        },
        {
          question: "Can I get approved with a score under 500?",
          answer:
            "In many cases yes — some alternative lenders work in the very-poor range, though you'll be quoted near the top of the legal range, typically 32%-35% APR.",
        },
        {
          question: "How much can I borrow with bad credit?",
          answer:
            "Amounts skew smaller, usually $300 to $5,000, with the exact figure depending on your income and the specific lender's criteria.",
        },
        {
          question: "Will a bad credit loan help improve my score?",
          answer:
            "It can — paying in full and on time consistently is one of the more reliable ways to move your score upward over time, since payment history carries so much weight.",
        },
        {
          question: "Are bad credit loans legal in Canada?",
          answer:
            "Yes, as long as the lender is licensed provincially and stays under the federal 35% APR cap. Always confirm licensing and never pay a fee upfront.",
        },
      ],
    },
  ],
};

export default content;
