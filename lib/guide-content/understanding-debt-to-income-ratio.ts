import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "What debt-to-income ratio actually measures, how to calculate yours, and why it matters as much as your credit score for loan approval in Canada.",
  blocks: [
    { type: "heading", level: 2, text: "Working Through DTI" },

    { type: "heading", level: 3, text: "1. What DTI Actually Is" },
    {
      type: "paragraph",
      text: "Debt-to-income ratio compares what you owe each month to what you earn, expressed as a percentage. It's a direct read on how much room you have to take on a new payment — the lower it is, the less risky you look to a lender.",
    },
    {
      type: "callout",
      text: "Think of DTI as a financial check-up — a high number is an early warning sign, not just a lender's data point.",
    },

    { type: "heading", level: 3, text: "2. Why Lenders Care So Much" },
    {
      type: "paragraph",
      text: "A manageable DTI tells a lender you have room to absorb a new payment; a high one suggests you're already stretched, which can mean denial or a worse rate.",
    },
    {
      type: "callout",
      text: "Knowing your DTI before you apply helps you anticipate how a lender will see your application.",
    },

    { type: "heading", level: 3, text: "3. How to Calculate It" },
    {
      type: "paragraph",
      text: "Add up every monthly debt payment — rent or mortgage, car loan, student loan, credit card minimums, anything recurring. Divide that total by your gross monthly income and multiply by 100.",
    },
    {
      type: "callout",
      text: "Be thorough — small recurring payments add up more than you'd expect.",
    },

    { type: "heading", level: 3, text: "4. A Worked Example" },
    {
      type: "paragraph",
      text: "Say your gross income is $5,000/month, and your debts are: mortgage $1,500, car loan $400, student loan $250, card minimums $150 — a total of $2,300. Divide by $5,000 and multiply by 100: a 46% DTI.",
    },
    {
      type: "callout",
      text: "Double-check your figures with a calculator before making any decisions based on the number.",
    },

    { type: "heading", level: 3, text: "5. What Counts as Good vs. High" },
    {
      type: "paragraph",
      text: "There's no single magic number, but most Canadian lenders want 36% or below for non-mortgage loans. Mortgage lenders look at two related figures: Gross Debt Service (GDS, ideally under 32%) and Total Debt Service (TDS, generally under 40-44%). Above 43% overall is considered high and starts limiting your options.",
    },
    {
      type: "callout",
      text: "Aim for under 36% on personal loans, and watch GDS/TDS separately if you're also applying for a mortgage.",
    },

    { type: "heading", level: 3, text: "6. Bringing It Down" },
    {
      type: "paragraph",
      text: "Two levers: lower your debt payments, or raise your income. Paying down existing balances, consolidating high-interest debt into one lower payment, holding off on new credit, and finding ways to earn more all help.",
    },
    {
      type: "callout",
      text: "Attack the highest-interest debt first — it reduces your total monthly payment fastest.",
    },

    { type: "heading", level: 3, text: "7. How DTI and Credit Score Interact" },
    {
      type: "paragraph",
      text: "DTI isn't part of your credit score directly — Equifax and TransUnion don't calculate it — but a high DTI that leads to missed payments will eventually hit your score too. Lenders look at both together for the full picture.",
    },
    {
      type: "callout",
      text: "Keep an eye on both your score and your DTI regularly, not just when you're about to apply for something.",
    },

    { type: "heading", level: 2, text: "Quick Reference" },
    {
      type: "list",
      items: [
        "Always use gross (pre-tax) income for the calculation",
        "Include every recurring debt payment, even small ones",
        "Consolidating high-interest debt can meaningfully lower your DTI",
        "Under 36% is generally viewed favourably by Canadian lenders",
        "Recheck your DTI before any major loan application",
        "It's one factor among several — credit history and income stability matter too",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is considered a good debt-to-income ratio in Canada?",
          answer:
            "36% or below for non-mortgage loans is the general target. For mortgages, lenders look at GDS (ideally under 32%) and TDS (generally under 40-44%). Above 43% overall starts limiting your options.",
        },
        {
          question: "How do I calculate my DTI?",
          answer:
            "Add up all monthly debt payments, divide by gross monthly income, multiply by 100. $2,300 in debt against $5,000 income works out to 46%.",
        },
        {
          question: "Does my DTI affect my credit score?",
          answer:
            "Not directly — bureaus don't calculate it. But a high DTI that leads to missed payments will eventually hurt your score, since lenders weigh both together.",
        },
        {
          question: "How can I lower my DTI?",
          answer:
            "Pay down existing debt (highest interest first), consolidate into one lower payment, avoid new debt, and look for ways to raise your income.",
        },
        {
          question: "What debts count toward my DTI?",
          answer:
            "Rent or mortgage, car loan, student loan, credit card minimums, and any other recurring obligation — be thorough, since small payments add up.",
        },
      ],
    },
  ],
};

export default content;
