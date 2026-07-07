import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Compare personal loans from $300 to $5,000 CAD in Yukon. Learn how the territory's Consumer Protection Act and the federal interest rate cap protect you.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans in Yukon: An Overview" },
    {
      type: "paragraph",
      text: "From Whitehorse to smaller communities across the territory, Yukoners often face a higher cost of living than the rest of Canada, along with seasonal tourism and resource-sector employment. A personal loan can help bridge a gap, especially where in-person banking options are limited.",
    },

    { type: "heading", level: 2, text: "How Yukon Regulates Personal Loans" },
    {
      type: "paragraph",
      text: "Yukon has not adopted a dedicated payday loan statute with its own per-$100 fee structure. Instead, lenders operating in the territory are bound by the general federal Criminal Code interest rate cap of 35% APR. The territory's Consumer Protection Act requires lenders to disclose loan terms and costs clearly, and Yukon's consumer affairs office maintains a licensing system and handles consumer complaints.",
    },
    {
      type: "paragraph",
      text: "In practice, this means Yukon residents are protected by the same 35% ceiling that applies to standard personal loans across the rest of Canada.",
    },

    { type: "heading", level: 2, text: "What Personal Loans Are Typically Used For in Yukon" },
    {
      type: "list",
      items: [
        "Covering the higher cost of groceries, fuel, and shipped goods",
        "Travel costs between Whitehorse and smaller Yukon communities",
        "Winter heating and vehicle maintenance during Yukon's long, extreme winters",
        "Consolidating credit card debt into one predictable monthly payment",
        "Bridging income gaps for seasonal tourism and mining-sector workers",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply for a Personal Loan in Yukon" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your credit score for free through Equifax or TransUnion Canada.",
        "Compare a few online lenders that serve Yukon residents.",
        "Gather your government-issued ID, proof of income, and banking information.",
        "Apply online with a soft credit check that won't affect your score.",
        "Review the full agreement, including the APR and repayment schedule, before signing.",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Borrowing Responsibly in Yukon" },
    {
      type: "list",
      items: [
        "Confirm any lender you're considering caps its APR at 35%, the maximum allowed under federal law.",
        "Account for Yukon's higher cost of living when budgeting for a fixed monthly payment.",
        "Look for lenders with clear, upfront disclosure of loan terms and costs, as required under Yukon's Consumer Protection Act.",
        "Only borrow what you can comfortably repay given seasonal tourism and resource-sector income.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the maximum interest rate for a personal loan in Yukon?",
          answer:
            "Personal loans in Yukon are capped at 35% APR under the federal Criminal Code, since the territory has not adopted a separate payday loan fee structure.",
        },
        {
          question: "Can I get a personal loan in Yukon with bad credit?",
          answer:
            "Yes. Several online lenders serving Yukon work with borrowers who have below-average credit, though your rate will typically be at the higher end of the legal range.",
        },
        {
          question: "What consumer protections apply to loans in Yukon?",
          answer:
            "Yukon's Consumer Protection Act requires lenders to clearly disclose loan terms, costs, and alternatives, and the territory maintains a licensing system for lenders operating there.",
        },
        {
          question: "How fast can I get a personal loan in Yukon?",
          answer:
            "Many online lenders serving Yukon offer same-day decisions and can deposit funds by Interac e-Transfer within hours of approval, provided you apply before the lender's daily cut-off time.",
        },
      ],
    },
  ],
};

export default content;
