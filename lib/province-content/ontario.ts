import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Compare personal loans from $300 to $5,000 CAD in Ontario. Learn how the Payday Loans Act protects you, what lenders can legally charge, and how to borrow responsibly.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans in Ontario: An Overview" },
    {
      type: "paragraph",
      text: "Ontario is home to nearly 16 million people and the country's largest consumer lending market, from downtown Toronto to smaller communities across the Greater Toronto Area, Eastern Ontario, and the North. That size means more lenders competing for your business — which is good for borrowers, provided you understand the rules that protect you before you sign anything.",
    },

    { type: "heading", level: 2, text: "How Ontario Regulates Payday and Personal Loans" },
    {
      type: "paragraph",
      text: "Short-term payday loans in Ontario are governed by the Payday Loans Act, 2008. As of January 1, 2025, the maximum cost of borrowing a payday loan is $14 for every $100 borrowed, down from the previous $15 cap, aligning provincial rules with the federal government's lower criminal interest rate. Lenders must give you two business days to cancel a payday loan contract without penalty, cannot charge more than $20 for a dishonoured payment, and cannot roll an unpaid loan into a new one from the same lender.",
    },
    {
      type: "paragraph",
      text: "Standard installment-style personal loans — the kind repaid over months rather than on your next payday — fall under the federal Criminal Code instead, which caps the annual percentage rate (APR) at 35% for any lender operating in Canada, including Ontario.",
    },

    { type: "heading", level: 2, text: "What Personal Loans Are Typically Used For in Ontario" },
    {
      type: "list",
      items: [
        "Bridging rent or mortgage payments in high-cost markets like Toronto, Ottawa, and Mississauga",
        "Covering car repairs or transit gaps, especially outside the GTA where a vehicle is essential",
        "Consolidating credit card debt built up over the winter holiday season",
        "Paying for emergency home repairs, such as furnace or roof issues before winter",
        "Managing seasonal income gaps for workers in tourism, construction, or agriculture",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply for a Personal Loan in Ontario" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your credit score for free through Equifax or TransUnion Canada before applying.",
        "Compare a few lenders — banks, credit unions, and online lenders licensed to operate in Ontario.",
        "Gather your government-issued ID, proof of income, and banking information.",
        "Apply online with a soft credit check, which won't affect your score.",
        "Review your offer carefully, including the APR, term, and any fees, before accepting.",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Borrowing Responsibly in Ontario" },
    {
      type: "list",
      items: [
        "Confirm your lender is licensed in Ontario — payday lenders must hold a licence under the Payday Loans Act, 2008.",
        "Avoid rolling a payday loan into a new one; it's not permitted and signals a lender is operating outside the rules.",
        "Only borrow what you can repay comfortably within your budget over the coming months.",
        "Read the disclosure statement for the total cost of borrowing, not just the monthly payment.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the maximum interest rate for a personal loan in Ontario?",
          answer:
            "For a standard installment personal loan, Ontario lenders are bound by the federal Criminal Code cap of 35% APR. For a short-term payday loan specifically, the Payday Loans Act, 2008 caps the cost of borrowing at $14 per $100 borrowed as of January 1, 2025.",
        },
        {
          question: "Can I get a personal loan in Ontario with bad credit?",
          answer:
            "Yes. Several lenders licensed in Ontario specialize in borrowers with below-average credit, though your APR will typically land at the higher end of the legal range to offset the lender's risk.",
        },
        {
          question: "How long do I have to cancel a payday loan in Ontario?",
          answer:
            "Under the Payday Loans Act, 2008, you have two business days to cancel a payday loan agreement without penalty and without giving a reason.",
        },
        {
          question: "How fast can I get a personal loan in Ontario?",
          answer:
            "Many online lenders serving Ontario offer same-day decisions and can deposit funds by Interac e-Transfer within hours of approval, provided you apply before the lender's daily cut-off time.",
        },
      ],
    },
  ],
};

export default content;
