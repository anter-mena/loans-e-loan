import { Check, Lightbulb, Minus, Plus } from "lucide-react";

import type { GuideBlock, GuideFaqBlock } from "@/lib/guides";

export function findFaqBlock(blocks: GuideBlock[]): GuideFaqBlock | undefined {
  return blocks.find((b): b is GuideFaqBlock => b.type === "faq");
}

function Bullets({ items, ordered, negative }: { items: string[]; ordered?: boolean; negative?: boolean }) {
  if (ordered) {
    return (
      <ol className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 font-display text-xs font-bold text-accent">
              {i + 1}
            </span>
            <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">{item}</span>
          </li>
        ))}
      </ol>
    );
  }
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          {negative ? (
            <Minus className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          ) : (
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          )}
          <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ContentBlocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="space-y-1">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return block.level === 2 ? (
              <h2 key={i} className="mt-10 font-display text-2xl font-bold tracking-tight text-foreground">
                {block.text}
              </h2>
            ) : (
              <h3 key={i} className="mt-8 font-display text-lg font-semibold tracking-tight text-foreground">
                {block.text}
              </h3>
            );

          case "paragraph":
            return (
              <p key={i} className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {block.text}
              </p>
            );

          case "list":
            return <Bullets key={i} items={block.items} ordered={block.ordered} negative={block.negative} />;

          case "callout":
            return (
              <div key={i} className="mt-6 flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent-soft/50 p-4">
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-foreground">{block.text}</p>
              </div>
            );

          case "table":
            return (
              <div key={i} className="mt-6 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[420px] text-sm">
                  <thead className="bg-secondary/50">
                    <tr>
                      {block.headers.map((h, hi) => (
                        <th key={hi} className="px-4 py-3 text-left font-semibold text-foreground">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className="border-t border-border">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3 align-top text-muted-foreground">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "faq":
            return (
              <div key={i} className="mt-8 space-y-3">
                {block.items.map((item, fi) => (
                  <details
                    key={fi}
                    className="group rounded-2xl border border-border bg-card p-1 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-foreground">
                      {item.question}
                      <Plus className="h-4 w-4 shrink-0 text-accent transition-transform group-open:rotate-45" />
                    </summary>
                    <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                  </details>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
