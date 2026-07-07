import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Starting a small business? Compare personal loans for startup costs in Canada. Fund equipment, inventory, and launch expenses.",
  blocks: [
    { type: "heading", level: 2, text: "Funding Your Business Startup with a Personal Loan" },
    {
      type: "paragraph",
      text: "Starting a business in Canada requires capital, and traditional business loans often require an operating history. A personal loan can help bridge the gap when you're just getting started.",
    },

    { type: "heading", level: 2, text: "Typical Startup Costs in Canada" },
    {
      type: "table",
      headers: ["Expense", "Estimated Cost (CAD)"],
      rows: [
        ["Business registration", "$200-$500"],
        ["Equipment and tools", "$1,000-$10,000"],
        ["Initial inventory", "$2,000-$15,000"],
        ["Website and marketing", "$500-$5,000"],
        ["Professional licenses", "$200-$2,000"],
        ["Insurance", "$500-$3,000/year"],
      ],
    },

    { type: "heading", level: 2, text: "Personal Loan vs. Business Loan" },
    {
      type: "list",
      items: [
        "Personal loans don't require a business plan or revenue history",
        "Faster approval — often within 1-2 business days",
        "Smaller amounts ideal for micro-businesses and side hustles",
        "Fixed payments make budgeting easier during uncertain early months",
      ],
    },

    { type: "heading", level: 2, text: "Recommended Loan Amounts" },
    {
      type: "paragraph",
      text: "Most startup personal loans range from $3,000-$15,000. For larger ventures, consider government programs like the Canada Small Business Financing Program (CSBFP).",
    },

    { type: "heading", level: 2, text: "How to Apply" },
    {
      type: "list",
      ordered: true,
      items: [
        "Create a basic budget of your startup expenses",
        "Determine how much you need to borrow",
        "Apply through Ask4Loan Canada",
        "Use funds to launch your business",
      ],
    },

    { type: "heading", level: 2, text: "Government Resources" },
    {
      type: "list",
      items: [
        "Canada Small Business Financing Program: Government-backed loans up to $1 million",
        "BDC (Business Development Bank of Canada): Offers startup financing",
        "Provincial programs: Many provinces offer small business grants and low-interest loans",
        "Futurpreneur Canada: Financing and mentoring for entrepreneurs aged 18-39",
      ],
    },
  ],
};

export default content;
