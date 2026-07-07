import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Need to pay a daycare deposit? Compare personal loans for childcare registration and deposit fees in Canada.",
  blocks: [
    { type: "heading", level: 2, text: "Securing Your Child's Daycare Spot" },
    {
      type: "paragraph",
      text: "Quality childcare in Canada often requires significant upfront deposits and registration fees. With waitlists stretching months or even years in major cities, being financially ready when a spot opens is essential.",
    },

    { type: "heading", level: 2, text: "Childcare Deposit Costs in Canada" },
    {
      type: "table",
      headers: ["Expense", "Estimated Cost (CAD)"],
      rows: [
        ["Registration fee", "$100-$500"],
        ["Security deposit (1-2 months)", "$1,000-$4,000"],
        ["First/last month fees", "$1,500-$4,000"],
        ["Supplies and uniform", "$100-$500"],
        ["Total upfront costs", "$2,000-$8,000"],
      ],
    },

    { type: "heading", level: 2, text: "Average Monthly Childcare Costs by Province" },
    {
      type: "table",
      headers: ["Province", "Average Monthly Cost (CAD)"],
      rows: [
        ["Ontario", "$1,000-$1,500*"],
        ["BC", "$800-$1,300*"],
        ["Alberta", "$800-$1,300"],
        ["Quebec", "$192 (subsidized)"],
      ],
    },
    {
      type: "paragraph",
      text: "*After $10/day childcare program subsidies where available.",
    },

    { type: "heading", level: 2, text: "Why Timing Matters" },
    {
      type: "paragraph",
      text: "When your name comes up on a waitlist, you typically have 48-72 hours to secure the spot with a deposit. A personal loan ensures you're financially ready.",
    },

    { type: "heading", level: 2, text: "Recommended Loan Amounts" },
    {
      type: "paragraph",
      text: "Typically $2,000-$5,000 to cover deposits and initial fees.",
    },

    { type: "heading", level: 2, text: "How to Apply" },
    {
      type: "list",
      ordered: true,
      items: [
        "Research childcare options and get on waitlists early",
        "Understand the deposit and fee structure",
        "Apply for a personal loan through Ask4Loan Canada",
        "Secure your child's spot when it becomes available",
      ],
    },

    { type: "heading", level: 2, text: "Government Support" },
    {
      type: "list",
      items: [
        "Canada Child Benefit (CCB): Monthly tax-free payments to help with childcare costs",
        "$10/day childcare: Federal program rolling out across provinces",
        "Provincial subsidies: Most provinces offer fee reduction programs for qualifying families",
        "Child Care Expense Deduction: Claim childcare costs on your tax return",
      ],
    },
  ],
};

export default content;
