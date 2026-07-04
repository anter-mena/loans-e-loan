import { Eye, Zap, HeartHandshake, BadgeCheck, Wallet, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Total transparency",
    desc: "See your full repayment plan before you sign. Every fee, every cent.",
    tag: "01 / Clarity",
  },
  {
    icon: Zap,
    title: "Decisions in seconds",
    desc: "Smart underwriting reviews your application instantly — most know in under a minute.",
    tag: "02 / Speed",
    featured: true,
  },
  {
    icon: HeartHandshake,
    title: "Human support",
    desc: "Real advisors, not bots. One tap away if life throws a curveball.",
    tag: "03 / Care",
  },
  {
    icon: BadgeCheck,
    title: "Soft credit check",
    desc: "Check your rate without affecting your credit score. Zero risk to look around.",
    tag: "04 / Safety",
  },
  {
    icon: Wallet,
    title: "Funds in 24 hours",
    desc: "Once approved, money lands in your account the next business day — often sooner.",
    tag: "05 / Delivery",
  },
  {
    icon: Sparkles,
    title: "Reward good habits",
    desc: "Pay on time and we lower your future rates. Borrowing should help you grow.",
    tag: "06 / Loyalty",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-end">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Why e-loan</p>
            <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              Built around the borrower, <span className="text-accent">not the bank.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground lg:max-w-md lg:justify-self-end">
            Six promises we hold ourselves to — written into our product, our pricing, and the
            way we treat the people who choose us.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc, tag, featured }) => (
            <article
              key={title}
              className={`group relative flex flex-col gap-5 p-7 transition-colors lg:p-8 ${
                featured
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-card-foreground hover:bg-secondary/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                    featured ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {tag}
                </span>
                <div
                  className={`grid h-10 w-10 place-items-center rounded-xl transition-transform duration-500 group-hover:-rotate-6 ${
                    featured ? "bg-accent text-accent-foreground" : "bg-accent-soft text-accent"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
              </div>
              <h3 className="font-display text-xl leading-snug">{title}</h3>
              <p
                className={`text-sm leading-relaxed ${
                  featured ? "text-primary-foreground/75" : "text-muted-foreground"
                }`}
              >
                {desc}
              </p>
              <div
                aria-hidden
                className={`mt-auto h-px w-10 ${featured ? "bg-accent" : "bg-foreground/20"}`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
