import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Planning to adopt? Compare personal loans for adoption expenses in Canada. Cover agency fees, legal costs, and travel.",
  blocks: [
    { type: "heading", level: 2, text: "Financing Your Adoption Journey in Canada" },
    {
      type: "paragraph",
      text: "Adoption is a meaningful way to build your family, but the costs can be substantial. A personal loan can help make adoption financially accessible.",
    },

    { type: "heading", level: 2, text: "Adoption Costs in Canada" },
    {
      type: "table",
      headers: ["Type of Adoption", "Estimated Cost (CAD)"],
      rows: [
        ["Public (through province)", "$0-$3,000"],
        ["Private domestic", "$10,000-$25,000"],
        ["International", "$20,000-$60,000+"],
        ["Stepparent adoption", "$1,500-$5,000"],
      ],
    },

    { type: "heading", level: 2, text: "What Adoption Costs Cover" },
    {
      type: "list",
      items: [
        "Agency fees: Application, home study, and placement",
        "Legal fees: Court filing and lawyer costs",
        "Travel expenses: Especially for international adoptions",
        "Document preparation: Authentication, translation, immigration",
        "Medical assessments: Required health evaluations",
      ],
    },

    { type: "heading", level: 2, text: "Tax Benefits" },
    {
      type: "paragraph",
      text: "The Adoption Expense Tax Credit allows eligible Canadians to claim up to $18,210 (2025) per child in adoption expenses. This can significantly offset your total costs.",
    },

    { type: "heading", level: 2, text: "Recommended Loan Amounts" },
    {
      type: "list",
      items: [
        "Public adoption: $1,000-$3,000",
        "Private domestic: $5,000-$20,000",
        "International: $10,000-$35,000",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply" },
    {
      type: "list",
      ordered: true,
      items: [
        "Research adoption agencies and estimated costs",
        "Check provincial adoption programs for subsidies",
        "Apply for a personal loan through Ask4Loan Canada",
        "Use funds throughout the adoption process",
      ],
    },

    { type: "heading", level: 2, text: "Provincial Resources" },
    {
      type: "list",
      items: [
        "Each province has its own adoption agency and subsidy programs",
        "The Adoption Council of Canada provides information and resources",
        "Some employers offer adoption assistance benefits — check with your HR department",
      ],
    },
  ],
};

export default content;
