import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Financing part of a Canadian wedding? Here's what weddings actually cost, how a personal loan compares to other options, and how to borrow sensibly.",
  blocks: [
    { type: "heading", level: 2, text: "Financing the Gap Between Savings and the Big Day" },
    {
      type: "paragraph",
      text: "Weddings add up fast, and plenty of Canadian couples turn to a personal loan to bridge the gap between what they've saved and what the day actually costs — without draining every account they have.",
    },

    { type: "heading", level: 2, text: "What a Canadian Wedding Actually Costs" },
    {
      type: "paragraph",
      text: "Costs vary enormously by vision, location, and guest count, but Canadian wedding industry estimates put the average somewhere between $25,000 and $40,000, often more. That typically breaks down as:",
    },
    {
      type: "list",
      items: [
        "Venue: $5,000 - $15,000+",
        "Catering (per person): $75 - $200+",
        "Photography & videography: $3,000 - $8,000+",
        "Attire: $2,000 - $7,000+",
        "Decor & flowers: $1,500 - $5,000+",
        "Planner/coordinator: $1,500 - $7,000+",
        "Music/entertainment: $1,000 - $5,000+",
      ],
    },
    {
      type: "paragraph",
      text: "These are averages, not rules — plenty of weddings cost less, and plenty cost considerably more.",
    },

    { type: "heading", level: 2, text: "How Much to Borrow" },
    {
      type: "paragraph",
      text: "Avoid financing the whole wedding if you can help it. Many couples land in the $5,000-$25,000 range, often earmarked for one specific piece — the venue, catering, photography — rather than the entire budget. Whatever the number, factor in interest before deciding what's actually affordable.",
    },

    { type: "heading", level: 2, text: "Comparing Your Options" },
    { type: "heading", level: 3, text: "Personal Loan" },
    {
      type: "list",
      items: [
        "A fixed, predictable payment",
        "Usually cheaper than a credit card, especially with good credit",
        "The full amount upfront to pay vendors",
        "No restriction on which wedding expense it covers",
      ],
    },
    {
      type: "list",
      negative: true,
      items: [
        "Still debt that needs repaying with interest",
        "A missed payment affects your credit",
      ],
    },

    { type: "heading", level: 3, text: "Credit Cards" },
    {
      type: "list",
      items: [
        "Convenient for a variety of vendor payments",
        "Some cards offer points or cashback",
      ],
    },
    {
      type: "list",
      negative: true,
      items: [
        "Much higher rates than a personal loan if not cleared quickly",
        "Minimum payments can keep you in debt far longer than expected",
      ],
    },

    { type: "heading", level: 3, text: "Line of Credit" },
    {
      type: "list",
      items: [
        "Draw only what you need, up to your limit",
        "Sometimes cheaper than a credit card",
      ],
    },
    {
      type: "list",
      negative: true,
      items: [
        "A variable rate makes budgeting less predictable",
        "Easy access can tempt you to borrow more than planned",
      ],
    },

    { type: "heading", level: 3, text: "Help From Family" },
    {
      type: "list",
      items: [
        "Often interest-free",
        "No credit check involved",
      ],
    },
    {
      type: "list",
      negative: true,
      items: [
        "Money conversations with family can get tense",
        "Informal arrangements often lack clear repayment terms",
      ],
    },
    {
      type: "paragraph",
      text: "For a lot of couples, a personal loan hits the right balance — a structured schedule and generally better rates than a credit card, especially with solid credit.",
    },

    { type: "heading", level: 2, text: "Applying" },
    {
      type: "list",
      ordered: true,
      items: [
        "A solid credit score — above 650 is generally considered good, with better scores unlocking better rates",
        "Proof of income — pay stubs, an employment letter, or tax assessments",
        "Valid government ID",
        "Banking details for deposit and repayment",
        "Your existing debt load relative to income, which lenders will factor in",
      ],
    },
    {
      type: "paragraph",
      text: "Banks, credit unions, and online lenders all offer this kind of loan — online lenders tend to move fastest if vendor deposit deadlines are looming.",
    },

    { type: "heading", level: 2, text: "Managing It Responsibly" },
    {
      type: "list",
      items: [
        "Build a real budget — don't forget provincial HST/GST",
        "Compare rates across a few lenders — even a small difference adds up over the term",
        "Read every term — rate, schedule, and any fees — before signing",
        "Automate payments so nothing gets missed",
        "A shorter term means a bigger payment but less total interest — 2-3 years is a reasonable target if you can manage it",
        "Put any wedding gift money toward the principal if you can",
      ],
    },
    {
      type: "paragraph",
      text: "A little planning up front means you get the wedding you want without a financial hangover after.",
    },

    {
      type: "faq",
      items: [
        {
          question: "How do I apply for a loan for wedding expenses?",
          answer:
            "Lenders will check your credit (above 650 is generally good), so have income proof, ID, and banking details ready. Banks, credit unions, and online lenders all offer these — online lenders tend to approve fastest.",
        },
        {
          question: "What loan amounts are available for wedding expenses?",
          answer:
            "Many couples borrow $5,000 to $25,000 against an average total cost of $25,000-$40,000+. Consider financing just one piece — the venue or catering — rather than the whole budget.",
        },
        {
          question: "How fast can I get funds for wedding expenses?",
          answer:
            "Online lenders typically approve and fund faster than traditional banks, useful against vendor deposit deadlines — confirm the exact timeline before booking anything on a fixed date.",
        },
        {
          question: "Are there alternatives to a personal loan for wedding expenses?",
          answer:
            "Credit cards are convenient and sometimes come with rewards, but carry higher rates. A line of credit offers flexibility with potentially lower rates, though variable. Family help can be interest-free but carries relationship risk.",
        },
      ],
    },
  ],
};

export default content;
