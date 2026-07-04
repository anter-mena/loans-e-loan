import { Star, Quotes } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const featured = {
  quote:
    "I was dreading the loan process. e-loan made it feel like ordering takeout — clear, fast, and honest about the cost.",
  name: "Maya Chen",
  role: "Designer, Brooklyn",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
  amount: "$12,400",
  apr: "6.9%",
};

const others = [
  {
    quote:
      "Consolidated debt twice with e-loan. Both times the rate was lower than my bank quoted.",
    name: "Marcus Reid",
    role: "Small business owner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
  },
  {
    quote:
      "I knew the exact total I'd pay before I signed anything. Zero surprises.",
    name: "Aisha Okafor",
    role: "Nurse practitioner",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary/40 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Real borrowers</p>
          <h2 className="mt-3 font-display text-2xl leading-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
            Trusted by 240,000+ people who&apos;ve stopped fearing the word &ldquo;loan.&rdquo;
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-5 lg:grid-cols-[1.4fr_1fr]">
          {/* Featured */}
          <figure className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground shadow-card sm:p-7">
            <Quotes weight="fill" aria-hidden className="absolute right-6 top-6 h-16 w-16 text-accent/15" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} weight="fill" className="h-4 w-4 text-gold" />
              ))}
            </div>
            <blockquote className="mt-4 font-display text-lg leading-snug tracking-tight text-balance sm:text-xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-primary-foreground/10 pt-5">
              <div className="flex items-center gap-3">
                <Image
                  src={featured.avatar}
                  alt={featured.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-accent/40"
                />
                <div>
                  <div className="text-sm font-semibold">{featured.name}</div>
                  <div className="text-xs text-primary-foreground/60">{featured.role}</div>
                </div>
              </div>
              <div className="flex gap-4 text-right">
                <div>
                  <div className="font-display text-sm font-bold">{featured.amount}</div>
                  <div className="text-[10px] uppercase tracking-wider text-primary-foreground/50">Borrowed</div>
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-accent">{featured.apr}</div>
                  <div className="text-[10px] uppercase tracking-wider text-primary-foreground/50">APR</div>
                </div>
              </div>
            </figcaption>
          </figure>

          {/* Compact stack */}
          <div className="grid gap-5">
            {others.map((t) => (
              <figure
                key={t.name}
                className="flex gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" className="h-3 w-3 text-gold" />
                    ))}
                  </div>
                  <blockquote className="mt-2 text-xs leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">{t.name}</span> · {t.role}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
