import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "When government aid and scholarships don't cover everything, here's how a personal loan can bridge the tuition gap in Canada.",
  blocks: [
    { type: "heading", level: 2, text: "What Tuition Actually Costs" },
    {
      type: "paragraph",
      text: "Costs swing widely by program, province, and residency status. For Canadian citizens and permanent residents, undergraduate arts programs might run $4,000-$8,000 a year, while professional programs — engineering, medicine, law — can hit $10,000-$25,000, more at prestigious schools like U of T or McGill.",
    },
    {
      type: "paragraph",
      text: "Don't forget living costs on top of that — rent, food, textbooks, transit can add another $10,000-$20,000 a year, more in Vancouver or Toronto than in Saskatoon or Fredericton. A laptop and course materials add another $1,000-$2,500.",
    },

    { type: "heading", level: 2, text: "How Much to Borrow" },
    {
      type: "paragraph",
      text: "Think of a personal loan as covering the gap left after government loans and scholarships, not the whole bill. A $5,000-$15,000 shortfall per year is typical. Project your total costs, subtract other funding, and borrow only the remainder — every extra dollar just adds interest.",
    },

    { type: "heading", level: 2, text: "Comparing Your Options" },
    { type: "heading", level: 3, text: "Government Student Loans (OSAP, Canada Student Loans)" },
    {
      type: "paragraph",
      text: "Lower rates, often interest-free while studying, flexible repayment, and possible grants — but funding limits and eligibility rules mean they may not cover everything.",
    },
    { type: "heading", level: 3, text: "Lines of Credit" },
    {
      type: "paragraph",
      text: "Flexible — you only pay interest on what you draw, and student lines of credit often carry competitive rates — but variable rates can rise, and it takes discipline to manage.",
    },
    { type: "heading", level: 3, text: "Personal Loans" },
    {
      type: "paragraph",
      text: "A fixed rate and predictable payment, broader use than a dedicated student loan, and often faster approval — but generally pricier than government loans, and repayment usually starts right away, which can be tough while you're still studying.",
    },
    { type: "heading", level: 3, text: "Credit Cards" },
    {
      type: "paragraph",
      text: "Fast access, but the interest rate makes them a poor fit for something as large as tuition.",
    },

    { type: "heading", level: 2, text: "Applying" },
    {
      type: "list",
      ordered: true,
      items: [
        "Compare offers across banks, credit unions, and online lenders on rate, fees, and terms",
        "Gather ID, proof of income, and bank statements — a co-signer with good credit helps a lot if your own income is thin",
        "Complete the application online, in person, or by phone",
        "Review the offer carefully — rate, APR, schedule, and any late fees — before signing",
      ],
    },

    { type: "heading", level: 2, text: "Managing It Responsibly as a Student" },
    {
      type: "list",
      items: [
        "Build a real budget that includes the loan payment, not just tuition",
        "Pay on time, every time — a late payment costs you both fees and credit score",
        "Understand your rate and schedule fully before you need to worry about it",
        "Reach out to your lender immediately if a payment might be tight",
        "Put extra money — a summer job bonus, a gift — toward the loan if you can, after confirming no prepayment penalty",
        "Responsible repayment builds a credit history that helps later with an apartment, a car, or a mortgage",
      ],
    },
    {
      type: "callout",
      text: "Editorial Note: Our content is reviewed by financial experts for accuracy. We may receive compensation from partner lenders, which does not influence our rankings or recommendations.",
    },

    {
      type: "faq",
      items: [
        {
          question: "How do I apply for a loan for tuition?",
          answer:
            "Compare rates, fees, and terms across a few lenders, gather ID, income proof, and bank statements (a co-signer helps if your income is limited), complete the application, and review the offer's rate and schedule carefully before signing.",
        },
        {
          question: "What loan amounts are available for tuition?",
          answer:
            "Most students use a personal loan to bridge what's left after grants and government loans — typically $5,000-$15,000 a year. Calculate your total costs, subtract other funding, and borrow only the gap.",
        },
        {
          question: "How fast can I get funds for tuition?",
          answer:
            "Applications are often online with decisions in minutes to a few business days, and funds usually follow shortly after — apply well ahead of your tuition deadline.",
        },
        {
          question: "Are there alternatives to a personal loan for tuition?",
          answer:
            "Government student loans often carry lower, sometimes interest-free rates while studying, and a line of credit lets you borrow only what you need. A personal loan is best for covering what those don't, in exchange for a fixed rate and immediate repayment.",
        },
      ],
    },
  ],
};

export default content;
