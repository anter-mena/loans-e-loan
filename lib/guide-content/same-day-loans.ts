import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Need cash today in Canada? Here's how same-day loans actually work, what they cost, and how to borrow responsibly when time is tight.",
  blocks: [
    { type: "heading", level: 2, text: "What a Same-Day Loan Actually Is" },
    {
      type: "paragraph",
      text: "These are short-term, unsecured loans built around speed — usually a few hundred to a couple thousand dollars, meant to be repaid within weeks or by your next payday. Compared to a bank loan's days-or-weeks timeline, the whole point here is getting you funded fast.",
    },
    {
      type: "paragraph",
      text: "The process is simple: apply online or in person, the lender assesses you quickly using more than just your credit score (income stability matters a lot too), and if approved, funds typically arrive by e-transfer within hours — sometimes minutes — of signing. Repayment is usually a pre-authorized debit tied to your next payday.",
    },

    { type: "heading", level: 2, text: "Who These Loans Actually Suit" },
    {
      type: "paragraph",
      text: "Best fit: a genuine emergency with a clear repayment plan already in mind — a car repair, a surprise medical bill, an urgent home fix. They're also a realistic option if imperfect credit has closed the door on a traditional bank loan.",
    },
    {
      type: "paragraph",
      text: "Important to keep in mind: this isn't a long-term fix. It bridges a temporary gap. If you're regularly reaching for one of these, that's a sign to look at budgeting help or credit counselling instead.",
    },

    { type: "heading", level: 2, text: "What They Cost" },
    {
      type: "paragraph",
      text: "Rates run noticeably higher than a standard loan, given the short-term, unsecured, fast-funded nature of the product. The Criminal Code caps annual interest at 35% nationally, though provincial rules vary on top of that.",
    },
    {
      type: "paragraph",
      text: "Ontario, Alberta, and BC all cap payday-style borrowing at $15 per $100. That sounds small, but a $15 fee on a two-week $100 loan works out to roughly 391% APR once annualized — always check your specific province's rules before committing. Terms are typically just days to a couple of weeks, timed to your next paycheque.",
    },

    { type: "heading", level: 2, text: "Qualifying and Applying" },
    {
      type: "paragraph",
      text: "The bar is lower than a traditional bank loan. Most lenders want:",
    },
    {
      type: "list",
      items: [
        "At least 18 years old",
        "Canadian residency",
        "An active bank account",
        "A regular income source — employment, benefits, or similar",
      ],
    },
    {
      type: "paragraph",
      text: "The application is usually quick and online, asking for:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Personal details — name, address, date of birth, contact info",
        "Income proof — recent pay stubs or bank statements",
        "Banking details for deposit and repayment setup",
      ],
    },
    {
      type: "paragraph",
      text: "Lenders operating in Canada are bound by PIPEDA to protect your personal information — stick with a lender whose privacy policy is clearly stated.",
    },

    { type: "heading", level: 2, text: "Weighing the Trade-Offs" },
    { type: "heading", level: 3, text: "In favour" },
    {
      type: "list",
      items: [
        "Funds often available within hours",
        "More accessible than a traditional loan, especially with imperfect credit",
        "A streamlined, fully online process",
      ],
    },
    { type: "heading", level: 3, text: "Trade-offs" },
    {
      type: "list",
      negative: true,
      items: [
        "Cost is the biggest downside — significantly more than other loan types",
        "Short terms can create a repayment cycle if not managed carefully",
        "Missing a payment lets fees and interest pile up fast",
      ],
    },
    {
      type: "paragraph",
      text: "Compared to a personal line of credit from a major bank, same-day loans cost more and repay faster — a line of credit offers a better rate and more flexibility, but usually needs stronger credit and a longer approval process. A credit card cash advance is a similarly fast but somewhat cheaper alternative in many cases.",
    },

    { type: "heading", level: 2, text: "Finding a Good One" },
    {
      type: "list",
      ordered: true,
      items: [
        "Check your provincial regulator's rules on maximum fees and rates",
        "Compare several lenders rather than taking the first offer",
        "Read the full agreement — principal, rate, fees, and schedule — before signing",
        "Borrow only the exact amount you need",
        "Have a realistic plan to repay on time",
        "Check the lender's reviews and reputation",
      ],
    },
    {
      type: "paragraph",
      text: "Same-day loans can genuinely help with an urgent need, but the cost is real. Understanding the terms, comparing lenders, and having a repayment plan going in makes the difference between a useful bridge and a costly mistake.",
    },

    {
      type: "faq",
      items: [
        {
          question: "Can I really get a loan the same day I apply?",
          answer:
            "Often, yes. Lenders assess eligibility quickly using more than your credit score, and funds usually arrive via e-transfer within hours — sometimes minutes — of signing.",
        },
        {
          question: "What do I need to apply for a same-day loan?",
          answer:
            "Personal details, income proof like recent pay stubs or bank statements, and your banking information for deposit and repayment.",
        },
        {
          question: "What are the requirements for same-day loan approval?",
          answer:
            "Generally 18+, Canadian residency, an active bank account, and a regular income source such as employment or benefits.",
        },
        {
          question: "How much can I borrow with a same-day loan?",
          answer:
            "Typically a few hundred to a couple thousand dollars, repaid within weeks or by your next payday.",
        },
        {
          question: "Are same-day loans more expensive than regular loans?",
          answer:
            "Yes, meaningfully — the short-term, unsecured, fast-funded structure drives the cost up. The Criminal Code caps annual interest at 35%, but per-$100 fee structures on short terms can still translate to very high effective APRs, so always check the total cost before committing.",
        },
      ],
    },
  ],
};

export default content;
