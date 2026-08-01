import TableOfContents from "./TableOfContents";
import type { BlogArticle } from "@/types/blog";
export default function BlogSidebar({ article }: { article: BlogArticle }) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <TableOfContents content={article.content} />
    </aside>
  );
}
