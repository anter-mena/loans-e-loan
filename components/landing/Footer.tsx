"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';

// Inline SVG Components for Social Icons
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f1a] pt-16 pb-8 text-white border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <Link suppressHydrationWarning href="/" className="transition-transform hover:scale-105">
              <Image src="/logoWhite.svg" alt="E-Loan" width={293} height={100} className="h-10 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs font-medium">
              Fast, transparent, and responsible lending services for Canadians. 
              Licensed and regulated in all provinces we serve.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FacebookIcon, href: '#' },
                { icon: TwitterIcon, href: '#' },
                { icon: InstagramIcon, href: '#' },
                { icon: LinkedinIcon, href: '#' },
              ].map((social, i) => (
                <Link suppressHydrationWarning                   key={i}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/5 transition-all hover:scale-110 hover:bg-accent hover:border-transparent text-slate-400 hover:text-white"
                >
                  <social.icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-6 font-bold text-base tracking-tight">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium items-center md:items-start">
              <li><Link suppressHydrationWarning href="/coming-soon" className="transition-colors hover:text-white flex items-center justify-center md:justify-start gap-2 group">Our Services <ArrowRight className="w-3 h-3 opacity-0 translate-x-[-10px] transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
              <li><Link suppressHydrationWarning href="/coming-soon" className="transition-colors hover:text-white flex items-center justify-center md:justify-start gap-2 group">Loan Options <ArrowRight className="w-3 h-3 opacity-0 translate-x-[-10px] transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
              <li><Link suppressHydrationWarning href="/coming-soon" className="transition-colors hover:text-white flex items-center justify-center md:justify-start gap-2 group">Flexible Repayment <ArrowRight className="w-3 h-3 opacity-0 translate-x-[-10px] transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
              <li><Link suppressHydrationWarning href="/coming-soon" className="transition-colors hover:text-white flex items-center justify-center md:justify-start gap-2 group">Apply Now <ArrowRight className="w-3 h-3 opacity-0 translate-x-[-10px] transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-6 font-bold text-base tracking-tight">Help Centre</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium items-center md:items-start">
              <li><Link suppressHydrationWarning href="/#faq" className="transition-colors hover:text-white flex items-center justify-center md:justify-start gap-2 group">FAQ <ArrowRight className="w-3 h-3 opacity-0 translate-x-[-10px] transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
              <li><Link suppressHydrationWarning href="/#how" className="transition-colors hover:text-white flex items-center justify-center md:justify-start gap-2 group">How It Works <ArrowRight className="w-3 h-3 opacity-0 translate-x-[-10px] transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
              <li><Link suppressHydrationWarning href="/#testimonials" className="transition-colors hover:text-white flex items-center justify-center md:justify-start gap-2 group">Customer Reviews <ArrowRight className="w-3 h-3 opacity-0 translate-x-[-10px] transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
              <li><Link suppressHydrationWarning href="/contact" className="transition-colors hover:text-white flex items-center justify-center md:justify-start gap-2 group">Contact Support <ArrowRight className="w-3 h-3 opacity-0 translate-x-[-10px] transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-6 font-bold text-base tracking-tight">Get in Touch</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400 font-medium items-center md:items-start">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent shrink-0">
                  <Phone size={14} />
                </div>
                1-888-LOANHERO
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent shrink-0">
                  <Mail size={14} />
                </div>
                support@loanhero.ca
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent shrink-0">
                  <Clock size={14} />
                </div>
                24/7 Monitoring
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center justify-between gap-6 text-[12px] text-slate-500 md:flex-row">
          <p>© {currentYear} LoanHero Canada. All rights reserved.</p>
          <div className="flex gap-8 font-medium uppercase tracking-widest text-[11px]">
            <Link suppressHydrationWarning href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link suppressHydrationWarning href="/terms-of-use" className="transition-colors hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
