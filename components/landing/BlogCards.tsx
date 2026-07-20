import { getAllPosts } from "@/lib/blog";
import SectionTitleBand from "./SectionTitleBand";
import BlogPreviewCard from "./BlogPreviewCard";

function formatDate(iso: string) {
  const date = new Date(iso);

  if (isNaN(date.getTime())) {
    return iso;
  }

  return date.toLocaleDateString("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogCards() {
  const posts = getAllPosts().slice(0, 4);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="blog-preview" className="bg-background">
      <div className="mx-auto w-full max-w-[1000px] overflow-hidden border-x bg-primary text-primary-foreground [border-left-color:hsl(var(--primary))] [border-right-color:hsl(var(--primary))]">
        <SectionTitleBand label="Blog" tone="dark" className="border-b border-border-dark" />

        <div className="grid grid-cols-2 border-b border-border-dark lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogPreviewCard
              key={post.slug}
              post={post}
              formattedDate={formatDate(post.date)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
