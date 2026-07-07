import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Credit utilization quietly drives a big chunk of your score. Here's what it is, how it's measured, and the fastest ways to bring it down.",
  blocks: [
    { type: "heading", level: 2, text: "Getting Utilization Under Control" },

    { type: "heading", level: 3, text: "1. What This Number Actually Measures" },
    {
      type: "paragraph",
      text: "Utilization is simply how much of your available revolving credit — cards and lines of credit — you're currently carrying as a balance. A $1,500 balance on a $5,000-limit card puts that card's utilization at 30%.",
    },
    {
      type: "callout",
      text: "It's calculated per card and across everything combined, so one maxed-out card drags down your overall number even if your others sit near zero.",
    },

    { type: "heading", level: 3, text: "2. Why Lenders Care So Much" },
    {
      type: "paragraph",
      text: "After payment history, utilization is the single biggest factor in your credit score. A high number tells lenders you're leaning heavily on credit, which reads as elevated risk — and that shapes both your score and how a personal loan lender evaluates you.",
    },

    { type: "heading", level: 3, text: "3. What Counts as a Healthy Ratio" },
    {
      type: "paragraph",
      text: "Canadian scoring models generally reward staying under 30% of your total available credit. If you're chasing the best possible rates, aim for under 10%. Anything near or above 90% is a genuine red flag that can drag your score down hard.",
    },
    {
      type: "callout",
      text: "Your utilization resets every time a statement balance gets reported — paying down a card a few days before that date, not just the due date, can meaningfully move the number.",
    },

    { type: "heading", level: 3, text: "4. The Effect on a Personal Loan Application" },
    {
      type: "paragraph",
      text: "A lender reviewing your loan application looks at both your credit report and your existing revolving balances. High utilization can push your score into a worse rate tier — or affect approval outright — even when your income would otherwise easily cover the new payment.",
    },

    { type: "heading", level: 3, text: "5. How to Actually Bring It Down" },
    {
      type: "paragraph",
      text: "Pay down balances before your statement closes rather than waiting for the due date, ask your issuer for a limit increase without adding new spending, spread balances across cards instead of concentrating on one, and think twice before closing an old card — doing so shrinks your total available credit and can push your ratio up.",
    },
    {
      type: "callout",
      text: "Splitting one big monthly payment into two smaller ones can keep your reported balance lower throughout the month.",
    },

    { type: "heading", level: 2, text: "Quick Reference" },
    {
      type: "list",
      items: [
        "Check both per-card and total utilization — both matter to your score",
        "Under 30% is the general target; under 10% if you want the best rates",
        "Pay down balances before your statement date, not just the due date",
        "Keep old, unused cards open rather than closing them",
        "Ask for a limit increase if your income and history support it",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is a good credit utilization ratio?",
          answer:
            "Under 30% of your total available credit is the general benchmark, with under 10% ideal if you're chasing the best rates. Anything near or above 90% is treated as a significant red flag.",
        },
        {
          question: "How is credit utilization calculated?",
          answer:
            "Balance divided by limit, both per card and across all your revolving accounts together — which is why a single maxed-out card can hurt you even if the rest sit at zero.",
        },
        {
          question: "Does paying my card off by the due date lower my utilization?",
          answer:
            "Not necessarily. What gets reported to the bureau is your statement balance, not whatever it is on the due date. Paying down the balance a few days before the statement closes has a bigger effect.",
        },
        {
          question: "Should I close old credit cards to improve my score?",
          answer:
            "Generally no — closing a card shrinks your total available credit, which raises your overall ratio even if your spending doesn't change. Keeping old, unused cards open is usually the better move.",
        },
        {
          question: "How does credit utilization affect my personal loan application?",
          answer:
            "Lenders weigh your existing revolving debt alongside your credit report. High utilization can bump you into a worse rate tier, or affect approval entirely, even if your income comfortably supports the new payment.",
        },
      ],
    },
  ],
};

export default content;
