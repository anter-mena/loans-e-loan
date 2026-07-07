import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact E-Loan — We're here to help",
  description:
    "Questions about your application, rates, or repayment? Reach the E-Loan team by phone, email, or message. We reply within one business day.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Contact E-Loan — We're here to help",
    description:
      "Reach the E-Loan team by phone, email, or message. We reply within one business day.",
    url: `${siteUrl}/contact`,
    siteName: "E-Loan",
    type: "website",
  },
};

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: "1-888-ELOANCA",
    detail: "Mon–Fri, 8am–8pm ET",
    href: "tel:1888356226",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "support@eloan.ca",
    detail: "We reply within one business day",
    href: "mailto:support@eloan.ca",
  },
  {
    icon: MessageCircle,
    label: "Live chat",
    value: "Chat with an advisor",
    detail: "Look for the chat bubble, bottom-right",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      {/* ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-40 right-1/4 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -left-32 h-[320px] w-[320px] rounded-full bg-gold/10 blur-3xl" />

      <section className="relative pt-16 pb-16 md:pt-20 lg:pb-24">
        <div className="container mx-auto px-4">
          {/* header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Contact us
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl">
              Let&apos;s talk it through.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-balance">
              Whether you&apos;re mid-application or just weighing your options, a real
              person is here to help — no scripts, no runaround.
            </p>
          </div>

          {/* body */}
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            {/* form */}
            <ContactForm />

            {/* info column */}
            <div className="flex flex-col gap-4">
              {channels.map(({ icon: Icon, label, value, detail, href }) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {label}
                      </span>
                      <span className="mt-0.5 font-display text-base font-semibold text-foreground">
                        {value}
                      </span>
                      <span className="mt-0.5 text-xs text-muted-foreground">{detail}</span>
                    </span>
                  </>
                );

                const cardClass =
                  "flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all";

                return href ? (
                  <a
                    key={label}
                    href={href}
                    className={`${cardClass} hover:-translate-y-0.5 hover:shadow-card`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className={cardClass}>
                    {inner}
                  </div>
                );
              })}

              {/* hours + trust */}
              <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Clock className="h-4 w-4 text-accent" />
                  Support hours
                </div>
                <dl className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <dt>Monday – Friday</dt>
                    <dd className="font-medium text-foreground">8am – 8pm ET</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Saturday</dt>
                    <dd className="font-medium text-foreground">9am – 5pm ET</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sunday</dt>
                    <dd className="font-medium text-foreground">Closed</dd>
                  </div>
                </dl>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent-soft/60 p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-xs leading-relaxed text-foreground">
                  Your details are encrypted in transit and never sold. We&apos;ll only use
                  them to answer your enquiry.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  E-Loan Canada — proudly serving borrowers coast to coast, licensed in
                  every province we operate in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
