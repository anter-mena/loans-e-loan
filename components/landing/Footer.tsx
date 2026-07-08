"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-background pt-4 pb-2">
      <div className="mx-auto w-[98%]">
      <div className="relative mt-32">
        {/* Final CTA */}
        <section id="apply" className="absolute inset-x-0 top-0 z-10 mx-auto max-w-7xl -translate-y-1/2 overflow-hidden rounded-3xl bg-primary py-8 lg:py-10">
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08] blur-sm"
          style={{
            backgroundImage: "url('/favicon.svg')",
            backgroundSize: "420px 420px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-accent">
              <Image src="/logo-icon-white.svg" alt="" width={18} height={18} className="h-4.5 w-4.5" />
            </div>

            <div className="mt-2 flex flex-col items-center gap-1">
              <h2 className="font-display text-2xl leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Ready to experience
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <h2 className="font-display text-2xl leading-none tracking-tight text-white sm:text-3xl lg:text-4xl">
                  <span className="text-accent">better</span> rates
                </h2>
                <Link
                  href="#apply"
                  className="inline-flex translate-y-1.5 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary"
                >
                  Apply now
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {["No hidden fees", "Soft credit check"].map((text) => (
                <div key={text} className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-white" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative flex min-h-160 flex-col rounded-3xl bg-[#0b0f1a] pt-16 pb-8 text-white">
        <div className="container mx-auto flex flex-1 flex-col px-4 md:px-8">
          <div className="flex flex-1 flex-col justify-center">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            {/* Brand Column */}
            <div className="flex max-w-xs flex-col gap-6">
              <Link suppressHydrationWarning href="/" className="inline-flex items-center gap-2">
                <Image src="/logo-icon-white.svg" alt="" width={28} height={28} className="h-7 w-7" />
                <span className="font-display text-lg font-bold text-white">E-Loan</span>
              </Link>
              <p className="max-w-60 text-sm leading-relaxed text-slate-400 font-medium">
                Fast, transparent, and responsible lending services for Canadians, licensed in
                every province we serve.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone number</div>
                  <div className="mt-2 text-sm font-medium text-slate-300">1-888-ELOANCA</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</div>
                  <div className="mt-2 text-sm font-medium text-slate-300">support@eloan.ca</div>
                </div>
              </div>
            </div>

            {/* Link Columns */}
            <div className="flex flex-col gap-12 sm:flex-row sm:gap-16 lg:gap-24">
              <div className="flex flex-col">
                <h4 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500">Quick links</h4>
                <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                  <li><Link suppressHydrationWarning href="/about" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">About Us <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                  <li><Link suppressHydrationWarning href="/blog" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">Blog <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                  <li><Link suppressHydrationWarning href="/news" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">News <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                  <li><Link suppressHydrationWarning href="/#how" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">How It Works <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                  <li><Link suppressHydrationWarning href="/#faq" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">FAQ <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                  <li><Link suppressHydrationWarning href="/contact" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">Contact Us <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                  <li><Link suppressHydrationWarning href="#apply" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">Apply Now <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h4 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500">Social</h4>
                <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                  <li><Link suppressHydrationWarning href="#" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">Facebook <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                  <li><Link suppressHydrationWarning href="#" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">Instagram <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                  <li><Link suppressHydrationWarning href="#" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">LinkedIn <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                  <li><Link suppressHydrationWarning href="#" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">TikTok <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h4 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500">Legal</h4>
                <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                  <li><Link suppressHydrationWarning href="/terms-of-use" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">Terms of Service <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                  <li><Link suppressHydrationWarning href="/privacy-policy" className="group inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline">Privacy Policy <ArrowRight className="h-3 w-3 -translate-x-2.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
          </div>

          {/* Bottom Bar */}
          <div className="text-center text-[12px] text-slate-500">
            <p>© {currentYear} E-Loan Canada. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
      </div>
    </div>
  );
};

export default Footer;
