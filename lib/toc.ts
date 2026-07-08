import GithubSlugger from "github-slugger";

export type TocItem = { depth: number; text: string; id: string };

/**
 * Extract h2/h3 headings from markdown into a table-of-contents list.
 * Uses github-slugger so the ids match the anchors that rehype-slug generates.
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

    const m = /^(#{2,3})\s+(.+?)\s*#*$/.exec(line);
    if (!m) continue;

    const depth = m[1].length;
    const text = m[2]
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links → text
      .replace(/[*_`~]/g, "") // emphasis / code marks
      .trim();
    if (!text) continue;

    items.push({ depth, text, id: slugger.slug(text) });
  }

  return items;
}
