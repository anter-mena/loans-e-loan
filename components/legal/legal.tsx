import { Check } from "lucide-react";

export type LegalBlock = { p: string } | { ul: string[] };

export function LegalBullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalSection({
  n,
  title,
  blocks,
}: {
  n: string;
  title: string;
  blocks: LegalBlock[];
}) {
  return (
    <section className="border-t border-border pt-8">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-sm font-bold tabular-nums text-accent">{n}</span>
        <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {blocks.map((block, i) =>
          "p" in block ? (
            <p key={i}>{block.p}</p>
          ) : (
            <LegalBullets key={i} items={block.ul} />
          )
        )}
      </div>
    </section>
  );
}
