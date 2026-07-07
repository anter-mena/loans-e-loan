import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "What Canadian lenders actually check before approving a personal loan, and how to prepare a genuinely strong application.",
  blocks: [
    { type: "heading", level: 2, text: "The Core Criteria" },
    {
      type: "paragraph",
      text: "Requirements differ lender to lender, but nearly all of them evaluate the same four things: your identity, your income, your credit history, and your existing debt load. Knowing these ahead of time is what lets you prepare properly.",
    },
    {
      type: "paragraph",
      text: "Canadian lenders operate under federal and provincial consumer lending rules that require identity verification and a real assessment of your ability to repay — protections that work in your favour, not just paperwork.",
    },

    { type: "heading", level: 2, text: "Identity and Residency" },
    {
      type: "paragraph",
      text: "Identity verification is mandatory under anti-fraud and anti-money-laundering rules.",
    },
    {
      type: "list",
      items: [
        "18 or 19+ depending on province",
        "Canadian citizen or permanent resident",
        "Valid government photo ID",
        "Proof of current address",
        "A valid SIN for the credit check",
      ],
    },

    { type: "heading", level: 2, text: "Income" },
    {
      type: "paragraph",
      text: "Income verification is arguably the single most important piece — lenders need to know you can make the payments without strain.",
    },
    {
      type: "paragraph",
      text: "Most Canadian lenders set a minimum monthly income somewhere between $800 and $1,500. Accepted sources include employment wages, self-employment income (with a CRA NOA), EI, CPP, OAS, disability income, pensions, and sometimes support payments.",
    },
    {
      type: "list",
      items: [
        "Recent pay stubs, usually the last 2-4 periods",
        "CRA Notice of Assessment for self-employed applicants",
        "2-3 months of bank statements showing regular deposits",
        "Benefit award letters for government income",
        "An employment verification letter, if the lender asks for one",
      ],
    },

    { type: "heading", level: 2, text: "Credit Score" },
    {
      type: "paragraph",
      text: "Your score influences both approval and rate, though there's no single universal cutoff.",
    },
    {
      type: "paragraph",
      text: "Canadian scores run 300-900. Major banks generally want 650+; online and alternative lenders will often go down to 500-550, and some evaluate applications with no strict minimum at all.",
    },
    {
      type: "table",
      headers: ["Lender Type", "Typical Minimum Score", "Rate Range"],
      rows: [
        ["Major bank", "650-680", "6%–15% APR"],
        ["Credit union", "580-640", "8%–18% APR"],
        ["Online lender", "550-600", "12%–30% APR"],
        ["Alternative/subprime lender", "500-550", "25%–35% APR"],
      ],
    },

    { type: "heading", level: 2, text: "Debt-to-Income Ratio" },
    {
      type: "paragraph",
      text: "Your DTI is total monthly debt payments divided by gross monthly income.",
    },
    {
      type: "paragraph",
      text: "Most lenders want 40% or below, new loan included. Earning $3,000/month with $800 in existing debt puts you around 27% — add a $150 payment and you're at roughly 32%, still comfortably within range for most lenders.",
    },
    {
      type: "paragraph",
      text: "If your DTI runs too high, paying down existing debt, boosting income, or requesting a smaller loan can all bring it back in range.",
    },

    { type: "heading", level: 2, text: "Bank Account" },
    {
      type: "paragraph",
      text: "You'll need an active account, both for receiving funds and for automatic repayment.",
    },
    {
      type: "paragraph",
      text: "It should be in your name and open at least 1-3 months. Some lenders look at your recent activity — regular deposits, no frequent overdrafts — as part of the assessment.",
    },

    { type: "heading", level: 2, text: "What to Have Ready" },
    {
      type: "paragraph",
      text: "Assembling everything in advance saves real time.",
    },
    {
      type: "list",
      items: [
        "Government photo ID",
        "SIN",
        "Proof of current address",
        "Recent pay stubs or income documents",
        "2-3 months of bank statements",
        "A list of current debts and payments",
        "Your employer's contact info, if requested",
        "CRA Notice of Assessment, if self-employed",
      ],
    },
    {
      type: "callout",
      text: "Scan or photograph everything before you start the application — it can cut processing from days to hours.",
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the most important requirement for a personal loan?",
          answer:
            "Income verification — lenders need confidence you can make the payments. Most set a minimum monthly income between $800 and $1,500.",
        },
        {
          question: "Can I get a personal loan without a credit check?",
          answer:
            "Some online and alternative lenders evaluate applications with no strict minimum score, but most still run some form of credit inquiry to set your rate, so a fully check-free loan is uncommon.",
        },
        {
          question: "Do I need a SIN to apply?",
          answer:
            "Yes — a valid SIN is required for the credit check as part of identity verification.",
        },
        {
          question: "How long does the approval process take?",
          answer:
            "It varies, but having documents ready beforehand can shrink it from days to hours. Many online applications decide within minutes to a few business days.",
        },
        {
          question: "Can I apply if I recently changed jobs?",
          answer:
            "Yes, though be ready with extra documentation — some lenders want an employment verification letter, and recent pay stubs or bank statements showing regular deposits help even with a short tenure.",
        },
      ],
    },
  ],
};

export default content;
