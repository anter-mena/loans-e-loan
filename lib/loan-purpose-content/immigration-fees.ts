import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Need help with immigration application costs? Compare personal loans for visa, PR, and citizenship fees in Canada.",
  blocks: [
    { type: "heading", level: 2, text: "Covering Immigration Costs in Canada" },
    {
      type: "paragraph",
      text: "Immigrating to Canada or sponsoring a family member involves multiple government fees, legal costs, and settlement expenses. A personal loan can help manage these costs.",
    },

    { type: "heading", level: 2, text: "Immigration Fees in Canada (IRCC)" },
    {
      type: "table",
      headers: ["Application Type", "Government Fee (CAD)"],
      rows: [
        ["Express Entry (PR)", "$1,365 per person"],
        ["Family sponsorship (spouse)", "$1,080"],
        ["Citizenship application", "$630 per adult"],
        ["Study permit", "$150"],
        ["Work permit", "$155"],
        ["Biometrics", "$85 per person"],
        ["Right of PR fee", "$515 per person"],
      ],
    },

    { type: "heading", level: 2, text: "Total Immigration Costs (Including Related Expenses)" },
    {
      type: "table",
      headers: ["Expense", "Estimated Cost (CAD)"],
      rows: [
        ["Government fees (family of 4)", "$4,000-$6,000"],
        ["Immigration lawyer", "$2,000-$10,000"],
        ["Document translation/notarization", "$500-$2,000"],
        ["Medical exams (per person)", "$200-$450"],
        ["Language tests (IELTS/TEF)", "$300-$400"],
        ["Settlement costs", "$2,000-$10,000"],
      ],
    },

    { type: "heading", level: 2, text: "Recommended Loan Amounts" },
    {
      type: "paragraph",
      text: "Most immigration-related loans range from $3,000-$15,000 depending on the application type and family size.",
    },

    { type: "heading", level: 2, text: "How to Apply" },
    {
      type: "list",
      ordered: true,
      items: [
        "Determine all fees required for your immigration pathway",
        "Factor in legal fees if using an immigration consultant or lawyer",
        "Apply for a personal loan through Ask4Loan Canada",
        "Pay application fees and related costs",
      ],
    },

    { type: "heading", level: 2, text: "Important Resources" },
    {
      type: "list",
      items: [
        "IRCC (Immigration, Refugees and Citizenship Canada): Official fee schedules at canada.ca",
        "Licensed immigration consultants: Verify through the College of Immigration and Citizenship Consultants (CICC)",
        "Settlement agencies: Free services for newcomers across Canada",
        "Proof of funds: PR applications require separate proof of settlement funds — a loan for application fees is different from proof of funds requirements",
      ],
    },
  ],
};

export default content;
