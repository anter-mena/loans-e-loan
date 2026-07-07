import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A side-by-side look at Canada's major personal loan lenders — rates, funding speed, credit requirements, and where each one fits — so you can compare in a couple of minutes.",
  blocks: [
    { type: "heading", level: 2, text: "Major Canadian Lenders, Compared" },
    {
      type: "paragraph",
      text: "The table below covers the lenders we see most often in this space. All operate across most of Canada (exceptions noted where relevant), stay within the federal 35% APR cap, and fund via Interac e-Transfer once you're approved. Rates listed are starting points — your actual offer will hinge on credit, income, and province.",
    },
    {
      type: "table",
      headers: ["Lender", "Starting APR", "Loan Range", "Min. Credit", "Funding"],
      rows: [
        ["Spring Financial", "9.99%", "$500 – $35,000", "No minimum", "Same-day e-Transfer"],
        ["Loans Canada (network of 60+)", "9.90%", "$300 – $50,000", "300+", "1–2 business days"],
        ["Fairstone", "19.99%", "$500 – $50,000", "560+", "1–2 business days"],
        ["Mogo", "9.90%", "$500 – $35,000", "500+", "Next business day"],
        ["easyfinancial", "29.99%", "$500 – $20,000", "No minimum", "Same-day"],
        ["LoanConnect (broker)", "8.99%", "$500 – $50,000", "300+", "24–48 hours"],
      ],
    },
    { type: "heading", level: 3, text: "How We Rank These" },
    {
      type: "paragraph",
      text: "Five weighted factors go into the ranking: APR (30%), funding speed (20%), credit flexibility (20%), fee transparency (15%), and reputation for customer service (15%). Placement isn't for sale — the order reflects fit for borrowers, not what any lender pays us.",
    },

    { type: "heading", level: 2, text: "What Actually Makes a Loan \"Good\"" },
    {
      type: "paragraph",
      text: "A strong personal loan combines a competitive rate, clear fees, a term that fits your budget, and an application that doesn't waste your time. In Canada, loans in this category typically run $300 to $5,000, with APRs anywhere from 6% to 35% depending on credit.",
    },
    {
      type: "paragraph",
      text: "Don't stop at the headline rate. Origination fees, late penalties, and prepayment charges all factor into what you'll actually pay — sometimes a slightly higher rate with no fees ends up cheaper than a lower rate buried in extra costs.",
    },
    {
      type: "paragraph",
      text: "The Financial Consumer Agency of Canada requires lenders to spell out the APR and every associated fee upfront, precisely so you can make an apples-to-apples comparison.",
    },
    {
      type: "list",
      items: [
        "A rate that's competitive for your credit tier",
        "Little to no origination fee",
        "Flexible terms, roughly 12 to 60 months",
        "Fast decisions and funding — often same-day",
        "A soft-check pre-qualification option",
        "Proper licensing in your province",
      ],
    },
    {
      type: "callout",
      text: "Get quotes from at least 3-5 lenders before you commit. Soft-check pre-qualification shows you real numbers without touching your Equifax or TransUnion score.",
    },

    { type: "heading", level: 2, text: "The Mechanics" },
    {
      type: "paragraph",
      text: "A personal loan hands you a lump sum that you repay in equal installments over a fixed period — unlike a credit card, it has a defined end date, which makes it easier to plan around.",
    },
    {
      type: "paragraph",
      text: "Most of these loans in Canada are unsecured, so no collateral changes hands; approval rests on your income, credit history, debt load, and job stability. A smaller group of lenders offer secured versions backed by a vehicle or savings, usually at a better rate.",
    },
    {
      type: "paragraph",
      text: "The process itself: submit your details, get soft-checked for pre-qualification, compare what comes back, pick one, and get funded — often within a day or two, entirely online.",
    },

    { type: "heading", level: 2, text: "What Rates Look Like" },
    {
      type: "paragraph",
      text: "Rates swing widely based on credit, income, and lender — roughly 6% APR at the top of the credit spectrum up to the legal 35% ceiling at the bottom.",
    },
    {
      type: "paragraph",
      text: "That 35% figure comes from the Criminal Code, which caps the maximum rate for most consumer loans; several provinces layer additional restrictions on top, particularly around payday lending.",
    },
    {
      type: "paragraph",
      text: "Since your credit profile drives the rate so heavily, even a 20-30 point bump to your score before you apply can meaningfully lower what you pay over the life of the loan.",
    },
    {
      type: "table",
      headers: ["Credit Score", "Typical APR", "Monthly Payment ($3K/36mo)"],
      rows: [
        ["Excellent (720+)", "6%–12%", "$91–$100"],
        ["Good (670–719)", "12%–18%", "$100–$108"],
        ["Fair (580–669)", "18%–26%", "$108–$121"],
        ["Poor (below 580)", "26%–35%", "$121–$136"],
      ],
    },

    { type: "heading", level: 2, text: "Who Qualifies" },
    {
      type: "paragraph",
      text: "Every lender sets its own bar, but the baseline requirements tend to look similar across the board.",
    },
    {
      type: "paragraph",
      text: "You'll generally need to be 18 or 19+ depending on province, a citizen or permanent resident, have an active bank account, and show regular income — employment, self-employment, benefits like EI or CPP, or even rental income all count for most lenders.",
    },
    {
      type: "paragraph",
      text: "A stronger score helps with rate and approval odds, but plenty of lenders in this network specifically work with fair or poor credit files.",
    },
    {
      type: "list",
      items: [
        "Minimum age: 18-19, depending on province",
        "Canadian citizen or permanent resident",
        "An active bank account",
        "A verifiable source of income",
        "Debt-to-income ratio under roughly 40-50%",
        "Valid government-issued ID",
      ],
    },

    { type: "heading", level: 2, text: "What Actually Drives the Decision" },
    {
      type: "paragraph",
      text: "Credit score matters a lot, but it's never the whole story. Lenders also weigh your payment history, the mix of credit types you've used, total outstanding debt, and how long your accounts have been open.",
    },
    {
      type: "paragraph",
      text: "Consistency of income counts as much as the amount. If you've recently switched jobs, having your employment history and current pay documented helps reassure an underwriter.",
    },
    {
      type: "paragraph",
      text: "Your debt-to-income ratio — the share of monthly income already going to debt payments — is another key factor. Most lenders prefer to see it at 40% or below, though a strong file elsewhere can offset a higher number.",
    },

    { type: "heading", level: 2, text: "Where to Actually Borrow From" },
    {
      type: "paragraph",
      text: "Canada's market spans major banks like RBC, TD, and BMO, credit unions, and a growing online-lending segment — each with a different profile of who they serve best.",
    },
    {
      type: "paragraph",
      text: "Online platforms tend to move fastest and flex most on credit requirements; credit unions often reward members with better pricing; banks generally save their sharpest rates for existing customers with strong credit.",
    },
    {
      type: "paragraph",
      text: "A comparison platform lets you see pre-qualified offers from several lenders through one application, rather than settling for whichever one you happened to apply to first.",
    },
    {
      type: "callout",
      text: "One application, multiple pre-qualified offers — that's the practical case for using a comparison platform instead of applying lender by lender.",
    },

    { type: "heading", level: 2, text: "How Fast Funding Actually Happens" },
    {
      type: "paragraph",
      text: "Online lenders frequently return a decision within minutes and fund within one to two business days — some same-day.",
    },
    {
      type: "paragraph",
      text: "Interac e-Transfer has made same-day funding fairly routine among online lenders; traditional banks tend to run two to five business days for a direct deposit. Actual timing depends on the lender, your bank, and whether extra verification is needed.",
    },
    {
      type: "paragraph",
      text: "Having your ID, recent pay stubs, a couple months of bank statements, and proof of address ready before you apply shaves real time off the process.",
    },

    { type: "heading", level: 2, text: "Borrowing Responsibly" },
    {
      type: "paragraph",
      text: "A personal loan is a useful tool, but only if the payment fits comfortably into your actual budget. Overextending leads to missed payments and credit damage fast.",
    },
    {
      type: "paragraph",
      text: "Before you apply, build a realistic budget that includes the new payment alongside rent, utilities, groceries, and whatever else you're already paying down.",
    },
    {
      type: "paragraph",
      text: "Be skeptical of any lender promising approval no matter what, or pushing you to borrow more than you asked for — a legitimate lender assesses your ability to repay rather than encouraging overborrowing.",
    },
    {
      type: "list",
      items: [
        "Don't borrow more than you can realistically repay",
        "Read the entire agreement before signing anything",
        "Watch for origination charges and prepayment penalties buried in the fine print",
        "A missed payment will show up on your credit report",
        "Avoid using a loan like this for discretionary spending",
      ],
    },

    { type: "heading", level: 2, text: "When Something Else Makes More Sense" },
    {
      type: "paragraph",
      text: "A personal loan isn't always the right tool. Depending on what you need, one of these might serve you better.",
    },
    {
      type: "paragraph",
      text: "Options worth a look include a credit union loan, a line of credit, a 0% intro-APR balance transfer card, borrowing from your RRSP under the Home Buyers' Plan, or a relevant government program. Non-profit credit counselling can also help map out a plan.",
    },
    {
      type: "paragraph",
      text: "If debt consolidation is the actual goal, a 0% intro balance-transfer card can save more in interest — provided you can clear the balance before the promo period ends.",
    },
    {
      type: "list",
      items: [
        "A line of credit from your bank or credit union",
        "0% intro-APR balance transfer cards",
        "Credit union loans (often cheaper for members)",
        "Direct payment plans from medical providers or service companies",
        "Relevant government programs",
        "Non-profit credit counselling services",
      ],
    },

    { type: "heading", level: 2, text: "How to Actually Compare Offers" },
    {
      type: "paragraph",
      text: "Line offers up side by side and focus on the total cost of borrowing, not just the monthly payment or the headline rate in isolation.",
    },
    {
      type: "paragraph",
      text: "Get pre-qualified with a handful of lenders first — a soft check won't touch your score. Compare APR (fees included), term length, total repayment amount, and any early-payoff penalty.",
    },
    {
      type: "paragraph",
      text: "Look at the lender's track record too: reviews, their complaint history with the Better Business Bureau, and confirmation they're licensed in your province.",
    },
    {
      type: "paragraph",
      text: "And trust your gut — if an offer feels too good, or a lender is rushing you, slow down and dig deeper before signing anything.",
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the best personal loan in Canada right now?",
          answer:
            "There's no single best option — it comes down to your credit profile and needs. We compare lenders like Spring Financial, Loans Canada, Fairstone, Mogo, easyfinancial, and LoanConnect on rate, funding speed, credit flexibility, fee transparency, and reputation to help narrow it down.",
        },
        {
          question: "How fast can I get approved for a personal loan?",
          answer:
            "Many online lenders decide within minutes and fund within one to two business days; some offer same-day funding via Interac e-Transfer.",
        },
        {
          question: "What credit score do I need for a personal loan in Canada?",
          answer:
            "It varies by lender — some, like Spring Financial and easyfinancial, have no stated minimum, while others like Fairstone and Mogo look for scores around 500-560+. Your score mostly affects your rate rather than whether you're eligible at all.",
        },
        {
          question: "Will applying hurt my credit score?",
          answer:
            "Pre-qualification runs a soft check, which leaves your Equifax or TransUnion score untouched — that's how you can compare real offers before committing to a formal application.",
        },
        {
          question: "How much can I borrow with a personal loan?",
          answer:
            "Typically $300 to $5,000 in Canada, though some lenders in this comparison go higher depending on your credit and income.",
        },
        {
          question: "Are personal loans regulated in Canada?",
          answer:
            "Yes — the Criminal Code caps rates at 35% APR, the Financial Consumer Agency of Canada requires full fee disclosure, and lenders must be licensed in every province they operate in.",
        },
      ],
    },
  ],
};

export default content;
