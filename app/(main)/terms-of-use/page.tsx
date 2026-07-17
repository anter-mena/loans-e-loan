import type { Metadata } from "next";
import { ArrowUpRight, FileCheck, Mail, Scale, ShieldCheck } from "lucide-react";

import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { LegalSection, type LegalBlock } from "@/components/legal/legal";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use - E-Loan",
  description:
    "The terms and conditions governing your use of E-Loan's website and services. Please read these terms carefully before using our services.",
  alternates: { canonical: `${siteUrl}/terms-of-use` },
  openGraph: {
    title: "Terms of Use - E-Loan",
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
        p: "By authorizing automatic withdrawals from your designated bank account for loan repayment, you acknowledge acceptance of these Terms. These Terms have been made accessible to you through multiple channels - including our physical location, our website at e-loan.ca, and through direct communication with our representatives - before you finalize your transaction.",
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

const summary = [
  { icon: Scale, label: "Governing law", value: "Ontario and federal Canadian law" },
  { icon: FileCheck, label: "Agreement type", value: "Electronic acceptance and records" },
  { icon: ShieldCheck, label: "Disputes", value: "Individual resolution framework" },
];

export default function TermsOfUsePage() {
  return (
    <main className="bg-background">
      <section className="mx-auto w-full max-w-[1000px] border-x border-border">
        <SectionTitleBand label="Legal Document" className="border-b border-border" />

        <section className="grid border-b border-border lg:grid-cols-[0.58fr_0.42fr]">
          <div className="px-6 py-14 md:px-10 lg:py-16">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Terms of Use
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-foreground md:text-7xl">
              Rules for using E-Loan services.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              Please read these terms carefully before using our website, application flow, or
              services. They explain how the platform works, how acceptance is recorded, and
              what obligations apply.
            </p>
          </div>

          <aside className="relative overflow-hidden border-t border-primary bg-primary p-6 text-primary-foreground md:p-8 lg:border-l lg:border-t-0">
            <FlickeringGrid
              aria-hidden
              className="absolute inset-0"
              squareSize={3}
              gridGap={2}
              color="hsl(var(--primary-foreground))"
              maxOpacity={0.18}
              flickerChance={0.08}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/45 via-primary/88 to-primary" />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <div>
                <p className="inline-block bg-accent px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                  Document snapshot
                </p>
                <div className="mt-6 grid border border-border-dark bg-primary">
                  {summary.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex gap-4 border-b border-border-dark p-4 last:border-b-0">
                      <span className="grid size-9 shrink-0 place-items-center bg-accent text-accent-foreground">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <p className="inline-block bg-accent px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-foreground">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-semibold leading-5">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="border-t border-border-dark pt-5 text-xs leading-5 text-primary-foreground/62">
                Last updated January 16, 2026. Continued use of E-Loan services confirms
                acceptance of these terms and future amendments.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid border-b border-border lg:grid-cols-[280px_1fr]">
          <aside className="border-b border-primary bg-primary p-6 text-primary-foreground md:p-8 lg:border-b-0 lg:border-r">
            <div className="lg:sticky lg:top-24">
              <p className="inline-block bg-accent px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                Read first
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-primary-foreground">
                These terms form a binding agreement.
              </h2>
              <p className="mt-4 text-sm leading-6 text-primary-foreground/68">
                By using E-Loan&apos;s services, you acknowledge that you have read, understood,
                and agreed to be bound by these Terms of Use.
              </p>
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
              Important notice
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground">
              Do not use the services if you do not agree.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              These terms constitute a legally binding agreement between you and E-Loan. We
              recommend reviewing this document periodically for updates.
            </p>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center bg-accent text-accent-foreground">
                <Mail className="size-4" />
              </span>
              <h2 className="text-lg font-semibold text-foreground">Questions about terms?</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Our team can help clarify questions about this document.
            </p>
            <a
              href="mailto:legal@e-loan.ca"
              className="group mt-5 inline-flex items-center gap-2 bg-accent px-2 py-1 text-sm font-bold text-accent-foreground underline-offset-4 hover:underline"
            >
              legal@e-loan.ca
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
