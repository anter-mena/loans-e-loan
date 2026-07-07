import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "What actually determines your monthly loan payment, and how to use a calculator to plan a borrowing strategy that fits your budget.",
  blocks: [
    { type: "heading", level: 2, text: "What's in Your Monthly Payment" },
    {
      type: "paragraph",
      text: "Your monthly payment is the fixed amount you send to the lender until the loan is cleared — a blend of principal and interest, spread evenly across the term.",
    },
    {
      type: "paragraph",
      text: "Three things drive it: the amount borrowed, the rate, and the term. Move any one and the payment shifts. Canadian personal loans keep that payment flat for the entire term, which is what makes them easy to budget around.",
    },

    { type: "heading", level: 2, text: "The Formula Behind It" },
    {
      type: "paragraph",
      text: "The standard calculation: M = P × [r(1+r)^n] / [(1+r)^n – 1].",
    },
    {
      type: "paragraph",
      text: "Here, M is the monthly payment, P the principal, r the monthly rate (annual ÷ 12), and n the total number of payments. A $5,000 loan at 12% APR over 24 months works out to roughly $235 a month and about $640 in total interest.",
    },

    { type: "heading", level: 2, text: "How Each Variable Moves Your Payment" },
    {
      type: "paragraph",
      text: "Seeing how these interact helps you plan smarter.",
    },
    { type: "heading", level: 3, text: "Loan Amount" },
    {
      type: "paragraph",
      text: "Payments scale roughly proportionally — double the loan, and the payment nearly doubles too.",
    },
    { type: "heading", level: 3, text: "Interest Rate" },
    {
      type: "paragraph",
      text: "A higher rate raises the payment, though less dramatically than a change in amount. A 5-point rate bump on $10,000 typically adds $20-30 a month, depending on the term.",
    },
    { type: "heading", level: 3, text: "Loan Term" },
    {
      type: "paragraph",
      text: "Stretch the term and the payment shrinks, but total interest grows. Shorten it, and the reverse happens.",
    },
    {
      type: "table",
      headers: ["Variable Changed", "Effect on Monthly Payment", "Effect on Total Cost"],
      rows: [
        ["Higher loan amount", "Payment increases", "Total cost increases"],
        ["Higher interest rate", "Payment increases", "Total cost increases"],
        ["Longer loan term", "Payment decreases", "Total cost increases"],
        ["Shorter loan term", "Payment increases", "Total cost decreases"],
      ],
    },

    { type: "heading", level: 2, text: "Using It to Check Affordability" },
    {
      type: "paragraph",
      text: "Before you apply, run the numbers to see if the payment actually fits. Canadian lenders generally look for a total debt service ratio under 40% — all your combined debt payments below 40% of gross monthly income.",
    },
    {
      type: "paragraph",
      text: "If the payment comes out too high, try a smaller amount, a slightly longer term, or improving your credit before applying to unlock a lower rate.",
    },
    {
      type: "callout",
      text: "Keep total monthly debt payments, this loan included, under 40% of gross income — that leaves room for savings and the unexpected.",
    },

    { type: "heading", level: 2, text: "Common Calculator Mistakes" },
    {
      type: "paragraph",
      text: "A few errors throw off the projection more than people realize:",
    },
    {
      type: "list",
      negative: true,
      items: [
        "Using the advertised rate instead of your actual quoted rate",
        "Forgetting origination fees reduce what you actually receive",
        "Comparing monthly payments alone without the total cost",
        "Only running one scenario instead of a few term lengths",
        "Assuming the number includes insurance or optional add-ons",
      ],
    },

    { type: "heading", level: 2, text: "Getting the Most Out of the Calculator" },
    {
      type: "list",
      items: [
        "Run the numbers before you even contact a lender",
        "Test at least 3 different term lengths",
        "Include every monthly expense in your affordability check, not just the loan",
        "Use what you find as leverage when comparing offers",
        "Recalculate if your finances change before you actually apply",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How do I calculate my monthly loan payment?",
          answer:
            "M = P × [r(1+r)^n] / [(1+r)^n – 1], where M is the payment, P the principal, r the monthly rate, and n the number of payments. A $5,000 loan at 12% APR over 24 months comes to roughly $235/month.",
        },
        {
          question: "What happens if I pay more than my monthly payment?",
          answer:
            "Extra payments generally cut your principal faster, shortening the payoff and reducing total interest — just confirm with your lender there's no prepayment penalty first.",
        },
        {
          question: "Is my monthly payment the only cost of a loan?",
          answer:
            "Not always. Origination fees reduce what you actually receive, and a calculator may not include insurance or optional add-ons. Look at the full cost breakdown, not just the monthly figure.",
        },
        {
          question: "Can my monthly payment change on a fixed-rate loan?",
          answer:
            "No — Canadian personal loans hold the payment steady for the whole term. It only changes if you refinance, make a lump-sum payment that alters the schedule, or arrange a modification.",
        },
        {
          question: "What DTI ratio should I aim for when calculating loan payments in Canada?",
          answer:
            "Under 40% total debt service — all your monthly debt payments combined, including the new loan, should stay below 40% of gross monthly income.",
        },
      ],
    },
  ],
};

export default content;
