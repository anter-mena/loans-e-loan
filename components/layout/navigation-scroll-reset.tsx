"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function NavigationScrollReset() {
  const pathname = usePathname();
  const pendingScrollRef = useRef(false);

  useEffect(() => {
    if (!pendingScrollRef.current) return;

    pendingScrollRef.current = false;
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [pathname]);

  useEffect(() => {
    function handleInternalLinkClick(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!target || target.hasAttribute("download") || (target.target && target.target !== "_self")) {
        return;
      }

      const destination = new URL(target.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.hash) return;

      if (destination.pathname === window.location.pathname) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }

      pendingScrollRef.current = true;
    }

    document.addEventListener("click", handleInternalLinkClick);
    return () => document.removeEventListener("click", handleInternalLinkClick);
  }, []);

  return null;
}
