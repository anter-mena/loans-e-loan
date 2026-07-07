export type ComparisonIconName =
  | "Banknote"
  | "Scale"
  | "Shield"
  | "TrendingUp"
  | "Clock"
  | "CalendarDays"
  | "RefreshCw"
  | "Percent"
  | "CreditCard"
  | "Handshake"
  | "FileCheck"
  | "Award"
  | "Users"
  | "Landmark"
  | "Building2"
  | "Globe";

export type ComparisonOption = {
  name: string;
  pros: string[];
  cons: string[];
  bestFor: string;
};

export type ComparisonTableRow = {
  feature: string;
  a: string;
  b: string;
  winner: "a" | "b" | "none";
};

export type ComparisonFaq = {
  question: string;
  answer: string;
};

export type ComparisonEntry = {
  slug: string;
  title: string;
  description: string;
  subtitle: string;
  icon: ComparisonIconName;
  optionA: ComparisonOption;
  optionB: ComparisonOption;
  table: ComparisonTableRow[];
  chooseA: string[];
  chooseB: string[];
  faq: ComparisonFaq[];
};

export const exploreMoreLinks = [
  { label: "Loan Guides", href: "/resources/guides" },
  { label: "Compare Options", href: "/resources/comparisons" },
  { label: "Loan Calculator", href: "/resources/tools" },
  { label: "Check Your Rate", href: "/#apply" },
];

export const comparisons: ComparisonEntry[] = [
  {
    slug: "loans-vs-credit-cards",
    title: "Personal Loans vs Credit Cards",
    description: "Compare the pros and cons of personal loans versus credit cards to determine which is better for your financial situation.",
    subtitle: "Trying to decide between a personal loan and a credit card? Here's a comprehensive comparison to help you make the right choice for your financial situation.",
    icon: "Scale",
    optionA: {
      name: "Personal Loan",
      pros: [
        "Fixed interest rate — payments never change",
        "Clear payoff date — debt-free timeline",
        "Lower rates for good credit",
        "Lump sum for large expenses",
      ],
      cons: ["No rewards or perks", "Can't reborrow once paid"],
      bestFor: "Debt consolidation, home improvements, medical bills, major purchases",
    },
    optionB: {
      name: "Credit Card",
      pros: [
        "Revolving credit — reuse as you pay",
        "Rewards, cash back, and perks",
        "0% intro APR offers available",
        "Purchase protection & benefits",
      ],
      cons: ["Higher interest rates (usually 20%+)", "Easy to stay in debt indefinitely"],
      bestFor: "Everyday spending, building credit, small purchases paid off monthly",
    },
    table: [
      { feature: "Interest Rate", a: "6-35% APR (fixed)", b: "19.99-22.99% APR (variable)", winner: "a" },
      { feature: "Payment Type", a: "Fixed monthly payment", b: "Minimum + variable", winner: "a" },
      { feature: "Payoff Timeline", a: "Set end date (12-72 months)", b: "No set timeline", winner: "a" },
      { feature: "Credit Utilization Impact", a: "Doesn't affect", b: "Can hurt score if high", winner: "a" },
      { feature: "Flexibility", a: "Fixed amount", b: "Revolving credit line", winner: "b" },
      { feature: "Rewards/Perks", a: "None", b: "Cash back, points, etc.", winner: "b" },
      { feature: "Best For", a: "Large one-time expenses", b: "Small recurring purchases", winner: "none" },
    ],
    chooseA: [
      "You need $2,000 or more",
      "You want predictable monthly payments",
      "You're consolidating high-interest debt",
      "You have a specific payoff goal",
      "You want to improve credit mix",
    ],
    chooseB: [
      "You need under $2,000",
      "You can pay off balance monthly",
      "You qualify for 0% intro APR",
      "You want to earn rewards",
      "You need ongoing access to credit",
    ],
    faq: [
      { question: "When should I use a personal loan instead of a credit card?", answer: "A personal loan makes the most sense when you have a specific, larger expense in mind and want a fixed rate with a clear payoff date, especially for amounts of $2,000 or more." },
      { question: "Are personal loans better for debt consolidation?", answer: "Often, yes. Rolling high-interest credit card balances into one fixed-rate personal loan payment can lower your overall interest cost and give you a clear payoff timeline." },
      { question: "Do personal loans hurt your credit score more than credit cards?", answer: "Not inherently. Both affect your credit through payment history, but a personal loan doesn't count toward your credit utilization ratio the way a credit card balance does." },
      { question: "What's the average interest rate difference?", answer: "Personal loan rates in our network typically range from about 6% to 35% APR, while credit cards commonly range from roughly 20% to 23% APR, especially once you carry a balance." },
      { question: "Can I use both a personal loan and credit cards?", answer: "Yes, many people use a personal loan for larger, planned expenses while keeping a credit card for everyday spending they pay off monthly." },
    ],
  },
  {
    slug: "payday-vs-personal-loans",
    title: "Payday Loans vs Personal Loans",
    description: "Detailed comparison of costs, terms, and risks. Learn why personal loans are almost always the better choice.",
    subtitle: "Considering a payday loan for a short-term cash need? Here's why a personal loan is almost always the safer, cheaper alternative.",
    icon: "Banknote",
    optionA: {
      name: "Payday Loan",
      pros: ["Fast access to cash, often same day", "Minimal approval requirements", "No credit check at most lenders"],
      cons: [
        "Extremely high fees, often 300%+ effective APR",
        "Repayment due in as little as two weeks",
        "Can trap you in a cycle of re-borrowing",
        "Doesn't help build your credit",
      ],
      bestFor: "True last-resort, very small, very short-term emergencies",
    },
    optionB: {
      name: "Personal Loan",
      pros: [
        "Fixed interest rate, disclosed upfront",
        "Realistic repayment term of months, not weeks",
        "Reported to credit bureaus, can help build credit",
        "Larger amounts available, $200 to $5,000",
      ],
      cons: ["Requires a short application and approval step", "May involve a credit check for final approval"],
      bestFor: "Emergency expenses, debt consolidation, larger one-time costs",
    },
    table: [
      { feature: "Cost of Borrowing", a: "Very high, effective APR can exceed 300%", b: "6-35% APR (fixed)", winner: "b" },
      { feature: "Repayment Window", a: "About 2 weeks", b: "6-72 months", winner: "b" },
      { feature: "Loan Amount", a: "Small, tied to your paycheque", b: "$200 - $5,000", winner: "b" },
      { feature: "Credit Check", a: "Rarely required", b: "Soft pull to check your rate", winner: "b" },
      { feature: "Credit Building", a: "Rarely reported", b: "Can help build credit with on-time payments", winner: "b" },
      { feature: "Best For", a: "Very small, urgent shortfalls", b: "Larger or recurring expenses", winner: "none" },
    ],
    chooseA: [
      "You need a very small amount before your next paycheque",
      "You have exhausted all other options",
      "You're certain you can repay in full within two weeks",
      "No other credit is available to you at all",
      "You understand and accept the very high cost",
    ],
    chooseB: [
      "You need more time to repay than two weeks",
      "You want to know your exact fixed payment upfront",
      "You want the option to build your credit",
      "You need more than a few hundred dollars",
      "You want a lender that discloses all fees before you accept",
    ],
    faq: [
      { question: "Are payday loans ever a good idea?", answer: "Payday loans are best reserved for genuine, very short-term emergencies where no other option exists, given how quickly the fees add up. In almost every other case, a personal loan with a realistic repayment term will cost you significantly less." },
      { question: "Will a personal loan approval take longer than a payday loan?", answer: "Not by much. Many lenders in our network can approve and fund a personal loan within a day or two, and checking your rate with a soft credit pull takes just minutes." },
      { question: "Can I use a personal loan to pay off a payday loan?", answer: "Yes, using a personal loan to pay off an existing payday loan is a common way to escape the short repayment cycle and move to a more manageable fixed monthly payment." },
      { question: "Do payday loans affect my credit score?", answer: "Most payday lenders don't report to the major credit bureaus, so on-time payments won't help your score, but unpaid balances sent to collections can still hurt it." },
      { question: "What credit score do I need for a personal loan instead?", answer: "There's no fixed minimum. Ask4Loan works with a network of lenders who consider all credit types, including borrowers who might otherwise turn to a payday loan." },
    ],
  },
  {
    slug: "secured-vs-unsecured-loans",
    title: "Secured vs Unsecured Loans",
    description: "Understand the key differences between secured and unsecured loans, including requirements, rates, and risks.",
    subtitle: "Not sure whether to put up collateral for a lower rate? Here's how secured and unsecured loans really compare.",
    icon: "Shield",
    optionA: {
      name: "Secured Loan",
      pros: [
        "Usually offers lower interest rates",
        "Easier approval with weaker credit, if you have collateral",
        "Can allow for larger loan amounts",
        "Longer repayment terms often available",
      ],
      cons: [
        "Your collateral is at risk if you default",
        "Takes longer to arrange, collateral must be valued",
        "Not available if you don't own a qualifying asset",
      ],
      bestFor: "Borrowers with a valuable asset who want the lowest possible rate",
    },
    optionB: {
      name: "Unsecured Loan",
      pros: [
        "No collateral or asset required",
        "Faster application and funding",
        "Nothing to repossess if you default",
        "Most personal loans in our network work this way",
      ],
      cons: ["Rates are typically higher than secured options", "Approval depends more heavily on credit and income"],
      bestFor: "Borrowers who want a fast, straightforward loan without risking an asset",
    },
    table: [
      { feature: "Collateral Required", a: "Yes", b: "No", winner: "b" },
      { feature: "Typical Rates", a: "Lower", b: "Higher", winner: "a" },
      { feature: "Approval Speed", a: "Slower, requires valuation", b: "Faster", winner: "b" },
      { feature: "Risk if You Default", a: "Losing the asset", b: "Credit damage, collections", winner: "none" },
      { feature: "Best For", a: "Borrowers with valuable collateral", b: "Borrowers who want simplicity", winner: "none" },
    ],
    chooseA: [
      "You own a qualifying asset like a vehicle",
      "You want the lowest rate available to you",
      "You're comfortable putting that asset at risk",
      "You're borrowing a larger amount",
      "You have weaker credit but valuable collateral",
    ],
    chooseB: [
      "You don't want to risk an asset",
      "You want a faster, simpler application",
      "You have a solid credit and income profile",
      "You're borrowing a smaller, one-time amount",
      "You want to avoid the paperwork of valuing collateral",
    ],
    faq: [
      { question: "Is an unsecured loan riskier for me than a secured loan?", answer: "It's less risky in one sense, since you're not putting a specific asset on the line, but it typically comes with a higher interest rate to offset the lender's added risk." },
      { question: "What can I use as collateral for a secured loan?", answer: "It depends on the lender, but common examples include a vehicle, home equity, or a savings account." },
      { question: "Are most Ask4Loan lender offers secured or unsecured?", answer: "Most personal loans offered through our network are unsecured, meaning you won't need to put up collateral to qualify." },
      { question: "Can I still get approved for an unsecured loan with bad credit?", answer: "Yes. We work with lenders who consider all credit types, though your rate will reflect your credit profile." },
      { question: "What happens if I default on a secured loan?", answer: "The lender can seize and sell the collateral you put up to recover the amount owed, which is why it's important to only borrow what you're confident you can repay." },
    ],
  },
  {
    slug: "fixed-vs-variable-rates",
    title: "Fixed vs Variable Rate Loans",
    description: "Learn about fixed and variable interest rates to choose the right loan structure for your needs.",
    subtitle: "Your interest rate type determines whether your payment stays the same for the life of the loan or can shift with market conditions.",
    icon: "TrendingUp",
    optionA: {
      name: "Fixed Rate",
      pros: [
        "Interest rate stays the same for the life of the loan",
        "Monthly payment never changes",
        "Easier to budget with certainty",
        "Protects you if market rates rise",
      ],
      cons: ["Starting rate can be slightly higher than variable", "You won't benefit if market rates fall"],
      bestFor: "Borrowers who want a predictable payment for the full term",
    },
    optionB: {
      name: "Variable Rate",
      pros: [
        "Can start lower than a fixed rate",
        "You benefit if market rates fall",
        "Sometimes available with flexible extra payments",
      ],
      cons: [
        "Payment can rise if market rates increase",
        "Harder to budget with certainty",
        "Less common on personal loans",
      ],
      bestFor: "Borrowers comfortable with some payment uncertainty",
    },
    table: [
      { feature: "Payment Predictability", a: "Same every month", b: "Can change over time", winner: "a" },
      { feature: "Starting Rate", a: "Often slightly higher", b: "Often starts lower", winner: "b" },
      { feature: "Risk Exposure", a: "None from rate changes", b: "Rate could rise", winner: "a" },
      { feature: "Availability", a: "Most common on personal loans", b: "Less common for personal loans", winner: "a" },
      { feature: "Best For", a: "Borrowers who want certainty", b: "Borrowers comfortable with risk", winner: "none" },
    ],
    chooseA: [
      "You want your payment to stay exactly the same",
      "You're budgeting on a fixed income",
      "You expect interest rates to rise",
      "You want the simplest option to plan around",
      "You're taking out a personal loan, where fixed is standard",
    ],
    chooseB: [
      "You expect interest rates to fall",
      "You can absorb some payment variability",
      "You're comfortable monitoring rate changes",
      "You have a shorter loan term",
      "Your lender offers a meaningfully lower starting rate",
    ],
    faq: [
      { question: "Are personal loans usually fixed or variable rate?", answer: "The large majority of personal loans, including most offers in our lender network, come with a fixed rate." },
      { question: "Can my fixed rate ever change?", answer: "No. Once you accept a fixed-rate offer, that rate is locked in for the full term of the loan." },
      { question: "Is a variable rate ever worth the risk?", answer: "It can be, especially on shorter terms where there's less time for rates to move significantly, but it does introduce uncertainty into your monthly budget." },
      { question: "How do I know which rate type I'm being offered?", answer: "Your rate type is always disclosed clearly in your loan offer before you accept, along with the exact rate and total cost." },
      { question: "Does a variable rate affect my total cost estimate?", answer: "Yes, since the rate can move, your total interest paid isn't fixed the way it is with a fixed-rate loan. Our loan calculator assumes a fixed rate for its estimate." },
    ],
  },
  {
    slug: "short-term-vs-long-term",
    title: "Short-term vs Long-term Loans",
    description: "Understand the trade-offs between short-term and long-term personal loans.",
    subtitle: "The length of your loan term directly trades off between your monthly payment and the total interest you'll pay.",
    icon: "Clock",
    optionA: {
      name: "Short-Term Loan",
      pros: ["Less total interest paid overall", "Debt-free sooner", "Often qualifies for a lower rate"],
      cons: ["Higher monthly payment", "Less room in the monthly budget"],
      bestFor: "Borrowers who can afford a larger payment and want to minimize cost",
    },
    optionB: {
      name: "Long-Term Loan",
      pros: [
        "Lower, more manageable monthly payment",
        "Frees up cash flow for other expenses",
        "Easier to qualify for on a tighter budget",
      ],
      cons: ["More total interest paid over the loan", "Takes longer to become debt-free"],
      bestFor: "Borrowers who need a lower payment to fit their budget",
    },
    table: [
      { feature: "Monthly Payment", a: "Higher", b: "Lower", winner: "b" },
      { feature: "Total Interest Paid", a: "Less", b: "More", winner: "a" },
      { feature: "Time to Pay Off", a: "Faster", b: "Slower", winner: "a" },
      { feature: "Budget Flexibility", a: "Less room", b: "More breathing room", winner: "b" },
      { feature: "Best For", a: "Larger budgets", b: "Tighter budgets", winner: "none" },
    ],
    chooseA: [
      "Your budget can absorb a higher payment",
      "You want to minimize total interest paid",
      "You want to be debt-free as soon as possible",
      "You're borrowing a smaller amount",
      "You qualify for a lower rate on a shorter term",
    ],
    chooseB: [
      "You need the lowest possible monthly payment",
      "You're borrowing a larger amount",
      "You have other financial priorities right now",
      "You want more predictable cash flow",
      "You're comfortable paying more interest for flexibility",
    ],
    faq: [
      { question: "What loan terms does Ask4Loan's network offer?", answer: "Terms typically range from 6 to 72 months, depending on the lender and loan amount." },
      { question: "Does a longer term always mean a higher interest rate?", answer: "Not necessarily, but it does mean more total interest paid overall, since interest accrues for longer, even if the rate itself stays the same." },
      { question: "Can I pay off a long-term loan early to save on interest?", answer: "Many lenders in our network allow early repayment without penalty, but always check the specific terms of your offer." },
      { question: "How do I decide which term is right for me?", answer: "Use our loan calculator to compare a few term lengths side by side and see exactly how the monthly payment and total interest change." },
      { question: "Can I change my loan term after I've accepted an offer?", answer: "Generally no, the term is set once you accept an offer, so it's worth comparing options carefully before you commit." },
    ],
  },
  {
    slug: "1-year-vs-3-year-terms",
    title: "1-Year vs 3-Year Loan Terms",
    description: "Compare short and medium-term loan options to find the right balance of payments and total cost.",
    subtitle: "These two term lengths are a common starting comparison for borrowers deciding how quickly to pay off a loan.",
    icon: "CalendarDays",
    optionA: {
      name: "1-Year Term",
      pros: ["Lowest total interest cost", "Fastest way to become debt-free", "Simple, short commitment"],
      cons: ["Highest monthly payment of the two", "Less flexibility if your budget changes"],
      bestFor: "Smaller loan amounts with a larger available budget",
    },
    optionB: {
      name: "3-Year Term",
      pros: [
        "Meaningfully lower monthly payment",
        "Easier to fit into a tight monthly budget",
        "More room to handle other expenses",
      ],
      cons: ["More total interest paid over the loan", "Takes three times as long to pay off"],
      bestFor: "Larger loan amounts or tighter monthly budgets",
    },
    table: [
      { feature: "Term Length", a: "12 months", b: "36 months", winner: "none" },
      { feature: "Monthly Payment", a: "Highest", b: "Lower", winner: "b" },
      { feature: "Total Interest", a: "Lowest", b: "Higher", winner: "a" },
      { feature: "Good Fit For", a: "Smaller amounts, larger budgets", b: "Larger amounts, tighter budgets", winner: "none" },
    ],
    chooseA: [
      "You're borrowing a smaller amount",
      "Your budget can handle a higher payment",
      "You want to minimize total interest",
      "You want to be debt-free within a year",
      "You don't need ongoing payment flexibility",
    ],
    chooseB: [
      "You're borrowing a larger amount",
      "You need a lower, more manageable payment",
      "You'd rather spread the cost over more time",
      "You have other financial priorities this year",
      "You're comfortable paying more interest for lower payments",
    ],
    faq: [
      { question: "Is a 1-year term available for all loan amounts?", answer: "It depends on the lender and the amount you're borrowing; smaller amounts are more likely to be offered on shorter terms." },
      { question: "How much more interest will I pay on a 3-year term?", answer: "It depends on your rate and amount, but a 3-year term will always cost more in total interest than a 1-year term at the same rate, since interest accrues for longer." },
      { question: "Can I switch from a 3-year term to a 1-year term later?", answer: "Not directly, but many lenders allow early repayment without penalty, which lets you pay off a longer-term loan faster if your budget improves." },
      { question: "Which term should I pick if I'm not sure?", answer: "Run both terms through our loan calculator to see the exact monthly payment and total cost side by side before deciding." },
      { question: "Do shorter terms come with better rates?", answer: "Sometimes, since shorter terms are less risky for lenders, but the rate offered always depends on your individual credit profile too." },
    ],
  },
  {
    slug: "installment-vs-revolving-credit",
    title: "Installment vs Revolving Credit",
    description: "Learn the differences between installment loans and revolving credit to choose the right borrowing type.",
    subtitle: "These are the two fundamental credit structures behind almost every borrowing product, from personal loans to credit cards.",
    icon: "RefreshCw",
    optionA: {
      name: "Installment Credit",
      pros: [
        "Fixed, predictable payment schedule",
        "Clear payoff date",
        "Interest rate is often fixed",
        "Easy to budget for",
      ],
      cons: ["Can't reborrow without a new application", "Full amount is borrowed upfront, even if unused"],
      bestFor: "Planned, one-time expenses with a known cost",
    },
    optionB: {
      name: "Revolving Credit",
      pros: [
        "Reusable credit limit you can draw from repeatedly",
        "Only pay interest on what you actually use",
        "No need to reapply for ongoing access",
      ],
      cons: ["No fixed payoff date, can extend debt indefinitely", "Rates are often variable and higher"],
      bestFor: "Ongoing or unpredictable expenses",
    },
    table: [
      { feature: "Borrowing Structure", a: "One-time lump sum", b: "Reusable credit limit", winner: "b" },
      { feature: "Payment Schedule", a: "Fixed, scheduled", b: "Flexible, based on balance", winner: "a" },
      { feature: "End Date", a: "Fixed, ends when paid off", b: "Open-ended", winner: "a" },
      { feature: "Interest Charged On", a: "Full amount from the start", b: "Only what you've drawn", winner: "b" },
    ],
    chooseA: [
      "You know the exact amount you need",
      "You want a guaranteed payoff date",
      "You prefer a fixed monthly payment",
      "You're covering a one-time expense",
      "You want to avoid the temptation to keep borrowing",
    ],
    chooseB: [
      "Your expenses are ongoing or unpredictable",
      "You want to only pay interest on what you use",
      "You want reusable access without reapplying",
      "You can manage the discipline revolving credit requires",
      "You don't need a fixed payoff timeline",
    ],
    faq: [
      { question: "Is a personal loan installment or revolving credit?", answer: "A personal loan is installment credit, you borrow a fixed amount once and repay it on a set schedule." },
      { question: "Which type is better for my credit score?", answer: "Both can help build credit with on-time payments; lenders generally like to see a healthy mix of both types over time." },
      { question: "Can I turn a personal loan into revolving credit?", answer: "No, but once you've paid off a personal loan, nothing stops you from applying for a new one or for a line of credit if you need ongoing access." },
      { question: "Why do revolving credit rates tend to be higher?", answer: "Since the lender doesn't know how much you'll borrow or for how long, the risk is priced in with typically higher, often variable, rates." },
      { question: "Is it bad to have only revolving credit and no installment loans?", answer: "It's not necessarily bad, but a mix of credit types is generally viewed favourably in your overall credit profile." },
    ],
  },
  {
    slug: "low-apr-vs-low-payment",
    title: "Low APR vs Low Monthly Payment",
    description: "Learn whether to prioritize a lower APR or lower monthly payments when choosing a loan.",
    subtitle: "When comparing loan offers, the lowest rate and the lowest payment aren't always the same offer.",
    icon: "Percent",
    optionA: {
      name: "Prioritizing Low APR",
      pros: [
        "Minimizes the total interest you pay",
        "Saves the most money over the life of the loan",
        "Usually means a shorter term",
      ],
      cons: ["Monthly payment is typically higher", "Requires a stronger credit profile to access the best rates"],
      bestFor: "Borrowers focused on the lowest total cost",
    },
    optionB: {
      name: "Prioritizing Low Payment",
      pros: [
        "Keeps monthly cash flow easier to manage",
        "Can make a loan feel more affordable today",
        "Easier to qualify for on a tighter budget",
      ],
      cons: ["Total interest paid is typically higher", "Usually means stretching out the term"],
      bestFor: "Borrowers focused on monthly affordability",
    },
    table: [
      { feature: "What It Optimizes For", a: "Total cost", b: "Monthly cash flow", winner: "none" },
      { feature: "Term Length", a: "Usually shorter", b: "Usually longer", winner: "none" },
      { feature: "Total Interest Paid", a: "Lower", b: "Higher", winner: "a" },
      { feature: "Risk", a: "Payment may strain the budget", b: "Loan costs more over time", winner: "none" },
    ],
    chooseA: [
      "You can comfortably afford a higher payment",
      "You want to pay the least amount of interest possible",
      "You're disciplined about sticking to a shorter term",
      "You have a strong credit profile",
      "Long-term savings matter more to you than short-term comfort",
    ],
    chooseB: [
      "Your monthly budget is tight right now",
      "You'd rather have breathing room than save on interest",
      "You expect your income to improve later",
      "You want to reduce the risk of missing a payment",
      "You're comfortable paying more over time for flexibility now",
    ],
    faq: [
      { question: "Can I get both a low APR and a low payment?", answer: "It's possible with a strong credit profile and a smaller loan amount, but for most borrowers there's a real trade-off between the two." },
      { question: "Which should I prioritize if I'm not sure?", answer: "If your budget is tight, prioritize the payment you can reliably afford; if you have room to spare, prioritizing a lower APR saves you more money long term." },
      { question: "Does APR include all the fees I'll pay?", answer: "Yes, APR is designed to reflect the interest rate plus most lender fees, giving you a more complete picture of the true cost than the interest rate alone." },
      { question: "How can I compare offers with different APRs and payments?", answer: "Our loan calculator lets you plug in different amounts, rates, and terms to see the exact monthly payment and total cost for each scenario." },
      { question: "Will checking rates to compare APR and payment affect my credit?", answer: "No, checking your rate with Ask4Loan uses a soft credit pull, which doesn't affect your credit score." },
    ],
  },
  {
    slug: "personal-loans-vs-loc",
    title: "Personal Loans vs Lines of Credit",
    description: "Compare the flexibility of lines of credit with the structure of personal loans.",
    subtitle: "Both give you access to funds, but they're built for very different kinds of borrowing needs.",
    icon: "CreditCard",
    optionA: {
      name: "Personal Loan",
      pros: [
        "Fixed lump sum, fixed term, fixed payment",
        "Simple, predictable payoff schedule",
        "Often a lower rate than a line of credit",
        "Best when you know the exact amount you need",
      ],
      cons: ["Interest accrues on the full amount right away", "No ability to reborrow without a new application"],
      bestFor: "Known, one-time expenses like debt consolidation",
    },
    optionB: {
      name: "Line of Credit",
      pros: [
        "Reusable credit limit you draw from as needed",
        "Interest only accrues on what you've actually borrowed",
        "Flexible for ongoing or uncertain expenses",
      ],
      cons: ["Payments can vary based on your balance", "Rates are often variable and can be higher"],
      bestFor: "Ongoing or unpredictable expenses",
    },
    table: [
      { feature: "Structure", a: "Lump sum", b: "Reusable credit limit", winner: "none" },
      { feature: "Interest Charged On", a: "Full amount immediately", b: "Only the amount drawn", winner: "b" },
      { feature: "Payment Predictability", a: "Fixed", b: "Variable", winner: "a" },
      { feature: "Best For", a: "Known, one-time costs", b: "Ongoing or unpredictable costs", winner: "none" },
    ],
    chooseA: [
      "You have a specific amount and purpose in mind",
      "You want a fixed, predictable payment",
      "You're consolidating existing debt",
      "You want the simplest option to manage",
      "You prefer a fixed interest rate",
    ],
    chooseB: [
      "Your expenses are ongoing or uncertain",
      "You want to only pay interest on what you use",
      "You value the flexibility to reborrow",
      "You're comfortable with a variable payment",
      "You don't need a fixed payoff date",
    ],
    faq: [
      { question: "Which is easier to qualify for, a personal loan or a line of credit?", answer: "It varies by lender, but both are typically assessed based on your income and credit profile in similar ways." },
      { question: "Can I have both a personal loan and a line of credit?", answer: "Yes, many borrowers use a personal loan for a specific expense and keep a line of credit open separately for ongoing flexibility." },
      { question: "Does a line of credit affect my credit score differently than a loan?", answer: "Both can affect your credit through utilization and payment history, though revolving balances on a line of credit are factored into your credit utilization ratio." },
      { question: "Is it cheaper to use a line of credit if I only need funds occasionally?", answer: "It can be, since you only pay interest on what you draw, but rates on lines of credit are often variable and can be higher than a fixed personal loan rate." },
      { question: "How do I know which one Ask4Loan can match me with?", answer: "Checking your rate shows you offers from our lender network based on your profile, and you can compare the structure and terms of each before choosing." },
    ],
  },
  {
    slug: "direct-lenders-vs-brokers",
    title: "Direct Lenders vs Loan Brokers",
    description: "Understand the differences between working with direct lenders and using loan brokers to find the best rates.",
    subtitle: "How you shop for a loan affects how many offers you actually get to compare before committing.",
    icon: "Handshake",
    optionA: {
      name: "Direct Lender",
      pros: [
        "You deal directly with the company funding the loan",
        "Fewer parties involved in your application",
        "May offer relationship perks if you're an existing customer",
      ],
      cons: ["Only one lender's terms to consider", "You'd need to apply separately elsewhere to compare"],
      bestFor: "Borrowers who already know their preferred lender",
    },
    optionB: {
      name: "Loan Broker / Comparison Service",
      pros: [
        "One application can surface multiple offers",
        "Saves time compared to applying everywhere separately",
        "Ask4Loan operates this way, using a soft credit pull",
        "Easier to compare rates side by side",
      ],
      cons: [
        "The broker doesn't fund the loan itself, a matched lender does",
        "Not every lender in every network will be a fit for every borrower",
      ],
      bestFor: "Borrowers who want to compare offers efficiently",
    },
    table: [
      { feature: "Who Funds the Loan", a: "The lender directly", b: "A matched lender in the network", winner: "none" },
      { feature: "Number of Offers", a: "One lender's terms", b: "Multiple offers to compare", winner: "b" },
      { feature: "Application Effort", a: "One application, one lender", b: "One application, multiple offers", winner: "b" },
      { feature: "Best For", a: "A known, preferred lender", b: "Comparing options efficiently", winner: "none" },
    ],
    chooseA: [
      "You already have a preferred lender in mind",
      "You have an existing relationship with that lender",
      "You don't need to compare multiple offers",
      "You prefer working with one company directly",
      "Your situation is straightforward",
    ],
    chooseB: [
      "You want to compare multiple offers at once",
      "You're not sure which lender fits your situation best",
      "You want to avoid multiple hard credit inquiries",
      "You value a fast, simple comparison process",
      "You want to see your options before committing",
    ],
    faq: [
      { question: "Does Ask4Loan lend money directly?", answer: "No, Ask4Loan is a comparison service. We match you with offers from a network of lenders, and the lender you choose funds and services the loan." },
      { question: "Does using a comparison service cost anything?", answer: "No, checking your rate and comparing offers through Ask4Loan is completely free." },
      { question: "Will comparing offers through Ask4Loan affect my credit score?", answer: "No, we use a soft credit pull to show you offers, which doesn't affect your credit score." },
      { question: "Who do I make my payments to if I accept an offer?", answer: "You'll make payments directly to the lender you're matched with and choose to proceed with, not to Ask4Loan." },
      { question: "Is it safe to share my information with a comparison service?", answer: "Yes, your information is only shared with the lenders you choose to proceed with and is never sold to third parties." },
    ],
  },
  {
    slug: "prequalification-vs-preapproval",
    title: "Prequalification vs Preapproval",
    description: "Understand the key differences between loan prequalification and preapproval and what each means for your application.",
    subtitle: "These terms get used loosely, but they mean different things in terms of how firm an offer actually is.",
    icon: "FileCheck",
    optionA: {
      name: "Prequalification",
      pros: [
        "Based on a soft credit check",
        "Does not affect your credit score",
        "Fast, often instant estimate",
        "No obligation to proceed",
      ],
      cons: ["Not a guarantee of final approval", "Terms may change once you formally apply"],
      bestFor: "Comparing options early with no risk to your score",
    },
    optionB: {
      name: "Preapproval",
      pros: [
        "A stronger indication of your likely approval",
        "Terms are closer to what you'd actually receive",
        "Can speed up the final approval process",
      ],
      cons: ["May involve a more thorough or hard credit check", "Can take longer than prequalification"],
      bestFor: "Confirming terms before you formally commit",
    },
    table: [
      { feature: "Credit Check Type", a: "Soft pull, no score impact", b: "Often a more thorough check", winner: "a" },
      { feature: "Firmness of Estimate", a: "Rough estimate", b: "Closer to actual terms", winner: "b" },
      { feature: "Speed", a: "Instant or near-instant", b: "Can take longer", winner: "a" },
      { feature: "Best For", a: "Early, no-risk comparison", b: "Confirming terms", winner: "none" },
    ],
    chooseA: [
      "You're just starting to compare your options",
      "You don't want any impact to your credit score",
      "You want a fast, rough estimate",
      "You're not ready to commit yet",
      "You want to check multiple lenders first",
    ],
    chooseB: [
      "You've already narrowed down your choice",
      "You want firmer, more accurate terms",
      "You're ready to move toward a final decision",
      "You want to speed up the final approval step",
      "You're comfortable with a more thorough credit check",
    ],
    faq: [
      { question: "Does checking my rate with Ask4Loan count as prequalification?", answer: "Yes, checking your rate uses a soft credit pull to give you an estimate of what you might qualify for, without affecting your credit score." },
      { question: "When does a hard credit check happen?", answer: "A hard credit check typically only happens if you accept a specific lender's offer and move forward with a full application." },
      { question: "Is a preapproval a guaranteed offer?", answer: "Not entirely, final approval and terms can still depend on verification of the information you provided during the application." },
      { question: "Why did my final offer differ from my prequalified estimate?", answer: "Prequalification is based on self-reported information; your final offer reflects verified details, which can shift the terms slightly." },
      { question: "Should I get prequalified with multiple lenders?", answer: "Yes, since prequalification doesn't affect your credit score, comparing estimates from multiple lenders, or one application through Ask4Loan, is a low-risk way to shop around." },
    ],
  },
  {
    slug: "prime-vs-subprime-loans",
    title: "Prime vs Subprime Loans",
    description: "Understand the differences between prime and subprime lending and how your credit tier affects your options.",
    subtitle: "Your credit profile places you in a lending tier, and that tier has a big effect on the rate you're offered.",
    icon: "Award",
    optionA: {
      name: "Prime Loans",
      pros: ["Lowest available interest rates", "More flexible terms", "Easier, faster approval process"],
      cons: [
        "Requires a strong, established credit history",
        "Not accessible to borrowers with limited or damaged credit",
      ],
      bestFor: "Borrowers with strong, established credit",
    },
    optionB: {
      name: "Subprime Loans",
      pros: [
        "Available to borrowers with limited or lower credit scores",
        "Still a legitimate path to funding",
        "On-time payments can help rebuild your credit",
      ],
      cons: ["Higher interest rates to offset lender risk", "May come with stricter terms or smaller amounts"],
      bestFor: "Borrowers rebuilding or establishing credit",
    },
    table: [
      { feature: "Typical Credit Profile", a: "Strong, established credit", b: "Limited or lower credit", winner: "none" },
      { feature: "Interest Rates", a: "Lowest available", b: "Higher", winner: "a" },
      { feature: "Approval Odds", a: "Higher", b: "Lower, but still possible", winner: "a" },
      { feature: "Upside", a: "Best overall cost", b: "Access despite credit challenges", winner: "none" },
    ],
    chooseA: [
      "You have a strong, established credit history",
      "You want access to the lowest possible rates",
      "You qualify for flexible terms",
      "You want the fastest approval process",
      "Cost is your top priority",
    ],
    chooseB: [
      "Your credit is limited or has some setbacks",
      "You've been turned down by prime lenders before",
      "You want to start rebuilding your credit",
      "You need funding despite past credit challenges",
      "You're comfortable with a higher rate in exchange for access",
    ],
    faq: [
      { question: "What credit score counts as subprime?", answer: "Definitions vary by lender, but it generally refers to borrowers with a credit history that falls below what's typically required for the lowest, prime rates." },
      { question: "Can a subprime borrower still get approved through Ask4Loan?", answer: "Yes, we work with a network of lenders who consider all credit types, including borrowers who may fall into the subprime category." },
      { question: "Will a subprime loan hurt my credit further?", answer: "Not if you make your payments on time; in fact, consistent on-time payments can help improve your credit over time." },
      { question: "Can I move from subprime to prime rates later?", answer: "Yes, as your credit history and score improve, you may qualify for better rates on future loans." },
      { question: "Are subprime loan terms very different from prime loan terms?", answer: "They can be, subprime offers may come with higher rates or somewhat stricter terms, but all terms are disclosed clearly before you accept any offer." },
    ],
  },
  {
    slug: "single-vs-joint-applications",
    title: "Single vs Joint Applications",
    description: "Compare the pros and cons of applying for a loan individually versus with a co-applicant.",
    subtitle: "Adding a co-applicant can change what you qualify for, but it also changes who's on the hook for repayment.",
    icon: "Users",
    optionA: {
      name: "Single Application",
      pros: ["Simpler application with one set of documents", "Full control over the loan and its terms", "Only your credit is checked"],
      cons: ["Qualification is limited to your income and credit alone", "May limit the amount or rate you're offered"],
      bestFor: "Borrowers who qualify comfortably on their own",
    },
    optionB: {
      name: "Joint Application",
      pros: [
        "Combines two applicants' income and credit",
        "Can help you qualify for a larger amount or better rate",
        "Useful if one applicant has limited credit history",
      ],
      cons: ["Both applicants are equally responsible for repayment", "Missed payments affect both applicants' credit"],
      bestFor: "Applicants who need combined income or credit to qualify",
    },
    table: [
      { feature: "Who Qualifies", a: "Based on one person", b: "Based on both applicants combined", winner: "none" },
      { feature: "Responsibility", a: "One borrower", b: "Shared, both are liable", winner: "none" },
      { feature: "Potential Loan Amount", a: "Limited to one income", b: "Potentially higher", winner: "b" },
      { feature: "Credit Impact of Missed Payments", a: "Affects one credit file", b: "Affects both applicants", winner: "a" },
    ],
    chooseA: [
      "You qualify comfortably on your own",
      "You want full control over the loan",
      "You'd rather not involve anyone else's credit",
      "You prefer to keep the responsibility solely with you",
      "Your income alone covers what you need",
    ],
    chooseB: [
      "Your income or credit alone isn't quite enough",
      "You have a trusted co-applicant willing to share responsibility",
      "You want to qualify for a larger amount",
      "You and your co-applicant have discussed the shared risk",
      "You want to strengthen your application together",
    ],
    faq: [
      { question: "Does every lender in the network offer joint applications?", answer: "Not every lender offers joint applications, so it's worth checking the specific terms of the offer you're considering." },
      { question: "Who is responsible for repayment on a joint loan?", answer: "Both applicants are equally responsible for the full amount, regardless of who actually uses the funds." },
      { question: "Does a joint application affect both applicants' credit?", answer: "Yes, the loan and its payment history typically appear on both applicants' credit files." },
      { question: "Can I remove a co-applicant from a joint loan later?", answer: "This depends entirely on the lender's policies; it's not guaranteed and should be discussed with the lender directly." },
      { question: "Will applying jointly get us a better rate?", answer: "It can, especially if it strengthens the combined credit and income profile, but it isn't guaranteed and depends on the lender's criteria." },
    ],
  },
  {
    slug: "credit-union-vs-bank",
    title: "Credit Union vs Bank Loans",
    description: "Compare credit union loans to traditional bank loans in Canada.",
    subtitle: "Both offer personal loans, but their ownership structure changes how rates and approvals tend to work.",
    icon: "Landmark",
    optionA: {
      name: "Credit Union",
      pros: [
        "Member-owned, not-for-profit institutions",
        "Often offer more competitive rates to members",
        "Can have more personalized approval criteria",
      ],
      cons: ["Requires membership, which can involve extra steps to join", "Fewer branches or digital tools than major banks"],
      bestFor: "Borrowers willing to join and build a relationship with a smaller institution",
    },
    optionB: {
      name: "Bank",
      pros: [
        "No membership required, generally open to any applicant",
        "Broad branch and digital service networks",
        "May offer perks if you're already a customer",
      ],
      cons: ["Rates and criteria tend to be more standardized", "Approval process can be stricter"],
      bestFor: "Borrowers who want broad access without joining anything",
    },
    table: [
      { feature: "Ownership Structure", a: "Member-owned", b: "Shareholder-owned", winner: "none" },
      { feature: "Typical Rates", a: "Often competitive for members", b: "Standardized, varies by bank", winner: "a" },
      { feature: "Membership Required", a: "Yes", b: "No", winner: "b" },
      { feature: "Approval Flexibility", a: "Can be more personalized", b: "More standardized criteria", winner: "a" },
    ],
    chooseA: [
      "You're willing to become a member",
      "You value a more personal banking relationship",
      "You want potentially more competitive member rates",
      "You live near a credit union branch",
      "You want more flexible approval criteria",
    ],
    chooseB: [
      "You want to avoid a membership step",
      "You value broad branch and digital access",
      "You already have an account with a major bank",
      "You want a fast, standardized process",
      "You're comparing offers without extra commitments",
    ],
    faq: [
      { question: "Do I need to be a credit union member before applying for a loan?", answer: "In most cases, yes, credit unions typically require membership before or as part of the loan application." },
      { question: "Are credit union rates always lower than bank rates?", answer: "Not always, but credit unions often pass savings on to members since they're not-for-profit, so it's worth comparing both." },
      { question: "Can Ask4Loan match me with a credit union offer?", answer: "Our network includes a range of lender types; the specific offers you're matched with depend on your profile and the lenders currently available." },
      { question: "Is it harder to get approved at a bank than a credit union?", answer: "It can be, since banks often apply more standardized criteria, while credit unions may take a more personalized approach to their members." },
      { question: "What if I want to compare both before deciding?", answer: "Checking your rate through Ask4Loan uses a soft credit pull, so you can compare offers from our network alongside anything your bank or credit union offers directly." },
    ],
  },
  {
    slug: "bank-vs-online-lenders",
    title: "Bank Loans vs Online Lenders",
    description: "Compare traditional bank loans with online lenders to find the best option for your borrowing needs.",
    subtitle: "Where you borrow from affects how fast you're approved and how flexible the lender can be with your credit profile.",
    icon: "Building2",
    optionA: {
      name: "Bank",
      pros: ["Established, in-person institution", "May offer perks if you already bank there", "Wide range of other financial products"],
      cons: ["Approval criteria tends to be stricter", "Application process can take longer"],
      bestFor: "Borrowers who value an existing banking relationship",
    },
    optionB: {
      name: "Online Lender",
      pros: [
        "Fully digital application, often approved within minutes",
        "Frequently more flexible with credit profiles",
        "Funds as soon as the next business day",
        "No branch visit required",
      ],
      cons: ["No in-person support if you prefer face-to-face service", "Requires comfort with a fully digital process"],
      bestFor: "Borrowers who want speed and flexibility",
    },
    table: [
      { feature: "Application Process", a: "Often in-person or paper-based", b: "Fully online", winner: "b" },
      { feature: "Approval Speed", a: "Can take days", b: "Often minutes to same day", winner: "b" },
      { feature: "Credit Flexibility", a: "Typically stricter", b: "Often more flexible", winner: "b" },
      { feature: "Convenience", a: "Requires a branch visit for some steps", b: "Apply from anywhere", winner: "b" },
    ],
    chooseA: [
      "You value an existing relationship with your bank",
      "You prefer in-person service",
      "You want to bundle with other banking products",
      "Your credit profile is strong",
      "You're not in a rush",
    ],
    chooseB: [
      "You want the fastest possible approval",
      "Your credit isn't perfect",
      "You'd rather not visit a branch",
      "You want to compare multiple offers easily",
      "You need funds quickly",
    ],
    faq: [
      { question: "Are online lenders as safe as traditional banks?", answer: "Reputable online lenders use the same bank-level security standards, and any lender in our network is expected to disclose terms clearly and transparently." },
      { question: "Why are online lenders often more flexible with credit?", answer: "Online lenders frequently serve a wider range of credit profiles and may weigh factors beyond just a credit score." },
      { question: "How fast can I actually get funded through an online lender?", answer: "Many lenders in our network can fund your loan as soon as the next business day after approval." },
      { question: "Do online lenders charge higher rates than banks?", answer: "It varies, your rate depends on your credit profile and the specific lender, not just whether they're online or a traditional bank." },
      { question: "Can I still talk to someone if I use an online lender?", answer: "Most online lenders offer customer support by phone, chat, or email, even though the application itself is digital." },
    ],
  },
  {
    slug: "online-vs-traditional-lenders",
    title: "Online vs Traditional Lenders",
    description: "Compare online lenders with traditional brick-and-mortar options to find the best fit for your needs.",
    subtitle: "Beyond the type of institution, the way you apply and get approved can look very different depending on the lender.",
    icon: "Globe",
    optionA: {
      name: "Online Lenders",
      pros: [
        "Apply from your phone or computer, any time",
        "Decisions often come back in minutes",
        "Funds deposited electronically, often the next business day",
        "Typically more flexible with credit profiles",
      ],
      cons: ["No physical branch to visit", "Requires comfort with a digital-only process"],
      bestFor: "Borrowers who want speed and convenience",
    },
    optionB: {
      name: "Traditional Lenders",
      pros: [
        "In-person appointments and support",
        "Can feel more familiar for complex situations",
        "Existing relationship may offer added perks",
      ],
      cons: ["Decisions can take days", "Often requires paperwork signed in person"],
      bestFor: "Borrowers who prefer a guided, in-person process",
    },
    table: [
      { feature: "Where You Apply", a: "Anywhere, online", b: "In person or by phone/mail", winner: "a" },
      { feature: "Document Handling", a: "Digital upload", b: "Physical paperwork, often", winner: "a" },
      { feature: "Decision Speed", a: "Minutes to same day", b: "Can take several days", winner: "a" },
      { feature: "Convenience", a: "High", b: "Lower, requires more steps", winner: "a" },
    ],
    chooseA: [
      "You want to apply without visiting anywhere in person",
      "You want the fastest possible decision",
      "You're comfortable managing everything digitally",
      "Your situation is fairly straightforward",
      "You want to compare multiple offers quickly",
    ],
    chooseB: [
      "You prefer face-to-face guidance",
      "Your financial situation is more complex",
      "You already have a relationship with a traditional lender",
      "You're not in a rush",
      "You want paper documentation of every step",
    ],
    faq: [
      { question: "Is Ask4Loan an online or traditional lender?", answer: "Ask4Loan isn't a lender at all, we're a free comparison service that matches you with offers from a network of lenders, most of which operate online." },
      { question: "Do online lenders check my credit the same way traditional lenders do?", answer: "The process is generally similar; checking your rate uses a soft pull, and a full application may involve a hard credit check, regardless of whether the lender is online or traditional." },
      { question: "Can I trust an online lender with my personal information?", answer: "Reputable online lenders use bank-level encryption and only share your information with the parties involved in your loan, the same standard you'd expect from a traditional institution." },
      { question: "Is it harder to resolve issues with an online lender?", answer: "Most online lenders offer robust customer support through chat, phone, or email, so resolving issues doesn't necessarily require an in-person visit." },
      { question: "Which is faster, online or traditional?", answer: "Online lenders are almost always faster, often providing decisions within minutes compared to days for some traditional processes." },
    ],
  },
];

export const getComparisonBySlug = (slug: string) =>
  comparisons.find((entry) => entry.slug === slug);
