import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "No pay stubs, no problem — here's what Canadian lenders actually want to see from self-employed borrowers, and how to present your income well.",
  blocks: [
    { type: "heading", level: 2, text: "Yes, Self-Employed Canadians Can Qualify" },
    {
      type: "paragraph",
      text: "Freelancers, contractors, gig workers, and small business owners all qualify for personal loans regularly. What changes is how you prove income, since there's no employer issuing a pay stub.",
    },
    {
      type: "paragraph",
      text: "Self-employment has grown substantially in Canada — over 2.7 million people now fall into that category — and lenders have adapted accordingly, accepting CRA Notices of Assessment and business bank statements in place of traditional employment records.",
    },
    {
      type: "paragraph",
      text: "The real hurdle is demonstrating consistency. A lender wants to see that your income, even if it fluctuates, is reliable enough to cover the payment.",
    },

    { type: "heading", level: 2, text: "What to Have Ready" },
    {
      type: "paragraph",
      text: "Having your documentation organized before you apply speeds things up considerably and improves your odds.",
    },
    {
      type: "list",
      items: [
        "Notice of Assessment (NOA) from CRA for the past 1-2 years",
        "Personal and/or business tax returns (T1 General)",
        "Business bank statements from the last 3-6 months",
        "Invoices or contracts showing ongoing client relationships",
        "GST/HST registration number, if applicable",
        "Government-issued photo ID",
        "Proof of address",
      ],
    },

    { type: "heading", level: 2, text: "How Lenders Actually Assess Your Income" },
    {
      type: "paragraph",
      text: "Most lenders average your net self-employment earnings over the past one to two years — net, after business expenses, not gross revenue, which surprises some applicants.",
    },
    {
      type: "paragraph",
      text: "Your CRA Notice of Assessment is usually the primary verification document, with line 15000 (total income) the number most lenders reference. If your income is trending upward, some lenders will weight the more recent year more heavily.",
    },
    {
      type: "paragraph",
      text: "Seasonal income is generally fine as long as the annual total holds up and the pattern repeats consistently year to year — be ready to explain the seasonality if asked.",
    },
    {
      type: "callout",
      text: "If this year's income jumped noticeably over last year's, submit both years' NOAs plus recent bank statements to show the trend clearly.",
    },

    { type: "heading", level: 2, text: "Do Rates Come In Higher?" },
    {
      type: "paragraph",
      text: "Not automatically. Your rate is set by the same factors as anyone else — credit score, income, debt-to-income ratio, and the lender's own pricing.",
    },
    {
      type: "paragraph",
      text: "That said, a short business history or inconsistent income can push your quote toward the higher end. A longer track record of stable self-employment income improves your terms over time.",
    },
    {
      type: "paragraph",
      text: "Rates for self-employed Canadians generally run 8% to 35% APR. With 2+ years of consistent income and solid credit, you can land rates comparable to a traditionally employed borrower.",
    },

    { type: "heading", level: 2, text: "Strengthening Your Application" },
    {
      type: "list",
      items: [
        "File and pay taxes on time — delinquency is a red flag for lenders",
        "Keep business and personal banking separate",
        "Maintain clean, consistent income and expense records",
        "Build your credit with on-time payments elsewhere",
        "Apply right after filing your most recent taxes, when your documentation is freshest",
        "A co-signer helps if you're newly self-employed",
        "Start with a smaller loan to establish a track record with the lender",
      ],
    },

    { type: "heading", level: 2, text: "If a Personal Loan Isn't the Right Fit" },
    {
      type: "paragraph",
      text: "Self-employed borrowers have other options worth considering too.",
    },
    {
      type: "list",
      items: [
        "A business line of credit from your bank",
        "Canada Small Business Financing Program loans",
        "BDC micro-loans",
        "Credit union personal loans, often more flexible for self-employed applicants",
        "A HELOC if you own property",
        "Invoice factoring for outstanding client invoices",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How long do I need to be self-employed to qualify?",
          answer:
            "There's no universal minimum, but lenders want to see consistent income, usually documented through 1-2 years of NOAs. Newer self-employed applicants can strengthen their case with a co-signer or a smaller loan request.",
        },
        {
          question: "Do self-employed borrowers pay higher rates?",
          answer:
            "Not automatically — the same factors apply as for any borrower. A shorter business history or inconsistent income can push your quote toward the higher end of the typical 8%-35% APR range for this group.",
        },
        {
          question: "Can I use business income to qualify?",
          answer:
            "Yes. Lenders typically average your net self-employment earnings (after expenses) over the past 1-2 years, using your CRA Notice of Assessment — line 15000 specifically — as the main verification.",
        },
        {
          question: "What if I just started my business?",
          answer:
            "Still possible, but expect more scrutiny. Bank statements, client contracts, a co-signer, or a smaller initial loan amount can all help offset the shorter track record.",
        },
      ],
    },
  ],
};

export default content;
