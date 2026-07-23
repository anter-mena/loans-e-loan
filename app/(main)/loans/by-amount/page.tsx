import type { Metadata } from "next";
import { DollarSign } from "lucide-react";

import { LoansHub } from "@/components/loans/loans-hub";
import { loanAmounts } from "@/lib/loan-amounts";
import { siteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Loans by Amount | E-Loan Canada",
  description:
    "Borrow from $300 to $5,000 in Canada. See typical rates, monthly payments, and how fast you can get funded for the exact amount you need.",
  alternates: { canonical: `${siteUrl}/loans/by-amount` },
  openGraph: { images: [OG_IMAGE],
    title: "Loans by Amount | E-Loan Canada",
    description: "Borrow from $300 to $5,000 in Canada — rates, payments, and funding speed.",
    url: `${siteUrl}/loans/by-amount`,
    siteName: "E-Loan",
    type: "website",
  },
};

export default function ByAmountHub() {
  return (
    <LoansHub
      title="Loans by amount"
      subtitle="Pick the exact amount you need and see what it costs, who qualifies, and how fast you can be funded."
      categoryLabel="Loans by Amount"
      icon={DollarSign}
      compact
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Loans", href: "/loans" },
        { label: "By Amount" },
      ]}
      items={loanAmounts.map((a) => ({
        href: `/loans/by-amount/${a.slug}`,
        title: `$${a.amount.toLocaleString("en-CA")}`,
        desc: `Borrow $${a.amount} in Canada.`,
      }))}
    />
  );
}
