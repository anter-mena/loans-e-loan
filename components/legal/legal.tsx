import { Check } from "lucide-react";

export type LegalBlock = { p: string } | { ul: string[] };

export function LegalBullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-0.5 grid size-4 shrink-0 place-items-center bg-accent text-accent-foreground">
            <Check className="size-3" />
          </span>
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
    <section className="grid border-b border-border md:grid-cols-[96px_1fr]">
      <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
        <span className="inline-block bg-accent px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-accent-foreground">
          {n}
        </span>
      </div>
      <div className="p-5 md:p-7">
        <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
      <div className="mt-4 space-y-4 text-sm leading-6 text-muted-foreground sm:text-[15px]">
        {blocks.map((block, i) =>
          "p" in block ? (
            <p key={i}>{block.p}</p>
          ) : (
            <LegalBullets key={i} items={block.ul} />
          )
        )}
      </div>
      </div>
    </section>
  );
}
