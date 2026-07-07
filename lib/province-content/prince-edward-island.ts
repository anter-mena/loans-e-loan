import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Compare personal loans from $300 to $5,000 CAD in Prince Edward Island. Learn how the Payday Loans Act protects borrowers and how to apply responsibly.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans in Prince Edward Island: An Overview" },
    {
      type: "paragraph",
      text: "As Canada's smallest province by population, PEI's economy leans on agriculture, fisheries, and tourism — all of which bring seasonal swings in household income. A personal loan can help residents of Charlottetown, Summerside, and smaller communities cover an unexpected cost between seasons.",
    },

    { type: "heading", level: 2, text: "How Prince Edward Island Regulates Payday and Personal Loans" },
    {
      type: "paragraph",
      text: "Payday lending in PEI is governed by the province's Payday Loans Act. PEI is specifically designated under section 347.1 of the federal Criminal Code, which allows it to set its own cost-of-borrowing limits for payday loans rather than defaulting to the general criminal interest rate. As of recent provincial rules, the maximum cost of borrowing is $15 per $100 loaned, and unlike most provinces, PEI does not impose a fixed numerical cap on dishonoured cheque fees.",
    },
    {
      type: "paragraph",
      text: "Standard installment personal loans, repaid over several months rather than on your next payday, are capped at 35% APR under the federal Criminal Code — the same ceiling that applies across Canada.",
    },

    { type: "heading", level: 2, text: "What Personal Loans Are Typically Used For in PEI" },
    {
      type: "list",
      items: [
        "Bridging income gaps between agricultural and fishing seasons",
        "Vehicle repairs, important given the island's rural road networks",
        "Winter heating costs during PEI's cold, windy winters",
        "Consolidating credit card debt into one predictable monthly payment",
        "Covering costs for seasonal tourism workers between peak seasons",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply for a Personal Loan in PEI" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your credit score for free through Equifax or TransUnion Canada.",
        "Compare offers from a few lenders licensed to operate in PEI.",
        "Gather your government-issued ID, proof of income, and banking information.",
        "Apply online with a soft credit check that won't affect your score.",
        "Review the full agreement, including the APR and repayment schedule, before signing.",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Borrowing Responsibly in PEI" },
    {
      type: "list",
      items: [
        "Ask upfront about dishonoured cheque fees, since PEI doesn't cap these the way most provinces do.",
        "Plan around PEI's seasonal industries before committing to a fixed monthly repayment.",
        "Read the disclosure statement carefully for the total cost of borrowing, not just the payment amount.",
        "Compare at least two or three lenders before choosing one.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the maximum interest rate for a personal loan in PEI?",
          answer:
            "Standard installment personal loans in PEI are capped at 35% APR under the federal Criminal Code. Short-term payday loans are separately capped at $15 per $100 borrowed under the province's Payday Loans Act.",
        },
        {
          question: "Can I get a personal loan in PEI with bad credit?",
          answer:
            "Yes. Several licensed lenders operating in PEI work with borrowers who have below-average credit, though your rate will typically be at the higher end of the legal range.",
        },
        {
          question: "Are dishonoured cheque fees capped in PEI?",
          answer:
            "No. Unlike most other provinces, PEI does not impose a fixed numerical limit on the dishonoured cheque fee a lender can charge, so it's worth asking about this fee before signing.",
        },
        {
          question: "How fast can I get a personal loan in PEI?",
          answer:
            "Many online lenders serving PEI offer same-day decisions and can deposit funds by Interac e-Transfer within hours of approval, provided you apply before the lender's daily cut-off time.",
        },
      ],
    },
  ],
};

export default content;
