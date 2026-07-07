import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Cosigning a loan in Canada is a bigger commitment than most people realize — here's what you're actually agreeing to before you sign.",
  blocks: [
    { type: "heading", level: 2, text: "Understanding the Commitment" },

    { type: "heading", level: 3, text: "1. What You're Actually Signing Up For" },
    {
      type: "paragraph",
      text: "Cosigning isn't a character reference — it's a legal promise to repay the entire loan if the primary borrower doesn't. The debt shows up on your credit report exactly as if you'd taken it out yourself, and it counts against your own future borrowing capacity.",
    },
    {
      type: "callout",
      text: "A cosigner isn't the same as a co-applicant — you typically get none of the loan funds or the item it bought, only the obligation to repay it.",
    },

    { type: "heading", level: 3, text: "2. Why a Lender Wants One" },
    {
      type: "paragraph",
      text: "Lenders ask for a cosigner when the applicant's credit history is thin, income is modest, or the score sits below their cutoff. A cosigner with stronger credit lowers the lender's risk and can unlock a better rate for the borrower.",
    },

    { type: "heading", level: 3, text: "3. The Risk You're Genuinely Taking On" },
    {
      type: "paragraph",
      text: "Miss a payment and it lands on your credit report too — sometimes without any notice to you. A full default makes you responsible for the entire remaining balance, and collections can come after you directly, not just the original borrower.",
    },
    {
      type: "callout",
      text: "Ask upfront whether the lender will notify you if a payment is missed — many won't automatically, leaving you to find out much later.",
    },

    { type: "heading", level: 3, text: "4. The Effect on Your Own Finances" },
    {
      type: "paragraph",
      text: "The entire loan balance and payment count toward your own debt-to-income ratio, even though someone else is using the money. That can make it harder for you to qualify for your own mortgage, auto loan, or line of credit while the cosigned loan is still open.",
    },

    { type: "heading", level: 3, text: "5. Getting Off the Loan Later" },
    {
      type: "paragraph",
      text: "Some lenders will release a cosigner once the borrower has a track record of on-time payments and can qualify solo. It's not standard across the industry — get it in writing before you sign whether a release option exists and what it takes to qualify.",
    },

    { type: "heading", level: 3, text: "6. What to Consider Instead" },
    {
      type: "paragraph",
      text: "Before agreeing to cosign, weigh whether a smaller loan, a secured loan against the borrower's own asset, or simply helping them build credit through a secured card might lower the risk for both of you.",
    },

    { type: "heading", level: 2, text: "A Few Practical Safeguards" },
    {
      type: "list",
      items: [
        "Only cosign an amount you could cover yourself if it came to that",
        "Set up payment alerts so a missed payment doesn't blindside you",
        "Get any cosigner-release terms in writing before signing",
        "Hold onto your own copy of the loan agreement",
        "Factor the cosigned loan into your own borrowing plans while it's outstanding",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What am I responsible for if I cosign a loan?",
          answer:
            "The full loan, if the primary borrower stops paying. It appears on your own credit report as if it were your debt, and counts against your own debt-to-income ratio going forward.",
        },
        {
          question: "Will cosigning affect my ability to get my own loan?",
          answer:
            "Yes — the balance and payment count against your debt-to-income ratio even though you're not using the funds, which can make qualifying for your own mortgage or auto loan harder while the cosigned loan remains open.",
        },
        {
          question: "Can I be removed as a cosigner later?",
          answer:
            "Some lenders allow a release once the borrower has a solid on-time payment history and can qualify independently — but it's not universal, so confirm in writing before signing whether it's an option.",
        },
        {
          question: "What happens if the primary borrower misses a payment?",
          answer:
            "It shows up on your credit report too, sometimes without any notice. A full default makes you responsible for the remaining balance, and the lender can pursue you directly for it.",
        },
        {
          question: "Are there alternatives to cosigning?",
          answer:
            "Consider a smaller loan amount, a secured loan against the borrower's own collateral, or helping them build credit with a secured card first — any of which can lower the risk you're both taking on.",
        },
      ],
    },
  ],
};

export default content;
