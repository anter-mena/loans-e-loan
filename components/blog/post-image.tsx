import type { ComponentProps } from "react";
import Image from "next/image";

/**
 * Renders markdown images through next/image (optimized WebP, responsive srcset,
 * lazy-loading) at a fixed editorial aspect ratio so no image renders oversized.
 * Used via react-markdown's `components={{ img: PostImage }}`.
 */
export function PostImage({ src, alt }: ComponentProps<"img">) {
  if (typeof src !== "string" || !src) return null;
  return (
    <span className="relative my-7 block w-full overflow-hidden rounded-xl bg-black/5 aspect-16/10">
      <Image
        src={src}
        alt={typeof alt === "string" ? alt : ""}
        fill
        sizes="(max-width: 768px) 100vw, 760px"
        className="object-cover"
      />
    </span>
  );
}
