import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Chatbot } from "@/components/layout/chatbot";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { CountdownBanner } from "@/components/layout/countdown-banner";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CountdownBanner />
        <div className="relative flex flex-1 flex-col">
          <Navbar />
          {children}
        </div>
        <Footer />
        <Chatbot />
        <CookieBanner />
      </body>
    </html>
  );
}
