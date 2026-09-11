import { createPostCollection, type ArticleSection } from "@/lib/content";

export type { PostMeta as BlogMeta } from "@/lib/content";

export const BLOG_DESCRIPTION =
  "Plain-English guidance on personal loans in Canada - rates, repayment, credit, and the borrowing decisions that shape what you actually pay.";

export const BLOG_SECTION: ArticleSection = {
  label: "Blog",
  path: "/blog",
  schemaType: "BlogPosting",
  dateLine: "updated",
  backLabel: "All blog",
  // This site's article design has a single link under the article (backLabel),
  // so `next` is not rendered there.
  next: { label: "Explore guides", href: "/resources/guides" },
};

const blog = createPostCollection({
  folder: "blog",
  defaultAuthor: "E-Loan Editorial Team",
  defaultCategory: "Article",
});

/** Published blog posts, newest first. */
export const getAllPosts = blog.getAll;
export const getPost = blog.get;
