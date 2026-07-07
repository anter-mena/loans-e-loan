import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "What Manitoba's Consumer Protection Office rules mean for payday and personal loan borrowers, and where to turn if a lender crosses a line.",
  blocks: [
    { type: "heading", level: 2, text: "Payday Lending Rules" },
    {
      type: "paragraph",
      text: "Manitoba's Consumer Protection Act sets the payday loan cost ceiling at $17 per $100 borrowed — every lender needs a license from the Consumer Protection Office. Loans can't exceed 30% of your net pay, a 48-hour cooling-off period applies, and repeat borrowing is restricted.",
    },
    {
      type: "callout",
      text: "Manitoba's cap runs a bit higher than Ontario's or BC's ($17 vs $15 per $100).",
    },

    { type: "heading", level: 2, text: "The Federal Rate Cap and Consumer Credit" },
    {
      type: "paragraph",
      text: "The 35% APR criminal rate ceiling applies here too. Provincial legislation on top of that requires clear disclosure of every lending cost, bans misleading advertising, and gives borrowers remedies against unfair practices.",
    },

    { type: "heading", level: 2, text: "What the Consumer Protection Office Does" },
    {
      type: "paragraph",
      text: "The CPO licenses and monitors payday lenders, investigates complaints, runs consumer education, and can pursue enforcement. It maintains a public registry of licensed lenders and publishes its own resources on borrowing safely.",
    },

    { type: "heading", level: 2, text: "Debt Collection Rules" },
    {
      type: "paragraph",
      text: "Manitoba's Consumer Protection Act governs collectors too: licensing is mandatory, calls outside reasonable hours are banned, threats and harassment aren't allowed, and collectors must identify themselves. The general limitation period for debt collection in the province is 6 years.",
    },

    { type: "heading", level: 2, text: "Where to Get Help in Manitoba" },
    {
      type: "paragraph",
      text: "The Consumer Protection Office (204-945-3800 or 1-800-782-0067) fields complaints. Community Financial Counselling Services (CFCS) of Manitoba offers free credit counselling, and Legal Aid Manitoba helps qualifying residents with debt-related legal matters.",
    },

    { type: "heading", level: 2, text: "Quick Reference" },
    {
      type: "list",
      items: [
        "Payday loans capped at $17 per $100 borrowed",
        "Loans can't exceed 30% of your net pay",
        "48-hour cooling-off period on payday loans",
        "Free credit counselling through CFCS of Manitoba",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What's the maximum cost of a payday loan in Manitoba?",
          answer:
            "$17 per $100 borrowed under the Consumer Protection Act — slightly above Ontario and BC's $15 — and the loan can't exceed 30% of your net pay.",
        },
        {
          question: "Can I cancel a payday loan after signing in Manitoba?",
          answer:
            "Yes — a 48-hour cooling-off period applies, and repeat borrowing is restricted. Every payday lender must be licensed by the Consumer Protection Office.",
        },
        {
          question: "Is there a cap on interest rates for personal loans in Manitoba?",
          answer:
            "Yes — the federal 35% APR cap applies, and provincial legislation separately requires clear cost disclosure and bans misleading advertising.",
        },
        {
          question: "What are debt collectors allowed to do in Manitoba?",
          answer:
            "Collectors must be licensed, can't call at unreasonable hours, can't use threats or harassment, and must identify themselves. The general debt collection limitation period in Manitoba is 6 years.",
        },
        {
          question: "Where can I get free help with debt in Manitoba?",
          answer:
            "Community Financial Counselling Services (CFCS) of Manitoba offers free counselling. The Consumer Protection Office (204-945-3800 or 1-800-782-0067) and Legal Aid Manitoba are also available.",
        },
      ],
    },
  ],
};

export default content;
