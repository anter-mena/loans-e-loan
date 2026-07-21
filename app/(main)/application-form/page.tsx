import type { Metadata } from "next";
import { Suspense } from "react";
import { Lock, Timer, WalletCards } from "lucide-react";

import { ApplicationForm } from "@/components/application/application-form";
import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply for a Personal Loan - E-Loan",
  description:
    "Start your E-Loan application, compare personal loan offers, and check your rate with no credit score impact.",
  alternates: { canonical: `${siteUrl}/application-form` },
  openGraph: {
    title: "Apply for a Personal Loan - E-Loan",
    description:
      "Check your rate and compare Canadian personal loan offers in minutes.",
    url: `${siteUrl}/application-form`,
    siteName: "E-Loan",
    type: "website",
  },
};

const assurances = [
  { icon: Lock, label: "Soft credit check" },
  { icon: Timer, label: "Results in minutes" },
  { icon: WalletCards, label: "$300 to $3,000" },
];

export default function ApplyPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto w-full max-w-[1000px] border-x border-border">
        <SectionTitleBand label="Application" className="border-b border-border" />

        <section className="grid border-b border-border lg:grid-cols-[0.38fr_0.62fr]">
          <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Apply online
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground md:text-[3.7rem]">
              One form. Clear options. No guesswork.
            </h1>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Tell us what you need and we will help match you with available
              loan options from our partner network.
            </p>

            <div className="mt-8 grid border border-border bg-background">
              {assurances.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 border-b border-border p-4 last:border-b-0"
                >
                  <span className="grid size-8 place-items-center bg-accent text-accent-foreground">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 md:p-6">
            <Suspense
              fallback={
                <div className="grid min-h-[620px] place-items-center border border-border bg-background">
                  <p className="bg-accent px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-foreground">
                    Preparing form
                  </p>
                </div>
              }
            >
              <ApplicationForm />
            </Suspense>
          </div>
        </section>
      </section>
    </main>
  );
}
