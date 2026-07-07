import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Turn several bills into one manageable payment. Here's how debt consolidation loans actually work, and how to tell if the strategy fits your situation.",
  blocks: [
    { type: "heading", level: 2, text: "What a Debt Consolidation Loan Is" },
    {
      type: "paragraph",
      text: "It's a personal loan used to pay off multiple existing debts — credit cards, store cards, medical bills, other loans — and replace them with one monthly payment, ideally at a better rate than what you're already paying.",
    },
    {
      type: "paragraph",
      text: "The appeal is simplicity: instead of five payments at five rates on five different dates, you're down to one of each. That alone makes budgeting easier, and a lower blended rate can cut your total interest on top of it.",
    },
    {
      type: "paragraph",
      text: "It's one of the most common reasons Canadians take out a personal loan in the first place. With typical credit card rates sitting around 19.99%-22.99%, a personal loan at 12%-25% APR can add up to real savings.",
    },

    { type: "heading", level: 2, text: "How It Actually Plays Out" },
    {
      type: "paragraph",
      text: "The mechanics are simple once you see the sequence:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "List every debt you're carrying — balance, rate, and monthly payment",
        "Total it up and work out your blended average rate",
        "Apply for a personal loan covering that amount, or close to it",
        "Once approved, use the funds to clear everything immediately",
        "Make one payment on the new loan going forward",
        "Don't let the accounts you just paid off start filling back up",
      ],
    },
    { type: "heading", level: 3, text: "The Part People Get Wrong" },
    {
      type: "paragraph",
      text: "The most common way this backfires is straightforward: pay off the cards, then charge them right back up. That leaves you with the new loan payment AND fresh card balances — worse off than before you started.",
    },

    { type: "heading", level: 2, text: "When It's Actually Worth Doing" },
    {
      type: "paragraph",
      text: "Consolidation isn't automatically the right call — it depends on the specifics.",
    },
    {
      type: "paragraph",
      text: "It makes sense when the new rate genuinely beats your current blended rate — going from 22% on cards to 15% on a personal loan is real savings.",
    },
    {
      type: "paragraph",
      text: "It also helps just from a simplicity standpoint — even with modest rate savings, collapsing several due dates into one lowers your odds of missing a payment.",
    },
    {
      type: "paragraph",
      text: "It does NOT make sense if you stretch the term out so far that total interest ends up higher despite the lower rate, or if you keep using the cards you just paid off.",
    },
    {
      type: "table",
      headers: ["Scenario", "Example", "Consolidation Recommended?"],
      rows: [
        ["High-rate credit card debt", "3 cards averaging 22% APR, consolidation loan at 15%", "Yes—saves on interest"],
        ["Mix of low and high rate debts", "Car loan at 5%, credit cards at 20%", "Consolidate only the high-rate debts"],
        ["Small total debt", "Less than $500 total across all debts", "Probably not worth the effort"],
        ["Spending habits unchanged", "History of running up balances after paying off", "No—address spending first"],
      ],
    },
    {
      type: "callout",
      text: "Compare offers from 50+ Canadian lenders with no impact to your credit score before deciding.",
    },

    { type: "heading", level: 2, text: "What These Loans Cost" },
    {
      type: "paragraph",
      text: "Pricing follows the same logic as any personal loan — your rate comes down to credit score, income, and overall profile.",
    },
    {
      type: "paragraph",
      text: "In Canada, consolidation loans typically run 8% to 35% APR. For the math to actually work in your favour, the new rate needs to be meaningfully below your current blended rate — a gap of 5 points or more is usually the threshold where it's clearly worthwhile.",
    },

    { type: "heading", level: 2, text: "Where People Go Wrong" },
    {
      type: "paragraph",
      text: "A few mistakes show up over and over:",
    },
    {
      type: "list",
      negative: true,
      items: [
        "Running the credit cards back up after consolidating — the single most common mistake",
        "Stretching the term so long that total interest ends up higher than before",
        "Origination fees eating into whatever you saved on rate",
        "Borrowing more than you actually owed",
        "Consolidating without ever addressing the spending that created the debt",
      ],
    },

    { type: "heading", level: 2, text: "Other Ways to Approach It" },
    {
      type: "paragraph",
      text: "A personal loan isn't the only path to getting multiple debts under control.",
    },
    {
      type: "list",
      items: [
        "A 0% intro-APR balance transfer card",
        "A non-profit credit counsellor's debt management plan",
        "A line of credit from your bank, potentially at a better rate",
        "A consumer proposal, Canada's formal debt-settlement option",
        "Negotiating directly with your creditors",
        "A HELOC, if you own property",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Will a debt consolidation loan hurt my credit?",
          answer:
            "The hard check from applying can cause a small, temporary dip. Longer term, consolidation tends to help — simplified payments and lower risk of missing one, plus reduced utilization once revolving balances are cleared, as long as you don't run them back up.",
        },
        {
          question: "How much debt can I consolidate?",
          answer:
            "Generally, you apply for a loan covering the total (or close to it) of what you want to pay off. Rates in Canada typically run 8%-35% APR, so what you qualify for depends on income and credit.",
        },
        {
          question: "Should I close credit cards after consolidating?",
          answer:
            "Not necessarily — the real risk is charging them back up, not keeping them open. Leaving old, unused cards open can actually help your utilization ratio and credit history length.",
        },
        {
          question: "Is a consumer proposal better than a consolidation loan?",
          answer:
            "They solve different problems. Consolidation pays off what you owe in full via a new, hopefully cheaper loan. A consumer proposal is a formal settlement that reduces the amount owed but causes more lasting credit damage. Consolidation is generally the better option if you can qualify for a lower rate.",
        },
      ],
    },
  ],
};

export default content;
