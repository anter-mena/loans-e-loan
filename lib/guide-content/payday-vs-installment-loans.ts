import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Payday loan or installment loan? Side by side on cost, risk, and repayment structure — and why one almost always wins.",
  blocks: [
    { type: "heading", level: 2, text: "Working Through the Comparison" },

    { type: "heading", level: 3, text: "1. How Each One Is Structured" },
    {
      type: "paragraph",
      text: "A payday loan ($100-$1,500) is due in full on your next payday, usually within 2-4 weeks. An installment loan ($300-$5,000+) spreads repayment across fixed monthly payments over 3-36 months. That structural difference is what drives everything else.",
    },
    {
      type: "callout",
      text: "Ask yourself: can I repay the entire amount in 2 weeks? If not, an installment loan is almost certainly the better fit.",
    },

    { type: "heading", level: 3, text: "2. The Real Cost Difference" },
    {
      type: "paragraph",
      text: "Payday loan fees look small on paper — $15-$25 per $100 — but annualize to 300-500% APR. Installment loans run 10-36% APR, dramatically cheaper. On $1,000 for a month: a payday loan costs $150-$250 in fees; an installment loan costs roughly $15-$30 in interest.",
    },
    {
      type: "callout",
      text: "Always convert flat fees to APR to compare fairly — $20 on a $100 two-week loan works out to 520% APR.",
    },

    { type: "heading", level: 3, text: "3. The Debt-Trap Risk" },
    {
      type: "paragraph",
      text: "Payday loans have a well-documented cycle problem — the full balance plus fees due at once means many borrowers can't repay and roll the loan into a new one. The average payday borrower takes out 8 loans a year. Installment loans, spread over months, are far easier to actually manage.",
    },
    {
      type: "callout",
      text: "Already stuck and can't repay? Contact the lender about an Extended Payment Plan — many are required to offer one.",
    },

    { type: "heading", level: 3, text: "4. Credit Reporting" },
    {
      type: "paragraph",
      text: "Most payday lenders don't report to the bureaus at all, so on-time payments do nothing for your credit. Many installment lenders do report, meaning consistent payments can actually build your score and open better rates down the road.",
    },
    {
      type: "callout",
      text: "Ask an installment lender directly whether they report to Equifax or TransUnion — pick one that does.",
    },

    { type: "heading", level: 3, text: "5. Amount and Flexibility" },
    {
      type: "paragraph",
      text: "Payday loans max out around $1,500 in most jurisdictions; installment loans can go to $5,000 or more. Need more than $500? Installment is typically your only real option, and it usually comes with a choice of terms too — 6, 12, 24, or 36 months.",
    },
    {
      type: "callout",
      text: "Pick the shortest term where the payment still fits your budget — shorter means less total interest.",
    },

    { type: "heading", level: 3, text: "6. Making the Call" },
    {
      type: "paragraph",
      text: "In nearly every situation, an installment loan is the cheaper, safer choice. The one scenario where a payday loan might make sense: a very small amount (under $200) for a few days, with certainty you can repay in full next payday. Even then, a credit card cash advance or borrowing from family is usually better.",
    },
    {
      type: "callout",
      text: "Check whether your credit union offers a payday alternative loan (PAL) before considering an actual payday loan.",
    },

    { type: "heading", level: 2, text: "Quick Reference" },
    {
      type: "list",
      items: [
        "Installment loans are almost always cheaper and safer",
        "Payday loan \"convenience\" comes at a 300-500% APR cost",
        "Installment loan payments can build credit; payday loans usually don't",
        "Regulation on payday lending keeps tightening across provinces",
        "Stuck in the payday cycle? A non-profit credit counsellor can help for free",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What's the difference between a payday loan and an installment loan?",
          answer:
            "A payday loan ($100-$1,500) is due in full on your next payday within 2-4 weeks. An installment loan ($300-$5,000+) spreads repayment over fixed monthly payments across 3-36 months, which is far easier to budget for.",
        },
        {
          question: "Why do payday loans have such high APRs?",
          answer:
            "Flat fees of $15-$25 per $100 sound small but annualize to 300-500% APR. Installment loans run 10-36% APR, making them dramatically cheaper for the same amount.",
        },
        {
          question: "Can installment loans help build my credit?",
          answer:
            "Many installment lenders report payments to Equifax and TransUnion, so consistent on-time payments can gradually improve your score — most payday lenders don't report at all.",
        },
        {
          question: "Is it ever okay to take a payday loan?",
          answer:
            "Rarely. The only reasonable case is a very small amount (under $200) for a few days when you're certain you can repay in full next payday — and even then, a credit union loan or borrowing from family is usually cheaper.",
        },
        {
          question: "What should I do if I'm stuck in a payday loan cycle?",
          answer:
            "Ask your lender about an Extended Payment Plan, reach out to a non-profit credit counsellor for free help, and consider an installment loan to consolidate the balance into a manageable schedule.",
        },
      ],
    },
  ],
};

export default content;
