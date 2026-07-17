import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";

import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { LegalSection, type LegalBlock } from "@/components/legal/legal";
import { PrivacySignalsPanel } from "@/components/privacy/privacy-signals-panel";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy - E-Loan",
  description:
    "How E-Loan collects, uses, and protects your personal information. Read our approach to data protection, disclosure, and your privacy rights.",
  alternates: { canonical: `${siteUrl}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy - E-Loan",
    description:
      "How E-Loan collects, uses, and protects your personal information.",
    url: `${siteUrl}/privacy-policy`,
    siteName: "E-Loan",
    type: "website",
  },
};

const sections: { n: string; title: string; blocks: LegalBlock[] }[] = [
  {
    n: "01",
    title: "Data Protection Measures",
    blocks: [
      {
        p: "Our commitment to data security includes implementing advanced encryption protocols that meet financial industry standards. We use SSL technology to protect the transmission of sensitive information, including financial and personal details.",
      },
      {
        p: "We regularly review and enhance our security infrastructure to maintain the highest level of data protection for our users.",
      },
    ],
  },
  {
    n: "02",
    title: "Restricted Internal Information Access",
    blocks: [
      {
        p: "Only designated personnel with appropriate authorization can access customer information. Each team member with data access privileges must complete thorough background screening before receiving clearance.",
      },
      {
        p: "This controlled access framework ensures that information is handled exclusively for legitimate business purposes, including:",
      },
      { ul: ["Processing applications", "Service improvement", "Credit assessment", "Customer support"] },
    ],
  },
  {
    n: "03",
    title: "Third-Party Information Disclosure",
    blocks: [
      {
        p: "To process your application, maintain your account, and provide our services effectively, we may disclose your information to select external partners. These may include:",
      },
      {
        ul: [
          "Lending institutions",
          "Credit reporting agencies",
          "Collection agencies",
          "Marketing service providers",
          "Other business partners relevant to our operations",
        ],
      },
      {
        p: "All external parties are contractually required to maintain data confidentiality and may only use your information for authorized purposes related to your application or associated services.",
      },
    ],
  },
  {
    n: "04",
    title: "Multi-Lender Application Network",
    blocks: [
      {
        p: "Applications submitted through our partner network are distributed to various lending institutions and brokerage services to maximize your approval probability. Information processed through this network may be stored in jurisdictions outside your province.",
      },
      {
        p: "Network participants and their affiliates may contact you via email, phone, or text messaging (carrier rates apply). You retain the right to stop these communications by responding HELP for support or STOP to cease messages.",
      },
    ],
  },
  {
    n: "05",
    title: "Phone and Text Message Authorization",
    blocks: [
      {
        p: "Submitting your phone number grants us permission to contact you via voice calls and text messages. Communications may encompass:",
      },
      {
        ul: [
          "Transaction confirmations",
          "Special offers",
          "Account notifications",
          "Feedback requests",
          "Other information relevant to your application or account status",
        ],
      },
      {
        p: "You may withdraw this consent at any time by following the opt-out instructions included in text messages or by contacting us directly using the details provided below.",
      },
    ],
  },
  {
    n: "06",
    title: "Email Communication Authorization",
    blocks: [
      {
        p: "Providing your email address constitutes consent to receive electronic correspondence from us. Email communications may include:",
      },
      {
        ul: [
          "Transaction-related messages",
          "Promotional content",
          "Account information",
          "Survey invitations",
          "Other material relevant to your relationship with our company",
        ],
      },
      {
        p: "You retain the right to revoke email consent whenever you wish. Unsubscribe options are available via links in our emails, or you can contact us directly using the information below.",
      },
    ],
  },
  {
    n: "07",
    title: "Information Retention Period",
    blocks: [
      {
        p: "Personal data will be maintained for the duration necessary to achieve the objectives described in this policy and to comply with legal and regulatory requirements.",
      },
      {
        p: "If you wish to request deletion of your information, please contact us using our contact details below.",
      },
    ],
  },
  {
    n: "08",
    title: "Website Analytics and Cookies",
    blocks: [
      {
        p: "We may deploy cookies and similar technologies to enhance your website experience and analyze usage patterns.",
      },
      { p: "Additional details are available in our separate cookie policy." },
    ],
  },
];

const commitments = [
  { label: "Collection", value: "Only for application, account, support, and service purposes." },
  { label: "Access", value: "Limited to authorized personnel and approved service partners." },
  { label: "Control", value: "You may request review, correction, or deletion of your data." },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto w-full max-w-[1000px] border-x border-border">
        <SectionTitleBand label="Privacy Policy" className="border-b border-border" />

        <section className="grid border-b border-border lg:grid-cols-[0.56fr_0.44fr]">
          <div className="px-6 py-14 md:px-10 lg:py-16">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Data protection
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-foreground md:text-7xl">
              Your privacy should be easy to understand.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              This policy explains how E-Loan collects, uses, shares, protects, and retains
              information when you use our website, application flow, and services.
            </p>
          </div>

          <PrivacySignalsPanel />
        </section>

        <section className="grid border-b border-border lg:grid-cols-[280px_1fr]">
          <aside className="border-b border-primary bg-primary p-6 text-primary-foreground md:p-8 lg:border-b-0 lg:border-r">
            <div className="lg:sticky lg:top-24">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">
                Commitments
              </p>
              <div className="mt-6 grid gap-px border border-primary bg-primary">
                {commitments.map((item) => (
                  <div key={item.label} className="bg-primary p-4">
                    <p className="inline-block bg-accent px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-foreground">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-5 text-primary-foreground/72">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <div>
            {sections.map((section) => (
              <LegalSection key={section.n} n={section.n} title={section.title} blocks={section.blocks} />
            ))}
          </div>
        </section>

        <section className="grid border-b border-border md:grid-cols-[1fr_0.42fr]">
          <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
            <p className="inline-block bg-accent px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
              Your privacy rights
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground">
              You can ask to review, correct, or delete your information.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              To exercise these rights or ask questions regarding your data, contact us using
              the privacy email below. We will handle the request according to applicable law
              and regulatory requirements.
            </p>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center bg-accent text-accent-foreground">
                <Mail className="size-4" />
              </span>
              <h2 className="text-lg font-semibold text-foreground">Contact privacy</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Last updated February 2026.
            </p>
            <a
              href="mailto:privacy@e-loan.ca"
              className="group mt-5 inline-flex items-center gap-2 bg-accent px-2 py-1 text-sm font-bold text-accent-foreground underline-offset-4 hover:underline"
            >
              privacy@e-loan.ca
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
