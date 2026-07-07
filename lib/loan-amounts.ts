export type LoanAmountEntry = {
  amount: number;
  slug: string;
};

export const loanAmounts: LoanAmountEntry[] = [
  { amount: 300, slug: "300" },
  { amount: 500, slug: "500" },
  { amount: 600, slug: "600" },
  { amount: 750, slug: "750" },
  { amount: 800, slug: "800" },
  { amount: 1000, slug: "1000" },
  { amount: 1200, slug: "1200" },
  { amount: 1500, slug: "1500" },
  { amount: 1750, slug: "1750" },
  { amount: 2000, slug: "2000" },
  { amount: 2500, slug: "2500" },
  { amount: 3000, slug: "3000" },
  { amount: 3500, slug: "3500" },
  { amount: 4000, slug: "4000" },
  { amount: 4500, slug: "4500" },
  { amount: 5000, slug: "5000" },
];

export function getLoanAmountBySlug(slug: string): LoanAmountEntry | undefined {
  return loanAmounts.find((a) => a.slug === slug);
}

export function getOtherLoanAmounts(slug: string): LoanAmountEntry[] {
  return loanAmounts.filter((a) => a.slug !== slug).sort((a, b) => a.amount - b.amount);
}

export const CRIMINAL_RATE_APR = 35;
export const ESTIMATE_APR = 19.99;

export type CreditTier = {
  label: string;
  minApr: number;
  maxApr: number;
};

export const creditTiers: CreditTier[] = [
  { label: "Good (720+)", minApr: 9.99, maxApr: 15.99 },
  { label: "Fair (640-719)", minApr: 16.99, maxApr: 24.99 },
  { label: "Building (under 640)", minApr: 25.99, maxApr: 35 },
];

export function monthlyPayment(amount: number, aprPercent: number, termMonths: number): number {
  const r = aprPercent / 100 / 12;
  if (r === 0) return amount / termMonths;
  return (amount * r * Math.pow(1 + r, termMonths)) / (Math.pow(1 + r, termMonths) - 1);
}
