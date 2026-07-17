import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { cn } from "@/lib/utils";

type SectionTitleBandProps = {
  label: string;
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionTitleBand({
  label,
  tone = "light",
  className,
}: SectionTitleBandProps) {
  const isDark = tone === "dark";
  const flickerColor = isDark ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))";

  return (
    <div
      className={cn(
        "relative grid h-[100px] place-items-center overflow-hidden",
        isDark ? "bg-primary" : "bg-background",
        className
      )}
    >
      <FlickeringGrid
        aria-hidden
        className="absolute inset-0"
        squareSize={3}
        gridGap={2}
        flickerChance={0.08}
        maxOpacity={isDark ? 0.22 : 0.16}
        color={flickerColor}
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0",
          isDark
            ? "bg-gradient-to-b from-primary/0 via-primary/0 to-primary/38"
            : "bg-gradient-to-b from-background/10 via-background/64 to-background/92"
        )}
      />
      <p
        className={cn(
          "relative font-display text-sm font-bold uppercase tracking-[0.08em]",
          isDark ? "text-primary-foreground/70" : "text-muted-foreground"
        )}
      >
        {label}
      </p>
    </div>
  );
}
