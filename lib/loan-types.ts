export type LoanTypeMeta = {
  slug: string;
  name: string;
  description: string;
};

export const loanTypes: LoanTypeMeta[] = [
  {
    slug: "bad-credit-loans",
    name: "Bad Credit Loans",
    description:
      "Bad credit? No problem. Apply for bad credit loans in Canada regardless of credit history. Get $300-$5,000 approved quickly.",
  },
  {
    slug: "debt-consolidation-loans",
    name: "Debt Consolidation Loans",
    description:
      "Consolidate debt in Canada with a personal loan. Learn how debt consolidation loans work, interest rates, and how to qualify for the best rates.",
  },
  {
    slug: "emergency-loans",
    name: "Emergency Loans",
    description:
      "Need emergency cash fast? Apply for emergency loans in Canada with same-day approval. Get $300-$5,000 for unexpected expenses.",
  },
  {
    slug: "loans-for-gig-workers",
    name: "Loans for Gig Workers",
    description:
      "Self-employed or gig worker in Canada? Personal loans for freelancers, Uber drivers, DoorDash couriers & contractors. Flexible income requirements.",
  },
  {
    slug: "loans-for-newcomers",
    name: "Loans for Newcomers",
    description:
      "New to Canada? Get personal loans for newcomers with limited credit history. Newcomer-friendly lenders, fast approval. Build your Canadian credit.",
  },
  {
    slug: "loans-for-self-employed",
    name: "Loans for Self-Employed",
    description:
      "Self-employed in Canada? Personal loans for small business owners & entrepreneurs. Bank statements accepted as income proof. Apply online today.",
  },
  {
    slug: "loans-for-seniors",
    name: "Loans for Seniors",
    description:
      "Personal loans for seniors and retirees in Canada. Pension and retirement income accepted. Cover medical bills, home repairs & more. Apply today.",
  },
  {
    slug: "loans-for-single-parents",
    name: "Loans for Single Parents",
    description:
      "Personal loans for single parents in Canada. Cover childcare, bills & emergencies. Flexible terms, all credit scores. Government benefit income accepted.",
  },
  {
    slug: "payday-alternative-loans",
    name: "Payday Alternative Loans",
    description:
      "Looking for alternatives to payday loans? Get lower rates and longer terms with payday alternative loans in Canada.",
  },
  {
    slug: "personal-loans",
    name: "Personal Loans",
    description:
      "Apply for personal loans in Canada with fast approval. Get $300-$5,000 with competitive rates and flexible terms.",
  },
  {
    slug: "same-day-loans",
    name: "Same Day Loans",
    description:
      "Need cash fast in Canada? Learn all about same-day loans, how they work, interest rates, and how to apply for quick approval.",
  },
];

export function getLoanTypeBySlug(slug: string): LoanTypeMeta | undefined {
  return loanTypes.find((t) => t.slug === slug);
}

export function getOtherLoanTypes(slug: string): LoanTypeMeta[] {
  return loanTypes.filter((t) => t.slug !== slug);
}
