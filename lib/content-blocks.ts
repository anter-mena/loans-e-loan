export type HeadingBlock = { type: "heading"; level: 2 | 3; text: string };
export type ParagraphBlock = { type: "paragraph"; text: string };
export type ListBlock = {
  type: "list";
  ordered?: boolean;
  negative?: boolean;
  items: string[];
};
export type CalloutBlock = { type: "callout"; text: string };
export type FaqBlock = {
  type: "faq";
  items: { question: string; answer: string }[];
};
export type TableBlock = { type: "table"; headers: string[]; rows: string[][] };

export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | CalloutBlock
  | FaqBlock
  | TableBlock;

export type ArticleContent = {
  subtitle: string;
  blocks: ContentBlock[];
};
