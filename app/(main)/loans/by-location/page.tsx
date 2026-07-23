import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import { LoansHub } from "@/components/loans/loans-hub";
import { canadaLocations } from "@/lib/canada-locations";
import { siteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Loans by Location | E-Loan Canada",
  description:
    "Personal loans across every Canadian province and territory. Understand local rules, rate caps, and borrower protections where you live.",
  alternates: { canonical: `${siteUrl}/loans/by-location` },
  openGraph: { images: [OG_IMAGE],
    title: "Loans by Location | E-Loan Canada",
    description: "Personal loans across every Canadian province and territory.",
    url: `${siteUrl}/loans/by-location`,
    siteName: "E-Loan",
    type: "website",
  },
};

export default function ByLocationHub() {
  return (
    <LoansHub
      title="Loans by location"
      subtitle="Lending rules and rate caps vary by province. Find the guidance that applies where you live."
      categoryLabel="Loans by Location"
      icon={MapPin}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Loans", href: "/loans" },
        { label: "By Location" },
      ]}
      items={canadaLocations.map((p) => ({
        href: `/loans/by-location/${p.slug}`,
        title: p.name,
        desc: `Personal loans, rules, and borrower protections in ${p.name}.`,
      }))}
    />
  );
}
