import { Lock, ShieldCheck, FileText, Buildings } from "@phosphor-icons/react/dist/ssr";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "CDIC-insured partner banks",
    desc: "Your funds are held with institutions insured by the Canada Deposit Insurance Corporation.",
  },
  {
    icon: Lock,
    title: "256-bit AES encryption",
    desc: "The same security standard used by major banks.",
  },
  {
    icon: FileText,
    title: "Licensed in every province we serve",
    desc: "Fully regulated under provincial consumer protection legislation and independently audited.",
  },
  {
    icon: Buildings,
    title: "Backed by tier-1 capital",
    desc: "Funded by leading institutional investors in Canadian fintech.",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Built on trust</p>
            <h2 className="mt-3 font-display text-2xl leading-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
              Your money deserves a partner you can verify.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:max-w-md">
              We publish our lending policies, our rate ranges, and our default rates publicly.
              Because trust isn&apos;t a slogan — it&apos;s a receipt.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <Icon size={20} weight="bold" className="text-accent" />
                <h3 className="mt-3 font-sans text-sm font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
