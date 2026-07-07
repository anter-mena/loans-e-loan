import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A personal loan is easier to manage once you build it into a real budget. Practical steps for staying on track after you sign.",
  blocks: [
    { type: "heading", level: 2, text: "Getting Your Budget in Order" },

    { type: "heading", level: 3, text: "1. Know Your True Monthly Number" },
    {
      type: "paragraph",
      text: "Add up your full loan payment, fees included, and stack it against your existing fixed costs — housing, utilities, insurance, phone, transportation, groceries.",
    },
    {
      type: "paragraph",
      text: "The 50/30/20 split is a reasonable starting framework: 50% of after-tax income to needs, 30% to wants, 20% to savings and debt. Your loan payment lives in the needs bucket.",
    },
    {
      type: "callout",
      text: "Keep total debt payments, loan included, under roughly 40% of your gross monthly income.",
    },

    { type: "heading", level: 3, text: "2. Automate the Payment" },
    {
      type: "paragraph",
      text: "The simplest way to never miss a payment is to stop relying on remembering it. Set up an automatic withdrawal timed 1-2 days after payday, so funds are guaranteed to be there. Most Canadian lenders offer this at no cost, and a missed manual payment costs you both fees and credit damage.",
    },
    {
      type: "callout",
      text: "Some lenders shave 0.25%-0.50% off your rate just for enrolling in autopay.",
    },

    { type: "heading", level: 3, text: "3. Build a Small Cushion Alongside It" },
    {
      type: "paragraph",
      text: "Even while repaying, try to set aside something for emergencies — $500-$1,000 is a reasonable first target. $25-$50 a pay period adds up faster than it feels like, and it keeps a car repair or medical bill from turning into more borrowing.",
    },
    {
      type: "callout",
      text: "Keep that cushion in a separate high-interest account so it's not sitting next to your everyday spending money.",
    },

    { type: "heading", level: 3, text: "4. Trim Spending With a Purpose" },
    {
      type: "paragraph",
      text: "Look back three months and find the fat: a cheaper phone plan (several Canadian providers start around $25/month), fewer streaming subscriptions, meal prep instead of delivery, cashback apps for groceries.",
    },
    {
      type: "callout",
      text: "Track every purchase for a month with a free app — most people find $200-$400 a month they didn't realize they were spending.",
    },

    { type: "heading", level: 3, text: "5. Look for Ways to Bring In More" },
    {
      type: "paragraph",
      text: "A temporary income bump accelerates everything. Selling things you don't use, freelance gigs, delivery apps, or asking about overtime can all help — and any extra should go straight at the loan's principal.",
    },
    {
      type: "callout",
      text: "An extra $200/month toward principal can save hundreds in interest and knock months off the term.",
    },

    { type: "heading", level: 3, text: "6. Plan to Finish Early if You Can" },
    {
      type: "paragraph",
      text: "Most Canadian personal loans allow penalty-free early payments. Even small extra amounts reduce total interest meaningfully — run a payoff calculator to see the effect, and if you're juggling multiple debts, put extra toward whichever has the highest rate first.",
    },
    {
      type: "callout",
      text: "A tax refund or work bonus applied straight to principal is one of the most effective ways to accelerate payoff.",
    },

    { type: "heading", level: 2, text: "A Few More Things to Keep in Mind" },
    {
      type: "list",
      items: [
        "Revisit your budget monthly, not just once",
        "Pay minimums everywhere, extra toward the highest-rate debt",
        "Avoid taking on new debt while this one's still outstanding",
        "Mark milestones — 25%, 50%, 75% paid off — it helps with motivation",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How much of my income should go toward loan payments?",
          answer:
            "Keep total debt payments, including the new loan, under roughly 40% of gross monthly income. Under the 50/30/20 framework, the loan payment falls into the 50% needs bucket.",
        },
        {
          question: "What's the best way to avoid missing a loan payment?",
          answer:
            "Automate it — set the withdrawal for 1-2 days after payday so funds are always there. Most lenders offer this free, and some even discount your rate for enrolling.",
        },
        {
          question: "Should I build an emergency fund while repaying a loan?",
          answer:
            "Yes — even a lean $500-$1,000 fund, built $25-$50 at a time, can keep an unexpected expense from turning into more borrowing.",
        },
        {
          question: "Can I pay off my personal loan early?",
          answer:
            "Most Canadian personal loans allow penalty-free prepayment. Extra payments, even modest ones, or a lump sum like a tax refund can meaningfully cut your total interest and shorten the term.",
        },
        {
          question: "What budgeting method works best after taking a loan?",
          answer:
            "50/30/20 is a solid starting framework. Combine it with paying minimums everywhere and directing extra cash at your highest-rate debt for the fastest, cheapest payoff.",
        },
      ],
    },
  ],
};

export default content;
