import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Going through a divorce or separation? Compare personal loans to cover legal fees, moving costs, and transition expenses in Canada.",
  blocks: [
    { type: "heading", level: 2, text: "Managing the Financial Impact of Divorce" },
    {
      type: "paragraph",
      text: "Divorce and separation involve significant costs beyond legal fees — from setting up a new household to adjusting to a single income. A personal loan can help you manage these transition costs.",
    },

    { type: "heading", level: 2, text: "Typical Divorce-Related Costs in Canada" },
    {
      type: "table",
      headers: ["Expense", "Estimated Cost (CAD)"],
      rows: [
        ["Uncontested divorce (legal fees)", "$1,500-$5,000"],
        ["Contested divorce (legal fees)", "$10,000-$50,000+"],
        ["Mediation services", "$1,000-$5,000"],
        ["Moving to new home", "$1,000-$5,000"],
        ["Security deposits (rent)", "$1,000-$3,000"],
        ["New household essentials", "$2,000-$8,000"],
      ],
    },

    { type: "heading", level: 2, text: "What Canadians Use Divorce Loans For" },
    {
      type: "list",
      items: [
        "Legal representation — retainers and ongoing legal fees",
        "Mediation costs — often more affordable than litigation",
        "Housing transition — deposits, first/last month rent, moving expenses",
        "Starting fresh — furniture, appliances, and household basics",
      ],
    },

    { type: "heading", level: 2, text: "Recommended Loan Amounts" },
    {
      type: "paragraph",
      text: "Most borrowers need $3,000-$15,000 for divorce-related expenses, depending on complexity.",
    },

    { type: "heading", level: 2, text: "How to Apply" },
    {
      type: "list",
      ordered: true,
      items: [
        "List all anticipated expenses related to your separation",
        "Explore mediation as a cost-saving alternative to court",
        "Apply for a personal loan through Ask4Loan Canada",
        "Use funds to cover transition costs",
      ],
    },

    { type: "heading", level: 2, text: "Resources for Canadians Going Through Divorce" },
    {
      type: "list",
      items: [
        "Family Justice Services: Free or low-cost mediation in most provinces",
        "Legal Aid: Income-based legal assistance programs",
        "Canada.ca: Information on divorce law and processes",
        "Community organizations: Many offer free support groups and counselling",
      ],
    },
  ],
};

export default content;
