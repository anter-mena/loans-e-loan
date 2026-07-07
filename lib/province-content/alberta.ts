import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Compare personal loans from $300 to $5,000 CAD in Alberta. Learn how the province's Act to End Predatory Lending protects borrowers and how to apply responsibly.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans in Alberta: An Overview" },
    {
      type: "paragraph",
      text: "From Calgary and Edmonton to smaller centres tied to Alberta's energy, agriculture, and resource sectors, income here can swing with commodity prices and seasonal work. A personal loan can help smooth out those gaps, provided you understand what lenders are legally allowed to charge.",
    },

    { type: "heading", level: 2, text: "How Alberta Regulates Payday and Personal Loans" },
    {
      type: "paragraph",
      text: "Alberta's payday lending industry is governed by the Payday Loans Regulation under An Act to End Predatory Lending. Every payday lender operating in Alberta, whether from a storefront or online, must hold a Payday Loan licence. The maximum cost of borrowing is $14 for every $100 loaned, down from $15, and payday loan amounts are capped at $1,500.",
    },
    {
      type: "paragraph",
      text: "Standard installment personal loans, repaid over months rather than on your next payday, fall under the federal Criminal Code interest rate cap of 35% APR — the same maximum that applies across Canada, including Alberta.",
    },

    { type: "heading", level: 2, text: "What Personal Loans Are Typically Used For in Alberta" },
    {
      type: "list",
      items: [
        "Covering costs during layoffs or slowdowns in the energy and construction sectors",
        "Vehicle repairs, which are especially important given Alberta's reliance on personal vehicles and long commutes",
        "Winter heating bills during Alberta's long, cold winters",
        "Consolidating higher-interest credit card debt into one predictable monthly payment",
        "Covering moving costs for workers relocating between Calgary, Edmonton, and smaller resource towns",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply for a Personal Loan in Alberta" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your credit score for free through Equifax or TransUnion Canada.",
        "Compare offers from a few licensed Alberta lenders, including banks, credit unions, and online lenders.",
        "Gather your ID, proof of income, and banking details.",
        "Apply online — most lenders use a soft credit check that won't affect your score.",
        "Review the full loan agreement, including the APR and repayment schedule, before signing.",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Borrowing Responsibly in Alberta" },
    {
      type: "list",
      items: [
        "Verify your lender holds a valid Alberta Payday Loan licence if you're considering a short-term loan.",
        "Remember payday loans are capped at $1,500 — for larger needs, an installment personal loan is usually the better fit.",
        "Budget for Alberta's seasonal income swings before committing to a fixed monthly payment.",
        "Compare the total cost of borrowing across at least two or three lenders before choosing one.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the maximum interest rate for a personal loan in Alberta?",
          answer:
            "Standard installment personal loans in Alberta are capped at 35% APR under the federal Criminal Code. Short-term payday loans are separately capped at $14 per $100 borrowed under Alberta's Payday Loans Regulation.",
        },
        {
          question: "Can I get a personal loan in Alberta with bad credit?",
          answer:
            "Yes. Several licensed lenders in Alberta work with borrowers who have below-average credit, though your rate will typically be at the higher end of the legal range.",
        },
        {
          question: "Do online payday lenders need a licence to serve Alberta residents?",
          answer:
            "Yes. Any payday lender offering, arranging, or providing loans to Alberta residents — including online lenders — must hold a Payday Loan licence under the Payday Loans Regulation.",
        },
        {
          question: "How fast can I get a personal loan in Alberta?",
          answer:
            "Many online lenders serving Alberta offer same-day approval and can deposit funds by Interac e-Transfer within hours, provided you apply before the lender's daily cut-off.",
        },
      ],
    },
  ],
};

export default content;
