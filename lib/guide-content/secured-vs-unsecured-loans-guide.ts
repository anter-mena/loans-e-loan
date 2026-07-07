import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Collateral or no collateral? Here's how secured and unsecured loans actually differ, and which one fits your situation.",
  blocks: [
    { type: "heading", level: 2, text: "Secured Loans" },
    { type: "heading", level: 3, text: "What Works in Their Favour" },
    {
      type: "list",
      items: [
        "Lower interest rates",
        "Higher borrowing limits",
        "Easier approval with weaker credit",
        "Longer terms available",
        "Can help build credit",
      ],
    },
    { type: "heading", level: 3, text: "Trade-offs" },
    {
      type: "list",
      negative: true,
      items: [
        "Requires collateral — a car, home, or savings",
        "You risk losing that asset if you default",
        "Approval takes longer",
        "The asset needs to be valued first",
      ],
    },
    {
      type: "paragraph",
      text: "Best for: large purchases, weaker credit, and borrowers chasing the lowest possible rate.",
    },

    { type: "heading", level: 2, text: "Unsecured Loans" },
    { type: "heading", level: 3, text: "What Works in Their Favour" },
    {
      type: "list",
      items: [
        "No collateral needed",
        "Faster approval",
        "No asset at risk",
        "A simpler application",
        "Well-suited to smaller amounts",
      ],
    },
    { type: "heading", level: 3, text: "Trade-offs" },
    {
      type: "list",
      negative: true,
      items: [
        "Higher interest rate",
        "Lower borrowing limits",
        "Stricter credit requirements",
        "Usually shorter terms",
      ],
    },
    {
      type: "paragraph",
      text: "Best for: good credit, smaller amounts, and anyone who wants funding quickly.",
    },

    { type: "heading", level: 2, text: "Side by Side" },
    {
      type: "table",
      headers: ["Feature", "Secured Loan", "Unsecured Loan"],
      rows: [
        ["Collateral Required", "Yes", "No"],
        ["Interest Rates", "Lower (3-15%)", "Higher (6-35%)"],
        ["Credit Requirements", "More flexible", "Stricter"],
        ["Approval Speed", "Slower", "Faster"],
        ["Loan Amounts", "Higher ($5K-$100K+)", "Lower ($1K-$50K)"],
        ["Risk to Borrower", "Asset at risk", "No asset risk"],
        ["Best for Bad Credit", "Yes", "More difficult"],
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What can be used as collateral for a secured loan?",
          answer:
            "A vehicle, a home or other real estate, or savings and other financial assets are the most common forms.",
        },
        {
          question: "What happens if I default on a secured loan?",
          answer:
            "The lender can seize the pledged asset to recover what's owed.",
        },
        {
          question: "Are personal loans typically secured or unsecured?",
          answer:
            "Most personal loans in Canada are unsecured, though some lenders offer secured versions backed by a vehicle or savings account, usually at a better rate.",
        },
        {
          question: "Which loan type is better for debt consolidation?",
          answer:
            "Most borrowers go unsecured for consolidation, since no asset is at risk. A secured loan is worth considering if you need a larger amount or a lower rate and are comfortable pledging collateral.",
        },
      ],
    },
  ],
};

export default content;
