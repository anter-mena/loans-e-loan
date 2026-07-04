import { ChartLineDown, Clock, Smiley, Users, CurrencyDollar, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const stats = [
  { icon: ChartLineDown, value: "$3,847", label: "Avg. annual savings", trend: "+12% YoY" },
  { icon: Clock, value: "37s", label: "Median decision time", trend: "Industry: 3 days" },
  { icon: Smiley, value: "94%", label: "Would recommend us", trend: "12.4k surveys" },
  { icon: Users, value: "240k+", label: "Borrowers funded", trend: "Across 12 states" },
  { icon: CurrencyDollar, value: "$1.8B", label: "Originated to date", trend: "Since 2021" },
  { icon: ShieldCheck, value: "0", label: "Hidden fees, ever", trend: "Audited yearly" },
];

export default function Impact() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            · Live numbers
          </p>
          <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Proof that <span className="text-accent">scales.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Independently audited. Updated monthly. No marketing math.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ icon: Icon, value, label, trend }) => (
            <div key={label} className="flex flex-col gap-3 bg-card p-7 transition-colors hover:bg-secondary/20">
              <Icon size={20} weight="bold" className="text-accent" />
              <div className="font-display text-4xl font-bold tracking-tight text-foreground">
                {value}
              </div>
              <div className="text-sm text-foreground">{label}</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
