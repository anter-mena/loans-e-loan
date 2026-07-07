export function buildArticleKeywords(title: string, extra: string[] = []): string[] {
  const keywords = [
    title,
    `${title} Canada`,
    ...extra,
    "personal loans Canada",
    "E-Loan",
  ];

  return Array.from(new Set(keywords.map((k) => k.trim()).filter(Boolean)));
}
