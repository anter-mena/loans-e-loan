import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const SITE_NAME = "E-Loan";
export const BASE_URL = siteUrl;

// Site-wide share card (app/opengraph-image.png). Next merges `openGraph`
// SHALLOWLY from root to leaf, so any page that exports its own openGraph
// block REPLACES the root's — including the og:image the file-based
// opengraph-image.png attaches there. Every openGraph object must therefore
// carry the image explicitly, or that page ships with no share image.
export const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "E-Loan — Fast personal loans in Canada with transparent rates.",
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImages = image ? [{ url: image, alt: title }] : [OG_IMAGE];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_CA",
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.map((i) => i.url),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${BASE_URL}${path}`,
    })),
  };
}
