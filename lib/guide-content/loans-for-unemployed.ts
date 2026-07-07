import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Between jobs doesn't automatically mean no loan. Here's what income actually counts in Canada, and how to apply if you're currently unemployed.",
  blocks: [
    { type: "heading", level: 2, text: "Can You Borrow Without a Job?" },
    {
      type: "paragraph",
      text: "It's harder without traditional employment, but far from impossible. Lenders mainly want confidence you can repay — a paycheque is one way to show that, but not the only one.",
    },
    {
      type: "paragraph",
      text: "Many Canadian lenders accept EI, CPP, OAS, disability benefits, rental income, spousal support, or investment income as valid proof of ability to pay. What matters is that it's consistent and verifiable.",
    },
    {
      type: "paragraph",
      text: "Your odds improve considerably if you can show your alternative income covers both the new payment and your existing living costs, with some room to spare.",
    },

    { type: "heading", level: 2, text: "Income Sources Lenders Often Accept" },
    {
      type: "list",
      items: [
        "Employment Insurance (EI) benefits",
        "CPP or QPP",
        "Old Age Security (OAS)",
        "Provincial disability benefits or CPPD",
        "Workers' compensation",
        "Court-ordered child or spousal support",
        "Rental income from property you own",
        "Investment dividends or interest",
        "Freelance or gig income, with documentation",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply Without a Traditional Job" },
    {
      type: "paragraph",
      text: "The application looks similar to any other, just with more weight on proving your income.",
    },
    {
      type: "paragraph",
      text: "Gather whatever documents back up your income — benefit letters, bank statements showing regular deposits, tax returns, or support-payment court orders. More documentation generally means a stronger application.",
    },
    {
      type: "paragraph",
      text: "Be straightforward on the application — misrepresenting your employment or income is fraud, and it gets caught. Most applications have a field specifically for non-employment income.",
    },
    {
      type: "callout",
      text: "List every income source, not just the main one — EI plus freelance work combined can be enough to qualify even if neither alone would be.",
    },

    { type: "heading", level: 2, text: "What Helps and What Hurts" },
    {
      type: "list",
      items: [
        "A strong credit history goes a long way",
        "Low existing debt (under roughly 40% debt-to-income)",
        "Savings or other assets that show financial stability",
        "A co-signer with stable employment and good credit",
        "Collateral for a secured loan",
        "A recent, short employment gap reads better than long-term unemployment",
      ],
    },

    { type: "heading", level: 2, text: "Rates and Amounts to Expect" },
    {
      type: "paragraph",
      text: "Lenders view unemployed borrowers as higher risk, so rates run higher — typically 25% to 35% APR. A secured loan or a co-signer can bring that down.",
    },
    {
      type: "paragraph",
      text: "Amounts also tend to be smaller, generally $300 to $3,000.",
    },

    { type: "heading", level: 2, text: "Other Options Worth Checking First" },
    {
      type: "list",
      items: [
        "EI, which covers up to 55% of previous earnings",
        "Provincial social assistance programs",
        "Emergency assistance and social services",
        "Food banks and community organizations",
        "Free non-profit credit counselling",
        "Negotiating a payment deferral directly with existing creditors",
        "Community micro-loan programs",
      ],
    },

    { type: "heading", level: 2, text: "The Real Risk of Borrowing While Unemployed" },
    {
      type: "paragraph",
      text: "Without stable income, default risk is genuinely higher, and a default would set your credit back further at exactly the wrong time.",
    },
    {
      type: "paragraph",
      text: "Only borrow with a clear repayment plan in mind — re-employment on the horizon, ongoing benefits, or another concrete path. Using debt to cover basic living costs during extended unemployment can spiral quickly.",
    },
    {
      type: "paragraph",
      text: "If unemployment and existing debt are colliding, a non-profit credit counsellor can help map out options — a debt management plan, creditor negotiation, or, in serious cases, formal insolvency options.",
    },

    {
      type: "faq",
      items: [
        {
          question: "Can I get a loan on unemployment benefits?",
          answer:
            "Yes — many lenders accept EI, CPP/QPP, OAS, and disability benefits as valid income, as long as it's consistent and sufficient to cover the payment plus your existing expenses.",
        },
        {
          question: "Do I need a co-signer?",
          answer:
            "Not necessarily, but it strengthens your application considerably, alongside a solid credit history, low existing debt, and any savings or collateral you can offer.",
        },
        {
          question: "How much can I borrow while unemployed?",
          answer:
            "Generally $300 to $3,000, at rates typically between 25% and 35% APR. A co-signer or secured loan can improve both the amount and the rate.",
        },
        {
          question: "What if I just lost my job?",
          answer:
            "A short, recent gap is viewed far more favourably than long-term unemployment. EI covering up to 55% of prior earnings is often recognized as verifiable income in the meantime.",
        },
        {
          question: "Will borrowing while unemployed hurt my credit?",
          answer:
            "It can if you can't keep up with payments — default risk is higher without stable income. Only borrow with a genuine repayment plan in place.",
        },
      ],
    },
  ],
};

export default content;
