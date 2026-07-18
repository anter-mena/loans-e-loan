import type { ComponentProps } from "react";

/**
 * Renders markdown images in a clipped editorial frame.
 * A normal img is safer here than next/image fill because markdown output can
 * wrap images in paragraph tags and make absolute fill positioning brittle.
 */
export function PostImage({ src, alt }: ComponentProps<"img">) {
  if (typeof src !== "string" || !src) return null;
  return (
    <span className="blog-post-image group relative my-7 block aspect-[16/10] w-full overflow-hidden border border-border bg-muted">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={typeof alt === "string" ? alt : ""}
        loading="lazy"
        className="block h-full w-full scale-[1.025] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.075]"
      />
    </span>
  );
}
