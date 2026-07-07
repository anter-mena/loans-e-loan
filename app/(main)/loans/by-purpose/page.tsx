import type { Metadata } from "next";
import { Target } from "lucide-react";

import { LoansHub } from "@/components/loans/loans-hub";
import { loanPurposes } from "@/lib/loan-purposes";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Loans by Purpose | E-Loan Canada",
  description:
    "Find the right personal loan for your goal — debt consolidation, home improvement, medical bills, moving, weddings, and more, across Canada.",
  alternates: { canonical: `${siteUrl}/loans/by-purpose` },
  openGraph: {
    title: "Loans by Purpose | E-Loan Canada",
    description: "Find the right personal loan for your goal across Canada.",
    url: `${siteUrl}/loans/by-purpose`,
    siteName: "E-Loan",
    type: "website",
  },
};

export default function ByPurposeHub() {
  return (
    <LoansHub
      title="Loans by purpose"
      subtitle="Whatever you're borrowing for, start with a guide built around it — typical costs, options, and how to borrow responsibly."
      categoryLabel="Loans by Purpose"
      icon={Target}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Loans", href: "/loans" },
        { label: "By Purpose" },
      ]}
      items={loanPurposes.map((p) => ({
        href: `/loans/by-purpose/${p.slug}`,
        title: p.name,
        desc: p.description,
      }))}
    />
  );
}
