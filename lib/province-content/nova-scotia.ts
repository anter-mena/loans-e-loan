import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Compare personal loans from $300 to $5,000 CAD in Nova Scotia. Learn how the Nova Scotia Utility and Review Board regulates lenders and how to apply responsibly.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans in Nova Scotia: An Overview" },
    {
      type: "paragraph",
      text: "From Halifax to the fishing and tourism communities along Nova Scotia's coastline, seasonal work is a way of life for many households. A personal loan can help smooth out an income gap or cover an emergency, provided you understand what the province allows lenders to charge.",
    },

    { type: "heading", level: 2, text: "How Nova Scotia Regulates Payday and Personal Loans" },
    {
      type: "paragraph",
      text: "Payday lending in Nova Scotia is governed by the Consumer Protection Act, with specific rates set by the Nova Scotia Utility and Review Board (NSUARB). As of January 1, 2025, the maximum cost of borrowing dropped to $14 per $100 (from $15), and the maximum default fee dropped to $20 (from $40), in line with new federal Criminal Interest Rate Regulations. Lenders can charge up to 30% annual interest on an outstanding balance if you default.",
    },
    {
      type: "paragraph",
      text: "Standard installment personal loans, repaid over several months, are instead capped at 35% APR under the federal Criminal Code — the same ceiling that applies across Canada.",
    },

    { type: "heading", level: 2, text: "What Personal Loans Are Typically Used For in Nova Scotia" },
    {
      type: "list",
      items: [
        "Bridging income gaps for workers in the fishing, tourism, and seasonal service industries",
        "Vehicle repairs, important for commuters between Halifax and surrounding communities",
        "Winter heating costs during Nova Scotia's damp, cold winters",
        "Consolidating credit card debt into a single, predictable monthly payment",
        "Covering emergency home repairs after coastal storms",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply for a Personal Loan in Nova Scotia" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your credit score for free through Equifax or TransUnion Canada.",
        "Compare offers from a few lenders operating in Nova Scotia.",
        "Gather your government-issued ID, proof of income, and banking information.",
        "Apply online with a soft credit check that won't affect your score.",
        "Review the full agreement, including the APR and repayment schedule, before signing.",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Borrowing Responsibly in Nova Scotia" },
    {
      type: "list",
      items: [
        "Confirm the fees quoted match the current NSUARB-set maximum of $14 per $100 for a payday loan.",
        "Plan for Nova Scotia's seasonal industries when budgeting for a fixed monthly repayment.",
        "Read the disclosure statement for the total cost of borrowing, not just the payment amount.",
        "Compare at least two or three lenders before committing to an offer.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the maximum interest rate for a personal loan in Nova Scotia?",
          answer:
            "Standard installment personal loans in Nova Scotia are capped at 35% APR under the federal Criminal Code. Short-term payday loans are separately capped at $14 per $100 borrowed as of January 1, 2025.",
        },
        {
          question: "Can I get a personal loan in Nova Scotia with bad credit?",
          answer:
            "Yes. Several lenders operating in Nova Scotia work with borrowers who have below-average credit, though your rate will typically be at the higher end of the legal range.",
        },
        {
          question: "Who sets payday loan rates in Nova Scotia?",
          answer:
            "The Nova Scotia Utility and Review Board (NSUARB) sets the maximum cost of borrowing and default fees for payday loans under the Consumer Protection Act, subject to the new federal cost caps that took effect January 1, 2025.",
        },
        {
          question: "How fast can I get a personal loan in Nova Scotia?",
          answer:
            "Many online lenders serving Nova Scotia offer same-day decisions and can deposit funds by Interac e-Transfer within hours of approval, provided you apply before the lender's daily cut-off time.",
        },
      ],
    },
  ],
};

export default content;
