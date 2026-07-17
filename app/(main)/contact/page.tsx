import type { Metadata } from "next";
import { Clock, MapPin, ShieldCheck } from "lucide-react";

import { ContactCards } from "@/components/contact/contact-cards";
import { ContactForm } from "@/components/contact/contact-form";
import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact E-Loan - We're here to help",
  description:
    "Questions about your application, rates, or repayment? Reach the E-Loan team by phone, email, or message. We reply within one business day.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Contact E-Loan - We're here to help",
    description:
      "Reach the E-Loan team by phone, email, or message. We reply within one business day.",
    url: `${siteUrl}/contact`,
    siteName: "E-Loan",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto w-full max-w-[1000px] border-x border-border">
        <SectionTitleBand label="Contact" className="border-b border-border" />

        <div className="grid border-b border-border lg:grid-cols-[0.42fr_0.58fr]">
          <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
            <p className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span aria-hidden className="h-3 w-px bg-accent" />
              Contact us
            </p>
            <h1 className="mt-6 max-w-md font-display text-5xl leading-[1.02] tracking-tight text-balance text-foreground md:text-[3.5rem]">
              Let&apos;s talk it through.
            </h1>
          </div>

          <div className="flex items-end p-6 md:p-8">
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Whether you&apos;re mid-application or just weighing your options, a real
              person is here to help. No scripts, no runaround.
            </p>
          </div>
        </div>

        <ContactCards />

        <div className="grid gap-6 border-b border-border p-4 md:p-6 lg:grid-cols-[0.58fr_0.42fr]">
          <ContactForm />

          <div className="grid gap-2.5">
            <div className="border border-border bg-secondary/40 p-3.5">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground">
                <span className="grid size-7 place-items-center rounded-md bg-accent text-accent-foreground">
                  <Clock className="h-3.5 w-3.5" />
                </span>
                Support hours
              </div>
              <dl className="mt-2.5 space-y-0.5 text-xs text-muted-foreground">
                <div className="flex justify-between gap-4">
                  <dt>Monday - Friday</dt>
                  <dd className="font-medium text-foreground">8am - 8pm ET</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Saturday</dt>
                  <dd className="font-medium text-foreground">9am - 5pm ET</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Sunday</dt>
                  <dd className="font-medium text-foreground">Closed</dd>
                </div>
              </dl>
            </div>

            <div className="flex items-start gap-2.5 border border-accent/30 bg-accent-soft/60 p-3.5">
              <span className="grid size-7 shrink-0 place-items-center rounded-md bg-primary text-accent">
                <ShieldCheck className="h-3.5 w-3.5" />
              </span>
              <p className="text-[11px] leading-5 text-foreground">
                Your details are encrypted in transit and never sold. We&apos;ll only use
                them to answer your enquiry.
              </p>
            </div>

            <div className="flex items-start gap-2.5 border border-border bg-background p-3.5">
              <span className="grid size-7 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              <p className="text-[11px] leading-5 text-muted-foreground">
                E-Loan Canada - proudly serving borrowers coast to coast, licensed in
                every province we operate in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
