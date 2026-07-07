import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A plain-language walkthrough of how personal loans work in Canada — what they cost, who qualifies, and how to compare offers before you sign anything.",
  blocks: [
    { type: "heading", level: 2, text: "What Exactly Is a Personal Loan?" },
    {
      type: "paragraph",
      text: "Think of a personal loan as the opposite of a credit card: instead of an open-ended line you draw against, you get one lump sum upfront and pay it back in equal installments — usually somewhere between one and five years. The rate is locked in when you sign, so your payment doesn't move around from month to month the way a credit card minimum can.",
    },
    {
      type: "paragraph",
      text: "Canadian lenders in this space typically write loans anywhere from $300 up to $5,000, though the exact ceiling depends on the lender and what your application looks like. Because the money isn't tied to a specific purchase, borrowers use it for everything from a transmission repair to a security deposit.",
    },
    {
      type: "callout",
      text: "Bottom line: you get a fixed payment you can plan around, and the funds aren't restricted to one use.",
    },

    { type: "heading", level: 2, text: "The Main Varieties You'll Run Into" },
    { type: "heading", level: 3, text: "Unsecured" },
    {
      type: "paragraph",
      text: "Nothing pledged as collateral — the lender is underwriting your income and credit history alone. This is the default choice if your credit is solid and you'd rather not put an asset on the line.",
    },
    { type: "heading", level: 3, text: "Secured" },
    {
      type: "paragraph",
      text: "You pledge something — a car, a savings certificate — in exchange for a lower rate. Makes sense if your credit is shakier and you have something to offer as security.",
    },
    { type: "heading", level: 3, text: "Debt consolidation" },
    {
      type: "paragraph",
      text: "One loan replaces several existing balances, so you're managing a single monthly payment instead of juggling three or four due dates.",
    },
    { type: "heading", level: 3, text: "Emergency" },
    {
      type: "paragraph",
      text: "Built for speed rather than size — the priority is getting money to you fast when something urgent comes up.",
    },
    { type: "heading", level: 3, text: "Payday alternative loans (PALs)" },
    {
      type: "paragraph",
      text: "Offered through credit unions as a cheaper substitute for a payday loan — only available if you're already a member.",
    },

    { type: "heading", level: 2, text: "What Lenders Actually Check" },
    {
      type: "paragraph",
      text: "Every lender weighs the same handful of factors, just with different thresholds. Hitting these marks won't guarantee approval, but it puts you in a much stronger position:",
    },
    { type: "heading", level: 3, text: "Credit score" },
    { type: "paragraph", text: "A score in the 580+ range clears most lenders' bar, though a number of them will still work with you below that." },
    { type: "heading", level: 3, text: "Consistent income" },
    { type: "paragraph", text: "Doesn't need to be a traditional paycheque — benefits, pension, or self-employment income can all count, as long as you can document it." },
    { type: "heading", level: 3, text: "Debt load relative to income" },
    { type: "paragraph", text: "Keep your total monthly debt obligations under roughly 40-50% of what you bring in." },
    { type: "heading", level: 3, text: "Job tenure" },
    { type: "paragraph", text: "Three to six months in your current role is the rough minimum most underwriters look for." },
    { type: "heading", level: 3, text: "A working bank account" },
    { type: "paragraph", text: "You'll need somewhere for the funds to land and the payments to come out of." },

    { type: "heading", level: 2, text: "Applying, Start to Finish" },
    {
      type: "list",
      ordered: true,
      items: [
        "Pull your credit report first — catch any errors before a lender does.",
        "Get quotes from more than one lender; rates on identical profiles can vary a lot.",
        "Line up your ID, income proof, and bank statements ahead of time so you're not scrambling mid-application.",
        "Fill out the application carefully — small mistakes can slow things down or trigger a denial.",
        "Read the fine print on every offer you get, not just the headline rate.",
        "Once you accept, funds typically land within one to two business days.",
      ],
    },

    { type: "heading", level: 2, text: "What Rates Actually Look Like" },
    {
      type: "paragraph",
      text: "Your rate depends on your credit profile, which lender you use, and where rates sit broadly in the market. Canada's Criminal Code caps the effective annual rate at 35%, and in practice most 2026 offers land somewhere between 6% and that ceiling.",
    },
    {
      type: "table",
      headers: ["Credit Score Range", "Typical APR Range", "Monthly Payment (on $3,000)"],
      rows: [
        ["Excellent (720+)", "6% - 12%", "$86 - $95"],
        ["Good (670-719)", "12% - 18%", "$95 - $105"],
        ["Fair (580-669)", "18% - 26%", "$105 - $120"],
        ["Poor (Below 580)", "26% - 35%", "$120 - $140"],
      ],
    },
    {
      type: "callout",
      text: "These figures assume a 36-month term — your actual offer will depend on the lender and your specific file.",
    },

    { type: "heading", level: 2, text: "Where Your Score Puts You" },
    {
      type: "paragraph",
      text: "Credit score isn't the only input, but it moves the needle more than almost anything else:",
    },
    {
      type: "list",
      items: [
        "720+: You're shopping from a position of strength, with the best rates on the table.",
        "670-719: Still a comfortable range with solid, competitive offers.",
        "580-669: Approvable, but expect the rate to reflect the added risk.",
        "Below 580: Fewer lenders in play — a secured loan or a credit-builder product may be more realistic.",
      ],
    },
    { type: "heading", level: 3, text: "Not Sure What Your Score Is?" },
    {
      type: "paragraph",
      text: "Equifax and TransUnion Canada both let you pull your score at no cost, and apps like Borrowell give you ongoing free tracking.",
    },

    { type: "heading", level: 2, text: "Weighing the Trade-Offs" },
    { type: "heading", level: 3, text: "What works in their favour" },
    {
      type: "list",
      items: [
        "A payment that doesn't change makes budgeting simpler",
        "Generally cheaper than carrying a credit card balance",
        "No restrictions on what the money's used for",
        "On-time payments get reported and can help your credit over time",
        "Funding often arrives within a day or two of approval",
        "Unsecured options don't require you to risk an asset",
      ],
    },
    { type: "heading", level: 3, text: "Where they fall short" },
    {
      type: "list",
      negative: true,
      items: [
        "Weaker credit means a noticeably higher rate",
        "Some lenders tack on origination fees",
        "It's still new debt on top of whatever you already owe",
        "A missed payment dings your score",
        "A few lenders penalize paying the loan off early",
        "Loan ceilings are lower than what a secured product might offer",
      ],
    },

    { type: "heading", level: 2, text: "Other Options Worth a Look First" },
    {
      type: "paragraph",
      text: "A personal loan isn't the only tool available — a few alternatives worth ruling out first:",
    },
    {
      type: "list",
      items: [
        "0% intro APR credit card: works if you're confident you can clear the balance inside the promo window (typically 12-21 months).",
        "Home equity loan or HELOC: cheaper borrowing if you own property, but you're putting that property up as security.",
        "Credit union loans: membership often unlocks better pricing and more flexible terms than a bank.",
        "Borrowing from someone you know: no interest, but be clear-eyed about what it could do to the relationship if repayment gets messy.",
        "Provider payment plans: many clinics and retailers offer interest-free installments directly, skipping the loan altogether.",
      ],
    },

    { type: "heading", level: 2, text: "Ten Ways to Improve Your Odds" },
    {
      type: "list",
      ordered: true,
      items: [
        "Pull your credit report and dispute anything that looks wrong",
        "Pay down existing balances to improve your debt-to-income ratio",
        "Hold off on other credit applications right before you apply",
        "Bring in a co-signer if your own credit is thin",
        "Get quotes from several lenders rather than taking the first offer",
        "Use pre-qualification tools first — they typically only run a soft check",
        "Have your documents ready before you start the application",
        "Fill out every field accurately — mismatches are a common reason for denial",
        "Look at secured options if unsecured offers aren't coming through",
        "Borrow the amount you actually need, not the maximum you're offered",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What credit score do I need for a personal loan in Canada?",
          answer:
            "Requirements differ by lender, but 580 is a common baseline. Some lenders in our network will still consider applicants in the 500-550 range, typically at a higher rate to offset the risk.",
        },
        {
          question: "How quickly can I get approved?",
          answer:
            "Most online lenders can give you a pre-qualification decision within minutes. Once approved, funding usually arrives in one to two business days, and some lenders offer same-day deposits.",
        },
        {
          question: "How much can I borrow with a personal loan?",
          answer:
            "Our network covers $300 to $5,000. Where you land in that range depends on your income, credit profile, and the individual lender's criteria.",
        },
        {
          question: "What can I use a personal loan for?",
          answer:
            "Whatever you need — consolidating debt, a medical bill, car or home repairs, a move, an emergency expense, or a larger purchase you'd rather not put on a card.",
        },
        {
          question: "Will applying hurt my credit score?",
          answer:
            "Pre-qualification usually runs a soft check, which leaves your score untouched. A hard inquiry only happens once you formally accept an offer, and even then the dip is typically small and temporary.",
        },
        {
          question: "What's the difference between APR and interest rate?",
          answer:
            "The interest rate is just the cost of borrowing the principal. APR wraps in the interest rate plus any additional fees, so it's the more honest number to compare across lenders.",
        },
      ],
    },
  ],
};

export default content;
