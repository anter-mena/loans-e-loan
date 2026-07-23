import type { Metadata } from "next";
import {
  Eye,
  HeartHandshake,
  Scale,
  Timer,
} from "lucide-react";

import { AboutHyperContact } from "@/components/about/about-hyper-contact";
import { AboutOfferPreview } from "@/components/about/about-offer-preview";
import { AboutPixelApply } from "@/components/about/about-pixel-apply";
import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { siteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About E-Loan - Lending rebuilt around the borrower",
  description:
    "E-Loan is a Canadian lender on a mission to make borrowing fast, transparent, and fair. Learn who we are, what we stand for, and how we got here.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: { images: [OG_IMAGE],
    title: "About E-Loan - Lending rebuilt around the borrower",
    description:
      "A Canadian lender on a mission to make borrowing fast, transparent, and fair.",
    url: `${siteUrl}/about`,
    siteName: "E-Loan",
    type: "website",
  },
};

const principles = [
  {
    icon: Eye,
    title: "Show the whole offer",
    desc: "Rates, dates, fees, and payments are visible before commitment.",
  },
  {
    icon: Timer,
    title: "Respect the clock",
    desc: "Most borrowers get clarity in seconds, not after a week of waiting.",
  },
  {
    icon: Scale,
    title: "Price risk fairly",
    desc: "We match people to options that fit instead of pushing the biggest loan.",
  },
  {
    icon: HeartHandshake,
    title: "Keep humans close",
    desc: "Support stays practical when plans change or life gets expensive.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "The promise",
    desc: "Make personal loans easier to read before anyone signs.",
  },
  {
    year: "2023",
    title: "The engine",
    desc: "Decisioning, matching, and repayment previews moved into one flow.",
  },
  {
    year: "2026",
    title: "The network",
    desc: "More Canadian coverage, stronger guidance, cleaner borrower tools.",
  },
];

const differences = [
  ["Hidden totals", "Total cost shown early"],
  ["Days of waiting", "Decisions in seconds"],
  ["Paperwork loops", "One guided application"],
  ["Generic support", "Borrower-aware help"],
];

export default function AboutPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label="About E-Loan" className="border-x border-b border-border" />

        <section className="grid min-h-[640px] border-b border-border lg:grid-cols-[0.58fr_0.42fr]">
          <div className="flex flex-col justify-between border-l border-border px-6 py-14 md:px-10 lg:py-16">
            <div>
              <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-4 w-px bg-accent" />
                Borrower-first lending
              </p>
              <h1 className="mt-5 max-w-[620px] font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground md:text-7xl">
                Money is stressful. The loan should be{" "}
                <span className="mt-1 inline-block bg-accent px-2 pb-1 text-accent-foreground">
                  legible.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                E-Loan exists to turn a confusing borrowing moment into a clear decision:
                what you can borrow, what it costs, when you repay, and who can help.
              </p>
            </div>

            <div className="mt-10 grid border border-border bg-background sm:grid-cols-2">
              <div className="border-b border-border p-5 sm:border-b-0 sm:border-r">
                <p className="inline-block bg-accent px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                  Before
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                  Guess the cost. Wait for an answer.
                </p>
              </div>
              <div className="p-5">
                <p className="inline-block bg-accent px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                  Now
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                  See the plan. Move when ready.
                </p>
              </div>
            </div>
          </div>

          <AboutOfferPreview />
        </section>

        <section className="grid border-x border-b border-border lg:grid-cols-[0.43fr_0.57fr]">
          <div className="border-b border-border p-6 md:p-10 lg:border-b-0 lg:border-r">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Why we exist
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-tight text-foreground md:text-5xl">
              We are not trying to make loans feel exciting.
            </h2>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              We are trying to make them understandable, calm, and fast enough for real life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2">
            {differences.map(([oldWay, newWay], index) => (
              <article
                key={oldWay}
                className="border-b border-border p-6 last:border-b-0 sm:border-r sm:even:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 md:p-8"
              >
                <p className="inline-block bg-accent px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                  0{index + 1}
                </p>
                <div className="mt-5 space-y-3">
                  <p className="inline-block bg-accent px-1.5 py-0.5 text-sm text-accent-foreground line-through decoration-accent-foreground decoration-2">
                    {oldWay}
                  </p>
                  <p className="text-2xl font-semibold leading-tight text-foreground">
                    {newWay}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-x border-b border-primary bg-primary text-primary-foreground">
          <SectionTitleBand label="Operating Principles" tone="dark" className="border-b border-primary" />
          <div className="grid grid-cols-2 md:grid-cols-4">
            {principles.map(({ icon: Icon, title, desc }, index) => (
              <article
                key={title}
                className="group relative min-h-[230px] overflow-hidden border-b border-border-dark p-4 odd:border-r transition-colors max-md:[&:nth-last-child(-n+2)]:border-b-0 hover:bg-primary-foreground/[0.045] md:min-h-[280px] md:border-r md:border-border-dark md:p-6 md:last:border-r-0"
              >
                <p className="absolute right-4 top-4 bg-gradient-to-b from-primary-foreground/24 via-primary-foreground/10 to-primary-foreground/3 bg-clip-text font-display text-5xl font-black leading-none tracking-tight text-transparent [-webkit-text-stroke:0.5px_hsl(var(--primary-foreground)/0.035)] [text-shadow:0_-1px_0_hsl(var(--primary-foreground)/0.1)] md:right-5 md:text-6xl">
                  0{index + 1}
                </p>
                <span className="relative grid size-10 place-items-center rounded-md bg-accent text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="relative mt-12 text-lg font-medium leading-tight md:mt-16 md:text-xl">{title}</h3>
                <p className="relative mt-3 text-xs leading-5 text-primary-foreground/65">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-x border-b border-border">
          <SectionTitleBand label="How We Got Here" className="border-b border-border" />
          <div className="relative grid md:grid-cols-3">
            <div aria-hidden className="absolute left-0 right-0 top-[70px] hidden h-px bg-accent/35 md:block" />
            {timeline.map((item, index) => (
              <article
                key={item.year}
                className="relative border-b border-border p-6 md:border-b-0 md:border-r md:p-8 last:md:border-r-0"
              >
                <div className="relative z-10 inline-grid size-16 place-items-center border border-accent bg-accent text-accent-foreground">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]">
                    {item.year}
                  </span>
                </div>
                <p className="mt-8 inline-block bg-accent px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid border-x border-b border-border lg:grid-cols-[0.52fr_0.48fr]">
          <div className="relative overflow-hidden border-b border-border bg-accent-soft p-6 md:p-10 lg:border-b-0 lg:border-r">
            <FlickeringGrid
              aria-hidden
              className="absolute inset-0"
              squareSize={2}
              gridGap={2}
              color="hsl(var(--accent))"
              maxOpacity={0.14}
              flickerChance={0.08}
            />
            <div className="relative">
              <p className="inline-block bg-accent px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                The standard
              </p>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-foreground">
                If the offer is not clear, it is not ready.
              </h2>
            </div>
          </div>
          <div className="p-6 md:p-10">
            <p className="text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              That standard keeps the product grounded. We would rather show a smaller offer
              people understand than a bigger one that hides risk. A better loan page should
              make the borrower feel more in control before they click apply, not after.
            </p>
            <div className="mt-8 flex flex-wrap justify-end gap-3 sm:justify-start">
              <AboutPixelApply />
              <AboutHyperContact />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
