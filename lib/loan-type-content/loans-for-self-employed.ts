import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Self-employed in Canada? Personal loans for small business owners & entrepreneurs. Bank statements accepted as income proof. Apply online today.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans for Self-Employed Canadians" },
    {
      type: "paragraph",
      text: "Being your own boss has many benefits, but qualifying for a personal loan isn't always one of them. Traditional lenders often require pay stubs and T4s that self-employed individuals simply don't have. Our lender network understands alternative income verification.",
    },

    { type: "heading", level: 2, text: "Who Is Considered Self-Employed?" },
    {
      type: "list",
      items: [
        "Sole proprietors and small business owners",
        "Incorporated business owners",
        "Freelancers and consultants",
        "Commission-based professionals — real estate agents, insurance brokers",
        "Tradespeople — electricians, plumbers, carpenters",
      ],
    },

    { type: "heading", level: 2, text: "Income Documentation Options" },
    {
      type: "table",
      headers: ["Document", "What It Shows"],
      rows: [
        ["Notice of Assessment (NOA)", "CRA-verified annual income"],
        ["Business bank statements", "Revenue and cash flow patterns"],
        ["T2125 (business income)", "Self-employment income declaration"],
        ["Financial statements", "Business profitability"],
        ["Contracts/invoices", "Ongoing income commitments"],
      ],
    },

    { type: "heading", level: 2, text: "Common Uses for Self-Employed Loans" },
    {
      type: "list",
      items: [
        "Cash flow gaps — cover expenses between client payments",
        "Equipment purchases — tools, computers, vehicles",
        "Personal emergencies — medical bills, home repairs",
        "Debt consolidation — simplify multiple payments",
        "Business investment — marketing, inventory, training",
      ],
    },

    { type: "heading", level: 2, text: "Tips to Strengthen Your Application" },
    {
      type: "list",
      items: [
        "Separate business and personal finances — use dedicated accounts",
        "Keep clean books — organized records show lender reliability",
        "File taxes on time — your NOA is your strongest proof of income",
        "Maintain a good credit score — pay personal bills on time",
        "Show consistent income — even if amounts vary, consistency matters",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Is it harder for self-employed people to get loans?",
          answer:
            "It can be more challenging since you won't have traditional pay stubs, but many lenders in our network specialize in working with self-employed borrowers and accept alternative income documentation like bank statements and your Notice of Assessment.",
        },
        {
          question: "What's the best income proof for self-employed loan applications?",
          answer:
            "Your most recent Notice of Assessment (NOA) from the CRA, combined with 3-6 months of business bank statements, gives lenders the clearest picture of your income.",
        },
        {
          question: "Can I deduct loan interest as a business expense?",
          answer:
            "If the loan is used for business purposes, the interest may be tax-deductible — consult an accountant to confirm based on your specific situation.",
        },
        {
          question: "How can self-employed borrowers get better rates?",
          answer:
            "Maintaining a strong personal credit score, showing consistent income over time, and filing taxes on time all help self-employed borrowers access better rates.",
        },
      ],
    },
  ],
};

export default content;
