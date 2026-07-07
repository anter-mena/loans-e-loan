import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Need extra funds for holiday gift shopping? Compare personal loans for seasonal spending in Canada. Manageable repayment terms.",
  blocks: [
    { type: "heading", level: 2, text: "Managing Holiday Spending with a Personal Loan" },
    {
      type: "paragraph",
      text: "The holiday season brings joy — and expenses. Between gifts, decorations, entertaining, and travel, costs add up quickly. A personal loan with a fixed repayment plan can be a smarter alternative to accumulating high-interest credit card debt.",
    },

    { type: "heading", level: 2, text: "Average Holiday Spending in Canada" },
    {
      type: "table",
      headers: ["Category", "Average Spend (CAD)"],
      rows: [
        ["Gifts", "$800-$1,500"],
        ["Food and entertaining", "$300-$600"],
        ["Decorations", "$100-$300"],
        ["Holiday travel", "$500-$2,000"],
        ["Total average", "$1,500-$3,500"],
      ],
    },

    { type: "heading", level: 2, text: "Personal Loan vs. Credit Card" },
    {
      type: "table",
      headers: ["Factor", "Personal Loan", "Credit Card"],
      rows: [
        ["Interest rate", "6.99%-29.99%", "19.99%-29.99%"],
        ["Payment structure", "Fixed monthly", "Minimum payments"],
        ["Payoff timeline", "Set term", "Can stretch years"],
        ["Total interest paid", "Lower", "Often much higher"],
      ],
    },

    { type: "heading", level: 2, text: "Recommended Loan Amounts" },
    {
      type: "paragraph",
      text: "Typically $1,000-$5,000 for holiday expenses.",
    },

    { type: "heading", level: 2, text: "How to Apply" },
    {
      type: "list",
      ordered: true,
      items: [
        "Set a realistic holiday budget",
        "Subtract what you can pay from savings",
        "Apply for the difference through Ask4Loan Canada",
        "Enjoy the holidays without financial stress",
      ],
    },

    { type: "heading", level: 2, text: "Smart Holiday Budgeting Tips" },
    {
      type: "list",
      items: [
        "Start a holiday savings fund in January",
        "Set spending limits for each person on your gift list",
        "Take advantage of Black Friday and Boxing Day sales",
        "Consider experience gifts instead of material items",
        "Track spending with a budgeting app",
      ],
    },
  ],
};

export default content;
