import { Check, Lightbulb, Minus } from "lucide-react";

import type { GuideBlock, GuideFaqBlock, GuideHeadingBlock } from "@/lib/guides";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ArticleTocItem } from "@/components/loans/article-toc";

export function findFaqBlock(blocks: GuideBlock[]): GuideFaqBlock | undefined {
  return blocks.find((b): b is GuideFaqBlock => b.type === "faq");
}

export function blockHeadingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getContentTocItems(blocks: GuideBlock[]): ArticleTocItem[] {
  return blocks
    .filter((block): block is GuideHeadingBlock => block.type === "heading" && block.level === 2)
    .slice(0, 6)
    .map((block) => ({
      href: `#${blockHeadingId(block.text)}`,
      label: block.text,
    }));
}

function Bullets({ items, ordered, negative }: { items: string[]; ordered?: boolean; negative?: boolean }) {
  if (ordered) {
    return (
      <ol className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center bg-accent font-display text-xs font-bold text-accent-foreground">
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
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-primary text-primary-foreground">
              <Minus className="h-3.5 w-3.5" />
            </span>
          ) : (
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-accent text-accent-foreground">
              <Check className="h-3.5 w-3.5" />
            </span>
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
              <h2
                key={i}
                id={blockHeadingId(block.text)}
                className="scroll-mt-24 mt-10 font-display text-2xl font-bold tracking-tight text-foreground"
              >
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
              <div key={i} className="mt-6 flex items-start gap-3 border border-primary bg-primary p-4 text-primary-foreground">
                <span className="grid size-7 shrink-0 place-items-center bg-accent text-accent-foreground">
                  <Lightbulb className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-primary-foreground/72">{block.text}</p>
              </div>
            );

          case "table":
            return (
              <div key={i} className="mt-6 overflow-x-auto border border-border">
                <table className="w-full min-w-[420px] text-sm">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      {block.headers.map((h, hi) => (
                        <th key={hi} className="px-4 py-3 text-left font-semibold text-primary-foreground">
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
              <Accordion key={i} type="single" collapsible className="mt-8 border border-border">
                {block.items.map((item, fi) => (
                  <AccordionItem
                    key={fi}
                    value={item.question}
                    className="border-b border-border last:border-b-0"
                  >
                    <AccordionTrigger
                      iconVariant="plus"
                      className="rounded-none border-0 px-4 py-4 text-sm font-semibold text-foreground no-underline hover:no-underline **:data-[slot=accordion-trigger-icon]:text-primary"
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
