import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to experience <span className="text-accent">better</span> lending?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70 text-balance">
            Check your rate in under a minute with zero impact on your credit score. 
            Join 240,000+ Canadians who&apos;ve chosen a fairer way to borrow.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto h-14 px-8 text-lg">
              <Link href="#apply">
                Apply for your loan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="soft" size="lg" asChild className="w-full sm:w-auto h-14 px-8 text-lg">
              <Link href="/contact">Talk to an advisor</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {[
              "No hidden fees",
              "Next-day funding",
              "Soft credit check",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 text-sm font-medium text-primary-foreground/60">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
