import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A personal loan and debt consolidation aren't quite the same thing. Here's the distinction, and how to pick the right debt strategy.",
  blocks: [
    { type: "heading", level: 2, text: "Two Different Ideas" },
    {
      type: "paragraph",
      text: "A personal loan is a product — a lump sum you borrow and repay in installments. Debt consolidation is a strategy — folding multiple debts into a single payment. They overlap, but they're not synonyms.",
    },
    {
      type: "paragraph",
      text: "A personal loan is one tool for consolidating debt. You can also get there through a balance transfer card, a home equity loan, a debt management plan, or other routes.",
    },
    {
      type: "paragraph",
      text: "So the real question isn't \"personal loan or consolidation\" — it's \"is a personal loan the right tool for my consolidation strategy?\"",
    },

    { type: "heading", level: 2, text: "Comparing the Consolidation Routes" },
    {
      type: "table",
      headers: ["Method", "Typical Rate", "Best For", "Risk Level"],
      rows: [
        ["Personal loan", "6% – 35% APR", "Multiple debts, good credit", "Low"],
        ["Balance transfer card", "0% intro, then 19.99%+", "Smaller amounts, quick payoff", "Moderate"],
        ["Home equity loan/HELOC", "5% – 8%", "Homeowners, large amounts", "High (home is collateral)"],
        ["Debt management plan", "Negotiated lower rates", "High debt, struggling borrowers", "Low"],
        ["Consumer proposal", "N/A (fixed payments)", "Cannot manage debts otherwise", "Moderate (credit impact)"],
      ],
    },

    { type: "heading", level: 2, text: "When a Personal Loan Is the Right Call" },
    {
      type: "list",
      items: [
        "Your existing debts all carry higher rates than the personal loan offer",
        "You want a fixed schedule with a definite end date",
        "You don't own a home, so equity-based options aren't on the table",
        "Your debt is manageable and just needs structure, not crisis intervention",
        "You want the credit-building benefit of consistent installment payments",
      ],
    },

    { type: "heading", level: 2, text: "When Something Else Fits Better" },
    {
      type: "list",
      items: [
        "A small balance payable in 12-21 months — a 0% balance transfer card is likely cheaper",
        "A homeowner with significant debt — a home equity loan may beat the rate, at the cost of risk",
        "Genuinely overwhelmed — a debt management plan or credit counselling may be the better path",
        "Truly unmanageable debt — a consumer proposal through a Licensed Insolvency Trustee",
        "Credit too weak to qualify for a reasonable personal loan rate",
      ],
    },

    { type: "heading", level: 2, text: "Making It Actually Work" },
    {
      type: "list",
      items: [
        "Stop adding new debt — cut up or freeze cards if needed",
        "Build an emergency fund so surprises don't become new debt",
        "Automate payments on the consolidation loan or plan",
        "Track progress monthly to stay motivated",
        "Build and stick to a real budget",
        "Free credit counselling is worth a call if you're unsure where to start",
      ],
    },

    { type: "heading", level: 2, text: "Common Mistakes" },
    {
      type: "list",
      negative: true,
      items: [
        "Consolidating, then running the cards back up",
        "Choosing a loan rate that's actually higher than your current average",
        "Stretching the term so long that total interest grows despite a lower rate",
        "Ignoring origination fees that eat into the savings",
        "No budget plan to prevent the debt from coming back",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Is a personal loan the same as a debt consolidation loan?",
          answer:
            "Not exactly. A personal loan is a product; debt consolidation is a strategy that a personal loan (among other tools) can achieve.",
        },
        {
          question: "Will debt consolidation hurt my credit?",
          answer:
            "Applying triggers a hard inquiry and a small, temporary dip. Over time, consistent on-time payments tend to help, especially compared to carrying multiple high-utilization balances.",
        },
        {
          question: "How do I know if consolidation will save me money?",
          answer:
            "Compare the new loan's rate against your current blended rate. If it's genuinely lower and you don't stretch the term out so far that total interest grows anyway, it should save you money.",
        },
        {
          question: "Should I use a consumer proposal instead?",
          answer:
            "Generally only if consolidation alone can't realistically get your debt under control — a proposal is more disruptive and carries a bigger credit impact.",
        },
        {
          question: "Can I consolidate debt with bad credit?",
          answer:
            "It's harder to get a good rate, and if your credit is too weak to qualify reasonably, a debt management plan or free credit counselling may be more practical than a high-rate loan.",
        },
      ],
    },
  ],
};

export default content;
