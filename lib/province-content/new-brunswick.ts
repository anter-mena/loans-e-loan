import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Compare personal loans from $300 to $5,000 CAD in New Brunswick. Learn how the Financial and Consumer Services Commission (FCNB) regulates lenders and how to apply responsibly.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans in New Brunswick: An Overview" },
    {
      type: "paragraph",
      text: "From Moncton and Saint John to smaller communities across the province, New Brunswickers dealing with an unexpected bill have options beyond high-cost short-term credit. Understanding the rules that protect you is the first step to borrowing safely.",
    },

    { type: "heading", level: 2, text: "How New Brunswick Regulates Payday and Personal Loans" },
    {
      type: "paragraph",
      text: "Payday lending in New Brunswick is governed by the Cost of Credit Disclosure and Payday Loans Act, enforced by the Financial and Consumer Services Commission (FCNB). A payday loan is capped at 30% of your net pay, up to a maximum of $1,500, and no lender — including online lenders serving New Brunswick residents — may operate without an FCNB licence.",
    },
    {
      type: "paragraph",
      text: "Standard installment personal loans, repaid over several months, are instead capped at 35% APR under the federal Criminal Code, the same ceiling that applies across Canada.",
    },

    { type: "heading", level: 2, text: "What Personal Loans Are Typically Used For in New Brunswick" },
    {
      type: "list",
      items: [
        "Bridging seasonal income gaps for workers in fishing, forestry, or tourism",
        "Vehicle repairs, important for commuters between Moncton, Saint John, and Fredericton",
        "Winter heating and home maintenance costs",
        "Consolidating credit card debt into one predictable monthly payment",
        "Covering moving or settlement costs for newcomers to the province",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply for a Personal Loan in New Brunswick" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your credit score for free through Equifax or TransUnion Canada.",
        "Compare offers from a few lenders licensed by FCNB.",
        "Gather your government-issued ID, proof of income, and banking information.",
        "Apply online with a soft credit check that won't affect your score.",
        "Review the full agreement, including the APR and repayment schedule, before signing.",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Borrowing Responsibly in New Brunswick" },
    {
      type: "list",
      items: [
        "Confirm your lender's licence status on the FCNB website before applying, especially for online lenders.",
        "Remember a payday loan is capped at $1,500 — for larger needs, an installment loan usually fits better.",
        "Plan for seasonal income swings before committing to a fixed monthly payment.",
        "Compare the total cost of borrowing across at least two or three lenders.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the maximum interest rate for a personal loan in New Brunswick?",
          answer:
            "Standard installment personal loans in New Brunswick are capped at 35% APR under the federal Criminal Code. Short-term payday loans have separate limits set under the Cost of Credit Disclosure and Payday Loans Act.",
        },
        {
          question: "Can I get a personal loan in New Brunswick with bad credit?",
          answer:
            "Yes. Several FCNB-licensed lenders work with borrowers who have below-average credit, though your rate will typically be at the higher end of the legal range.",
        },
        {
          question: "Do online lenders need a licence to serve New Brunswick residents?",
          answer:
            "Yes. Any payday lender offering loans to New Brunswick residents, including online-only lenders, must hold a licence from the Financial and Consumer Services Commission (FCNB).",
        },
        {
          question: "How fast can I get a personal loan in New Brunswick?",
          answer:
            "Many online lenders serving New Brunswick offer same-day decisions and can deposit funds by Interac e-Transfer within hours of approval, provided you apply before the lender's daily cut-off time.",
        },
      ],
    },
  ],
};

export default content;
