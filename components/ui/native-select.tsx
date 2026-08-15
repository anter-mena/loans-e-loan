import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/* A native <select> styled to match the Input component exactly.

   Used instead of the Radix Select in forms because Radix wraps its dropdown
   in RemoveScroll, which locks page scroll via both CSS and JS wheel handlers
   while the menu is open. A native control has no portal and no scroll lock,
   participates in FormData directly, and gets the OS picker on mobile.

   The base classes below are kept in sync with components/ui/input.tsx. */

function NativeSelect({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="relative w-full">
      <select
        data-slot="native-select"
        className={cn(
          "h-8 w-full min-w-0 cursor-pointer appearance-none rounded-lg border border-input bg-transparent py-1 pl-2.5 pr-8 text-base transition-colors outline-none",
          "invalid:text-muted-foreground",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50",
          "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
          "md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDownIcon
        aria-hidden="true"
        className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 opacity-50"
      />
    </div>
  )
}

export { NativeSelect }
