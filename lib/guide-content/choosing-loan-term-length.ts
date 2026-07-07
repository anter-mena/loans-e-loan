import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Shorter term, less interest. Longer term, smaller payment. Here's how to actually pick the one that fits your situation.",
  blocks: [
    {
      type: "paragraph",
      text: "The term you choose shapes both your monthly payment and what the loan ultimately costs you. Go short and you'll pay more each month but less overall; go long and the reverse is true. There's no universal right answer — just the one that fits your numbers.",
    },

    { type: "heading", level: 2, text: "Working Through the Decision" },

    { type: "heading", level: 3, text: "1. Start With What You Can Actually Afford Monthly" },
    {
      type: "paragraph",
      text: "Before picking a term, get concrete about your monthly capacity — income, fixed expenses, savings targets. A reasonable ceiling: total debt payments at or under 36% of gross monthly income.",
    },
    {
      type: "callout",
      text: "Run a loan calculator with a few different terms side by side before deciding.",
    },

    { type: "heading", level: 3, text: "2. See the Trade-Off in Real Numbers" },
    {
      type: "paragraph",
      text: "Short terms (12-36 months) mean a bigger payment but noticeably less interest paid; long terms (48-84 months) ease the payment but cost more in total. A $10,000 loan at 10% runs about $1,074 in interest over 2 years versus $2,748 over 5.",
    },
    {
      type: "callout",
      text: "Look at the total repayment amount, not just the monthly figure.",
    },

    { type: "heading", level: 3, text: "3. Weigh It Against Your Broader Goals" },
    {
      type: "paragraph",
      text: "If getting debt-free fast and minimizing interest is the priority, take the shortest term you can manage. If you need breathing room for other goals — an emergency fund, investing — a longer term can be the more sensible trade despite the extra cost.",
    },
    {
      type: "callout",
      text: "Some borrowers deliberately pick a longer term for the lower required payment, then pay extra whenever they can.",
    },

    { type: "heading", level: 3, text: "4. Check Whether You Can Prepay Without a Penalty" },
    {
      type: "paragraph",
      text: "If your lender allows early payoff at no cost, you can take a longer term for flexibility now and pay it down faster later when your budget allows — getting the best of both approaches.",
    },
    {
      type: "callout",
      text: "Confirm there's no prepayment penalty before you sign anything.",
    },

    { type: "heading", level: 3, text: "5. Notice How Rates Shift With Term Length" },
    {
      type: "paragraph",
      text: "Shorter terms are lower-risk for the lender, so they often come with a better rate. Compare the APR at each term length — the difference can matter more than it looks.",
    },
    {
      type: "callout",
      text: "A 3-year loan at 8% can end up cheaper overall than a 5-year loan at 10%, even with a higher monthly payment.",
    },

    { type: "heading", level: 3, text: "6. Match the Term to What You're Financing" },
    {
      type: "paragraph",
      text: "Think about how long you'll actually benefit from the thing you're borrowing for. Debt consolidation tends to suit 3-5 years, a car repair maybe 1-2, and a home improvement project could justify 5-7.",
    },
    {
      type: "callout",
      text: "Avoid financing something for longer than it will realistically last — a 7-year loan on a car that's already 5 years old rarely makes sense.",
    },

    { type: "heading", level: 3, text: "7. Leave Room for Life to Change" },
    {
      type: "paragraph",
      text: "If your income or job situation feels uncertain over the next few years, a longer term with a lower required payment gives you more room to maneuver — you can always throw extra at it when things are going well.",
    },
    {
      type: "callout",
      text: "Pick a payment you could still handle with a 10-20% drop in income.",
    },

    { type: "heading", level: 3, text: "8. Land on a Decision" },
    {
      type: "paragraph",
      text: "Go with the shortest term where the payment is genuinely comfortable and still leaves room for savings and the unexpected. If a shorter term stretches you too thin, take the longer one — the interest savings aren't worth the financial stress.",
    },
    {
      type: "callout",
      text: "If a shorter term saves $1,500 in interest but leaves you $50/month for emergencies, the longer term is probably the smarter call.",
    },

    { type: "heading", level: 2, text: "A Few More Things to Keep in Mind" },
    {
      type: "list",
      items: [
        "There's no universal right term — it depends entirely on your situation",
        "Run the total-cost numbers across a few term lengths before deciding",
        "Don't drain your emergency fund just to afford a shorter term's payment",
        "Ask about autopay discounts — often around 0.25% off your rate",
        "Be honest with your budget before committing to any payment",
        "When two options are close, the shorter term usually wins on total cost",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What loan term should I choose?",
          answer:
            "It depends on your budget and goals more than any fixed rule — though total debt payments at or under 36% of gross monthly income is a reasonable ceiling. Take the shortest term you can comfortably manage; if that leaves too little breathing room, go longer.",
        },
        {
          question: "Does a shorter loan term really save me money?",
          answer:
            "Yes. A $10,000 loan at 10% costs roughly $1,074 in interest over 2 years compared to $2,748 over 5 — shorter terms mean a bigger payment but meaningfully less total interest.",
        },
        {
          question: "Can I choose a longer term and just pay it off early?",
          answer:
            "Often, if your lender permits prepayment without penalty. That lets you take a longer term for flexibility now and pay extra whenever your budget allows. Always confirm there's no penalty before signing.",
        },
        {
          question: "Do shorter terms come with lower interest rates too?",
          answer:
            "Frequently, yes — shorter terms are less risky for lenders, so the APR is often better. It's worth comparing rates across term lengths, since a shorter term at a lower rate can beat a longer term at a higher one even before factoring in the extra interest from a longer payoff.",
        },
        {
          question: "How should the loan term match what I'm borrowing for?",
          answer:
            "Match it to how long you'll benefit from the expense — 3-5 years for debt consolidation, 1-2 for a car repair, 5-7 for home improvements. Try not to finance something longer than it will realistically last.",
        },
      ],
    },
  ],
};

export default content;
