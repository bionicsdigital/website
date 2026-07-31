import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogBreadcrumb from "@/components/blog/BlogBreadcrumb";
import BlogSidebar from "@/components/blog/BlogSidebar";
import ArticleBody from "@/components/blog/ArticleBody";
import ReadingProgress from "@/components/blog/ReadingProgress";
import RelatedPosts from "@/components/blog/RelatedPosts";
import {
  getAdjacentBlogs,
  getAllBlogs,
  getBlogBySlug,
  getRelatedBlogs,
} from "@/lib/blog";
import ScrollToTop from "@/components/home/ScrollToTop";
const base = "https://www.bionicsenviro.com";
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
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.description,
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      images: [
        {
          url: `${base}${article.coverImage}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [`${base}${article.coverImage}`],
    },
  };
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
    headline: article.title,
    description: article.description,
    image: `${base}${article.coverImage}`,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    author: { "@type": "Organization", name: article.author.name },
    publisher: {
      "@type": "Organization",
      name: "Bionics Enviro Tech",
      logo: { "@type": "ImageObject", url: `${base}/logo.png` },
      url: base,
    },
    mainEntityOfPage: urlFor(article.slug),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
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
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Bionics Enviro Tech",
            url: base,
          }),
        }}
      />
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28 lg:px-10">
        <BlogBreadcrumb title={article.title} />
        <Image
          src={article.coverImage}
          alt={article.title}
          width={1440}
          height={720}
          priority
          className="mt-4 h-44 w-full rounded-2xl object-cover sm:mt-5 sm:h-80 sm:rounded-3xl lg:h-96"
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
