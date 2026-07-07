import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Compare personal loans from $300 to $5,000 CAD in British Columbia. Learn how Consumer Protection BC regulates lenders and how to borrow responsibly.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans in British Columbia: An Overview" },
    {
      type: "paragraph",
      text: "British Columbia's high cost of living, particularly in Metro Vancouver and Vancouver Island, means unexpected expenses can hit hard. A personal loan can help cover a shortfall, but it pays to know exactly what protections you have as a borrower before you apply.",
    },

    { type: "heading", level: 2, text: "How British Columbia Regulates Payday and Personal Loans" },
    {
      type: "paragraph",
      text: "Payday lending in BC is governed by the Payday Loans Regulation under the Business Practices and Consumer Protection Act, enforced by Consumer Protection BC. Since January 1, 2025, the maximum cost of borrowing is $14 for every $100 borrowed, down from $15. A payday loan cannot exceed 50% of your net pay, lenders cannot issue you more than one loan at a time, and rollovers — renewing a loan at an additional cost — are not permitted. You also have two business days to cancel a payday loan without penalty.",
    },
    {
      type: "paragraph",
      text: "Standard installment personal loans, repaid over months, are instead capped at 35% APR under the federal Criminal Code, the same ceiling that applies nationwide.",
    },

    { type: "heading", level: 2, text: "What Personal Loans Are Typically Used For in BC" },
    {
      type: "list",
      items: [
        "Covering a rent shortfall in high-cost markets like Vancouver, Burnaby, and Victoria",
        "Vehicle repairs for commuters travelling between the Lower Mainland and the Fraser Valley",
        "Consolidating credit card debt built up during the holiday season",
        "Emergency home repairs following BC's wet winters, such as roof leaks or drainage issues",
        "Bridging income gaps for seasonal workers in tourism, forestry, or agriculture",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply for a Personal Loan in BC" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your credit score for free through Equifax or TransUnion Canada.",
        "Compare a few lenders registered to operate in BC, including banks, credit unions, and online lenders.",
        "Gather your government-issued ID, proof of income, and banking information.",
        "Apply online with a soft credit check that won't affect your score.",
        "Review the full offer, including APR and total repayment amount, before accepting.",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Borrowing Responsibly in BC" },
    {
      type: "list",
      items: [
        "Confirm your lender is registered with Consumer Protection BC if you're considering a payday loan.",
        "Remember a payday loan can't exceed 50% of your net pay — for larger needs, an installment loan is a better fit.",
        "Avoid lenders offering to roll over an unpaid loan; it isn't permitted under BC law.",
        "Budget carefully given BC's high cost of living before committing to a new monthly payment.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the maximum interest rate for a personal loan in BC?",
          answer:
            "Standard installment personal loans are capped at 35% APR under the federal Criminal Code. Short-term payday loans are separately capped at $14 per $100 borrowed under BC's Payday Loans Regulation.",
        },
        {
          question: "Can I get a personal loan in BC with bad credit?",
          answer:
            "Yes. Several lenders registered in BC work with borrowers who have below-average credit, though your rate will typically be at the higher end of the legal range.",
        },
        {
          question: "Can a BC payday lender roll my loan into a new one?",
          answer:
            "No. Rollovers are not permitted under the Business Practices and Consumer Protection Act — a lender cannot renew your loan at an additional cost or use a new loan to pay off an old one.",
        },
        {
          question: "How fast can I get a personal loan in BC?",
          answer:
            "Many online lenders serving BC offer same-day decisions and can deposit funds by Interac e-Transfer within hours of approval, provided you apply before the lender's daily cut-off time.",
        },
      ],
    },
  ],
};

export default content;
