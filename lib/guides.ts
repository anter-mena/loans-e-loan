export type GuideIconName =
  | "BookOpen"
  | "Clock"
  | "Shield"
  | "ShieldAlert"
  | "ShieldCheck"
  | "ShieldOff"
  | "RefreshCw"
  | "AlertTriangle"
  | "Timer"
  | "Home"
  | "Car"
  | "HeartPulse"
  | "Plane"
  | "Gift"
  | "Truck"
  | "FileText"
  | "FileSearch"
  | "GraduationCap"
  | "Scale"
  | "Award"
  | "BadgeDollarSign"
  | "Ban"
  | "Coins"
  | "ClipboardCheck"
  | "PiggyBank"
  | "BarChart3"
  | "ListChecks"
  | "Percent"
  | "UserCheck"
  | "UserX"
  | "Briefcase"
  | "Calculator"
  | "Compass"
  | "TrendingDown"
  | "TrendingUp"
  | "Landmark"
  | "Sparkles"
  | "Receipt";

export type GuideSection = "main" | "how-to" | "regulations" | "seasonal";

export type GuideCategory =
  | "General Guides"
  | "Loan Types"
  | "Purposes"
  | "Comparisons"
  | "Educational"
  | "Special Circumstances"
  | "Tools/Guides"
  | "Alternatives"
  | "How-To"
  | "Regulations"
  | "Seasonal";

export type GuideCalculatorConfig = {
  purposeLabel: string;
  defaultAmount: number;
  defaultTerm: number;
};

export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  section: GuideSection;
  icon: GuideIconName;
  calculator?: GuideCalculatorConfig;
};

export type {
  HeadingBlock as GuideHeadingBlock,
  ParagraphBlock as GuideParagraphBlock,
  ListBlock as GuideListBlock,
  CalloutBlock as GuideCalloutBlock,
  FaqBlock as GuideFaqBlock,
  TableBlock as GuideTableBlock,
  ContentBlock as GuideBlock,
} from "./content-blocks";
export type { ArticleContent as GuideContent } from "./content-blocks";

export const guideSectionLabels: Record<Exclude<GuideSection, "main">, string> = {
  "how-to": "How-To Guides",
  regulations: "Provincial Lending Regulations",
  seasonal: "Seasonal & Timely Guides",
};

export const guides: GuideMeta[] = [
  // Main section
  { slug: "personal-loans", title: "Complete Guide to Personal Loans", description: "Everything you need to know about personal loans in Canada. Types, rates, requirements, and tips.", category: "General Guides", section: "main", icon: "BookOpen" },
  { slug: "choosing-loan-term-length", title: "How to Choose Your Loan Term Length", description: "Learn how to select the optimal loan term for your situation. Balance monthly payments, total interest, and your goals.", category: "General Guides", section: "main", icon: "Clock" },
  { slug: "get-personal-loan-bad-credit", title: "How to Get a Personal Loan with Bad Credit", description: "Step-by-step guide to getting approved for a loan with bad credit in Canada.", category: "General Guides", section: "main", icon: "Shield" },
  { slug: "bad-credit-loans", title: "Bad Credit Loans Guide", description: "Everything you need to know about getting a loan with bad credit in Canada.", category: "Loan Types", section: "main", icon: "ShieldAlert" },
  { slug: "debt-consolidation-guide", title: "Debt Consolidation Guide", description: "Learn how to consolidate your debts into a single, more manageable payment.", category: "Loan Types", section: "main", icon: "RefreshCw" },
  { slug: "emergency-loans", title: "Emergency Loans Guide", description: "How to get fast funding when unexpected expenses arise.", category: "Loan Types", section: "main", icon: "AlertTriangle" },
  { slug: "same-day-loans", title: "Same Day Loans Guide", description: "Find lenders offering same-day approval and funding options.", category: "Loan Types", section: "main", icon: "Timer" },
  { slug: "home-improvement", title: "Home Improvement Loans", description: "Finance your home renovation projects with the right loan.", category: "Purposes", section: "main", icon: "Home", calculator: { purposeLabel: "Home Improvement", defaultAmount: 10000, defaultTerm: 60 } },
  { slug: "car-repair", title: "Car Repair Loans", description: "Get your car fixed with flexible personal loan options.", category: "Purposes", section: "main", icon: "Car", calculator: { purposeLabel: "Car Repair", defaultAmount: 1500, defaultTerm: 24 } },
  { slug: "medical-expenses", title: "Medical Expense Loans", description: "Finance medical bills and healthcare costs in Canada.", category: "Purposes", section: "main", icon: "HeartPulse", calculator: { purposeLabel: "Medical Expense", defaultAmount: 2000, defaultTerm: 36 } },
  { slug: "vacation", title: "Vacation Loans Guide", description: "How to finance your dream vacation responsibly.", category: "Purposes", section: "main", icon: "Plane", calculator: { purposeLabel: "Vacation", defaultAmount: 500, defaultTerm: 48 } },
  { slug: "wedding-expenses", title: "Wedding Loans Guide", description: "Financing options for your special day.", category: "Purposes", section: "main", icon: "Gift", calculator: { purposeLabel: "Wedding", defaultAmount: 5000, defaultTerm: 48 } },
  { slug: "moving-expenses", title: "Moving Expense Loans", description: "Cover relocation costs with a personal loan.", category: "Purposes", section: "main", icon: "Truck", calculator: { purposeLabel: "Moving", defaultAmount: 3000, defaultTerm: 36 } },
  { slug: "personal-loans-guide", title: "Personal Loans Guide", description: "Understanding personal loans and how they work.", category: "Loan Types", section: "main", icon: "FileText" },
  { slug: "tuition", title: "Tuition & Education Loans", description: "Personal loans for education-related expenses in Canada.", category: "Purposes", section: "main", icon: "GraduationCap", calculator: { purposeLabel: "Tuition", defaultAmount: 5000, defaultTerm: 36 } },
  { slug: "secured-vs-unsecured-loans-guide", title: "Secured vs Unsecured Loans", description: "Learn the difference between secured and unsecured personal loans.", category: "Comparisons", section: "main", icon: "Scale" },
  { slug: "best-personal-loans", title: "Best Personal Loans", description: "Compare the best personal loan options in Canada for 2026.", category: "General Guides", section: "main", icon: "Award" },
  { slug: "bad-credit-loans-best", title: "Best Loans for Bad Credit", description: "Top-rated loan options for borrowers with bad credit in Canada.", category: "General Guides", section: "main", icon: "BadgeDollarSign" },
  { slug: "no-credit-check-loans", title: "No Credit Check Loans", description: "Explore loan options that don't require a traditional credit check.", category: "General Guides", section: "main", icon: "Ban" },
  { slug: "same-day-funding", title: "Same Day Loans Guide", description: "How to get approved and funded within the same business day.", category: "General Guides", section: "main", icon: "Timer" },
  { slug: "debt-consolidation-loans", title: "Debt Consolidation Loans", description: "Combine multiple debts into a single, manageable monthly payment.", category: "Loan Types", section: "main", icon: "Coins" },
  { slug: "payday-loan-alternatives", title: "Payday Loan Alternatives", description: "Safer, more affordable alternatives to payday loans.", category: "General Guides", section: "main", icon: "RefreshCw" },
  { slug: "personal-loan-requirements", title: "Loan Approval Requirements", description: "What you need to qualify for a personal loan in Canada.", category: "General Guides", section: "main", icon: "ClipboardCheck" },
  { slug: "personal-loan-vs-line-of-credit", title: "Personal Loan vs Line of Credit", description: "Which borrowing option is right for your situation?", category: "Comparisons", section: "main", icon: "Scale" },
  { slug: "how-to-get-loan-fast", title: "How to Get a Loan Fast", description: "Step-by-step guide to getting funded as quickly as possible.", category: "General Guides", section: "main", icon: "Timer" },
  { slug: "understanding-credit-reports", title: "Understanding Credit Reports", description: "Learn how to read and interpret your credit report to improve your borrowing power.", category: "Educational", section: "main", icon: "FileSearch" },
  { slug: "refinancing-personal-loans", title: "Refinancing Personal Loans", description: "When and how to refinance your personal loan for better rates or terms.", category: "Educational", section: "main", icon: "RefreshCw" },
  { slug: "emergency-fund-basics", title: "Emergency Fund Basics", description: "How to build an emergency fund to reduce your reliance on loans.", category: "Educational", section: "main", icon: "PiggyBank" },
  { slug: "understanding-debt-to-income-ratio", title: "Understanding Debt-to-Income Ratio", description: "How your DTI ratio affects loan approval and what you can do to improve it.", category: "Educational", section: "main", icon: "BarChart3" },
  { slug: "preparing-for-loan-application", title: "Preparing for a Loan Application", description: "What documents and information you need before applying for a personal loan.", category: "Educational", section: "main", icon: "ListChecks" },
  { slug: "credit-utilization-explained", title: "Credit Utilization Explained", description: "How credit utilization impacts your score and loan approval chances.", category: "Educational", section: "main", icon: "Percent" },
  { slug: "cosigner-responsibilities", title: "Cosigner Responsibilities", description: "What to know before cosigning a loan — risks, obligations, and alternatives.", category: "Educational", section: "main", icon: "UserCheck" },
  { slug: "avoiding-loan-scams", title: "Avoiding Loan Scams", description: "How to spot predatory lenders and protect yourself from loan fraud.", category: "Educational", section: "main", icon: "ShieldOff" },
  { slug: "loans-for-unemployed", title: "Loans for Unemployed", description: "Personal loan options for borrowers without traditional employment in Canada.", category: "Special Circumstances", section: "main", icon: "UserX" },
  { slug: "loans-for-self-employed", title: "Loans for Self-Employed", description: "How self-employed borrowers can qualify for personal loans in Canada.", category: "Special Circumstances", section: "main", icon: "Briefcase" },
  { slug: "personal-loan-vs-debt-consolidation", title: "Personal Loan vs Debt Consolidation", description: "Compare personal loans and debt consolidation to find the right strategy for your situation.", category: "Comparisons", section: "main", icon: "Scale" },
  { slug: "loan-payment-calculator-guide", title: "Loan Payment Calculator Guide", description: "Learn how to calculate your monthly loan payments and plan your budget effectively.", category: "Tools/Guides", section: "main", icon: "Calculator" },
  { slug: "how-long-to-pay-off-personal-loan", title: "How Long to Pay Off a Personal Loan", description: "Understand repayment timelines and strategies to pay off your loan faster.", category: "General Guides", section: "main", icon: "Clock" },
  { slug: "average-personal-loan-rates", title: "Average Personal Loan Rates", description: "Current average personal loan interest rates in Canada and how to get the best rate.", category: "General Guides", section: "main", icon: "Percent" },
  { slug: "payday-vs-installment-loans", title: "Payday vs Installment Loans", description: "Compare the costs, risks, and repayment structures of payday loans and installment loans.", category: "Comparisons", section: "main", icon: "Scale" },
  { slug: "personal-loan-alternatives", title: "Personal Loan Alternatives", description: "Explore alternatives to personal loans — from credit cards to home equity and peer-to-peer lending in Canada.", category: "Alternatives", section: "main", icon: "Compass" },

  // How-To section
  { slug: "how-to-get-a-loan-with-no-credit-history", title: "Get a Loan with No Credit History", description: "Step-by-step guide for first-time borrowers, newcomers, and young adults in Canada.", category: "How-To", section: "how-to", icon: "FileText" },
  { slug: "how-to-get-approved-after-bankruptcy", title: "Get Approved After Bankruptcy", description: "How to qualify for a personal loan after bankruptcy in Canada. Timelines and strategies.", category: "How-To", section: "how-to", icon: "ShieldCheck" },
  { slug: "how-to-lower-your-loan-interest-rate", title: "Lower Your Loan Interest Rate", description: "Practical negotiation tactics, refinancing options, and credit improvement tips to reduce your rate.", category: "How-To", section: "how-to", icon: "TrendingDown" },
  { slug: "how-to-rebuild-credit-after-collections", title: "Rebuild Credit After Collections", description: "A clear roadmap to dispute, negotiate, and recover your creditworthiness after collections.", category: "How-To", section: "how-to", icon: "TrendingUp" },
  { slug: "how-to-spot-predatory-lenders", title: "How to Spot Predatory Lenders", description: "Identify predatory lending practices and protect yourself from scams and hidden fees in Canada.", category: "How-To", section: "how-to", icon: "ShieldAlert" },
  { slug: "how-to-budget-after-taking-a-loan", title: "Budget After Taking a Loan", description: "Manage your finances and stay on track with repayments after taking out a personal loan.", category: "How-To", section: "how-to", icon: "Briefcase" },

  // Provincial Lending Regulations section
  { slug: "lending-regulations-ontario", title: "Ontario Lending Regulations", description: "Payday loan laws, interest rate caps, and borrower protections in Ontario.", category: "Regulations", section: "regulations", icon: "Landmark" },
  { slug: "lending-regulations-british-columbia", title: "BC Lending Regulations", description: "BPCPA rules, payday loan caps, and borrower rights in British Columbia.", category: "Regulations", section: "regulations", icon: "Landmark" },
  { slug: "lending-regulations-alberta", title: "Alberta Lending Regulations", description: "Fair Trading Act rules, payday loan caps, and consumer protections in Alberta.", category: "Regulations", section: "regulations", icon: "Landmark" },
  { slug: "lending-regulations-quebec", title: "Quebec Lending Regulations", description: "Consumer Protection Act, the effective payday loan ban, and protections in Quebec.", category: "Regulations", section: "regulations", icon: "Landmark" },
  { slug: "lending-regulations-manitoba", title: "Manitoba Lending Regulations", description: "Consumer Protection Office rules, payday loan caps, and borrower rights in Manitoba.", category: "Regulations", section: "regulations", icon: "Landmark" },

  // Seasonal & Timely Guides section
  { slug: "new-year-financial-reset", title: "New Year Financial Reset", description: "Start the year right with a complete financial reset plan for Canadians.", category: "Seasonal", section: "seasonal", icon: "Sparkles" },
  { slug: "tax-season-loan-tips", title: "Tax Season Loan Tips", description: "Smart strategies for managing loans during Canadian tax season. CRA payment plans and refund tips.", category: "Seasonal", section: "seasonal", icon: "Receipt" },
];

export function getGuideBySlug(slug: string): GuideMeta | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getRelatedGuides(slug: string, count = 4): GuideMeta[] {
  const current = getGuideBySlug(slug);
  if (!current) return [];

  const sameCategory = guides.filter(
    (g) => g.slug !== slug && g.category === current.category
  );
  if (sameCategory.length >= count) return sameCategory.slice(0, count);

  const sameSection = guides.filter(
    (g) => g.slug !== slug && g.section === current.section && g.category !== current.category
  );

  return [...sameCategory, ...sameSection].slice(0, count);
}
