import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A collections account isn't permanent damage. Here's how to dispute, negotiate, and rebuild your credit standing in Canada after one lands on your file.",
  blocks: [
    { type: "heading", level: 2, text: "Recovering, Step by Step" },

    { type: "heading", level: 3, text: "Step 1: Understand the Actual Damage" },
    {
      type: "paragraph",
      text: "A collections account can knock 100-200 points off a Canadian credit score and sticks around for 6 years from the last activity date (timing varies slightly by province). Both bureaus report it, but the sting fades meaningfully as it ages — a recent collection hurts far more than an old one.",
    },
    {
      type: "callout",
      text: "The score impact drops significantly after about 2 years, even while the account is still visible on your report.",
    },

    { type: "heading", level: 3, text: "Step 2: Confirm the Debt Is Actually Valid" },
    {
      type: "paragraph",
      text: "Before paying anything, request written validation from the collection agency — Canadian consumer protection law requires them to prove it's yours and the amount is correct. Check both bureau reports for wrong amounts, unfamiliar accounts, or debts past the collection window.",
    },
    {
      type: "callout",
      text: "Each province sets a limitation period (typically 2-6 years) after which a creditor can't sue to collect, even if the debt still shows on your report.",
    },

    { type: "heading", level: 3, text: "Step 3: Negotiate Rather Than Pay in Full" },
    {
      type: "paragraph",
      text: "Agencies routinely accept less than the full balance. A \"pay for delete\" arrangement — where the account is removed once you pay — is worth proposing. Get anything agreed in writing before sending money, and if you can't pay it all, a good-faith payment plan is still worth offering.",
    },
    {
      type: "callout",
      text: "Agencies typically buy debt for 10-20 cents on the dollar, so there's real room to negotiate — starting around 30-40% of the balance is reasonable.",
    },

    { type: "heading", level: 3, text: "Step 4: Build Positive History at the Same Time" },
    {
      type: "paragraph",
      text: "Don't wait until the collection is resolved to start rebuilding. A secured card with a small deposit ($300-$500), used for regular purchases and paid off monthly, works well. A credit-builder loan through a credit union is another option.",
    },
    {
      type: "callout",
      text: "Aim for 2-3 active accounts reporting positively — a mix of revolving and installment credit helps your score too.",
    },

    { type: "heading", level: 3, text: "Step 5: Keep an Eye on Your Reports" },
    {
      type: "paragraph",
      text: "Check both bureaus monthly through a free tracker to confirm paid collections update correctly and watch your score move. Set up alerts for anything new.",
    },
    {
      type: "callout",
      text: "Updates can take 30-60 days to appear after payment — follow up if nothing's changed after two months.",
    },

    { type: "heading", level: 3, text: "Step 6: Give It Time" },
    {
      type: "paragraph",
      text: "This isn't an overnight fix. Most people see real improvement within 12-24 months of consistent good habits — on-time payments, low utilization, and going easy on new credit applications.",
    },
    {
      type: "callout",
      text: "After roughly 2 years of clean history, many lenders will consider you for standard-rate products despite an older collection still on file.",
    },

    { type: "heading", level: 2, text: "A Few More Things to Keep in Mind" },
    {
      type: "list",
      items: [
        "Don't ignore collection notices — they only get worse with time",
        "Get any settlement in writing before you pay",
        "Dispute inaccurate information as soon as you spot it",
        "A non-profit credit counsellor can offer free guidance if you want a second opinion",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How much can a collections account lower my credit score?",
          answer:
            "Typically 100-200 points in Canada, with the impact fading substantially after about 2 years even while it remains visible on your report.",
        },
        {
          question: "Should I pay off a collections account in full or negotiate?",
          answer:
            "Negotiate first — agencies often buy debt for 10-20 cents on the dollar, so there's usually room. Try proposing a pay-for-delete arrangement starting around 30-40% of the balance, and get it in writing before paying.",
        },
        {
          question: "How long does a collections account stay on my credit report?",
          answer:
            "Generally 6 years from the last activity date, though this can vary slightly by province, and both Equifax and TransUnion report it.",
        },
        {
          question: "How long will it take to see my score improve after paying off a collection?",
          answer:
            "Bureau updates usually appear within 30-60 days of payment, with most people seeing a meaningful overall score improvement within 12-24 months of consistent good credit behaviour afterward.",
        },
        {
          question: "What is a 'pay for delete' agreement?",
          answer:
            "It's an arrangement where the collection agency agrees to remove the account from your report once you pay an agreed amount. Always get it in writing first — a verbal promise isn't enforceable.",
        },
      ],
    },
  ],
};

export default content;
