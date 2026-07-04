import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        a: "There's a one-time origination fee (1%–6%) deducted from your loan amount. No prepayment penalties, no hidden charges.",
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
        a: "We currently lend in 12 provinces with more launching every quarter. You'll see eligibility instantly when you start your application.",
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
    <section id="faq" className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Questions, answered
          </p>
          <h2 className="mt-3 font-display text-2xl leading-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
            Everything you wanted to ask — without the fine print.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-8">
          {categories.map((cat, idx) => (
            <div key={cat.id}>
              <div className="mb-4 flex items-baseline gap-3">
                <span className="font-display text-xs font-semibold tabular-nums text-accent">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                  {cat.label}
                </h3>
                <div aria-hidden className="h-px flex-1 bg-border" />
              </div>
              <Accordion type="single" collapsible>
                {cat.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`${cat.id}-${i}`}>
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
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
