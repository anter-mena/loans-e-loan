import type { Metadata } from "next";

import type { ArticleSection, FaqItem, PostMeta } from "@/lib/content";

// ── Site details: the only part of this file that differs between sites ──

export const SITE_NAME = "E-Loan";
export const BASE_URL = "https://e-loan.ca";

/** Publisher logo in article structured data, or null if the site has none. */
export const LOGO_URL: string | null = `${BASE_URL}/logo.svg`;

/**
 * Site-specific: the site-wide share card (app/opengraph-image.png) used by the
 * non-blog pages (about, contact, loans/*, resources/*, …). Next merges `openGraph`
 * SHALLOWLY from root to leaf, so any page that exports its own openGraph block
 * REPLACES the root's — including the og:image the file-based opengraph-image.png
 * attaches there. Those pages therefore put this image in their openGraph block.
 */
export const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "E-Loan — Fast personal loans in Canada with transparent rates.",
};

/** Social image for pages without their own opengraph-image, or null. */
export const DEFAULT_OG_IMAGE: { url: string; alt: string } | null = {
  url: OG_IMAGE.url,
  alt: OG_IMAGE.alt,
};

// ── Shared helpers: identical on every site ──

/**
 * Page metadata with an absolute canonical URL. Pass a short `title`: the brand
 * is appended here ("Title | Brand") as an absolute title, so the result is the
 * same whether or not the site's root layout has a title template.
 *
 * Pass `defaultImage: false` on pages that have their own opengraph-image file
 * (blog and news posts): an image set here would replace the generated one.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  defaultImage = true,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  defaultImage?: boolean;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const image = defaultImage ? DEFAULT_OG_IMAGE : null;

  return {
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...(image ? { images: [{ url: image.url, width: 1200, height: 630, alt: image.alt }] } : {}),
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      ...(image ? { images: [image.url] } : {}),
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${BASE_URL}${path}`,
    })),
  };
}

export function itemListJsonLd(section: ArticleSection, posts: PostMeta[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${BASE_URL}${section.path}/${post.slug}`,
    })),
  };
}

export function articleJsonLd(meta: PostMeta, section: ArticleSection) {
  const url = `${BASE_URL}${section.path}/${meta.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": section.schemaType,
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.updated,
    ...(meta.image ? { image: meta.image } : {}),
    author: { "@type": "Organization", name: meta.author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
      ...(LOGO_URL ? { logo: { "@type": "ImageObject", url: LOGO_URL } } : {}),
    },
    mainEntityOfPage: url,
    url,
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  if (faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
