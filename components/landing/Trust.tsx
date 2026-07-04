import { Lock, ShieldCheck, FileText, Buildings } from "@phosphor-icons/react/dist/ssr";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "FDIC-insured partner banks",
    desc: "Your funds are held with federally insured institutions.",
  },
  {
    icon: Lock,
    title: "256-bit AES encryption",
    desc: "The same security standard used by major banks.",
  },
  {
    icon: FileText,
    title: "Licensed in every state we serve",
    desc: "NMLS #1234567 — fully regulated and audited.",
  },
  {
    icon: Buildings,
    title: "Backed by tier-1 capital",
    desc: "Funded by the same investors trusted by Stripe and Plaid.",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Built on trust</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Your money deserves a partner you can verify.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:max-w-md">
              We publish our lending policies, our rate ranges, and our default rates publicly.
              Because trust isn&apos;t a slogan — it&apos;s a receipt.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <Icon size={24} weight="bold" className="text-accent" />
                <h3 className="mt-4 font-sans text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
