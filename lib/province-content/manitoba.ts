import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Compare personal loans from $300 to $5,000 CAD in Manitoba. Learn how the Consumer Protection Office regulates lenders and how to borrow responsibly.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans in Manitoba: An Overview" },
    {
      type: "paragraph",
      text: "From Winnipeg to smaller agricultural communities across the province, Manitobans dealing with an unexpected expense have real options beyond high-cost short-term credit. Knowing what the law allows lenders to charge is the first step to borrowing safely.",
    },

    { type: "heading", level: 2, text: "How Manitoba Regulates Payday and Personal Loans" },
    {
      type: "paragraph",
      text: "Payday lending in Manitoba is governed by The Consumer Protection Act and the Payday Loans Regulation, both administered by the provincial Consumer Protection Office (CPO), which licenses every lender operating in the province. The maximum cost of borrowing is $17 for every $100 loaned — the highest fee cap among Canadian provinces — for loans of up to $1,500 with terms no longer than 62 days. If a lender agrees to a new loan within seven days of a previous one being repaid, the additional charge is capped at 5% of the principal.",
    },
    {
      type: "paragraph",
      text: "Standard installment personal loans, repaid over several months rather than on your next payday, are instead capped at 35% APR under the federal Criminal Code — the same ceiling that applies across Canada.",
    },

    { type: "heading", level: 2, text: "What Personal Loans Are Typically Used For in Manitoba" },
    {
      type: "list",
      items: [
        "Bridging income between harvests for workers in Manitoba's agricultural sector",
        "Vehicle repairs, especially important given the long distances between rural communities",
        "Winter heating costs during Manitoba's cold winters",
        "Consolidating credit card debt into one predictable monthly payment",
        "Covering moving or settlement costs for newcomers arriving in Winnipeg",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply for a Personal Loan in Manitoba" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your credit score for free through Equifax or TransUnion Canada.",
        "Compare offers from a few lenders licensed to operate in Manitoba.",
        "Gather your government-issued ID, proof of income, and banking information.",
        "Apply online with a soft credit check that won't affect your score.",
        "Review the full agreement, including the APR and repayment schedule, before signing.",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Borrowing Responsibly in Manitoba" },
    {
      type: "list",
      items: [
        "Confirm your lender is licensed through Manitoba's Consumer Protection Office if considering a payday loan.",
        "Remember payday loans are capped at $1,500 and 62 days — for larger or longer-term needs, an installment loan usually fits better.",
        "Avoid repeat borrowing within seven days of repaying a loan, as this triggers additional fees.",
        "Compare the total cost of borrowing across at least two or three lenders before choosing one.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the maximum interest rate for a personal loan in Manitoba?",
          answer:
            "Standard installment personal loans in Manitoba are capped at 35% APR under the federal Criminal Code. Short-term payday loans are separately capped at $17 per $100 borrowed under Manitoba's Payday Loans Regulation.",
        },
        {
          question: "Can I get a personal loan in Manitoba with bad credit?",
          answer:
            "Yes. Several licensed lenders in Manitoba work with borrowers who have below-average credit, though your rate will typically be at the higher end of the legal range.",
        },
        {
          question: "What happens if I need to renew a payday loan in Manitoba?",
          answer:
            "If a lender agrees to a new loan within seven days of a previous one being repaid, the additional charge is capped at 5% of the principal amount, or $5 per $100 borrowed.",
        },
        {
          question: "How fast can I get a personal loan in Manitoba?",
          answer:
            "Many online lenders serving Manitoba offer same-day decisions and can deposit funds by Interac e-Transfer within hours of approval, provided you apply before the lender's daily cut-off time.",
        },
      ],
    },
  ],
};

export default content;
