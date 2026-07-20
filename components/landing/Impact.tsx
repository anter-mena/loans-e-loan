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

      <div className="grid grid-cols-3">
        {stats.map(({ icon: Icon, value, label }, index) => (
          <div
            key={label}
            className={`group relative grid min-h-[112px] place-items-center overflow-hidden border-b border-border-dark px-1 py-4 text-center transition-colors hover:bg-primary-foreground/[0.045] sm:min-h-[140px] sm:px-3 sm:py-5 lg:min-h-[190px] lg:px-8 lg:py-8 ${
              index < stats.length - 1 ? "border-r" : ""
            }`}
          >
            <ArrowUpRight
              aria-hidden
              weight="thin"
              className="absolute right-4 top-4 hidden size-7 translate-x-6 -translate-y-6 text-primary-foreground opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 lg:block"
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-4 -translate-x-1/2 bg-gradient-to-b from-primary-foreground/24 via-primary-foreground/10 to-primary-foreground/3 bg-clip-text font-display text-[34px] font-black leading-none tracking-tight text-transparent [-webkit-text-stroke:0.5px_hsl(var(--primary-foreground)/0.035)] [text-shadow:0_-1px_0_hsl(var(--primary-foreground)/0.1)] sm:top-5 sm:text-[52px] lg:top-7 lg:text-[98px]"
            >
              {value}
            </div>
            <div className="relative mt-8 inline-flex min-w-0 flex-col items-center gap-1 text-[9px] font-semibold leading-tight text-primary-foreground/70 sm:mt-10 sm:text-xs lg:mt-14 lg:flex-row lg:gap-2 lg:text-sm">
              <Icon weight="bold" className="size-3.5 shrink-0 text-accent lg:size-[22px]" />
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
