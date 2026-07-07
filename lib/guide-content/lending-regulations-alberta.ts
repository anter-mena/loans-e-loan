import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "What Alberta's lending rules actually mean for you — payday loan caps under the Fair Trading Act, APR limits, and where to turn if something goes wrong.",
  blocks: [
    {
      type: "paragraph",
      text: "Alberta has its own layer of consumer lending rules on top of the federal framework. Knowing them protects you whether you're taking out a payday loan or a personal loan.",
    },

    { type: "heading", level: 2, text: "Payday Loans in Alberta" },
    {
      type: "paragraph",
      text: "The province's Payday Loans Regulation caps the cost at $15 per $100 borrowed, and every payday lender needs a Service Alberta license. A single payday loan can't exceed 50% of your net pay, rollovers are banned outright — a lender can't issue a new payday loan to clear an existing one — and Alberta gives you a 2-business-day cooling-off window to cancel.",
    },
    {
      type: "callout",
      text: "Alberta was among the first provinces to regulate payday lending. If a lender isn't licensed, don't borrow from them.",
    },

    { type: "heading", level: 2, text: "The Federal Rate Cap Still Applies" },
    {
      type: "paragraph",
      text: "The 35% APR criminal rate cap covers Alberta just like everywhere else in Canada, factoring in every fee and charge. On top of that, Alberta's Consumer Protection Act bans unfair practices like hidden fees and misleading cost disclosures.",
    },
    {
      type: "callout",
      text: "Get the total cost of borrowing in writing before signing anything, and compare it across a few lenders.",
    },

    { type: "heading", level: 2, text: "What the Consumer Protection Act Covers" },
    {
      type: "paragraph",
      text: "Alberta's Act gives borrowers broad protection: clear cost disclosure is mandatory, unfair contract terms can be challenged, misleading advertising is prohibited, and there are formal remedies if a lender doesn't comply. The Fair Trading Act governs the broader business conduct around it.",
    },
    {
      type: "callout",
      text: "If you believe a lender has broken the Consumer Protection Act, file a complaint with Service Alberta.",
    },

    { type: "heading", level: 2, text: "Rules Around Debt Collection" },
    {
      type: "paragraph",
      text: "Alberta's Collection and Debt Repayment Practices Regulation limits what a collector can do: no contact between 10 PM and 7 AM, no threats of legal action they don't actually intend to pursue, mandatory self-identification, and a cap of 3 contacts per week. Every collector operating in the province must be licensed.",
    },
    {
      type: "callout",
      text: "After roughly 2 years with no payment or acknowledgement, most Alberta debts become statute-barred.",
    },

    { type: "heading", level: 2, text: "Where to Get Help in Alberta" },
    {
      type: "paragraph",
      text: "Service Alberta handles complaints at 1-877-427-4088. Money Mentors offers free financial counselling province-wide, and Legal Aid Alberta assists qualifying residents.",
    },
    {
      type: "callout",
      text: "Money Mentors is Alberta's only non-profit credit counselling organization, and it's free and confidential.",
    },

    { type: "heading", level: 2, text: "Quick Reference" },
    {
      type: "list",
      items: [
        "Payday loans capped at 50% of net pay",
        "2 business days to cancel a payday loan",
        "Service Alberta maintains a public registry of licensed lenders",
        "Money Mentors offers free non-profit credit counselling",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What's the maximum cost of a payday loan in Alberta?",
          answer:
            "$15 per $100 borrowed under the Payday Loans Regulation, and no more than 50% of your net pay. All payday lenders must be licensed by Service Alberta.",
        },
        {
          question: "Can I cancel a payday loan after signing in Alberta?",
          answer:
            "Yes — Alberta gives you a 2-business-day cooling-off period to cancel. Rollovers, where a lender issues a new loan to pay off an existing one, are banned outright.",
        },
        {
          question: "Is there a cap on interest rates for personal loans in Alberta?",
          answer:
            "Yes — the federal 35% APR cap applies, covering all fees and charges as an annual rate. Alberta's Consumer Protection Act separately bans hidden fees and misleading cost disclosures.",
        },
        {
          question: "What are debt collectors allowed to do in Alberta?",
          answer:
            "They can't contact you between 10 PM and 7 AM, can't threaten legal action they don't intend to take, must identify themselves, and are capped at 3 contacts per week. Every collector must be licensed.",
        },
        {
          question: "Where can I get free help with debt in Alberta?",
          answer:
            "Money Mentors offers free, confidential financial counselling province-wide. Service Alberta (1-877-427-4088) and Legal Aid Alberta are also available for qualifying residents.",
        },
      ],
    },
  ],
};

export default content;
