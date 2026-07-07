import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Personal loans for single parents in Canada. Cover childcare, bills & emergencies. Flexible terms, all credit scores. Government benefit income accepted.",
  blocks: [
    { type: "heading", level: 2, text: "Financial Support for Single-Parent Families" },
    {
      type: "paragraph",
      text: "Raising children on a single income is one of the toughest financial challenges in Canada. Whether you're dealing with unexpected expenses, childcare costs, or simply need help making ends meet between paycheques, a personal loan can provide breathing room.",
    },

    { type: "heading", level: 2, text: "Common Expenses Single Parents Face" },
    {
      type: "table",
      headers: ["Expense", "Monthly Cost"],
      rows: [
        ["Childcare/daycare", "$800-$2,000"],
        ["After-school programs", "$200-$500"],
        ["School supplies & activities", "$50-$300"],
        ["Medical/dental (uninsured)", "Variable"],
        ["Emergency car/home repair", "$500-$2,000"],
      ],
    },

    { type: "heading", level: 2, text: "Can I Use Government Benefits as Income?" },
    {
      type: "paragraph",
      text: "Many lenders in our network accept various income sources, including:",
    },
    {
      type: "list",
      items: ["Canada Child Benefit (CCB)", "Provincial child benefits", "Employment Insurance (EI)", "Social assistance", "Child support payments"],
    },
    {
      type: "paragraph",
      text: "Always check with individual lenders about accepted income types.",
    },

    { type: "heading", level: 2, text: "How a Personal Loan Can Help" },
    {
      type: "list",
      items: [
        "Bridge income gaps between paycheques",
        "Cover back-to-school expenses",
        "Pay for emergency repairs — car breakdowns, appliance replacements",
        "Consolidate high-interest debt into one manageable payment",
        "Fund childcare deposits when starting a new job",
      ],
    },

    { type: "heading", level: 2, text: "Applying as a Single Parent" },
    {
      type: "list",
      ordered: true,
      items: [
        "Gather proof of all income sources (employment + benefits)",
        "Check your credit score — free tools are available online",
        "Compare offers from multiple lenders on Ask4Loan",
        "Choose the loan amount and term that fits your monthly budget",
        "Apply online in under 5 minutes",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Can single parents get personal loans in Canada?",
          answer:
            "Yes. Many Canadian lenders welcome applications from single parents and will consider income from employment, government benefits, and child support when assessing your application.",
        },
        {
          question: "Does child support count as income for loan applications?",
          answer:
            "Many lenders do count child support as part of your total income, though policies vary — it's worth confirming with your chosen lender before applying.",
        },
        {
          question: "What if I have a limited credit history as a single parent?",
          answer:
            "Lenders in our network work with a range of credit profiles, including those with limited or damaged credit history, though your rate may be higher than for prime borrowers.",
        },
        {
          question: "Are there government programs I should explore before borrowing?",
          answer:
            "Yes — before taking on debt, check what you qualify for through the Canada Child Benefit, provincial family assistance programs, and any employer or community support programs available in your area.",
        },
      ],
    },
  ],
};

export default content;
