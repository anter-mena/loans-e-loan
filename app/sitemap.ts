import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { guides } from "@/lib/guides";
import { comparisons } from "@/lib/comparisons";
import { loanPurposes } from "@/lib/loan-purposes";
import { loanTypes } from "@/lib/loan-types";
import { loanAmounts } from "@/lib/loan-amounts";
import { creditScoreRanges } from "@/lib/credit-scores";
import { canadaLocations } from "@/lib/canada-locations";
import { getAllPosts } from "@/lib/blog";
import { getAllNews } from "@/lib/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
    "/resources",
    "/resources/guides",
    "/resources/comparisons",
    "/resources/tools",
    "/resources/faq",
    "/loans",
    "/loans/by-amount",
    "/loans/by-purpose",
    "/loans/by-credit-score",
    "/loans/by-type",
    "/loans/by-location",
    "/blog",
    "/news",
  ];

  const dynamicRoutes = [
    ...guides.map((g) => `/resources/guides/${g.slug}`),
    ...comparisons.map((c) => `/resources/comparisons/${c.slug}`),
    ...loanAmounts.map((a) => `/loans/by-amount/${a.slug}`),
    ...loanPurposes.map((p) => `/loans/by-purpose/${p.slug}`),
    ...creditScoreRanges.map((r) => `/loans/by-credit-score/${r.slug}`),
    ...loanTypes.map((t) => `/loans/by-type/${t.slug}`),
    ...canadaLocations.map((l) => `/loans/by-location/${l.slug}`),
  ];

  const staticAndDynamic: MetadataRoute.Sitemap = [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.updated}T00:00:00Z`),
  }));

  const newsRoutes: MetadataRoute.Sitemap = getAllNews().map((item) => ({
    url: `${siteUrl}/news/${item.slug}`,
    lastModified: new Date(`${item.updated}T00:00:00Z`),
  }));

  return [...staticAndDynamic, ...blogRoutes, ...newsRoutes];
}
