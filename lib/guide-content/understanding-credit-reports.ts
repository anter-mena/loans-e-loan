import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A section-by-section walkthrough of your Canadian credit report — what Equifax and TransUnion actually track, and what to check for.",
  blocks: [
    {
      type: "paragraph",
      text: "Your credit report is the raw data behind every borrowing decision a lender makes about you. Knowing how to actually read it lets you catch errors, track your own financial health, and understand exactly what a lender sees.",
    },

    { type: "heading", level: 2, text: "Reading It Section by Section" },

    { type: "heading", level: 3, text: "1. Get Your Report First" },
    {
      type: "paragraph",
      text: "Canadians are entitled to one free report (without the numerical score) per year from each of Equifax and TransUnion — request online, by mail, or by phone. Instant access or the score itself may come with a fee from some services.",
    },
    {
      type: "callout",
      text: "Pull both Equifax's and TransUnion's reports — they don't always have the same information, since some lenders report to only one bureau.",
    },

    { type: "heading", level: 3, text: "2. Check Your Personal Details" },
    {
      type: "paragraph",
      text: "Start with your name, current and past addresses, date of birth, and SIN. Errors here can point to identity theft or just confuse how a lender reads your file.",
    },
    {
      type: "callout",
      text: "Any mismatch in your personal info — contact the bureau right away to get it corrected.",
    },

    { type: "heading", level: 3, text: "3. Review Every Account Listed" },
    {
      type: "paragraph",
      text: "This is usually the largest section — every credit card, line of credit, mortgage, and loan, with the lender, a partially masked account number, original amount or limit, current balance, and payment history. Flag anything you don't recognize or any balance that looks off.",
    },
    {
      type: "callout",
      text: "Scrutinize the payment history closely — even one late payment can hurt your score and stay on file for years.",
    },

    { type: "heading", level: 3, text: "4. Check Public Records and Collections" },
    {
      type: "paragraph",
      text: "This section covers bankruptcies, consumer proposals, judgments, and anything sent to collections — these carry more weight and stay on your report longer than a simple late payment.",
    },
    {
      type: "callout",
      text: "Public records and collections do real damage — dispute any error here immediately.",
    },

    { type: "heading", level: 3, text: "5. Look at Your Inquiries" },
    {
      type: "paragraph",
      text: "This lists who's pulled your report. \"Hard\" inquiries come from lenders when you apply for credit and can temporarily ding your score; \"soft\" inquiries — your own checks, pre-approved offers, existing lenders monitoring an account — don't affect it at all.",
    },
    {
      type: "callout",
      text: "A pile of hard inquiries in a short window reads as risky to lenders — space out new credit applications.",
    },

    { type: "heading", level: 3, text: "6. Read Any Remarks or Statements" },
    {
      type: "paragraph",
      text: "Some reports let you attach a brief explanation to a specific item — a late payment tied to a billing dispute, for instance — plus general definitions of the codes used throughout.",
    },
    {
      type: "callout",
      text: "A consumer statement can add useful context for future lenders while a dispute is still pending.",
    },

    { type: "heading", level: 3, text: "7. Dispute What's Wrong" },
    {
      type: "paragraph",
      text: "Found an error, an unrecognized account, or something plain wrong? Dispute it right away through Equifax's or TransUnion's formal process, with whatever supporting documents you have.",
    },
    {
      type: "callout",
      text: "Keep a paper trail of every step in the dispute — dates, names, copies of anything sent or received.",
    },

    { type: "heading", level: 2, text: "A Few More Things to Know" },
    {
      type: "list",
      items: [
        "Check your report at least annually as basic fraud prevention",
        "Watch for R-codes next to each account — R1 typically means on-time, R9 means bad debt",
        "Your report is the raw data; your score is the number derived from it — they're not the same thing",
        "A closed account should read \"closed by consumer,\" not \"closed by lender\"",
        "Be skeptical of any company promising to \"fix\" your credit for a fee instead of just disputing errors directly",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How often can I get a free credit report in Canada?",
          answer:
            "Once a year from each of Equifax and TransUnion, without the numerical score — request online, by mail, or by phone. Instant access or the score itself may carry a fee from some services.",
        },
        {
          question: "What's the difference between a soft and a hard inquiry?",
          answer:
            "A hard inquiry happens when a lender checks your file because you applied for credit, and can temporarily lower your score. A soft inquiry — checking your own report, or a lender monitoring an existing account — has no effect.",
        },
        {
          question: "How do I dispute an error on my credit report?",
          answer:
            "Use Equifax's or TransUnion's formal dispute process directly, with any supporting documents, and keep records of every communication until it's resolved.",
        },
        {
          question: "What are R-codes on my credit report?",
          answer:
            "Indicators next to each account summarizing your repayment pattern — R1 usually means on-time payments, R9 means bad debt. Lenders use these to quickly gauge your history on each account.",
        },
        {
          question: "Does checking my own credit report lower my score?",
          answer:
            "No — checking your own report is a soft inquiry with zero score impact. Only a hard inquiry from a lender you've formally applied with can cause a small, temporary dip.",
        },
      ],
    },
  ],
};

export default content;
