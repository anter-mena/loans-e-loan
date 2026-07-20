"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { Loader2, ShieldCheck } from "lucide-react";

type LeadScoutConversion = { type: "FACEBOOK" | "TIKTOK" } | Record<string, never>;

const DEFAULT_REQUESTED_AMOUNT = 700;
const DEFAULT_AFFILIATE_SUB = "e-loan";

type LeadScoutConfig = {
  affiliateCode: string;
  formId: string;
  language: "en";
  theme: "light";
  overrides: {
    requestedAmount: {
      max: number;
      min: number;
      step: number;
    };
  };
  defaultValues: {
    requestedAmount: number;
    firstName: string;
    email: string;
  };
  extra: {
    affiliate_sub1: string;
    affiliate_sub2: string;
    affiliate_sub5: string | null;
    aff_utm_source: string;
  };
  conversion: LeadScoutConversion;
  styles: {
    backgroundColor: {
      main: string;
      dark: string;
    };
    primary: {
      main: string;
      dark: string;
      contrastText: string;
    };
  };
};

declare global {
  interface Window {
    LeadScout?: {
      onLoad?: () => void;
      init?: (element: HTMLElement, config: LeadScoutConfig) => void;
    };
  }
}

function getConversion(source: string | null): LeadScoutConversion {
  if (source === "fb") return { type: "FACEBOOK" };
  if (source === "tiktok") return { type: "TIKTOK" };
  return {};
}

export function ApplicationForm() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const formConfig = useMemo<LeadScoutConfig>(() => {
    const source = searchParams.get("source");
    const amount = searchParams.get("amount");
    const id = searchParams.get("id");
    const affiliateSub1 = searchParams.get("affiliate_sub1");
    const affiliateSub2 = searchParams.get("affiliate_sub2");
    const affiliateSub5 = searchParams.get("affiliate_sub5");
    const firstname = searchParams.get("firstname");
    const email = searchParams.get("email");

    return {
      affiliateCode: id || "4PrKYVa8",
      formId: "1",
      language: "en",
      theme: "light",
      overrides: {
        requestedAmount: {
          max: 3000,
          min: 300,
          step: 100,
        },
      },
      defaultValues: {
        requestedAmount: Number(amount) || DEFAULT_REQUESTED_AMOUNT,
        firstName: firstname || "",
        email: email || "",
      },
      extra: {
        affiliate_sub1: affiliateSub1 || DEFAULT_AFFILIATE_SUB,
        affiliate_sub2: affiliateSub2 || "",
        affiliate_sub5: affiliateSub5 || null,
        aff_utm_source: source || "",
      },
      conversion: getConversion(source),
      styles: {
        backgroundColor: {
          main: "#FFFFFF",
          dark: "#161616",
        },
        primary: {
          main: "#161616",
          dark: "#161616",
          contrastText: "#FFFFFF",
        },
      },
    };
  }, [searchParams]);

  useEffect(() => {
    const initialize = () => {
      if (initializedRef.current || !formRef.current || !window.LeadScout?.init) {
        return;
      }

      initializedRef.current = true;
      setIsLoaded(true);
      window.LeadScout.init(formRef.current, formConfig);
    };

    window.LeadScout = window.LeadScout || {};
    window.LeadScout.onLoad = initialize;
    initialize();
  }, [formConfig]);

  return (
    <>
      <Script
        src="https://app.leadscout.ca/library/library.js"
        strategy="afterInteractive"
        onLoad={() => window.LeadScout?.onLoad?.()}
      />

      <div className="border border-border bg-background">
        <div className="border-b border-border p-5 md:p-7">
          <div className="flex items-start gap-4">
            <span className="grid size-10 shrink-0 place-items-center bg-accent text-accent-foreground">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
                Get your rate in{" "}
                <span className="bg-accent px-1.5 text-accent-foreground">
                  2 minutes
                </span>
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                Compare offers from trusted Canadian lenders. Soft credit check,
                no impact on your score.
              </p>
            </div>
          </div>
        </div>

        <div id="lead-scout-form" ref={formRef} className="min-h-[520px] p-4 md:p-6">
          {!isLoaded ? (
            <div className="grid min-h-[420px] place-items-center border border-border bg-secondary/35">
              <div className="flex flex-col items-center text-center">
                <Loader2 className="size-9 animate-spin text-accent" />
                <p className="mt-4 bg-accent px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-foreground">
                  Loading application
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
