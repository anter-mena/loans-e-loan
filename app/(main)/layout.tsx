import { Chatbot } from "@/components/layout/chatbot";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { CountdownBanner } from "@/components/layout/countdown-banner";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CountdownBanner />
      <div className="relative flex flex-1 flex-col">
        <Navbar />
        {children}
      </div>
      <Footer />
      <Chatbot />
      <CookieBanner />
    </>
  );
}
