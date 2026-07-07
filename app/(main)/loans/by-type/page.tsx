import type { Metadata } from "next";
import { FileText } from "lucide-react";

import { LoansHub } from "@/components/loans/loans-hub";
import { loanTypes } from "@/lib/loan-types";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Loans by Type | E-Loan Canada",
  description:
    "Explore personal loan types in Canada — bad credit loans, debt consolidation, emergency, same-day, and loans for newcomers, gig workers, seniors, and more.",
  alternates: { canonical: `${siteUrl}/loans/by-type` },
  openGraph: {
    title: "Loans by Type | E-Loan Canada",
    description: "Explore personal loan types in Canada.",
    url: `${siteUrl}/loans/by-type`,
    siteName: "E-Loan",
    type: "website",
  },
};

export default function ByTypeHub() {
  return (
    <LoansHub
      title="Loans by type"
      subtitle="Different situations call for different loans. Find the type that fits yours — and how to qualify for it."
      categoryLabel="Loans by Type"
      icon={FileText}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Loans", href: "/loans" },
        { label: "By Type" },
      ]}
      items={loanTypes.map((t) => ({
        href: `/loans/by-type/${t.slug}`,
        title: t.name,
        desc: t.description,
      }))}
    />
  );
}
