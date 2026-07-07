export type LoanOption = { name: string; description: string };

export type CreditScoreRange = {
  slug: string;
  label: string;
  tier: string;
  whatItMeans: string;
  loanOptions: LoanOption[];
  rateInfo: string;
  approvalTips: string[];
  creditTips: string[];
  alternatives: string[];
  closing: string;
};

export const creditScoreRanges: CreditScoreRange[] = [
  {
    slug: "300-499",
    label: "300-499",
    tier: "Poor",
    whatItMeans:
      "In Canada, credit scores range from 300 to 900. A score between 300 and 499 is considered a very low or \"bad\" credit score by lenders. It typically reflects a history of missed payments, defaults, or possibly bankruptcy, as reported by Equifax Canada and TransUnion Canada. This is a snapshot of your financial history, not your financial future — it does, however, make obtaining traditional loans more challenging.",
    loanOptions: [
      { name: "Secured Personal Loans", description: "These loans require collateral, such as a car or home equity. The collateral reduces the risk for the lender, making approval more likely even with a low score — though the lender can seize the asset if you default." },
      { name: "Guarantor or Co-Signed Loans", description: "If you have a friend or family member with good credit who is willing to co-sign, they become equally responsible for the debt, which significantly reduces the lender's risk." },
      { name: "Bad Credit Lenders & Private Lenders", description: "Some lenders specialize in working with individuals with poor credit. Be cautious and research these options thoroughly, as some may charge very high fees." },
      { name: "Payday Loans", description: "Technically an option, but best avoided if possible — they carry extremely high effective interest rates and very short repayment terms, making it easy to fall into a debt cycle." },
    ],
    rateInfo:
      "With a score between 300 and 499, expect significantly higher interest rates than someone with good or excellent credit. Subprime and alternative lenders often charge rates from 21% up to the legal 34.99% maximum, especially for smaller, short-term loans. Repayment terms may also be shorter, leading to higher monthly payments.",
    approvalTips: [
      "Demonstrate Affordability: Show lenders you have stable income and can comfortably afford the payments with pay stubs, an employment letter, or bank statements.",
      "Offer Collateral: If you have an asset, offering it as collateral for a secured loan significantly increases your approval chances.",
      "Apply with a Co-Signer: A co-signer with good credit can bridge the gap in your creditworthiness.",
      "Present a Clear Plan: Explaining the reason for your loan and the steps you've taken to improve your situation can help build lender confidence.",
    ],
    creditTips: [
      "Get a Secured Credit Card: A security deposit acts as your credit limit. Making small purchases and paying in full builds positive history with Equifax and TransUnion Canada.",
      "Consider a Credit-Builder Loan: Some lenders offer small installment loans specifically designed to help build credit, provided payments are reported to the bureaus.",
      "Pay All Bills On Time: The single biggest factor in your score. Make sure every payment lands on or before the due date.",
      "Keep Credit Utilization Low: Keep any credit card balance below 30% of your limit.",
      "Check Your Credit Report Regularly: Get free copies from Equifax and TransUnion Canada, and dispute any inaccuracies you find.",
    ],
    alternatives: [
      "Credit Counselling: Non-profit agencies can help you budget, negotiate with creditors, and explore a Debt Management Plan (DMP).",
      "Borrow from Friends or Family: A viable option for short-term needs, provided you agree on clear repayment terms.",
      "Community Resources: Some communities offer financial assistance programs or small loans for low-income individuals — check with local social services.",
    ],
    closing:
      "Navigating personal finance with a low credit score can be challenging, but it's not impossible. By understanding your options, improving your financial habits, and actively working to rebuild your credit, you can gradually move towards a healthier financial future.",
  },
  {
    slug: "500-549",
    label: "500-549",
    tier: "Poor",
    whatItMeans:
      "In Canada, credit scores typically range from 300 to 900. A score of 500-549 is generally considered \"poor\" by lenders, signalling past credit difficulties such as missed payments, high credit utilization, or bankruptcy. While this range can make it harder to secure traditional loans, it doesn't make approval impossible — it simply means exploring specific lenders and being prepared for different terms.",
    loanOptions: [
      { name: "Secured Personal Loans", description: "Because collateral like a car or home equity reduces the lender's risk, they're often more willing to approve applicants in this range." },
      { name: "Bad Credit Lenders", description: "Some lenders specialize in loans for people with poor credit. These often come with higher rates and stricter terms, but more flexible approval criteria." },
      { name: "Guarantor Loans", description: "A family member with excellent credit co-signs and becomes equally responsible for the debt — choose this option carefully." },
      { name: "Credit Unions", description: "Local credit unions are often more flexible and community-oriented than big banks, and may consider your full financial picture rather than just your score." },
    ],
    rateInfo:
      "Expect significantly higher interest rates in this range — often 19% to 34.99% or higher, depending on the lender, the loan amount, and your overall financial profile. It's crucial to shop around and compare the full fee structure, not just the headline rate, before committing.",
    approvalTips: [
      "Ensure a Stable Income: Lenders want to see consistent income sufficient to comfortably cover the loan payments.",
      "Lower Your Debt-to-Income Ratio: Paying down some existing debt before applying makes you a more attractive borrower.",
      "Provide Collateral (if applicable): A secured loan with valuable collateral can significantly boost your approval odds.",
      "Have a Co-Signer: As above, a co-signer with good credit can be a game-changer.",
      "Be Prepared with Documentation: Gather proof of income, ID, and bank statements in advance to show you're organized and serious.",
    ],
    creditTips: [
      "Pay All Bills on Time: The single biggest factor in your score. Set up automatic payments or reminders.",
      "Keep Credit Utilization Low: Aim to use no more than 30% of your available credit.",
      "Don't Close Old Accounts: A longer credit history helps your score, so keep older fee-free accounts open.",
      "Diversify Your Credit Mix (Responsibly): A healthy mix of credit types can help, but only if each is managed well.",
      "Regularly Check Your Credit Report: Review free annual reports from Equifax and TransUnion Canada and dispute errors.",
      "Apply for New Credit Sparingly: Each application triggers a hard inquiry, which can temporarily lower your score.",
    ],
    alternatives: [
      "Borrow from Friends or Family: A short-term option for those without immediate financial pressure elsewhere.",
      "Payroll Advances: Some employers offer advances that can help bridge an immediate need.",
      "Community Programs/Government Assistance: Local programs or government initiatives can offer aid for households facing financial hardship.",
      "Debt Consolidation (with caution): A credit counsellor can help set up a Debt Management Plan (DMP) that may negotiate lower rates with creditors.",
    ],
    closing:
      "Perseverance and a strategic approach to managing your finances will eventually lead to improved financial opportunities. Starting with small, manageable steps can make a big difference in the long run.",
  },
  {
    slug: "500-579",
    label: "500-579",
    tier: "Poor",
    whatItMeans:
      "If you're a Canadian looking to borrow with a credit score between 500 and 579, you're not out of options. While this range is still considered \"poor\" by Equifax and TransUnion Canada, several avenues remain available to help you reach your financial goals.",
    loanOptions: [
      { name: "Secured Personal Loans", description: "Using an asset like a car or home equity as collateral reduces the lender's risk, potentially unlocking better rates and terms than unsecured options." },
      { name: "Bad Credit Lenders", description: "Reputable online lenders in Canada specialize in working with lower credit scores, offering more flexible criteria though often at higher rates." },
      { name: "Credit Unions", description: "Local credit unions tend to be more flexible than big banks and may look beyond your credit score at your overall financial picture." },
      { name: "Guarantor Loans", description: "A co-signer with excellent credit takes on equal responsibility for the debt, significantly reducing the lender's risk." },
    ],
    rateInfo:
      "Expect higher interest rates in this range, generally 19% to 34.99% or more depending on the lender, loan type, and your overall financial situation. Terms typically range from 6 months to 5 years.",
    approvalTips: [
      "Provide Collateral: Offering an asset greatly increases approval chances and lowers the lender's risk.",
      "Apply with a Co-Signer: A co-signer with good credit makes you a more attractive applicant.",
      "Demonstrate Stable Income: Show a consistent, reliable income source that can support the loan payments.",
      "Prepare Documentation: Have proof of income, ID, and bank statements ready in advance.",
    ],
    creditTips: [
      "Pay All Bills on Time: Payment history is the single biggest driver of your score.",
      "Reduce Your Credit Utilization: Keep card balances ideally below 30% of your limit.",
      "Check Your Credit Report Regularly: Dispute inaccuracies from Equifax and TransUnion Canada immediately.",
      "Avoid Closing Old Accounts: Closing established accounts can shorten your credit history and lower your score.",
      "Consider a Secured Credit Card: A deposit-backed card is an excellent tool for rebuilding credit over time.",
    ],
    alternatives: [
      "Borrow from Friends or Family: A way to get funds without high interest rates or fees.",
      "Payday Loans (with caution): Only for very short-term emergencies, repaid quickly, given the extremely high fees.",
      "Credit Counselling: Non-profit agencies can help you budget, negotiate with creditors, and explore debt management plans.",
      "Small Loans from Credit Unions: Some offer smaller loans with less stringent requirements, though rates may be higher.",
    ],
    closing:
      "Navigating personal loans with a 500-579 credit score in Canada requires research and a strategic approach. By understanding your options and actively working to improve your credit, you can pave the way for a healthier financial future.",
  },
  {
    slug: "550-599",
    label: "550-599",
    tier: "Poor to Fair",
    whatItMeans:
      "In Canada, credit scores range from 300 to 900. A score between 550 and 599 generally sits in the \"Poor\" to \"Fair\" range with major bureaus like Equifax Canada and TransUnion Canada. It's not ideal, but it doesn't mean you're out of options — lenders view this range as a moderate risk and are still often willing to work with you.",
    loanOptions: [
      { name: "Secured Personal Loans", description: "Collateral like a car or home equity reduces the lender's risk, often leading to more favourable terms." },
      { name: "Bad Credit Personal Loans/Alternative Lenders", description: "Many online lenders specialize in this range, offering flexible criteria and faster processes, though at higher rates." },
      { name: "Credit Unions", description: "Community-oriented and often willing to look beyond your score alone at your broader financial picture." },
      { name: "Guarantor or Co-Signed Loans", description: "A co-signer with excellent credit can significantly improve your approval odds and help secure a lower rate." },
    ],
    rateInfo:
      "Expect noticeably higher rates in Canada for this range, typically 10% to 34.99% or more depending on the lender, whether the loan is secured, and your overall profile. Shop around and compare offers carefully before committing.",
    approvalTips: [
      "Ensure a Stable Income: Show lenders a consistent income sufficient to cover payments comfortably.",
      "Lower Your Debt-to-Income Ratio: Pay down existing debt where possible before applying.",
      "Provide Collateral (if applicable): Strengthens a secured loan application considerably.",
      "Have a Co-Signer: Can be a game-changer for approval odds and rate.",
      "Be Prepared with Documentation: Gather income proof, ID, and bank statements in advance.",
    ],
    creditTips: [
      "Pay All Bills on Time: Even small bills count — set up reminders or automatic payments.",
      "Keep Credit Utilization Low: Aim for no more than 30% of your available credit.",
      "Establish a Long Credit History: Avoid closing your oldest accounts.",
      "Diversify Your Credit Mix: A mix of credit types can help, if managed responsibly.",
      "Regularly Check Your Credit Report: Dispute inaccuracies as soon as you spot them.",
      "Apply for New Credit Sparingly: Each hard inquiry can temporarily ding your score.",
    ],
    alternatives: [
      "Secured Credit Cards: A deposit-backed card is an excellent tool to build credit responsibly.",
      "Small Loans from Family or Friends: A temporary solution with clear terms to avoid straining relationships.",
      "Debt Consolidation (if applicable): Combining high-interest debts into one payment can simplify management and potentially save money.",
      "Credit Counselling: Non-profit agencies can help you budget and explore ways to improve your financial situation.",
    ],
    closing:
      "Improving your credit score is a journey, not a sprint. By making consistent, positive financial choices, you can gradually work towards a stronger credit profile and unlock better lending opportunities in the future.",
  },
  {
    slug: "580-619",
    label: "580-619",
    tier: "Fair",
    whatItMeans:
      "In Canada, credit scores typically range from 300 to 900. A score between 580 and 619 sits in a unique spot often described as \"near prime\" or \"fair\" credit — meaning you have real options, even if not the very best rates reserved for excellent credit.",
    loanOptions: [
      { name: "Traditional Banks and Credit Unions", description: "Some institutions may lend, especially if you have an existing banking relationship or can offer collateral." },
      { name: "Online Lenders", description: "Many specialize in fair-to-good credit, with flexible eligibility criteria and faster application processes." },
      { name: "Secured Personal Loans", description: "Putting up an asset like a car or home equity as collateral lowers the lender's risk and can improve your rate." },
      { name: "Co-Signed Loans", description: "A co-signer with excellent credit can significantly improve your approval odds and rate, sharing equal responsibility for the debt." },
    ],
    rateInfo:
      "Lenders generally see this range as moderate risk. You could see rates ranging from about 8% up to 25% or higher, depending on the lender, province, loan term, and whether the loan is secured. Terms typically run 1 to 5 years — shorter terms mean higher monthly payments but less total interest.",
    approvalTips: [
      "Reduce Existing Debt: A lower debt-to-income ratio makes you a more attractive borrower.",
      "Show Stable Income: Consistent employment and reliable income reassure lenders.",
      "Provide Collateral (if possible): Can meaningfully improve approval odds and rate.",
      "Apply with a Co-Signer: Opens up more options and potentially better terms.",
      "Check for Pre-Approval Options: Many lenders offer soft-check pre-qualification so you can compare rates without a hard inquiry.",
    ],
    creditTips: [
      "Pay All Bills on Time, Every Time: The most significant factor in your score.",
      "Keep Your Credit Utilization Low: Aim to stay under 30% of your available credit.",
      "Don't Close Old Accounts: A longer track record helps your score.",
      "Limit New Credit Applications: Each hard inquiry can slightly lower your score.",
      "Regularly Check Your Credit Report: Dispute any errors you find from Equifax or TransUnion Canada.",
      "Consider a Secured Credit Card: Helps build positive payment history if traditional credit is hard to access.",
    ],
    alternatives: [
      "Borrow from Friends or Family: A way to access funds without high fees.",
      "Payday Loans (with caution): Only as a last resort for very short-term emergencies.",
      "Credit Counselling: Non-profit agencies can help negotiate with creditors and set up a budget.",
      "Small Loans from Credit Unions: Sometimes more lenient credit requirements than big banks.",
    ],
    closing:
      "Getting a personal loan with a 580-619 credit score in Canada is absolutely possible. By understanding your options and actively working to improve your credit, you can secure the funding you need and build a stronger financial future.",
  },
  {
    slug: "600-649",
    label: "600-649",
    tier: "Fair",
    whatItMeans:
      "In Canada, your credit score, typically ranging from 300 to 900, is a numerical representation of your creditworthiness. A score between 600 and 649 is generally considered \"fair\" or \"subprime.\" You're not in the riskiest category, but some lenders may still price in extra caution, such as higher interest rates.",
    loanOptions: [
      { name: "Online Lenders", description: "Many specialize in fair-to-poor credit with flexible criteria and fast processes, though rates run higher to offset the risk." },
      { name: "Credit Unions", description: "Member-owned institutions that often take a more personalized approach and may consider your individual circumstances." },
      { name: "Secured Personal Loans", description: "Using a car or home as collateral can improve your approval odds and reduce your interest rate." },
      { name: "Co-Signed Loans", description: "A co-signer with good credit essentially guarantees the loan, meaningfully improving your odds and rate." },
    ],
    rateInfo:
      "Expect higher interest rates than excellent-credit borrowers — typically 15% to 30% or more, depending on the lender, amount, and term. Terms usually run 12 to 60 months. A longer term lowers your monthly payment but increases the total interest paid, so review the full agreement carefully before committing.",
    approvalTips: [
      "Shop Around: Compare rates and terms from multiple lenders, especially credit unions and specialists in your range.",
      "Provide All Necessary Documentation: Proof of income, employment, and residency, organized and ready.",
      "Demonstrate Stability: A stable job history and residency reassures lenders.",
      "Explain Past Credit Issues (If Applicable): Being open about past hardship and your recovery can work in your favour with some lenders.",
      "Consider a Smaller Loan Amount: A smaller ask reduces the lender's risk.",
    ],
    creditTips: [
      "Pay Your Bills on Time, Every Time: Set up automatic payments to avoid missed due dates.",
      "Keep Credit Utilization Low: Stay under 30% of your available credit across cards and lines of credit.",
      "Check Your Credit Report Regularly: Dispute any inaccuracies you find.",
      "Don't Close Old Accounts: Keeping fee-free accounts open supports your credit history length.",
      "Diversify Your Credit Mix (Responsibly): Different credit types managed well show lenders you're reliable.",
      "Consider a Secured Credit Card or Credit-Builder Loan: Designed to help build positive payment history.",
    ],
    alternatives: [
      "Borrow from Friends or Family: Avoids lender fees and interest for those with the option.",
      "Payday Loans (Use with Extreme Caution): Very short-term and high-cost — only for genuine emergencies, repaid immediately.",
      "Debt Consolidation (If Applicable): A consolidation loan or debt management plan can lower interest and simplify multiple payments.",
      "Build Your Credit First: Sometimes the best \"loan\" is the one you don't take yet — improving your score first unlocks better terms.",
    ],
    closing:
      "By diligently implementing the credit-building tips outlined above, you'll likely qualify for better rates and terms in the future.",
  },
  {
    slug: "620-659",
    label: "620-659",
    tier: "Fair",
    whatItMeans:
      "If you're a Canadian with a credit score between 620 and 659, you're in a unique position — often described as \"near prime\" or \"fair\" credit. You may not qualify for the most competitive rates reserved for excellent credit, but real options remain available.",
    loanOptions: [
      { name: "Traditional Banks and Credit Unions", description: "Some institutions will lend, especially with an existing banking relationship or available collateral." },
      { name: "Online Lenders", description: "Many specialize in fair-to-good credit — research eligibility criteria and terms carefully across a few options." },
      { name: "Secured Personal Loans", description: "Using an asset as collateral can significantly improve your approval odds and rate." },
      { name: "Co-Signed Loans", description: "A co-signer with excellent credit shares equal responsibility for the debt, improving your chances considerably." },
    ],
    rateInfo:
      "Expect rates higher than excellent-credit borrowers — roughly 8% to 25% or more, depending on lender, province, term, and whether the loan is secured. Terms typically run 1 to 5 years; shorter terms mean higher payments but less total interest.",
    approvalTips: [
      "Reduce Existing Debt: A lower debt-to-income ratio makes you a more attractive applicant.",
      "Show Stable Income: Demonstrates you have the means to repay.",
      "Provide Collateral (if possible): Can meaningfully increase approval odds and lower your rate.",
      "Apply with a Co-Signer: Opens access to better terms.",
      "Check for Pre-Approval Options: Many lenders let you check rates with a soft credit check first.",
    ],
    creditTips: [
      "Pay All Bills on Time: The most significant factor in your score.",
      "Keep Your Credit Utilization Low: Stay under 30% of your credit limit.",
      "Don't Close Old Accounts: Preserves your credit history length.",
      "Limit New Credit Applications: Each hard inquiry can slightly ding your score.",
      "Check Your Credit Report Regularly: Dispute errors from Equifax and TransUnion Canada.",
      "Consider a Secured Credit Card: Helps build positive history if traditional credit is hard to access.",
    ],
    alternatives: [
      "Borrow from Friends or Family: A way to get funds without high fees.",
      "Payday Loans (with caution): Should be avoided if possible, and repaid quickly if used.",
      "Credit Counselling: Non-profit agencies can help negotiate with creditors and manage your budget.",
      "Small Loans from Credit Unions: Sometimes more lenient credit requirements than big banks.",
    ],
    closing:
      "Getting a personal loan with a 620-659 credit score in Canada is absolutely possible. By understanding your options and actively working to improve your credit, you can secure the funding you need and build a stronger financial future.",
  },
  {
    slug: "650-699",
    label: "650-699",
    tier: "Good",
    whatItMeans:
      "A credit score in the 650-699 range in Canada is generally considered \"good\" by both Equifax and TransUnion Canada. This opens up considerably more borrowing opportunities than lower scores, though it may not always unlock the absolute lowest rates reserved for excellent credit.",
    loanOptions: [
      { name: "Traditional Banks and Credit Unions", description: "Many will consider applicants in this range, offering a fairly competitive range of options and rates." },
      { name: "Online Lenders", description: "A growing number offer good rates specifically to borrowers with good credit, some with fast funding." },
      { name: "Secured Personal Loans", description: "Using an asset like a car or savings as collateral can unlock lower rates or higher approval odds." },
    ],
    rateInfo:
      "Expect fairly competitive rates in this range, generally 4% to 15% or more depending on the lender, amount, and term. Terms typically run 1 to 5 years (12 to 60 months) — shorter terms mean higher payments but less total interest paid.",
    approvalTips: [
      "Demonstrate Stable Income: Shows you can comfortably afford the payments.",
      "Lower Your Debt-to-Income Ratio: More disposable income relative to debt makes you a stronger applicant.",
      "Have a Low Credit Utilization Ratio: Staying under 30% reduces the lender's perceived risk.",
      "Provide Collateral (if applicable): Reduces risk further for secured personal loans.",
      "Consider a Co-Signer: A co-signer with excellent credit can improve your odds and rate.",
    ],
    creditTips: [
      "Pay Your Bills on Time, Every Time: The biggest factor in your score.",
      "Keep Your Credit Utilization Low: No more than 30% of your available credit — lower is better.",
      "Maintain a Mix of Credit: A healthy variety of credit types can help your profile.",
      "Avoid Opening Too Many New Accounts: Each application triggers a hard inquiry.",
      "Don't Close Old Accounts: Positive history on older accounts helps your score.",
    ],
    alternatives: [
      "Peer-to-Peer Lending: Platforms connecting borrowers with individual investors, sometimes with more flexible criteria.",
      "Secured Loans: Loans backed by an asset are often easier to obtain and carry less stringent requirements.",
      "Small Personal Loans/Microloans: Some lenders offer smaller products aimed at this credit tier.",
      "Budgeting and Saving: Sometimes the best move is building savings before taking on new debt.",
      "Credit Counselling: Non-profit agencies can help with a debt repayment plan and creditor negotiations.",
    ],
    closing:
      "By understanding your credit score and exploring all available options, you can make informed decisions about personal loans in Canada and continue your path to financial well-being.",
  },
  {
    slug: "660-699",
    label: "660-699",
    tier: "Good",
    whatItMeans:
      "In Canada, credit scores typically range from 300 to 900. A score between 660 and 699 is generally considered \"good\" by Equifax Canada and TransUnion Canada — a sign you've been responsible with credit in the past, which makes you attractive to lenders and eligible for more competitive rates than lower scores.",
    loanOptions: [
      { name: "Traditional Banks", description: "Many major Canadian banks will consider applicants with a good score, though larger loan amounts may require collateral." },
      { name: "Credit Unions", description: "Often offer more flexible lending criteria and competitive rates, even if your history isn't perfect." },
      { name: "Online Lenders", description: "A large and growing space in Canada — a good credit score improves your chances of a favourable, quick approval." },
    ],
    rateInfo:
      "Expect more favourable rates than lower-scored borrowers — often in the high single digits to mid-teens percent, depending on the lender, term, and your overall profile. Terms can range from 6 months up to 5 years or more; shorter terms mean higher payments but less total interest.",
    approvalTips: [
      "Maintain a Low Debt-to-Income Ratio: More disposable income relative to debt improves your odds.",
      "Stable Employment History: Demonstrates your ability to repay consistently.",
      "Provide All Required Documentation: ID, proof of income, and banking details ready in advance.",
      "Have a Down Payment (if applicable): Can meaningfully help for secured loans like auto financing.",
      "Check for Pre-Approval Options: Compare rates with a soft credit check before formally applying.",
    ],
    creditTips: [
      "Pay Your Bills on Time, Every Time: The biggest factor in your score.",
      "Keep Your Credit Utilization Low: Aim for well under 30% of your available credit.",
      "Don't Close Old Accounts: A longer credit history supports your score.",
      "Limit New Credit Applications: Especially avoid several applications close together.",
      "Regularly Check Your Credit Report: Dispute any errors from Equifax and TransUnion Canada.",
    ],
    alternatives: [
      "Secured Personal Loan: Using an asset as collateral can reduce risk and secure better terms.",
      "Co-Signer: Someone with excellent credit can help you secure better terms.",
      "Borrow from Friends or Family: Avoids interest, provided you have a solid repayment agreement.",
      "Review Your Budget: Sometimes cutting expenses and saving covers the need without new debt.",
    ],
    closing:
      "By continuing to build on your good credit habits, you're setting yourself up for even better financial terms and interest rates in the future.",
  },
  {
    slug: "700-749",
    label: "700-749",
    tier: "Very Good",
    whatItMeans:
      "If your credit score falls between 700 and 749, you're in a great position for a personal loan in Canada. This range is generally considered \"good\" to \"very good\" by Equifax and TransUnion Canada, signifying a favourable history of managing debt and marking you as a low-risk borrower — which translates into better terms and lower rates than lower scores.",
    loanOptions: [
      { name: "Traditional Banks", description: "Major Canadian banks (RBC, TD, Scotiabank, BMO, CIBC, National Bank) are strong contenders with competitive rates and a range of products." },
      { name: "Credit Unions", description: "Member-owned institutions that often offer quick processes and favourable rates." },
      { name: "Online Lenders", description: "A growing number offer quick applications and competitive rates for good-credit borrowers." },
    ],
    rateInfo:
      "One of the biggest advantages of a 700-749 score is access to lower rates — generally 6% to 12% APR, though this varies by lender and market conditions. Terms typically range from 1 to 5 years, sometimes longer for larger amounts; shorter terms mean higher payments but less total interest.",
    approvalTips: [
      "Reduce Existing Debt: A lower debt-to-income ratio makes you more appealing to lenders.",
      "Gather Documentation: Income verification, employment details, and banking information ready to go.",
      "Check Your Credit Report: Review it for errors that could be holding your score back.",
      "Steady Employment: A stable job history and predictable income is a strong positive signal.",
    ],
    creditTips: [
      "Pay Bills on Time, Every Time: The most crucial factor in your score.",
      "Keep Credit Utilization Low: Stay under 30% across cards and loans — lower is better.",
      "Maintain a Mix of Credit: A healthy variety can positively impact your score.",
      "Avoid Opening Too Many New Accounts: Each hard inquiry can temporarily lower your score.",
      "Don't Close Old Accounts: Older accounts support your overall credit history length.",
    ],
    alternatives: [
      "Secured Personal Loan: Collateral can unlock even lower rates given the reduced lender risk.",
      "Co-Signer: Someone with excellent credit can further strengthen your application.",
      "Borrow from a Credit Union: Sometimes more flexible than traditional banks for unique situations.",
      "Consider a Smaller Loan Amount: Can improve your approval odds if borrowing at the margin.",
      "Review Your Credit Report for Errors: Double-check for inaccuracies that could be affecting your score.",
    ],
    closing:
      "With a credit score in the 700s, you're well-positioned to find a personal loan that fits your needs with favourable terms and rates. Good luck!",
  },
  {
    slug: "750-799",
    label: "750-799",
    tier: "Very Good",
    whatItMeans:
      "In Canada, credit scores typically range from 300 to 900. A score between 750 and 799 is considered \"Excellent\" by Equifax Canada and \"Very Good\" by TransUnion Canada, placing you among the most creditworthy borrowers with a strong history of responsible credit management. This financial discipline is highly rewarded when applying for personal loans.",
    loanOptions: [
      { name: "Unsecured Personal Loans", description: "The most common type at this tier — no collateral required, and lenders compete for your business with competitive rates." },
      { name: "Lines of Credit", description: "Revolving access to funds up to a limit, with interest charged only on what you use." },
      { name: "Debt Consolidation Loans", description: "Combine multiple debts into one manageable payment, often at a lower rate than your existing balances." },
      { name: "Home Equity Lines of Credit (HELOCs)", description: "If you're a homeowner, a HELOC can offer very competitive rates for larger purposes secured by your equity." },
    ],
    rateInfo:
      "One of the biggest advantages of an excellent score is access to the lowest available rates — typically 5.99% to 12.99% APR, sometimes lower depending on market conditions. Terms typically range from 1 to 7 years, giving you flexibility to choose a term that fits your budget without forcing shorter terms with higher payments.",
    approvalTips: [
      "Maintain a Low Debt-to-Income Ratio: More comfortably shows you can take on new debt.",
      "Stable Employment History: Demonstrates reliability and predictable income.",
      "Provide All Required Documentation: ID, proof of income, and banking information ready to streamline approval.",
      "Shop Around: Compare rates from several lenders, especially online lenders offering pre-qualification with a soft check.",
    ],
    creditTips: [
      "Continue Paying Bills on Time: The biggest factor in your score — never miss a payment.",
      "Keep Credit Utilization Low: Stay well under 30%, lower is even better.",
      "Maintain a Mix of Credit: Different credit types managed responsibly can help.",
      "Periodically Check Your Credit Report: Dispute any inaccuracies you find from Equifax or TransUnion Canada.",
      "Limit New Credit Applications: Only apply when genuinely needed.",
    ],
    alternatives: [
      "Revisit Your Budget: Consider whether a smaller loan amount would be more manageable.",
      "Consider a Co-Signer: Can help in unusual circumstances affecting your application.",
      "Build a Relationship With Your Bank: A longstanding relationship can sometimes aid approval.",
      "Wait and Reapply: If your finances recently changed significantly, waiting a few months to stabilize can improve your odds.",
    ],
    closing:
      "With a credit score in the 750s, you're very well positioned to secure a personal loan that fits your needs with favourable terms and rates. By maintaining good financial habits, you can leverage your excellent credit to your advantage.",
  },
  {
    slug: "800-900",
    label: "800-900",
    tier: "Excellent",
    whatItMeans:
      "Having a credit score between 800 and 900 places you in an elite financial category. This \"excellent\" rating signals to lenders that you are a highly responsible and reliable borrower with a proven track record of managing credit effectively, and a healthy credit history. Both Equifax Canada and TransUnion Canada, the country's primary credit bureaus, consider scores in this range exceptional, indicating a very low risk of default.",
    loanOptions: [
      { name: "Unsecured Personal Loans", description: "These are the most common type and don't require collateral. Lenders are comfortable offering these to individuals with strong credit history at minimal risk." },
      { name: "Secured Personal Loans", description: "Less common at this tier, but can unlock even lower rates or larger amounts by putting up an asset like a vehicle or investment." },
      { name: "Lines of Credit", description: "A flexible option that lets you borrow, repay, and borrow again up to a set limit, with interest only charged on the amount used." },
      { name: "Bank and Credit Union Loans", description: "Traditional financial institutions will be eager to offer competitive rates and terms, often waiving typical fees for excellent-credit customers." },
      { name: "Online Lenders", description: "Many platforms specialize in quick approvals and competitive rates, often rivalling traditional banks." },
    ],
    rateInfo:
      "Borrowers in this range qualify for the lowest personal loan rates available in Canada — typically 4% to 9% APR, though this can fluctuate with market conditions. Some promotional offers may be even lower. Terms are also highly flexible, often extending to 5-7 years or more, making payments as manageable as you need.",
    approvalTips: [
      "Maintain a Low Debt-to-Income Ratio: Even with stellar credit, lenders still look at your income relative to existing debt.",
      "Consistent Income: A stable and reliable income source reassures lenders you can repay comfortably.",
      "Clear Purpose for the Loan: A reasonable, clearly stated purpose can help streamline approval.",
      "Provide All Required Documentation Promptly: Pay stubs, bank statements, and ID ready for a quick, painless process.",
    ],
    creditTips: [
      "Pay All Bills On Time, Every Time: Your most significant factor — never miss a payment.",
      "Keep Credit Utilization Low: Stay well under 30% of your available credit at all times.",
      "Monitor Your Credit Report: Check regularly with Equifax and TransUnion Canada for errors or fraud — you're entitled to a free copy annually.",
      "Maintain a Mix of Credit: A healthy variety of credit types can positively affect your score.",
      "Avoid Opening Too Many New Accounts at Once: Can temporarily lower your score by signalling higher risk.",
    ],
    alternatives: [
      "Re-Evaluate Your Budget: Reducing expenses can free up funds and make repayment easier without needing a loan at all.",
      "Address Any Discrepancies on Your Credit Report: If denied, double-check your report for inaccuracies that might be hindering a decision.",
      "Consider a Co-Signer: Not typical at this tier, but can strengthen an especially large loan application.",
    ],
    closing:
      "With an 800-900 credit score in Canada, you're in an enviable position to secure the best personal loan products on the market. Lenders will compete for your business, letting you choose the option that best fits your financial goals.",
  },
];

export function getCreditScoreBySlug(slug: string): CreditScoreRange | undefined {
  return creditScoreRanges.find((r) => r.slug === slug);
}

export function getOtherCreditScores(slug: string): CreditScoreRange[] {
  return creditScoreRanges.filter((r) => r.slug !== slug);
}
