import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "See where your offer stacks up against what other Canadian borrowers are actually paying, broken down by credit tier, lender type, and loan purpose.",
  blocks: [
    { type: "heading", level: 2, text: "Where National Averages Sit Right Now" },
    {
      type: "paragraph",
      text: "Heading into 2026, a borrower with good credit is typically quoted somewhere in the 9%-12% APR range across Canadian banks, credit unions, and online lenders. That's the baseline most comparison shopping starts from.",
    },
    {
      type: "paragraph",
      text: "An average is just a starting point, though — your actual number depends heavily on your own profile and which lender you go with. Watching how rates shift over time can help you judge whether now is a reasonable moment to consolidate higher-cost debt or whether waiting makes more sense.",
    },

    { type: "heading", level: 2, text: "How Rates Break Down by Credit Score" },
    {
      type: "paragraph",
      text: "Of everything a lender looks at, your credit score (300-900 on the Equifax/TransUnion scale) moves your rate the most.",
    },
    {
      type: "table",
      headers: ["Credit Tier", "Score Range", "Average APR"],
      rows: [
        ["Excellent", "760–900", "6.5% – 9.5%"],
        ["Good", "700–759", "9.5% – 15.0%"],
        ["Fair", "640–699", "15.0% – 24.0%"],
        ["Poor", "300–639", "24.0% – 35.0%"],
      ],
    },

    { type: "heading", level: 2, text: "Rates by Type of Lender" },
    {
      type: "paragraph",
      text: "Banks tend to offer the sharpest pricing but are also the pickiest about who qualifies. Credit unions sit in the middle, often giving members some flexibility a bank wouldn't. Online lenders cast the widest net, which is why their published range spans so much further.",
    },
    {
      type: "table",
      headers: ["Lender Type", "Typical APR Range", "Best For"],
      rows: [
        ["Major banks", "6% – 14%", "Prime borrowers with existing accounts"],
        ["Credit unions", "7% – 16%", "Members with fair to good credit"],
        ["Online lenders", "8% – 35%", "All credit profiles, fast funding"],
      ],
    },

    { type: "heading", level: 2, text: "Does What You're Borrowing For Change the Rate?" },
    {
      type: "paragraph",
      text: "Somewhat. Lenders sometimes price debt consolidation slightly better, on the theory that a borrower actively tackling debt is a lower-risk bet, and home improvement loans can get similar treatment. For things like a vacation, a wedding, or a medical bill, your credit profile — not the purpose — is really what sets the price.",
    },

    { type: "heading", level: 2, text: "Making the Averages Work for You" },
    {
      type: "paragraph",
      text: "Line your quote up against the average for your tier, get pre-qualified with a few lenders (a soft check won't cost you anything), and ask directly what's pushing your number up. If you're more than 3-5 points above the average for your tier, it may be worth spending a few months improving your credit before you borrow.",
    },

    { type: "heading", level: 2, text: "Why Rates Move Over Time" },
    {
      type: "paragraph",
      text: "Personal loan pricing tends to follow the Bank of Canada's overnight rate — when that goes up, borrowing costs generally follow. That said, competition between lenders, especially the growing online segment, has kept a lid on how far rates drift.",
    },

    { type: "heading", level: 2, text: "How to Land Below Average" },
    {
      type: "list",
      items: [
        "Get your credit into the \"good\" tier before you shop",
        "Collect quotes from 3-5 lenders across different institution types",
        "Ask specifically about autopay discounts",
        "Consider a shorter repayment term",
        "Bring in a co-signer if it strengthens your application",
        "Check whether your primary bank offers a relationship discount",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the average personal loan interest rate in Canada right now?",
          answer:
            "Heading into 2026, borrowers with good credit are typically seeing 9%-12% APR across banks, credit unions, and online lenders nationwide.",
        },
        {
          question: "Why is my offered rate higher than the average?",
          answer:
            "The overall average blends every credit tier together. Your specific rate depends on where you actually fall — Fair-tier borrowers (640-699) typically see 15%-24%, and Poor-tier borrowers (below 640) see 24%-35%, both above the blended average.",
        },
        {
          question: "Are online lender rates higher than bank rates?",
          answer:
            "Not at the top end. Banks run roughly 6%-14%, credit unions 7%-16%, and online lenders 8%-35%. The wider online range reflects that they serve a broader range of credit profiles, not that they're pricier for strong applicants.",
        },
        {
          question: "How often do average rates change?",
          answer:
            "They move with the Bank of Canada's policy rate — up when it rises, down (or at least steady) when it doesn't. Competition among lenders, particularly online ones, has kept swings relatively modest.",
        },
        {
          question: "Should I wait for rates to drop before borrowing?",
          answer:
            "Usually not worth it. Your credit tier affects your rate far more than short-term market shifts, so if you need funds now, it typically makes more sense to compare 3-5 lenders today than to delay in hopes of a rate cut.",
        },
      ],
    },
  ],
};

export default content;
