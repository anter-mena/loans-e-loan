import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "E-Loan — Fast Personal Loans with Transparent Rates",
    short_name: "E-Loan",
    description:
      "Get instant decisions on personal loans up to $50,000. Transparent rates, zero paperwork, and funds delivered in 24 hours.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#171717",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
