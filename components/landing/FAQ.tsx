import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitleBand from "./SectionTitleBand";

const categories = [
  {
    id: "rates",
    label: "Rates & credit",
    faqs: [
      {
        q: "Will checking my rate hurt my credit score?",
        a: "No. We use a soft credit pull to show your personalized rate, which has zero impact on your score. A hard pull only happens if you accept an offer.",
      },
      {
        q: "What are the fees?",
        a: "There is a one-time origination fee from 1% to 6% deducted from your loan amount. No prepayment penalties, no hidden charges.",
      },
    ],
  },
  {
    id: "loans",
    label: "Loans & limits",
    faqs: [
      {
        q: "How much can I borrow?",
        a: "Loans range from $1,000 to $50,000 with terms between 24 and 84 months. Your offer depends on your credit profile, income, and existing obligations.",
      },
      {
        q: "Is e-loan available in my province?",
        a: "We currently lend in 12 provinces with more launching every quarter. You will see eligibility instantly when you start your application.",
      },
    ],
  },
  {
    id: "payments",
    label: "Payments & support",
    faqs: [
      {
        q: "How fast will I get the money?",
        a: "Most approved borrowers receive funds in their bank account within 24 hours of accepting the offer.",
      },
      {
        q: "What if I miss a payment?",
        a: "We waive the first late fee automatically and our team will work with you on a flexible plan.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-b border-border bg-background text-foreground">
      <SectionTitleBand label="Questions, Answered" className="border-b border-border" />

      <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
        <div className="border-b border-border px-6 py-10 md:px-8 lg:border-b-0 lg:border-r">
          <p className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <span aria-hidden className="h-3 w-px bg-accent" />
            FAQ
          </p>
          <h2 className="mt-4 max-w-sm font-display text-4xl leading-[1.02] tracking-tight text-balance text-foreground md:text-[2.75rem]">
            Everything you wanted to ask, without the fine print.
          </h2>
        </div>

        <div className="px-6 py-8 md:px-8">
          {categories.map((cat, idx) => (
            <div key={cat.id} className="not-last:mb-8">
              <div className="flex items-center gap-4 pb-3">
                <span className="bg-accent px-2 py-1 font-mono text-[10px] font-bold tabular-nums text-accent-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-bold tracking-tight text-foreground">
                  {cat.label}
                </h3>
                <div aria-hidden className="h-px flex-1 bg-border" />
              </div>

              <Accordion type="single" collapsible>
                {cat.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`${cat.id}-${i}`} className="border-b border-border">
                    <AccordionTrigger
                      iconVariant="plus"
                      className="rounded-none border-0 py-4 text-left text-sm font-bold text-foreground hover:no-underline focus-visible:ring-2"
                    >
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="max-w-xl pb-4 text-sm leading-7 text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
