import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Getting your paperwork and numbers ready before you apply for a Canadian personal loan — so you only have to do it once.",
  blocks: [
    { type: "heading", level: 2, text: "Getting Ready" },

    { type: "heading", level: 3, text: "1. Check Your Score First" },
    {
      type: "paragraph",
      text: "Pull your score from Equifax or TransUnion, or a free service, before submitting anything. Knowing where you stand sets realistic expectations for rate and helps you skip lenders whose minimums you won't clear.",
    },
    {
      type: "callout",
      text: "Checking your own score is a soft inquiry — it never affects your credit. Only a lender's hard inquiry does.",
    },

    { type: "heading", level: 3, text: "2. Have Your ID Ready" },
    {
      type: "paragraph",
      text: "A government photo ID — driver's licence, passport, provincial ID — covers most applications. Some lenders ask for a second form if automatic verification fails.",
    },

    { type: "heading", level: 3, text: "3. Gather Income Proof" },
    {
      type: "paragraph",
      text: "Lenders need to confirm you can afford the payment: recent pay stubs, a T4 or Notice of Assessment, or bank statements if you're self-employed or on benefits. Having these ready digitally speeds up approval noticeably.",
    },
    {
      type: "callout",
      text: "Self-employed? 2-3 months of bank statements plus your latest Notice of Assessment is usually the fastest route to approval.",
    },

    { type: "heading", level: 3, text: "4. Confirm Your Banking Details" },
    {
      type: "paragraph",
      text: "Most lenders disburse and collect by direct deposit, so you'll need an active chequing account in your name — have a void cheque or your transit, institution, and account numbers handy.",
    },

    { type: "heading", level: 3, text: "5. Know the Exact Amount You Need" },
    {
      type: "paragraph",
      text: "Work out the real number rather than rounding up — borrowing extra just adds interest and a bigger payment for no benefit. Run a few amounts and terms through a calculator against your budget first.",
    },

    { type: "heading", level: 3, text: "6. Compare Before You Commit" },
    {
      type: "paragraph",
      text: "Rates and terms vary meaningfully between lenders. Use pre-qualification tools that only run a soft check, so you're comparing real offers before any hard inquiry hits your file.",
    },
    {
      type: "callout",
      text: "Multiple pre-qualification checks in a short window are generally treated as rate shopping, with minimal score impact.",
    },

    { type: "heading", level: 2, text: "A Few More Pointers" },
    {
      type: "list",
      items: [
        "Check your score before applying so you know what to expect",
        "Keep ID, income proof, and banking details ready digitally",
        "Borrow the exact amount you need, not a rounded-up figure",
        "Use soft-check pre-qualification to compare offers first",
        "Read the full agreement, fees and prepayment terms included, before signing",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What documents do I need before applying for a personal loan?",
          answer:
            "A government photo ID, proof of income (pay stubs, a T4 or NOA, or bank statements if self-employed), and your banking details — a void cheque or your account numbers.",
        },
        {
          question: "Will checking my own credit score before applying hurt it?",
          answer:
            "No — checking your own score is a soft inquiry and never affects your credit. Only a lender's hard inquiry, triggered by a formal application, can cause a small, temporary dip.",
        },
        {
          question: "How much should I apply for?",
          answer:
            "The exact amount you need, not a rounded-up figure — extra borrowing just adds interest and payment size without benefit. Test a few amounts through a calculator first.",
        },
        {
          question: "Does comparing multiple lenders hurt my credit score?",
          answer:
            "Not if you use soft-check pre-qualification tools. Comparing several within a short window is treated as rate shopping with minimal score impact.",
        },
        {
          question: "What if I'm self-employed?",
          answer:
            "Have 2-3 months of bank statements plus your latest Notice of Assessment ready — that combination is usually the fastest path to approval since there are no pay stubs to verify income against.",
        },
      ],
    },
  ],
};

export default content;
