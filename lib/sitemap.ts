import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";
import { guides } from "@/lib/guides";
import { comparisons } from "@/lib/comparisons";
import { loanPurposes } from "@/lib/loan-purposes";
import { loanTypes } from "@/lib/loan-types";
import { loanAmounts } from "@/lib/loan-amounts";
import { creditScoreRanges } from "@/lib/credit-scores";
import { canadaLocations } from "@/lib/canada-locations";
import { getAllPosts } from "@/lib/blog";
import { getAllNews } from "@/lib/news";

// Each section is served at /sitemap/<section>.xml and listed by the index at /sitemap.xml.
export const sitemapSections = ["pages", "loans", "resources", "blog", "news"] as const;

export type SitemapSection = (typeof sitemapSections)[number];

// Last real content change of each page group (YYYY-MM-DD), taken from git history.
// Update a group's date ONLY when its visible content changes (text, data, FAQs,
// tables, body links, sections added or removed) — not for design, metadata,
// analytics or code-only changes — so search engines can keep trusting these dates.
// Blog and news dates come from each post's `updated` frontmatter instead.
const pageLastModified = {
  home: "2026-07-21",
  about: "2026-07-21",
  contact: "2026-08-15",
  applicationForm: "2026-08-07",
  privacyPolicy: "2026-07-17",
  termsOfUse: "2026-07-17",
  loansHub: "2026-07-18", // /loans
  byAmount: "2026-07-21", // /loans/by-amount and every amount page
  byPurpose: "2026-07-21", // /loans/by-purpose and every purpose page
  byCreditScore: "2026-07-21", // /loans/by-credit-score and every range page
  byType: "2026-07-21", // /loans/by-type and every type page
  byLocation: "2026-07-21", // /loans/by-location and every province page
  resourcesHub: "2026-07-18", // /resources
  guides: "2026-07-21", // /resources/guides and every guide
  comparisons: "2026-07-21", // /resources/comparisons and every comparison
  tools: "2026-07-21", // /resources/tools
  faq: "2026-07-18", // /resources/faq
};

type PageGroup = keyof typeof pageLastModified;

type SitemapEntry = MetadataRoute.Sitemap[number];

// Invalid dates are left out rather than replaced with the build time.
function toDate(day: string): Date | undefined {
  const date = new Date(`${day}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

// Listing pages change whenever their newest post does.
function newestDate(days: string[]): Date | undefined {
  const times = days
    .map((day) => toDate(day)?.getTime())
    .filter((time): time is number => time !== undefined);
  return times.length > 0 ? new Date(Math.max(...times)) : undefined;
}

function pageEntry(route: string, group: PageGroup): SitemapEntry {
  return {
    url: `${BASE_URL}${route}`,
    lastModified: toDate(pageLastModified[group]),
  };
}

export function isSitemapSection(value: string): value is SitemapSection {
  return (sitemapSections as readonly string[]).includes(value);
}

export function getSitemapEntries(section: SitemapSection): MetadataRoute.Sitemap {
  if (section === "blog") {
    const posts = getAllPosts();
    return [
      {
        url: `${BASE_URL}/blog`,
        lastModified: newestDate(posts.map((post) => post.updated)),
      },
      ...posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: toDate(post.updated),
      })),
    ];
  }

  if (section === "news") {
    const news = getAllNews();
    return [
      {
        url: `${BASE_URL}/news`,
        lastModified: newestDate(news.map((item) => item.updated)),
      },
      ...news.map((item) => ({
        url: `${BASE_URL}/news/${item.slug}`,
        lastModified: toDate(item.updated),
      })),
    ];
  }

  if (section === "loans") {
    return [
      pageEntry("/loans", "loansHub"),
      pageEntry("/loans/by-amount", "byAmount"),
      ...loanAmounts.map((a) => pageEntry(`/loans/by-amount/${a.slug}`, "byAmount")),
      pageEntry("/loans/by-purpose", "byPurpose"),
      ...loanPurposes.map((p) => pageEntry(`/loans/by-purpose/${p.slug}`, "byPurpose")),
      pageEntry("/loans/by-credit-score", "byCreditScore"),
      ...creditScoreRanges.map((r) => pageEntry(`/loans/by-credit-score/${r.slug}`, "byCreditScore")),
      pageEntry("/loans/by-type", "byType"),
      ...loanTypes.map((t) => pageEntry(`/loans/by-type/${t.slug}`, "byType")),
      pageEntry("/loans/by-location", "byLocation"),
      ...canadaLocations.map((l) => pageEntry(`/loans/by-location/${l.slug}`, "byLocation")),
    ];
  }

  if (section === "resources") {
    return [
      pageEntry("/resources", "resourcesHub"),
      pageEntry("/resources/guides", "guides"),
      ...guides.map((g) => pageEntry(`/resources/guides/${g.slug}`, "guides")),
      pageEntry("/resources/comparisons", "comparisons"),
      ...comparisons.map((c) => pageEntry(`/resources/comparisons/${c.slug}`, "comparisons")),
      pageEntry("/resources/tools", "tools"),
      pageEntry("/resources/faq", "faq"),
    ];
  }

  // The home page lists the 4 newest blog posts (components/landing/BlogCards.tsx —
  // keep the count in sync), so it also changes whenever one of those posts does.
  const homePosts = getAllPosts().slice(0, 4);

  return [
    {
      url: `${BASE_URL}`,
      lastModified: newestDate([pageLastModified.home, ...homePosts.map((post) => post.updated)]),
    },
    pageEntry("/about", "about"),
    pageEntry("/application-form", "applicationForm"),
    pageEntry("/contact", "contact"),
    pageEntry("/privacy-policy", "privacyPolicy"),
    pageEntry("/terms-of-use", "termsOfUse"),
  ];
}

// Same markup Next.js generates for a built-in app/sitemap.ts, which can't be
// used here because it would take over /sitemap.xml from the index.
export function toUrlsetXml(entries: MetadataRoute.Sitemap): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const entry of entries) {
    xml += "<url>\n";
    xml += `<loc>${entry.url}</loc>\n`;
    if (entry.lastModified) {
      const lastModified =
        entry.lastModified instanceof Date ? entry.lastModified.toISOString() : entry.lastModified;
      xml += `<lastmod>${lastModified}</lastmod>\n`;
    }
    if (entry.changeFrequency) {
      xml += `<changefreq>${entry.changeFrequency}</changefreq>\n`;
    }
    if (typeof entry.priority === "number") {
      xml += `<priority>${entry.priority}</priority>\n`;
    }
    xml += "</url>\n";
  }

  xml += "</urlset>\n";
  return xml;
}

export function toSitemapIndexXml(): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const section of sitemapSections) {
    xml += "<sitemap>\n";
    xml += `<loc>${BASE_URL}/sitemap/${section}.xml</loc>\n`;
    xml += "</sitemap>\n";
  }

  xml += "</sitemapindex>\n";
  return xml;
}
