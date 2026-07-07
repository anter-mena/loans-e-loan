import type { Metadata } from "next";
import { Mail, Scale } from "lucide-react";

import { LegalSection, type LegalBlock } from "@/components/legal/legal";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use — E-Loan",
  description:
    "The terms and conditions governing your use of E-Loan's website and services. Please read these terms carefully before using our services.",
  alternates: { canonical: `${siteUrl}/terms-of-use` },
  openGraph: {
    title: "Terms of Use — E-Loan",
    description:
      "The terms and conditions governing your use of E-Loan's website and services.",
    url: `${siteUrl}/terms-of-use`,
    siteName: "E-Loan",
    type: "website",
  },
};

const sections: { n: string; title: string; blocks: LegalBlock[] }[] = [
  {
    n: "01",
    title: "Jurisdiction Notice",
    blocks: [
      {
        p: "All financial transactions conducted through this platform are considered to take place at our principal place of business in Toronto, Ontario, and these Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein, regardless of the user's geographic location.",
      },
    ],
  },
  {
    n: "02",
    title: "Important Information",
    blocks: [
      {
        p: "Our microloans are designed to meet immediate short-term financial needs. Customers must fully repay their existing loan before being eligible for additional financing.",
      },
    ],
  },
  {
    n: "03",
    title: "Definitions",
    blocks: [
      {
        p: 'In these Terms of Use ("Terms"), references to "Customer," "you," or "your" identify the individual applying for our services. References to "Company," "we," or "our" refer to E-Loan.',
      },
    ],
  },
  {
    n: "04",
    title: "Your Agreement to These Terms",
    blocks: [
      {
        p: "By authorizing automatic withdrawals from your designated bank account for loan repayment, you acknowledge acceptance of these Terms. These Terms have been made accessible to you through multiple channels—including our physical location, our website at e-loan.ca, and through direct communication with our representatives—before you finalize your transaction.",
      },
    ],
  },
  {
    n: "05",
    title: "Electronic Transaction Authorization",
    blocks: [
      {
        p: "You consent to our use of electronic methods to collect amounts due under your loan agreement. This includes our right to resubmit collection attempts if initial efforts fail, whether for partial amounts or the full balance due, plus any applicable returned payment fees that we are legally authorized to charge.",
      },
    ],
  },
  {
    n: "06",
    title: "Individual Dispute Resolution",
    blocks: [
      {
        p: "To the maximum extent permitted by applicable law, you agree to resolve any dispute with us on an individual basis and waive participation in class action litigation or consolidated proceedings involving multiple claimants. If you join such proceedings, you consent to injunctive measures for your withdrawal. This provision does not limit your right to pursue individual legal remedies available to you.",
      },
    ],
  },
  {
    n: "07",
    title: "Electronic Records",
    blocks: [
      {
        p: "You acknowledge that digital communications, online forms, scanned documents, and facsimile transmissions carry the same legal weight as original paper documents. Your acceptance may be demonstrated through various methods, including verbal confirmation (in person or by phone), electronic signature, typed name, or other indicated acceptance methods, all creating binding obligations under these Terms.",
      },
    ],
  },
  {
    n: "08",
    title: "Application Verification and Certification",
    blocks: [
      {
        p: "By submitting your application electronically or by phone, you certify under penalty of perjury that all information provided is accurate and complete. You confirm that you are not currently subject to bankruptcy proceedings nor planning to declare bankruptcy.",
      },
      {
        p: "You authorize us to verify your application details through consumer reporting agencies and other appropriate verification methods. We retain the sole discretion to refuse applications based on our risk assessment following due diligence.",
      },
      {
        p: "You understand that processing requires verification of your employment status, banking information, and other relevant details. You accept sole responsibility for protecting any personal identification numbers or account identifiers issued to you.",
      },
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <main className="relative overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Legal Document
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl">
              Terms of Use
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-balance">
              Please read these terms carefully before using our services.
            </p>
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

            {/* Important notice callout */}
            <div className="rounded-3xl border border-accent/20 bg-accent-soft/50 p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Important Notice
              </h2>
              <div className="mt-3 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  By using E-Loan&apos;s services, you acknowledge that you have read, understood, and
                  agreed to be bound by these Terms of Use. These terms constitute a legally binding
                  agreement between you and E-Loan. If you do not agree to these terms, please do not
                  use our services.
                </p>
                <p>
                  By continuing to use E-Loan&apos;s services, you confirm your acceptance of these Terms
                  of Use and any future amendments. We recommend reviewing these terms periodically for
                  any updates.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-accent" />
                <h2 className="font-display text-lg font-bold tracking-tight text-foreground">
                  Questions About Our Terms?
                </h2>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Our legal team is here to help clarify any questions you may have.
              </p>
              <a
                href="mailto:legal@e-loan.ca"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
              >
                <Mail className="h-4 w-4" />
                legal@e-loan.ca
              </a>
            </div>

            <p className="text-xs text-muted-foreground">Last Updated: January 16, 2026</p>
          </div>
        </div>
      </section>
    </main>
  );
}
