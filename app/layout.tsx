import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Analytics from "@/components/analytics";
import { NavigationScrollReset } from "@/components/layout/navigation-scroll-reset";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "E-Loan Canada — Fast Personal Loans with Transparent Rates",
  description:
    "Get instant decisions on personal loans up to $50,000. Transparent rates, zero paperwork, and funds delivered in 24 hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavigationScrollReset />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
