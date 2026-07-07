import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A ground-up look at how personal loans work in Canada, who they're for, and how to find the best rate and terms for your situation.",
  blocks: [
    { type: "heading", level: 2, text: "What a Personal Loan Actually Is" },
    {
      type: "paragraph",
      text: "Unlike a mortgage or auto loan tied to a specific asset, a personal loan is unsecured and flexible — the money can go toward debt consolidation, a medical bill, a wedding, a renovation, or an emergency, whatever the need.",
    },
    {
      type: "paragraph",
      text: "You get the full amount immediately and repay it through fixed monthly installments, typically over 12 to 60 months. Being unsecured means no collateral requirement — which trades off against a somewhat higher rate than a secured product would carry.",
    },
    {
      type: "paragraph",
      text: "In Canada, the major banks all offer these products, alongside credit unions, online lenders, and alternative finance companies — each with its own criteria, rates, and terms, which is exactly why comparison shopping matters.",
    },

    { type: "heading", level: 2, text: "Who These Loans Suit Best" },
    {
      type: "paragraph",
      text: "Personal loans work well for anyone needing funds for a specific purpose with a predictable payment. Strong candidates include people who:",
    },
    {
      type: "list",
      items: [
        "Want to consolidate high-interest debt — the rate is usually well below a credit card's",
        "Have a big expense coming up — a wedding, a reno, a medical procedure, tuition",
        "Want fixed, predictable payments instead of a variable credit card bill",
        "Want to build credit through consistent on-time payments",
        "Don't have an asset to offer as collateral",
      ],
    },

    { type: "heading", level: 2, text: "What Rates and Terms Look Like" },
    {
      type: "paragraph",
      text: "Rates vary considerably by credit score, income, debt load, and lender:",
    },
    {
      type: "list",
      items: [
        "Excellent credit (760+): typically 6.99%-9.99% APR from major banks",
        "Good credit (700-759): 9.99%-14.99% APR",
        "Fair credit (650-699): 14.99%-24.99% APR",
        "Poor credit (below 650): 25%-35% APR through alternative lenders",
      ],
    },
    {
      type: "paragraph",
      text: "Terms usually run 12 to 60 months, with some lenders stretching to 84 for larger amounts — longer terms mean a smaller payment but more total interest.",
    },
    {
      type: "paragraph",
      text: "Amounts generally range $1,000 to $50,000 depending on lender and qualifications, with some online lenders offering as little as $300-$500 for borrowers with weaker credit.",
    },

    { type: "heading", level: 2, text: "Qualifying and Applying" },
    { type: "paragraph", text: "Generally required:" },
    {
      type: "list",
      items: [
        "18 or 19+, depending on province",
        "Canadian citizen or permanent resident",
        "Verifiable income — employment, self-employment, or benefits",
        "An active Canadian bank account",
        "Credit history requirements vary — some lenders work with all credit types",
      ],
    },
    { type: "paragraph", text: "The process generally follows these steps:" },
    {
      type: "list",
      ordered: true,
      items: [
        "Gather your ID, income proof, and address proof",
        "Compare rates, terms, and fees across a few lenders",
        "Apply — most online applications take 5-15 minutes",
        "Get your decision — instant to a couple of business days",
        "Review the agreement carefully before signing",
        "Get funded — typically 1-3 business days, some lenders same or next-day",
      ],
    },

    { type: "heading", level: 2, text: "Weighing the Trade-Offs" },
    { type: "heading", level: 3, text: "In favour" },
    {
      type: "list",
      items: [
        "Usable for nearly any purpose",
        "Fixed rate and payment, easy to budget",
        "No collateral required",
        "Often cheaper than carrying a credit card balance",
        "On-time payments help build credit",
        "Larger amounts than a typical credit card",
      ],
    },
    { type: "heading", level: 3, text: "Trade-offs" },
    {
      type: "list",
      negative: true,
      items: [
        "Higher rate than a secured loan",
        "Some lenders charge a 1-5% origination fee",
        "Best rates require strong credit",
        "Fixed amount — can't borrow more without a new application",
      ],
    },
    {
      type: "paragraph",
      text: "Versus credit cards: a personal loan usually beats a card on rate for larger, planned expenses, with a defined schedule instead of ongoing flexibility.",
    },
    {
      type: "paragraph",
      text: "Versus a line of credit: a loan gives you a lump sum and fixed payments; a LOC gives revolving access, often at a lower rate but requiring stronger credit.",
    },
    {
      type: "paragraph",
      text: "Versus a home equity loan: a personal loan doesn't require ownership or equity, but a home equity loan typically offers a meaningfully lower rate since the property secures it.",
    },

    { type: "heading", level: 2, text: "Finding the Best One" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your credit score first — Equifax and TransUnion both offer free reports",
        "Compare at least 3-5 lenders — banks, credit unions, and online options",
        "Use pre-qualification tools that run a soft check, not a hard one",
        "Look past the rate to origination fees, prepayment penalties, and late fees",
        "Calculate the total repayment, not just the monthly payment",
        "Check the lender's reputation and complaint history",
        "Be wary of guaranteed approval claims or upfront fee requests",
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
          question: "What is a personal loan in Canada?",
          answer:
            "An unsecured loan for nearly any purpose, repaid through fixed monthly installments over 12 to 60 months — unlike a mortgage or auto loan, it isn't tied to a specific asset.",
        },
        {
          question: "How do I qualify for a personal loan in Canada?",
          answer:
            "Generally 18 or 19+ depending on province, Canadian citizenship or permanent residency, an active bank account, and verifiable income. Credit requirements vary by lender, with some accepting all credit types.",
        },
        {
          question: "What interest rates can I expect on personal loans?",
          answer:
            "Roughly 6.99%-9.99% for excellent credit (760+), 9.99%-14.99% for good (700-759), 14.99%-24.99% for fair (650-699), and 25%-35% for poor credit (below 650) through alternative lenders.",
        },
        {
          question: "How long does it take to get approved for a personal loan?",
          answer:
            "Anywhere from instant to 1-2 business days depending on the lender, with funds typically arriving 1-3 business days after signing — some lenders offer same- or next-day funding.",
        },
        {
          question: "Can I pay off my personal loan early without penalties?",
          answer:
            "It depends on the lender. Many allow penalty-free early repayment, but check your specific agreement before signing.",
        },
      ],
    },
  ],
};

export default content;
