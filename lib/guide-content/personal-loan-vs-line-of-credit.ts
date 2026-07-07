import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Lump sum or revolving credit? Here's how a personal loan and a line of credit actually differ, and which fits your situation better.",
  blocks: [
    { type: "heading", level: 2, text: "The Core Difference" },
    {
      type: "paragraph",
      text: "A personal loan gives you a fixed amount upfront, repaid in equal installments over a set term. A line of credit gives you a pool of funds you draw from as needed, repaying and redrawing within your limit.",
    },
    {
      type: "paragraph",
      text: "Think of a personal loan like a car purchase — the full amount up front, paid down over time. A line of credit behaves more like a credit card — a limit, and interest only on what you've actually used.",
    },

    {
      type: "table",
      headers: ["Feature", "Personal Loan", "Line of Credit"],
      rows: [
        ["How funds are received", "Lump sum upfront", "Draw as needed up to limit"],
        ["Interest rate", "Fixed", "Usually variable"],
        ["Payment structure", "Fixed monthly payments", "Interest on balance drawn + minimum payment"],
        ["Repayment term", "Set end date (12-60 months)", "Revolving (no set end date)"],
        ["Discipline required", "Built into structure", "Requires self-discipline"],
        ["Best for", "One-time, defined expenses", "Ongoing or unpredictable needs"],
        ["Availability", "Banks, credit unions, online lenders", "Primarily major banks and credit unions"],
      ],
    },

    { type: "heading", level: 2, text: "How a Personal Loan Works" },
    {
      type: "paragraph",
      text: "You get the full amount at once, with a repayment schedule fixed from day one — you know exactly what you're paying each month and exactly when you'll be done.",
    },
    {
      type: "paragraph",
      text: "That fixed structure is what makes it easy to budget: no surprises, no rate that moves, a guaranteed end date. The trade-off is you can't reborrow mid-term — need more, and you're applying for a new loan.",
    },
    {
      type: "paragraph",
      text: "Through most networks in Canada, amounts run $300 to $5,000, with banks and credit unions offering more. Rates are fixed, generally 6%-35% APR.",
    },

    { type: "heading", level: 2, text: "How a Line of Credit Works" },
    {
      type: "paragraph",
      text: "You get a maximum limit and draw against it as needed, paying interest only on what's actually outstanding. As you repay, the available room replenishes.",
    },
    {
      type: "paragraph",
      text: "Unsecured Canadian lines of credit typically carry variable rates tied to prime — often prime + 2% to prime + 7%, roughly 7%-12% currently for good credit. A HELOC offers lower rates but requires property ownership.",
    },
    {
      type: "paragraph",
      text: "The flexibility cuts both ways: with no forced repayment schedule, it's easy to stay in debt indefinitely making only minimum payments. Disciplined borrowers do well with this structure; others may prefer a loan's built-in end date.",
    },

    { type: "heading", level: 2, text: "When a Personal Loan Makes More Sense" },
    {
      type: "list",
      items: [
        "You need a specific, known amount for a one-time expense",
        "You want a fixed, predictable payment",
        "You want a guaranteed date when the debt is gone",
        "You're consolidating existing debt into one payment",
        "You'd rather lock in a rate than risk it rising",
        "You want the built-in structure of a fixed schedule",
      ],
    },

    { type: "heading", level: 2, text: "When a Line of Credit Makes More Sense" },
    {
      type: "list",
      items: [
        "You need ongoing access over time — a renovation done in stages, for example",
        "You're not sure of the total amount you'll need",
        "You want to draw and repay flexibly without reapplying",
        "You're confident in your own discipline with revolving credit",
        "You want to minimize interest by only borrowing when needed",
        "Your credit profile is strong enough to qualify (LOCs generally require more)",
      ],
    },

    { type: "heading", level: 2, text: "What $3,000 Actually Costs Each Way" },
    {
      type: "table",
      headers: ["Scenario", "Personal Loan (18% fixed APR)", "Line of Credit (12% variable APR)"],
      rows: [
        ["Amount needed", "$3,000 one-time", "$3,000 (drawn over 3 months)"],
        ["Monthly payment", "$166 fixed / 24 months", "~$100 minimum / flexible"],
        ["Total interest paid (2 years)", "~$580", "~$360 (if paid in 2 years)"],
        ["Debt-free date", "Guaranteed in 24 months", "Depends on payments made"],
        ["Risk of remaining in debt", "None—automatic payoff", "Yes—easy to keep balance"],
      ],
    },
    { type: "heading", level: 3, text: "The Catch" },
    {
      type: "paragraph",
      text: "The LOC looks cheaper here, but only holds up if you make consistent, substantial payments. Stick to the minimum, and that balance can linger for years, ultimately costing more than the loan would have.",
    },

    { type: "heading", level: 2, text: "Which Is Easier to Qualify For?" },
    {
      type: "paragraph",
      text: "Personal loans are generally more accessible, especially for fair or poor credit.",
    },
    {
      type: "paragraph",
      text: "Unsecured lines of credit in Canada typically want 650+ and an existing relationship with the lender. Online personal loan lenders will often go down to 500. If your credit isn't spotless, a loan is usually the more realistic path.",
    },

    {
      type: "faq",
      items: [
        {
          question: "Which has a lower interest rate—a personal loan or line of credit?",
          answer:
            "Lines of credit are usually variable and tied to prime, working out to roughly 7%-12% for good credit. Personal loans have fixed rates of 6%-35%. A LOC can cost less in total interest, but only with consistent, substantial payments — minimum payments can leave you in debt longer than a fixed-term loan.",
        },
        {
          question: "Can I use both at the same time?",
          answer:
            "Yes — nothing stops you from holding both. Just remember both count toward your debt-to-income ratio if you apply for more credit later.",
        },
        {
          question: "Which is better for debt consolidation?",
          answer:
            "A personal loan generally, since its fixed schedule guarantees a debt-free date. A line of credit offers flexibility, but without discipline the balance can persist and end up costing more.",
        },
        {
          question: "Is a HELOC different from a personal line of credit?",
          answer:
            "Yes — a HELOC is secured against your home and offers lower rates but requires ownership. An unsecured personal line of credit needs no collateral but carries a higher rate, typically prime + 2% to prime + 7%.",
        },
        {
          question: "What credit score do I need for each option?",
          answer:
            "Unsecured lines of credit typically want 650+. Personal loans are more accessible — online lenders may go as low as 500, with rates rising accordingly.",
        },
        {
          question: "How much can I borrow with a personal loan?",
          answer:
            "Typically $300 to $5,000 through most networks, with banks and credit unions offering more. A line of credit's limit is set individually based on your income and credit.",
        },
      ],
    },
  ],
};

export default content;
