import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Juggling several debts at once? Here's how a Canadian debt consolidation loan actually works, what it costs, and how to tell if it's the right move.",
  blocks: [
    { type: "heading", level: 2, text: "The Basic Idea" },
    {
      type: "paragraph",
      text: "A debt consolidation loan rolls several existing debts — credit cards, lines of credit, other consumer loans — into one new loan. Instead of tracking multiple balances and due dates, you're left with a single lender and a single payment each month.",
    },
    {
      type: "paragraph",
      text: "These are almost always unsecured personal loans, so no collateral is involved. The appeal is usually a lower rate than what you're currently paying, plus a fixed schedule that tells you exactly when you'll be done. Someone carrying $3,000, $5,000, and $2,000 across three cards at 19.99% could roll all of it into a $10,000 loan at 9.99% and cut their interest costs substantially.",
    },
    {
      type: "paragraph",
      text: "Banks, credit unions, and online lenders across Canada all offer this kind of product, and it's governed by the same federal and provincial consumer protection rules as any other personal loan.",
    },

    { type: "heading", level: 2, text: "Who This Actually Helps" },
    {
      type: "paragraph",
      text: "Consolidation tends to work best for people who:",
    },
    {
      type: "list",
      items: [
        "Are carrying multiple high-interest balances (think 18-25% on credit cards)",
        "Have a reasonably solid credit score (generally 660+)",
        "Have the discipline to not run the old balances back up",
        "Just want one payment instead of several",
      ],
    },
    {
      type: "callout",
      text: "If you're already struggling to cover the minimums and your debt-to-income ratio is very high, consolidation alone probably won't be enough.",
    },

    { type: "heading", level: 2, text: "What It Costs by Credit Tier" },
    {
      type: "table",
      headers: ["Credit Tier", "Score Range", "Rate Range", "Typical Lenders"],
      rows: [
        ["Excellent Credit", "760+", "6.99% to 9.99%", "Major banks (RBC, TD, Scotiabank)"],
        ["Good Credit", "660-759", "10% to 15%", "Banks and credit unions"],
        ["Fair Credit", "560-659", "15% to 25%", "Alternative/online lenders"],
        ["Poor Credit", "Below 560", "25% to 35%", "Subprime lenders"],
      ],
    },
    {
      type: "paragraph",
      text: "Terms usually run 1 to 5 years, occasionally stretching to 7. The longer the term, the smaller the payment — but the more you'll pay in total interest.",
    },

    { type: "heading", level: 2, text: "Applying, Step by Step" },
    {
      type: "list",
      ordered: true,
      items: [
        "Pull your score from Equifax or TransUnion Canada",
        "Add up everything you owe across all sources",
        "Compare offers from banks, credit unions, and online lenders",
        "Gather your pay stubs, ID, proof of address, and a list of your debts",
        "Apply — online, by phone, or in person, depending on the lender",
        "Read the agreement carefully before signing anything",
        "Use the funds right away to clear the existing balances",
      ],
    },

    { type: "heading", level: 2, text: "Weighing It Up" },
    { type: "heading", level: 3, text: "In favour" },
    {
      type: "list",
      items: [
        "One payment instead of several",
        "Usually a lower rate than what you had",
        "A fixed, predictable schedule",
        "Potential to help your credit score over time",
      ],
    },
    { type: "heading", level: 3, text: "Trade-offs" },
    {
      type: "list",
      negative: true,
      items: [
        "Easy to fall back into running up new balances",
        "Some lenders charge fees or prepayment penalties",
        "Doesn't solve the problem if your debt load is already too high",
        "A longer term can mean more interest overall",
      ],
    },

    { type: "heading", level: 2, text: "Other Ways to Tackle It" },
    {
      type: "list",
      items: [
        "A 0% intro-APR balance transfer card",
        "A home equity line of credit (HELOC)",
        "Credit counselling and a formal debt management plan",
        "A consumer proposal",
        "Bankruptcy, as a last resort",
      ],
    },

    { type: "heading", level: 2, text: "Staying on Track Afterward" },
    {
      type: "list",
      items: [
        "Build a real budget and stick to it",
        "Resist adding new debt to the accounts you just cleared",
        "Set aside a small emergency fund ($500-$1,000)",
        "Automate your new payment so it never gets missed",
        "Keep an eye on your score to confirm things are improving",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is debt consolidation and how does it work?",
          answer:
            "It combines several smaller debts into one larger loan, so you make a single monthly payment — usually at a lower rate — instead of juggling multiple due dates and balances.",
        },
        {
          question: "When does debt consolidation make sense?",
          answer:
            "It tends to work well if you're carrying multiple high-interest debts (18-25% on cards), have a decent score (660+), and can avoid rebuilding those balances afterward. If you're already struggling with minimums and your debt-to-income ratio is very high, it may not be enough on its own.",
        },
        {
          question: "What interest rate can I get on a debt consolidation loan?",
          answer:
            "It scales with your credit tier — roughly 6.99%-9.99% for excellent credit (760+), 10%-15% for good (660-759), 15%-25% for fair (560-659), and 25%-35% for poor credit (below 560).",
        },
        {
          question: "Will debt consolidation hurt my credit score?",
          answer:
            "Applying triggers a hard check that can cause a small, temporary dip. Over time, though, it can help your score by simplifying repayment and lowering your utilization — as long as you don't run the old balances back up.",
        },
        {
          question: "What's the difference between debt consolidation and debt settlement?",
          answer:
            "Consolidation pays off everything you owe using a new loan, repaid in full — your obligation doesn't shrink, it just gets simpler. Settlement negotiates to pay less than you owe, and it typically hits your credit harder and for longer than consolidation does.",
        },
      ],
    },
  ],
};

export default content;
