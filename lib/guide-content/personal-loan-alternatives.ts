import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A personal loan is one option among several. Here's how it stacks up against credit cards, HELOCs, credit unions, and borrowing from people you know.",
  blocks: [
    { type: "heading", level: 2, text: "Why Look Beyond a Personal Loan" },
    {
      type: "paragraph",
      text: "Personal loans are flexible and widely available, but they're not automatically the cheapest or best fit. The right choice depends on how much you need, how fast, over what timeline, and whether you have an asset that could secure a better rate.",
    },

    { type: "heading", level: 2, text: "Credit Cards" },
    {
      type: "paragraph",
      text: "The most accessible alternative, best suited to smaller amounts you can clear within a billing cycle or two.",
    },
    {
      type: "paragraph",
      text: "Canadian card rates typically run 12.99%-29.99% APR — pricier than most personal loans if you carry a balance. A 0% intro balance-transfer offer can still make sense for short-term borrowing.",
    },
    {
      type: "paragraph",
      text: "Best use: small, short-term needs, or leaning on a 0% intro period rather than carrying a standard-rate balance.",
    },

    { type: "heading", level: 2, text: "Home Equity Line of Credit (HELOC)" },
    {
      type: "paragraph",
      text: "If you own a home, tapping equity usually gets you the lowest rate available.",
    },
    {
      type: "paragraph",
      text: "Canadian HELOCs typically run prime plus 0.5-2%, currently around 6-8%, up to 65% of your home's appraised value minus what you still owe on the mortgage. The catch: your home is the collateral.",
    },
    {
      type: "list",
      negative: true,
      items: [
        "Your home is at risk if payments stop",
        "Closing costs and fees add to the real cost",
        "Slower to set up than a personal loan",
      ],
    },

    { type: "heading", level: 2, text: "Credit Union Loans" },
    {
      type: "paragraph",
      text: "As member-owned cooperatives, credit unions often beat banks and online lenders on terms.",
    },
    {
      type: "paragraph",
      text: "Expect potentially lower rates, more flexible criteria, and more personal service — many will work with members who have lower scores or non-traditional income.",
    },

    { type: "heading", level: 2, text: "Tapping an RRSP or TFSA" },
    {
      type: "paragraph",
      text: "A TFSA withdrawal has no tax consequences and effectively acts as interest-free borrowing. RRSP withdrawals are possible but trigger withholding tax and can affect benefits — though the Home Buyers' Plan and Lifelong Learning Plan offer specific tax-sheltered exceptions.",
    },
    {
      type: "list",
      negative: true,
      items: [
        "RRSP withdrawals shrink your retirement savings and trigger withholding tax",
        "Pulling from retirement funds costs you long-term growth",
        "Treat this as a last resort, not a first option",
      ],
    },

    { type: "heading", level: 2, text: "Peer-to-Peer and Family Loans" },
    {
      type: "paragraph",
      text: "Borrowing from an individual — through a P2P platform or someone you know — is another route.",
    },
    {
      type: "paragraph",
      text: "P2P platforms can offer competitive rates, though they charge origination fees. Family and friends can be interest-free or cheap, but the relationship risk is real and shouldn't be underestimated.",
    },
    {
      type: "paragraph",
      text: "If you go this route, put it in writing — amount, terms, interest if any, and what happens if payments stop. It protects everyone involved.",
    },

    { type: "heading", level: 2, text: "Matching the Option to the Need" },
    {
      type: "table",
      headers: ["Need", "Best Option", "Why"],
      rows: [
        ["Small amount, quick repayment", "Credit card (0% APR)", "No interest if paid in full during promo period"],
        ["Large amount, homeowner", "HELOC", "Lowest rates available"],
        ["Moderate amount, any credit", "Personal loan", "Fixed payments, predictable cost"],
        ["Building credit", "Secured personal loan or credit card", "Establishes credit history"],
        ["Emergency, limited options", "Credit union or community loan", "Lower rates than payday loans"],
        ["Need funds immediately", "Credit card cash advance", "Instant access (but expensive)"],
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the cheapest way to borrow money?",
          answer:
            "For homeowners, a HELOC at roughly prime plus 0.5-2% (around 6-8%) is usually cheapest since it's secured by property. Without a home, a 0% intro credit card paid off in time, or a credit union loan, are strong low-cost options.",
        },
        {
          question: "What if I cannot qualify for any loans?",
          answer:
            "A TFSA withdrawal is interest-free with no tax hit, and credit unions tend to be more flexible with lower scores or non-traditional income. Borrowing from family with a written agreement is another route.",
        },
        {
          question: "Is it better to borrow from family or get a personal loan?",
          answer:
            "Family borrowing can be cheap or free but risks the relationship if repayment goes sideways. A personal loan is formal and predictable. If you do borrow from someone you know, put the terms in writing regardless.",
        },
        {
          question: "Can I use multiple alternatives together?",
          answer:
            "Yes — plenty of people combine a 0% card for part of an expense with a credit union loan for the rest. Weigh rate, speed, flexibility, and risk across the options to find the right mix.",
        },
      ],
    },
  ],
};

export default content;
