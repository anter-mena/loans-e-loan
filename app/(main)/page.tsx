import type { Metadata } from "next"
import Hero from "@/components/landing/Hero"
import Benefits from "@/components/landing/Benefits"
import HowItWorks from "@/components/landing/HowItWorks"
import UseCases from "@/components/landing/UseCases"
import Impact from "@/components/landing/Impact"
import Testimonials from "@/components/landing/Testimonials"
import BlogCards from "@/components/landing/BlogCards"
import FAQ from "@/components/landing/FAQ"
import { buildMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site"

export const metadata: Metadata = buildMetadata({
  title: "E-Loan Canada — Fast Personal Loans with Transparent Rates",
  description:
    "Get instant decisions on personal loans up to $50,000. Transparent rates, zero paperwork, and funds delivered in 24 hours.",
  path: "/",
})

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "E-Loan",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  image: `${siteUrl}/opengraph-image`,
  description:
    "E-Loan connects Canadians with personal loans up to $50,000 — transparent rates, zero paperwork, and funds in as little as 24 hours.",
  areaServed: { "@type": "Country", name: "Canada" },
  telephone: "+1-888-356-2622",
  email: "support@eloan.ca",
}

const loanProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "LoanOrCredit",
  name: "Personal Loan",
  loanType: "Personal loan",
  areaServed: { "@type": "Country", name: "Canada" },
  amount: {
    "@type": "MonetaryAmount",
    currency: "CAD",
    minValue: 1000,
    maxValue: 50000,
  },
  provider: { "@type": "FinancialService", name: "E-Loan", url: siteUrl },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(loanProductJsonLd) }}
      />
      <main className="bg-background">
        <Hero />
        <UseCases />
        <div className="mx-auto w-full max-w-[1000px]">
          <Benefits />
          <HowItWorks />
          <Impact />
        </div>
        <Testimonials />
        <BlogCards />
        <div className="mx-auto w-full max-w-[1000px] border-x border-border">
          <FAQ />
        </div>
      </main>
    </>
  )
}
