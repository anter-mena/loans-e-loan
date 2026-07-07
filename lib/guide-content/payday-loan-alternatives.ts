import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Payday loans cost Canadians a fortune in fees every year. Here are genuinely cheaper ways to cover an urgent expense.",
  blocks: [
    { type: "heading", level: 2, text: "Why Payday Loans Are Worth Avoiding" },
    {
      type: "paragraph",
      text: "Few borrowing products cost as much as a payday loan. The promise of fast cash comes with a price tag that traps a lot of people in a cycle they didn't sign up for.",
    },
    {
      type: "paragraph",
      text: "In Canada, a typical payday loan runs $15 per $100 over two weeks — roughly 390% annualized. The average payday borrower takes out more than 8 of these a year.",
    },
    {
      type: "paragraph",
      text: "Plenty of alternatives get you cash faster and far cheaper. Knowing them is what keeps you out of the cycle in the first place.",
    },

    { type: "heading", level: 2, text: "Alternative 1: A Personal Installment Loan" },
    {
      type: "paragraph",
      text: "This is the most direct payday-loan replacement — a lump sum repaid in fixed installments over months instead of all at once in two weeks.",
    },
    {
      type: "paragraph",
      text: "Even with weak credit, personal loan rates (up to 35% APR) are dramatically cheaper than a payday loan's 390%+. On $500, a 30% APR personal loan over 6 months costs about $50 in interest total, versus $75+ every two weeks with a payday loan.",
    },
    {
      type: "paragraph",
      text: "A comparison platform lets you see multiple offers through one soft-check application, which makes finding the best option a lot less tedious.",
    },

    { type: "heading", level: 2, text: "Alternative 2: A Credit Union Loan" },
    {
      type: "paragraph",
      text: "Canadian credit unions often beat payday lenders on price for small loans — being member-owned, they're not optimizing for fee revenue the same way. Many even offer short-term products designed specifically as a payday alternative.",
    },
    {
      type: "paragraph",
      text: "Membership is usually required, which typically just means living, working, or worshipping in the area they serve, plus a small deposit (often $5-$25).",
    },

    { type: "heading", level: 2, text: "Alternative 3: Cash Advance Apps or Employer Advances" },
    {
      type: "paragraph",
      text: "A growing set of fintech apps offer small advances to bridge a short gap. Employer payroll advance programs — letting you access wages you've already earned — are also becoming more common in Canada.",
    },
    {
      type: "paragraph",
      text: "Neither is perfect — some apps use tipping that functions like interest, and subscription fees add up. Still, both cost a fraction of a payday loan.",
    },

    { type: "heading", level: 2, text: "More Options Worth Trying" },
    {
      type: "list",
      items: [
        "Negotiate a payment plan directly with the creditor",
        "Sell things you don't need through Kijiji, Marketplace, or Poshmark",
        "Borrow from someone you trust — put it in writing",
        "Call 211 for local emergency assistance programs",
        "Provincial emergency social assistance, often available within days",
        "Food banks, freeing up grocery money for other bills",
        "Non-profit micro-loan programs in your community",
        "A credit card cash advance — pricier than ideal, but still far cheaper than a payday loan",
      ],
    },

    { type: "heading", level: 2, text: "What $500 Actually Costs Each Way" },
    {
      type: "table",
      headers: ["Borrowing Method", "Cost on $500", "Repayment Period"],
      rows: [
        ["Payday loan", "$75+ every 2 weeks", "2 weeks (often rolled over)"],
        ["Personal loan (fair credit)", "$50–$100 total interest", "6–12 months"],
        ["Credit union loan", "$20–$50 total interest", "3–12 months"],
        ["Cash advance app", "$0–$15 (tip/subscription)", "Until next payday"],
        ["Employer payroll advance", "$0", "Deducted from next paycheck"],
        ["Credit card cash advance", "$15–$25 + interest", "Revolving"],
      ],
    },

    { type: "heading", level: 2, text: "Getting Out of the Cycle" },
    {
      type: "paragraph",
      text: "If you're already stuck in payday loans, there's a concrete way out:",
    },
    {
      type: "list",
      items: [
        "Stop taking new payday loans — switch to any alternative above immediately",
        "Talk to a non-profit credit counsellor, free through Credit Counselling Canada",
        "Build a basic budget separating essential from non-essential spending",
        "Consider a debt consolidation loan to clear existing payday balances",
        "Know your rights — several provinces cap rollover fees",
        "Build a small emergency fund ($500 target) to avoid needing another payday loan",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the cheapest alternative to a payday loan?",
          answer:
            "Employer payroll advances are usually the cheapest, often free since they just advance wages you've already earned. Credit union loans ($20-$50 total interest) and cash advance apps ($0-$15) are also far below a payday loan's $75+ every two weeks.",
        },
        {
          question: "Can I get a payday loan alternative with bad credit?",
          answer:
            "Yes — personal installment loans are available up to 35% APR even with weak credit, dramatically cheaper than payday rates north of 390%. Credit unions also offer short-term products built specifically as payday alternatives.",
        },
        {
          question: "Are payday loans illegal in Canada?",
          answer:
            "No, they're legal but tightly regulated — typically around $15 per $100 over two weeks (roughly 390% APR), with some provinces capping rollover fees to limit the debt-cycle risk.",
        },
        {
          question: "How do I switch from payday loans to a personal loan?",
          answer:
            "Stop taking new payday loans and apply for an installment loan instead — a comparison platform lets you see multiple offers through one soft-check application. If you're carrying existing payday balances, a debt consolidation loan can replace them with one cheaper monthly payment.",
        },
      ],
    },
  ],
};

export default content;
