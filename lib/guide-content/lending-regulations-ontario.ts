import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Ontario's Payday Loans Act, the federal rate cap, and collection rules explained — what borrowers are actually protected against in Ontario.",
  blocks: [
    { type: "heading", level: 2, text: "Payday Loans Under Ontario Law" },
    {
      type: "paragraph",
      text: "The Payday Loans Act, 2008 caps the cost of a payday loan in Ontario at $15 per $100 borrowed. Lenders need a license through the Ontario Ministry of Public and Business Service Delivery, and rollovers or back-to-back payday loans are banned outright.",
    },
    {
      type: "callout",
      text: "Paying more than $15 per $100 for a payday loan in Ontario means the lender is breaking the law.",
    },

    { type: "heading", level: 2, text: "The Criminal Rate of Interest" },
    {
      type: "paragraph",
      text: "Canada's Criminal Code caps every lender at 35% APR (as of January 2025), a national ceiling that includes all fees and charges expressed as an annual rate, and applies just as much in Ontario as anywhere else.",
    },
    {
      type: "callout",
      text: "Always ask for the total cost of borrowing as a single APR figure.",
    },

    { type: "heading", level: 2, text: "What the Consumer Protection Act Adds" },
    {
      type: "paragraph",
      text: "Ontario's Consumer Protection Act, 2002 layers on more: clear written agreements are mandatory, payday loans come with a 2-day cooling-off period, unfair contract terms can be voided, and deceptive advertising is banned.",
    },
    {
      type: "callout",
      text: "That 2-day window means you can cancel a payday loan within 2 business days, penalty-free.",
    },

    { type: "heading", level: 2, text: "Rules for Collection Agencies" },
    {
      type: "paragraph",
      text: "Ontario's Collection and Debt Settlement Services Act limits what collectors can do: no calls before 7 AM or after 9 PM, no contacting your employer except to confirm you work there, no threatening language, and no more than 3 calls in a 7-day period.",
    },
    {
      type: "callout",
      text: "Keep a log of every collection call — date, time, and what was said.",
    },

    { type: "heading", level: 2, text: "Where to Turn in Ontario" },
    {
      type: "paragraph",
      text: "The Ontario Ministry of Public and Business Service Delivery, the Credit Counselling Society, Legal Aid Ontario, and the Financial Consumer Agency of Canada (for federally regulated lenders) are all available resources.",
    },
    {
      type: "callout",
      text: "Non-profit credit counselling through agencies like the Credit Counselling Society is always free.",
    },

    { type: "heading", level: 2, text: "Quick Reference" },
    {
      type: "list",
      items: [
        "Verify payday lender licensing through the Ontario Ministry",
        "Use the 2-day cooling-off period if you need to cancel",
        "Report illegal practices to Consumer Protection Ontario",
        "Free credit counselling is available through non-profit agencies",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What's the maximum cost of a payday loan in Ontario?",
          answer:
            "$15 per $100 borrowed under the Payday Loans Act, 2008. A lender charging more than that is operating illegally.",
        },
        {
          question: "Can I cancel a payday loan after signing?",
          answer:
            "Yes — Ontario's Consumer Protection Act, 2002 gives you a 2-day cooling-off period to cancel a payday loan penalty-free.",
        },
        {
          question: "Is there a cap on interest rates for personal loans in Ontario?",
          answer:
            "Yes — the Criminal Code's 35% APR cap (as of January 2025) covers all fees and charges, and applies nationally, Ontario included.",
        },
        {
          question: "What are debt collectors allowed to do in Ontario?",
          answer:
            "Under the Collection and Debt Settlement Services Act, collectors can't call before 7 AM or after 9 PM, can't contact your employer beyond confirming employment, can't threaten you, and can't call more than 3 times in a week.",
        },
        {
          question: "Where can I get free help if I'm struggling with debt in Ontario?",
          answer:
            "Non-profit agencies like the Credit Counselling Society offer free counselling. The Ontario Ministry, Legal Aid Ontario, and the FCAC (for federally regulated lenders) are also available.",
        },
      ],
    },
  ],
};

export default content;
