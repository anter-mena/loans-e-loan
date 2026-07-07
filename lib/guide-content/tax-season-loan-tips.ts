import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Smart moves for managing a loan during Canadian tax season — refunds, CRA payment arrangements, and avoiding a tax debt spiral.",
  blocks: [
    { type: "heading", level: 2, text: "Working Through Tax Season" },

    { type: "heading", level: 3, text: "1. Is Your Loan Interest Actually Deductible?" },
    {
      type: "paragraph",
      text: "In most cases, no — personal loan interest isn't tax-deductible in Canada unless the funds went toward an investment or business purpose. If you used the loan to invest in something income-producing, the interest may qualify under CRA rules. Worth a conversation with a tax professional for your specific case.",
    },
    {
      type: "callout",
      text: "Keep records of exactly how you used the loan proceeds — the CRA may ask for proof if you're claiming a deduction.",
    },

    { type: "heading", level: 3, text: "2. Put Your Refund to Work" },
    {
      type: "paragraph",
      text: "The average Canadian refund runs around $2,000. Send it straight to your highest-interest debt — even a partial lump sum meaningfully cuts the total interest you'll pay.",
    },
    {
      type: "callout",
      text: "A $2,000 lump payment on a $5,000 loan at 25% APR can save over $500 in interest.",
    },

    { type: "heading", level: 3, text: "3. If You Owe the CRA More Than You Can Pay" },
    {
      type: "paragraph",
      text: "A CRA payment arrangement (interest at the prescribed rate), a personal loan (potentially cheaper than CRA interest), or an RRSP refund applied to the bill are all options. The CRA compounds interest daily on unpaid balances, so moving fast matters.",
    },
    {
      type: "callout",
      text: "The CRA's prescribed rate changes quarterly — compare it against personal loan rates before deciding how to handle the bill.",
    },

    { type: "heading", level: 3, text: "4. The RRSP Contribution Play" },
    {
      type: "paragraph",
      text: "An RRSP contribution lowers your taxable income and can generate a refund — the deadline is 60 days after year-end. Some people use a short-term loan to make the contribution, then repay it once the refund lands.",
    },
    {
      type: "callout",
      text: "This only works if you repay quickly and the tax savings genuinely exceed what the loan costs in interest.",
    },

    { type: "heading", level: 2, text: "A Few More Things to Keep in Mind" },
    {
      type: "list",
      items: [
        "Loan interest is only deductible if the funds went to investment or business use",
        "Send tax refunds to your highest-interest debt first",
        "Compare CRA's prescribed rate to personal loan rates before borrowing to cover a bill",
        "Keep records of how every borrowed dollar was actually used",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Is interest on my personal loan tax-deductible?",
          answer:
            "Generally no, unless the funds were used for investment or business purposes — in that case it may qualify under CRA rules. Consult a tax professional and keep records of how the funds were used.",
        },
        {
          question: "What should I do with my tax refund if I have loan debt?",
          answer:
            "Send it to your highest-interest debt. The average refund is around $2,000, and even a partial lump sum toward principal meaningfully cuts your total interest.",
        },
        {
          question: "What if I can't afford my CRA tax bill?",
          answer:
            "A CRA payment arrangement, a personal loan if it's cheaper than the CRA's prescribed rate, or an RRSP refund applied to the bill are all worth considering. Compare the CRA's rate, which changes quarterly, against personal loan rates first.",
        },
        {
          question: "Should I take out a loan to make an RRSP contribution?",
          answer:
            "Only if you can repay it quickly and the resulting tax savings beat the loan's interest cost. Some people use a short-term loan to make the contribution before the 60-day deadline, then repay it with the refund it generates.",
        },
      ],
    },
  ],
};

export default content;
