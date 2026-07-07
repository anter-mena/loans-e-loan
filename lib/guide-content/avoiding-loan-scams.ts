import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Loan scams targeting Canadian borrowers follow a handful of predictable patterns — here's how to recognize them and what to do if you've been targeted.",
  blocks: [
    { type: "heading", level: 2, text: "Warning Signs to Watch For" },

    { type: "heading", level: 3, text: "1. \"Guaranteed Approval\" Advertising" },
    {
      type: "paragraph",
      text: "A real lender reviews your credit and income before making any promises — there's no way around that step. If an ad promises approval regardless of your history before you've even applied, treat it as a red flag rather than good news.",
    },
    {
      type: "callout",
      text: "A legitimate lender can pre-qualify you with a soft credit check, but the final yes always comes after verification.",
    },

    { type: "heading", level: 3, text: "2. Any Fee Requested Before Funds Arrive" },
    {
      type: "paragraph",
      text: "If someone asks you to wire money, load a gift card, or send crypto for an \"insurance,\" \"processing,\" or \"collateral\" fee before releasing your loan, walk away. Real Canadian lenders take their fees out of the loan itself — they never ask you to pay in first.",
    },
    {
      type: "callout",
      text: "Gift cards and cryptocurrency are the two payment methods no legitimate lender will ever ask you to use.",
    },

    { type: "heading", level: 3, text: "3. No Provincial License" },
    {
      type: "paragraph",
      text: "Every lender doing business in Canada needs to be licensed in the provinces where they operate. Before you apply anywhere, look them up with your provincial regulator — Consumer Protection Ontario, Consumer Protection BC, or Quebec's Office de la protection du consommateur, depending on where you live.",
    },

    { type: "heading", level: 3, text: "4. Pressure to Sign Without Reading the Terms" },
    {
      type: "paragraph",
      text: "Canadian lending law requires full written disclosure — the APR, total borrowing cost, and repayment schedule — before you sign anything. A lender who rushes you past that, or won't produce it in writing at all, isn't operating within the rules.",
    },

    { type: "heading", level: 3, text: "5. Requests for Sensitive Information" },
    {
      type: "paragraph",
      text: "Be wary of anyone asking for your online banking password, a signed blank cheque, or your SIN without a clear explanation of why. A legitimate lender can confirm your income and set up repayment without ever needing your actual banking login.",
    },

    { type: "heading", level: 3, text: "6. If You Think You've Already Been Targeted" },
    {
      type: "paragraph",
      text: "Stop sending money or documents immediately. Report it to the Canadian Anti-Fraud Centre and your provincial consumer protection office, and contact your bank right away if you've shared any account details. If money has already changed hands, file a police report as well.",
    },

    { type: "heading", level: 2, text: "Quick Reference" },
    {
      type: "list",
      items: [
        "A real lender never guarantees approval sight unseen",
        "No legitimate loan requires an upfront fee, in any form",
        "Confirm provincial licensing before you apply anywhere",
        "Insist on written terms — APR and total cost included — before signing",
        "Report anything suspicious to the Canadian Anti-Fraud Centre",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Is it a red flag if a lender guarantees approval?",
          answer:
            "Yes. Legitimate lenders always review your credit and income first, so a promise of approval before that review is one of the clearest scam signals out there.",
        },
        {
          question: "Should I ever pay a fee to receive a loan?",
          answer:
            "No — not by e-transfer, gift card, or crypto. Real Canadian lenders subtract any applicable fees from the loan itself rather than asking you to send money before you're funded.",
        },
        {
          question: "How can I verify a lender is legitimate in Canada?",
          answer:
            "Check with your provincial consumer protection office — Ontario, BC, and Quebec each maintain their own registries — to confirm the lender is licensed to operate where you live before you apply.",
        },
        {
          question: "What information should I never give a lender?",
          answer:
            "Your online banking password, a blank signed cheque, or your SIN without a clear reason. A legitimate lender can verify your income and arrange payments without needing your actual login credentials.",
        },
        {
          question: "What should I do if I think I've been scammed?",
          answer:
            "Stop sending money or documents right away, report it to the Canadian Anti-Fraud Centre and your provincial regulator, and contact your bank if you've shared account details. File a police report too if you've already lost money.",
        },
      ],
    },
  ],
};

export default content;
