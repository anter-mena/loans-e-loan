import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Compare personal loans from $300 to $5,000 CAD in Newfoundland and Labrador. Learn how provincial payday loan rules protect you and how to apply responsibly.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans in Newfoundland and Labrador: An Overview" },
    {
      type: "paragraph",
      text: "From St. John's to smaller communities across the island and Labrador, seasonal fishing and resource work can make household income unpredictable. A personal loan can help bridge a gap, but it's worth knowing that Newfoundland and Labrador has some of the strongest borrower protections in the country.",
    },

    { type: "heading", level: 2, text: "How Newfoundland and Labrador Regulates Payday and Personal Loans" },
    {
      type: "paragraph",
      text: "Payday lending has been regulated in the province since April 2019 under the Consumer Protection and Business Practices Act and its Payday Loans Regulations, overseen by the Consumer Affairs Division. The maximum cost of borrowing is $14 per $100 loaned — tied for the lowest cap in Canada. A payday loan cannot exceed 50% of your net pay, cannot run longer than 62 days, and if you take out a third loan within 62 days, the lender must offer split payments. Default interest is capped at 30% per year, and dishonoured payment fees are capped at $20.",
    },
    {
      type: "paragraph",
      text: "Standard installment personal loans, repaid over several months, are instead capped at 35% APR under the federal Criminal Code, the same ceiling that applies nationwide.",
    },

    { type: "heading", level: 2, text: "What Personal Loans Are Typically Used For in Newfoundland and Labrador" },
    {
      type: "list",
      items: [
        "Bridging income gaps between fishing seasons",
        "Vehicle and ferry travel costs, given the distances between communities in the province",
        "Winter heating costs during long, harsh winters",
        "Consolidating credit card debt into a predictable monthly payment",
        "Covering moving costs for workers relocating to St. John's for employment",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply for a Personal Loan in Newfoundland and Labrador" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your credit score for free through Equifax or TransUnion Canada.",
        "Compare offers from a few lenders licensed to operate in the province.",
        "Gather your government-issued ID, proof of income, and banking information.",
        "Apply online with a soft credit check that won't affect your score.",
        "Review the full agreement, including the APR and repayment schedule, before signing.",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Borrowing Responsibly in Newfoundland and Labrador" },
    {
      type: "list",
      items: [
        "Check with the province's Consumer Affairs Division for a list of licensed payday lenders before borrowing.",
        "Remember a payday loan can't run longer than 62 days — for longer-term needs, an installment loan fits better.",
        "Plan for seasonal fishing-industry income before committing to fixed monthly payments.",
        "Compare the total cost of borrowing across at least two or three lenders.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the maximum interest rate for a personal loan in Newfoundland and Labrador?",
          answer:
            "Standard installment personal loans are capped at 35% APR under the federal Criminal Code. Short-term payday loans are separately capped at $14 per $100 borrowed — the lowest fee cap in Canada.",
        },
        {
          question: "Can I get a personal loan in Newfoundland and Labrador with bad credit?",
          answer:
            "Yes. Several licensed lenders in the province work with borrowers who have below-average credit, though your rate will typically be at the higher end of the legal range.",
        },
        {
          question: "What happens if I take out several payday loans in a row?",
          answer:
            "If a lender enters into a third payday loan agreement with you within 62 days, they must offer you the option of splitting the repayment into installments rather than one lump sum.",
        },
        {
          question: "How fast can I get a personal loan in Newfoundland and Labrador?",
          answer:
            "Many online lenders serving the province offer same-day decisions and can deposit funds by Interac e-Transfer within hours of approval, provided you apply before the lender's daily cut-off time.",
        },
      ],
    },
  ],
};

export default content;
