import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Real, practical ways to bring your Canadian personal loan rate down — negotiation, refinancing, and credit moves that actually move the needle.",
  blocks: [
    { type: "heading", level: 2, text: "Working the Rate Down" },

    { type: "heading", level: 3, text: "1. Understand What Sets the Number in the First Place" },
    {
      type: "paragraph",
      text: "Canadian personal loan rates typically run 6.99% to 34.99% APR, shaped by your credit score, income, debt load, loan amount, and term, with the Bank of Canada's overnight rate setting the broader baseline. Knowing which of these you can actually influence is the starting point.",
    },
    {
      type: "callout",
      text: "The Criminal Code caps rates at 35% APR — anything above that is illegal, and worth reporting to your provincial regulator.",
    },

    { type: "heading", level: 3, text: "2. Work on Your Credit Score First" },
    {
      type: "paragraph",
      text: "Nothing moves your rate more than your score. In Canada, 700+ typically unlocks the best pricing, while sub-600 means a noticeably higher rate. Quick wins: pay everything on time, get card balances under 30% of their limits, dispute report errors, and skip opening new accounts you don't need.",
    },
    {
      type: "callout",
      text: "Dropping a card from 80% utilization to 30% can lift your score 50-100 points within one or two billing cycles.",
    },

    { type: "heading", level: 3, text: "3. Actually Shop Around" },
    {
      type: "paragraph",
      text: "Don't take the first number you're quoted. Get offers from at least 3-5 lenders — your own bank, a credit union or two, and an online lender. Many will quote you with a soft check that leaves your score untouched, and Canadian scoring models treat multiple loan inquiries within a 14-day window as a single one, so it's safe to shop within that window.",
    },
    {
      type: "callout",
      text: "Online lenders often carry lower overhead than banks and can undercut them — compare total cost, not just the headline rate.",
    },

    { type: "heading", level: 3, text: "4. Ask Your Current Lender for a Better Deal" },
    {
      type: "paragraph",
      text: "If you already have a loan, just call and ask. Mention competing offers, your clean payment history, and any credit improvement since you signed. Many lenders have a retention team with room to negotiate rather than lose you as a customer — and the FCAC confirms negotiating your terms is entirely within your rights.",
    },
    {
      type: "callout",
      text: "Call on a weekday morning when wait times are shorter, with your account number and any competing offers on hand.",
    },

    { type: "heading", level: 3, text: "5. Look at Refinancing" },
    {
      type: "paragraph",
      text: "If your credit has improved since you took out the original loan, refinancing can lock in a better rate. Weigh the savings against any fees, and check whether your current loan allows penalty-free prepayment — many Canadian online lenders do. Generally, it's worth doing if you can cut your rate by 2-3 points or more.",
    },
    {
      type: "callout",
      text: "Check your existing agreement for prepayment penalties before refinancing — many lenders don't charge one.",
    },

    { type: "heading", level: 3, text: "6. Bring in a Co-Signer or Collateral" },
    {
      type: "paragraph",
      text: "A co-signer with strong credit can shave 3-10 points off your rate. Offering collateral — a vehicle, a GIC, some other asset — turns the loan secured, which almost always prices lower than unsecured. Just be clear-eyed about the risk: default, and the co-signer is on the hook, or the collateral gets seized.",
    },
    {
      type: "callout",
      text: "A GIC-backed secured loan can run 5-15 points cheaper than an unsecured loan on the same credit profile.",
    },

    { type: "heading", level: 2, text: "Quick Reference" },
    {
      type: "list",
      items: [
        "Pay down card balances before applying — lower utilization means a better rate",
        "Apply when your score is at its highest, not right after a rough patch",
        "Always compare total cost, not just the monthly payment",
        "Enroll in autopay if the lender offers a rate discount for it",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What's the maximum interest rate a lender can legally charge in Canada?",
          answer:
            "35% APR under the Criminal Code — anything above that is illegal, and you can report it to your provincial consumer protection agency.",
        },
        {
          question: "Will shopping around for rates hurt my credit score?",
          answer:
            "Not if you're comparing through soft-check platforms or quotes. Even applying directly to several lenders is relatively safe, since Canadian scoring models treat multiple loan inquiries within a 14-day window as one.",
        },
        {
          question: "How much can a co-signer lower my rate?",
          answer:
            "Roughly 3-10 percentage points with a strong co-signer. Offering collateral like a GIC can push it further — sometimes 5-15 points below an unsecured rate on the same profile.",
        },
        {
          question: "When does it make sense to refinance my loan?",
          answer:
            "When your credit has improved since your original loan and you can cut your rate by at least 2-3 points. Check for prepayment penalties first — many Canadian online lenders don't charge one.",
        },
        {
          question: "Can I negotiate my rate with my current lender?",
          answer:
            "Yes — it's your right as a borrower. Call, mention competing offers and your payment history, and ask directly. Many lenders have a retention team authorized to improve your terms.",
        },
      ],
    },
  ],
};

export default content;
