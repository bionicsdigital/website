import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogBreadcrumb from "@/components/blog/BlogBreadcrumb";
import BlogSidebar from "@/components/blog/BlogSidebar";
import ArticleBody from "@/components/blog/ArticleBody";
import RelatedPosts from "@/components/blog/RelatedPosts";
import {
  getAdjacentBlogs,
  getAllBlogs,
  getBlogBySlug,
  getRelatedBlogs,
} from "@/lib/blog";
import ScrollToTop from "@/components/home/ScrollToTop";
import { createMetadata, siteConfig } from "@/lib/site";
const base = siteConfig.url;
export function generateStaticParams() {
  return getAllBlogs().map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const article = getBlogBySlug((await params).slug);
  if (!article) return { title: "Article not found" };
  const url = `${base}/blogs/${article.slug}`;
  return createMetadata({ title: article.title.slice(0, 60), description: article.description, keywords: [...article.keywords, "Wastewater Treatment", "Bioculture", "ETP", "STP", "COD", "BOD", "Microbial Culture", "Activated Sludge", "Industrial Wastewater"], path: `/blogs/${article.slug}`, image: article.coverImage, type: "article", publishedTime: article.publishedDate, modifiedTime: article.updatedDate });
}
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = getBlogBySlug((await params).slug);
  if (!article) notFound();
  const related = getRelatedBlogs(article.slug);
  const adjacent = getAdjacentBlogs(article.slug);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${urlFor(article.slug)}#article`,
    headline: article.title,
    description: article.description,
    image: `${base}${article.coverImage}`,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    author: { "@type": "Organization", name: article.author.name },
    publisher: {
      "@type": "Organization",
      name: "Bionics Enviro Tech",
      logo: { "@type": "ImageObject", url: `${base}${siteConfig.logo}` },
      url: base,
    },
    mainEntityOfPage: urlFor(article.slug),
  };
  const webpageSchema = { "@context": "https://schema.org", "@type": "WebPage", "@id": `${urlFor(article.slug)}#webpage`, url: urlFor(article.slug), name: article.title, description: article.description, isPartOf: { "@type": "WebSite", name: siteConfig.shortName, url: base }, mainEntity: { "@type": "Article", "@id": `${urlFor(article.slug)}#article` } };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: `${base}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: urlFor(article.slug),
      },
    ],
  };
  return (<>
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28 lg:px-10">
        <BlogBreadcrumb title={article.title} />
        <Image
          src={article.coverImage}
          alt={article.title}
          width={600}
          height={200}
          priority
          className="mt-4 aspect-[3/1] h-auto w-full rounded-2xl object-cover sm:mt-5 sm:rounded-3xl"
        />
        <div className="mt-6 grid min-w-0 gap-8 lg:mt-7 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10">
          <ArticleBody article={article} />
          <BlogSidebar article={article} />
        </div>
        <RelatedPosts articles={related} />
        <nav className="mt-7 grid gap-3 border-t border-slate-200 pt-5 sm:mt-8 sm:grid-cols-2 sm:pt-6">
          {adjacent.previous ? (
            <Link
              href={`/blogs/${adjacent.previous.slug}`}
              className="rounded-2xl border border-slate-200 p-4 hover:border-emerald-300 sm:p-5"
            >
              <span className="text-xs font-bold uppercase text-slate-500">
                Previous
              </span>
              <p className="mt-2 font-bold text-slate-900">
                {adjacent.previous.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {adjacent.next && (
            <Link
              href={`/blogs/${adjacent.next.slug}`}
              className="rounded-2xl border border-slate-200 p-4 text-left hover:border-emerald-300 sm:p-5 sm:text-right"
            >
              <span className="text-xs font-bold uppercase text-slate-500">
                Next
              </span>
              <p className="mt-2 font-bold text-slate-900">
                {adjacent.next.title}
              </p>
            </Link>
          )}
        </nav>
      </div>
    </main>
    <ScrollToTop />
    </>
  );
}
function urlFor(slug: string) {
  return `${base}/blogs/${slug}`;
}
