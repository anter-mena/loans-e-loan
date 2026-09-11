import GithubSlugger from "github-slugger";

export type TocItem = { depth: number; text: string; id: string };

/**
 * Extracts h2/h3 headings from markdown into a table-of-contents list.
 * github-slugger produces the same ids rehype-slug gives the rendered headings.
 */
export function extractToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  let inFence = false;

  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.replace(/\r$/, "");
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.+?)\s*#*$/.exec(line);
    if (!match) continue;

    const text = match[2]
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links → text
      .replace(/[*_`~]/g, "") // emphasis / code marks
      .trim();
    if (!text) continue;

    items.push({ depth: match[1].length, text, id: slugger.slug(text) });
  }

  return items;
}
