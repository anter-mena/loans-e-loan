import { ArrowUpRight, Clock, CurrencyDollar, Users } from "@phosphor-icons/react/dist/ssr";
import SectionTitleBand from "./SectionTitleBand";

const stats = [
  { icon: Users, value: "240k+", label: "Borrowers funded" },
  { icon: CurrencyDollar, value: "$1.8B", label: "Lent to date" },
  { icon: Clock, value: "37s", label: "Average decision" },
];

export default function Impact() {
  return (
    <section id="statistics" className="border-x bg-primary text-primary-foreground [border-left-color:hsl(var(--primary))] [border-right-color:hsl(var(--primary))]">
      <SectionTitleBand label="Statistics" tone="dark" className="border-y border-border-dark" />

      <div className="grid lg:grid-cols-3">
        {stats.map(({ icon: Icon, value, label }, index) => (
          <div
            key={label}
            className={`group relative grid min-h-[190px] place-items-center overflow-hidden border-b border-border-dark px-8 py-8 text-center transition-colors hover:bg-primary-foreground/[0.045] ${
              index < stats.length - 1 ? "lg:border-r" : ""
            }`}
          >
            <ArrowUpRight
              aria-hidden
              weight="thin"
              className="absolute right-4 top-4 size-7 translate-x-6 -translate-y-6 text-primary-foreground opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-7 -translate-x-1/2 bg-gradient-to-b from-primary-foreground/24 via-primary-foreground/10 to-primary-foreground/3 bg-clip-text font-display text-[86px] font-black leading-none tracking-tight text-transparent [-webkit-text-stroke:0.5px_hsl(var(--primary-foreground)/0.035)] [text-shadow:0_-1px_0_hsl(var(--primary-foreground)/0.1)] sm:text-[98px]"
            >
              {value}
            </div>
            <div className="relative mt-14 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/70">
              <Icon size={22} weight="bold" className="text-accent" />
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
