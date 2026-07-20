"use client";

import { useState } from "react";
import Link from "next/link";
import { Monitor } from "lucide-react";
import { PixelTransition } from "@/components/ui/pixel-transition";

type BlogPreviewCardProps = {
  post: {
    slug: string;
    title: string;
    description: string;
    date: string;
    image?: string | null;
    readingTime: number;
  };
  formattedDate: string;
  index: number;
};

export default function BlogPreviewCard({
  post,
  formattedDate,
  index,
}: BlogPreviewCardProps) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={`/blog/${post.slug}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={`group relative flex min-h-[280px] overflow-hidden border-b border-border-dark p-2.5 sm:min-h-[315px] sm:p-4 ${
        index % 2 === 0 ? "border-r" : ""
      } ${index < 2 ? "lg:border-r" : "lg:border-r-0"} ${index === 3 ? "lg:hidden" : ""}`}
    >
      <PixelTransition
        active={active}
        gridSize={7}
        animationStepDuration={0.38}
        exitAnimationStepDuration={0.28}
        pixelColor="hsl(var(--accent))"
        exitPixelColor="hsl(var(--primary))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-primary" />}
        secondContent={<span className="block size-full bg-accent" />}
      />

      <div className="relative z-20 flex min-w-0 flex-1 flex-col">
        <div className="relative aspect-[1.9] overflow-hidden bg-card">
          {post.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover opacity-95 grayscale transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-primary-foreground text-primary">
              <Monitor className="size-8" strokeWidth={1.75} />
            </div>
          )}
        </div>

        <div
          className={`mt-3 flex flex-col gap-1 text-[8px] leading-none transition-colors duration-300 ease-out sm:mt-4 sm:block sm:text-[10px] ${
            active ? "text-primary/70" : "text-primary-foreground/66"
          }`}
        >
          <time dateTime={post.date}>{formattedDate}</time>
          <span className="mx-1.5 hidden sm:inline">/</span>
          <span>{post.readingTime} min read</span>
        </div>

        <h3
          className={`mt-3 font-display text-base font-medium leading-tight tracking-tight transition-colors duration-300 ease-out sm:mt-4 sm:text-xl ${
            active ? "text-primary" : "text-primary-foreground"
          }`}
        >
          {post.title}
        </h3>

        <p
          className={`mt-2 line-clamp-3 text-[10px] leading-4 transition-colors duration-300 ease-out sm:mt-3 sm:line-clamp-2 sm:text-sm sm:leading-5 ${
            active ? "text-primary/72" : "text-primary-foreground/70"
          }`}
        >
          {post.description}
        </p>
      </div>
    </Link>
  );
}
