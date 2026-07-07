import type { Metadata } from "next";
import { Ban, Lock, Mail, ShieldCheck } from "lucide-react";

import { LegalSection, type LegalBlock } from "@/components/legal/legal";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — E-Loan",
  description:
    "How E-Loan collects, uses, and protects your personal information. Read our approach to data protection, disclosure, and your privacy rights.",
  alternates: { canonical: `${siteUrl}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy — E-Loan",
    description:
      "How E-Loan collects, uses, and protects your personal information.",
    url: `${siteUrl}/privacy-policy`,
    siteName: "E-Loan",
    type: "website",
  },
};

const badges = [
  { icon: Lock, label: "256-bit Encryption" },
  { icon: ShieldCheck, label: "PIPEDA Compliant" },
  { icon: Ban, label: "No Data Selling" },
];

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

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Legal</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl">
              Your Privacy Matters
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance">
              We recognize the importance of protecting your personal data and appreciate the trust
              you place in us. This policy explains our approach to collecting, using, and protecting
              the information you provide when using our services. Your use of our platform
              constitutes acceptance of the privacy practices described below.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft"
                >
                  <Icon className="h-4 w-4 text-accent" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8">
            {sections.map((s) => (
              <LegalSection key={s.n} n={s.n} title={s.title} blocks={s.blocks} />
            ))}

            {/* Privacy rights callout */}
            <div className="rounded-3xl border border-accent/20 bg-accent-soft/50 p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Your Privacy Rights
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                You retain the right to review, correct, or request deletion of personal information
                we hold about you. To exercise these rights or if you have questions regarding your
                data, please contact us using the information below.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-lg font-bold tracking-tight text-foreground">
                Contact Us
              </h2>
              <a
                href="mailto:privacy@e-loan.ca"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
              >
                <Mail className="h-4 w-4" />
                privacy@e-loan.ca
              </a>
            </div>

            <p className="text-xs text-muted-foreground">Last Updated: February 2026</p>
          </div>
        </div>
      </section>
    </main>
  );
}
