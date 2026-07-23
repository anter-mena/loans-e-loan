import type { Metadata } from "next";
import { CreditCard } from "lucide-react";

import { LoansHub } from "@/components/loans/loans-hub";
import { creditScoreRanges } from "@/lib/credit-scores";
import { siteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Loans by Credit Score | E-Loan Canada",
  description:
    "Find loan options for your credit range in Canada — from poor to excellent. See expected rates, approval tips, and ways to improve your score.",
  alternates: { canonical: `${siteUrl}/loans/by-credit-score` },
  openGraph: { images: [OG_IMAGE],
    title: "Loans by Credit Score | E-Loan Canada",
    description: "Find loan options for your credit range in Canada.",
    url: `${siteUrl}/loans/by-credit-score`,
    siteName: "E-Loan",
    type: "website",
  },
};

export default function ByCreditScoreHub() {
  return (
    <LoansHub
      title="Loans by credit score"
      subtitle="Your score shapes your options and your rate. Find the range that matches yours — and how to move up a tier."
      categoryLabel="Loans by Credit Score"
      icon={CreditCard}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Loans", href: "/loans" },
        { label: "By Credit Score" },
      ]}
      items={creditScoreRanges.map((r) => ({
        href: `/loans/by-credit-score/${r.slug}`,
        title: `${r.label} · ${r.tier}`,
        desc: `Loan options, expected rates, and approval tips for a ${r.tier.toLowerCase()} credit score.`,
      }))}
    />
  );
}
