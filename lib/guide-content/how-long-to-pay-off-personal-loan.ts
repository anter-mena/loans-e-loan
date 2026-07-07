import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "What actually sets your payoff timeline, and concrete ways to shorten it and pay less interest along the way.",
  blocks: [
    { type: "heading", level: 2, text: "The Typical Timeline" },
    {
      type: "paragraph",
      text: "Most Canadian personal loans run 12 to 60 months. The exact payoff date is locked in the moment you accept the loan, based on the term you chose.",
    },
    {
      type: "paragraph",
      text: "Stick to the schedule and you're done at the end of the term — no more, no less. Extra payments can pull that date forward; deferrals or hardship arrangements can push it back.",
    },
    {
      type: "paragraph",
      text: "24, 36, and 60 months are the terms most people land on. Which one fits you depends on the loan size, your monthly budget, and how much total interest you're willing to accept.",
    },

    { type: "heading", level: 2, text: "What Actually Moves the Timeline" },
    {
      type: "paragraph",
      text: "A handful of variables determine how fast you clear the balance:",
    },
    {
      type: "list",
      items: [
        "Loan amount: a bigger balance takes longer at the same payment",
        "Interest rate: higher rates mean more of each payment goes to interest rather than principal",
        "Payment size: bigger payments finish faster; minimums stretch things out",
        "Extra payments: anything applied directly to principal shortens the term",
        "Payment frequency: biweekly payments quietly add up to one extra full payment a year",
      ],
    },

    { type: "heading", level: 2, text: "Ways to Finish Faster" },
    {
      type: "list",
      items: [
        "Switch to biweekly half-payments — you'll sneak in an extra payment annually without noticing",
        "Round payments up — turn $323 into $350 or $400",
        "Send windfalls (tax refunds, bonuses) straight to principal",
        "Refinance to a lower rate but keep your payment the same, so more goes to principal",
        "Pick a target payoff date and work backward to the extra monthly amount it takes",
      ],
    },
    { type: "heading", level: 3, text: "What the Extra Payment Actually Buys You" },
    {
      type: "paragraph",
      text: "On a $10,000 loan at 10% APR over 36 months, adding $100 a month could cut the term to roughly 24 months and save around $550 in interest.",
    },

    { type: "heading", level: 2, text: "Payoff or Invest?" },
    {
      type: "paragraph",
      text: "Whether extra cash is better spent paying down the loan or invested comes down to comparing your loan's rate against your realistic after-tax investment return.",
    },
    {
      type: "paragraph",
      text: "As a rule of thumb: if your loan rate beats what you'd reasonably earn investing, paying it down wins. If your rate is low and your investments could outperform it, investing may make more sense.",
    },
    {
      type: "paragraph",
      text: "That said, it's not purely a math problem — the guaranteed \"return\" of paying off debt, and the peace of mind of being done with it, both count for something too.",
    },

    { type: "heading", level: 2, text: "After the Final Payment" },
    {
      type: "paragraph",
      text: "Once you make your last payment, the account closes and gets reported to the bureaus as paid in full — generally a positive mark on your file.",
    },
    {
      type: "paragraph",
      text: "In Canada, that paid account stays on your Equifax and TransUnion report for up to 6 years, adding to your credit history length and payment record the whole time.",
    },
    {
      type: "paragraph",
      text: "Ask your lender for a payoff confirmation letter once it's done — worth keeping for your own records.",
    },

    {
      type: "faq",
      items: [
        {
          question: "Can I pay off a personal loan early?",
          answer:
            "Usually, yes. Extra payments toward principal, windfalls like a tax refund, or refinancing to a lower rate while keeping the same payment can all speed things up. Check your agreement for any prepayment terms first.",
        },
        {
          question: "How much can I save by paying off my loan early?",
          answer:
            "It depends on the loan and how much extra you pay — on a $10,000 loan at 10% APR over 36 months, an extra $100 a month could cut the term to about 24 months and save roughly $550 in interest.",
        },
        {
          question: "Does paying off a loan early hurt my credit?",
          answer:
            "No — your lender reports the account as paid in full, which is generally a positive mark. It stays on your Equifax and TransUnion report for up to 6 years, still contributing to your credit history.",
        },
        {
          question: "What is the fastest way to pay off a personal loan?",
          answer:
            "Stack a few tactics: switch to biweekly half-payments, round up your monthly amount, send any windfalls straight to principal, and consider refinancing to a lower rate while keeping your payment the same.",
        },
      ],
    },
  ],
};

export default content;
