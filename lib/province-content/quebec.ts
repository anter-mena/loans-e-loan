import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Compare personal loans from $300 to $5,000 CAD in Quebec. Learn how the Consumer Protection Act's 35% rate cap makes Quebec the strictest province for short-term credit.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans in Quebec: An Overview" },
    {
      type: "paragraph",
      text: "Quebec has the strongest consumer protection regime for short-term credit in Canada. If you're in Montreal, Quebec City, or a smaller municipality, understanding how the province's rules differ from the rest of the country will help you spot a legitimate offer immediately.",
    },

    { type: "heading", level: 2, text: "How Quebec Regulates Personal Loans" },
    {
      type: "paragraph",
      text: "Under the Consumer Protection Act, Quebec caps the effective annual interest rate on all forms of credit — including personal loans — at 35%. Unlike most other provinces, Quebec has not adopted a separate payday loan regime with a per-$100 fee structure. Because traditional payday lenders typically charge the equivalent of 300% to 500% annually, they cannot operate profitably within Quebec's 35% cap, which has effectively prevented conventional payday lending in the province for decades.",
    },
    {
      type: "paragraph",
      text: "Lenders offering short-term credit or cash advances in Quebec must hold a permit from the Office de la protection du consommateur (OPC), the provincial regulator responsible for enforcing the Consumer Protection Act.",
    },

    { type: "heading", level: 2, text: "What Personal Loans Are Typically Used For in Quebec" },
    {
      type: "list",
      items: [
        "Covering rent or utility shortfalls in Montreal and other higher-cost municipalities",
        "Vehicle repairs, particularly important given Quebec's harsh winters",
        "Consolidating credit card balances into a single, lower-rate monthly payment",
        "Emergency home repairs after winter storms or spring flooding",
        "Bridging seasonal income gaps for workers in tourism, agriculture, or construction",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply for a Personal Loan in Quebec" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your credit score for free through Equifax or TransUnion Canada.",
        "Compare offers from a few lenders licensed or permitted to operate in Quebec.",
        "Gather your government-issued ID, proof of income, and banking information.",
        "Apply online with a soft credit check that won't affect your score.",
        "Review the full contract, including the taux de crédit (credit rate) and total cost, before signing.",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Borrowing Responsibly in Quebec" },
    {
      type: "list",
      items: [
        "Be wary of any lender advertising rates that appear to exceed Quebec's 35% cap — this is a red flag for an unlicensed operator.",
        "Confirm the lender holds a valid permit from the Office de la protection du consommateur if offering short-term credit.",
        "Ask for the contract in French or English, as required under Quebec's consumer protection rules.",
        "Only borrow what fits comfortably within your monthly budget.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the maximum interest rate for a personal loan in Quebec?",
          answer:
            "Quebec's Consumer Protection Act caps the effective annual interest rate on all credit products, including personal loans, at 35% — the strictest cap of any province.",
        },
        {
          question: "Are payday loans legal in Quebec?",
          answer:
            "Quebec has not adopted a separate payday loan regime the way most provinces have. Because the 35% rate cap applies to all credit, traditional high-cost payday lending is not commercially viable in the province.",
        },
        {
          question: "Can I get a personal loan in Quebec with bad credit?",
          answer:
            "Yes. Several lenders permitted to operate in Quebec work with borrowers who have below-average credit, though your rate will typically be close to the province's 35% maximum.",
        },
        {
          question: "How fast can I get a personal loan in Quebec?",
          answer:
            "Many online lenders serving Quebec offer same-day decisions and can deposit funds by Interac e-Transfer within hours of approval, provided you apply before the lender's daily cut-off time.",
        },
      ],
    },
  ],
};

export default content;
