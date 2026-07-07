export type LoanPurposeMeta = {
  slug: string;
  name: string;
  description: string;
};

export const loanPurposes: LoanPurposeMeta[] = [
  {
    slug: "business-startup-costs",
    name: "Business Startup Costs",
    description: "Starting a small business? Compare personal loans for startup costs in Canada. Fund equipment, inventory, and launch expenses.",
  },
  {
    slug: "birthday-special-occasions",
    name: "Birthday & Special Occasions",
    description: "Planning a milestone celebration? Compare personal loans for birthday parties and special events in Canada.",
  },
  {
    slug: "back-to-school",
    name: "Back to School",
    description: "Navigate back-to-school costs in Canada with personal loans. Learn about typical expenses, loan options, and responsible borrowing.",
  },
  {
    slug: "baby-expenses",
    name: "Baby Expenses",
    description: "Expecting a baby in Canada? Learn how a personal loan can help cover the costs of welcoming your new arrival. Get tips on managing baby expenses.",
  },
  {
    slug: "appliance-replacement",
    name: "Appliance Replacement",
    description: "Need to replace a broken appliance in Canada? Learn how personal loans can help, typical costs, and tips for responsible borrowing.",
  },
  {
    slug: "adoption-expenses",
    name: "Adoption Expenses",
    description: "Planning to adopt? Compare personal loans for adoption expenses in Canada. Cover agency fees, legal costs, and travel.",
  },
  {
    slug: "car-down-payment",
    name: "Car Down Payment",
    description: "Need a down payment for a vehicle? Compare personal loans for car down payments in Canada. Get approved quickly with competitive rates.",
  },
  {
    slug: "car-repairs",
    name: "Car Repairs",
    description: "Compare personal loans for car repairs in Canada. Cover mechanic bills, transmission, engine and brake repairs with affordable payments.",
  },
  {
    slug: "certification-licensing-fees",
    name: "Certification & Licensing Fees",
    description: "Need to pay for professional certification or licensing? Compare personal loans for career development costs in Canada.",
  },
  {
    slug: "childcare-deposits",
    name: "Childcare Deposits",
    description: "Need to pay a daycare deposit? Compare personal loans for childcare registration and deposit fees in Canada.",
  },
  {
    slug: "christmas-expenses",
    name: "Christmas Expenses",
    description: "Considering a personal loan to cover Christmas expenses in Canada? Learn about typical costs, loan amounts, and how to apply for a Christmas loan tailored for Canadians.",
  },
  {
    slug: "debt-consolidation",
    name: "Debt Consolidation",
    description: "Explore how personal loans can help you consolidate debt in Canada. Learn about costs, benefits, and responsible loan management.",
  },
  {
    slug: "home-improvement",
    name: "Home Improvement",
    description: "Considering a personal loan for home renovations in Canada? Learn about typical costs, loan amounts, pros and cons, and how to apply for your dream home improvement project.",
  },
  {
    slug: "holiday-shopping",
    name: "Holiday Shopping",
    description: "Need extra funds for holiday gift shopping? Compare personal loans for seasonal spending in Canada. Manageable repayment terms.",
  },
  {
    slug: "funeral-expenses",
    name: "Funeral Expenses",
    description: "Get guidance on using personal loans to cover funeral expenses in Canada. Learn about costs, application, and responsible borrowing.",
  },
  {
    slug: "emergency-expenses",
    name: "Emergency Expenses",
    description: "Unexpected emergency? Learn how personal loans can help Canadians cover urgent costs like car repairs or medical bills. Get tips on applying and managing your loan.",
  },
  {
    slug: "divorce-separation-costs",
    name: "Divorce & Separation Costs",
    description: "Going through a divorce or separation? Compare personal loans to cover legal fees, moving costs, and transition expenses in Canada.",
  },
  {
    slug: "dental-expenses",
    name: "Dental Expenses",
    description: "Explore how personal loans can help cover dental expenses in Canada. Learn about typical costs, loan options, and responsible borrowing.",
  },
  {
    slug: "home-security",
    name: "Home Security",
    description: "Need to install a home security system? Compare personal loans for home safety equipment and installation in Canada.",
  },
  {
    slug: "moving-expenses",
    name: "Moving Expenses",
    description: "Considering a personal loan for your Canadian move? Learn about typical costs, loan amounts, pros and cons, and how to apply for moving expense financing.",
  },
  {
    slug: "medical-expenses",
    name: "Medical Expenses",
    description: "Explore personal loans for medical expenses in Canada. Learn about typical costs, application process, and responsible loan management for healthcare financing.",
  },
  {
    slug: "legal-fees",
    name: "Legal Fees",
    description: "Need help covering legal costs? Compare personal loans for attorney fees, court costs, and legal expenses in Canada. Fast approval, flexible terms.",
  },
  {
    slug: "insurance-premiums",
    name: "Insurance Premiums",
    description: "Struggling to pay insurance premiums? Compare personal loans to cover auto, home, or health insurance costs in Canada.",
  },
  {
    slug: "immigration-fees",
    name: "Immigration Fees",
    description: "Need help with immigration application costs? Compare personal loans for visa, PR, and citizenship fees in Canada.",
  },
  {
    slug: "pet-expenses",
    name: "Pet Expenses",
    description: "Unexpected vet bills or pet care costs stressing you out? Learn how a personal loan can help Canadian pet owners manage pet expenses responsibly.",
  },
  {
    slug: "wedding-expenses",
    name: "Wedding Expenses",
    description: "Considering a personal loan for your wedding in Canada? Learn about typical costs, pros & cons, and how to apply for wedding financing that fits your budget.",
  },
  {
    slug: "vacation",
    name: "Vacation",
    description: "Dreaming of a Canadian getaway? Explore personal loans for vacations in Canada, and how to apply responsibly.",
  },
  {
    slug: "utility-bills",
    name: "Utility Bills",
    description: "Canadians facing high utility bills can explore personal loans as a solution. Learn about typical costs, loan amounts, and responsible borrowing tips.",
  },
  {
    slug: "tuition",
    name: "Tuition",
    description: "Explore using personal loans for tuition in Canada. Learn about costs, pros & cons, and how to apply for student financing.",
  },
  {
    slug: "travel-emergency",
    name: "Travel Emergency",
    description: "Need to travel urgently for a family emergency? Compare emergency travel loans in Canada. Fast approval when you need it most.",
  },
  {
    slug: "tax-bills",
    name: "Tax Bills",
    description: "Don't let tax season stress you out! Learn how personal loans can help you manage your tax bill in Canada, with pros, cons, and application tips.",
  },
  {
    slug: "rent-payment",
    name: "Rent Payment",
    description: "Unexpected rent due? Explore personal loans for rent payment in Canada. Learn about costs, options, pros & cons, and how to apply responsibly.",
  },
  {
    slug: "prescription-medication",
    name: "Prescription Medication",
    description: "Need help paying for prescriptions? Compare personal loans for medication costs in Canada. Cover drug expenses until fully insured.",
  },
  {
    slug: "phone-electronics-repair",
    name: "Phone & Electronics Repair",
    description: "Need to fix your phone or laptop? Compare personal loans for electronics repair costs in Canada. Quick approval for device repairs.",
  },
];

export function getLoanPurposeBySlug(slug: string): LoanPurposeMeta | undefined {
  return loanPurposes.find((p) => p.slug === slug);
}

export function getOtherLoanPurposes(slug: string): LoanPurposeMeta[] {
  return loanPurposes.filter((p) => p.slug !== slug);
}
