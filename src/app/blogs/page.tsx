import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogExplorer from "@/components/blog/BlogExplorer";
import { getAllBlogs, getBlogCategories } from "@/lib/blog";
import ScrollToTop from '@/components/home/ScrollToTop'

export const metadata: Metadata = {
  title: "Wastewater Treatment Blog | Bionics Enviro Tech",
  description:
    "Technical insights on bioculture, ETP and STP operation, sustainable wastewater treatment and industrial compliance.",
  alternates: { canonical: "https://www.bionicsenviro.com/blogs" },
  openGraph: {
    type: "website",
    url: "https://www.bionicsenviro.com/blogs",
    title: "Wastewater Treatment Knowledge Centre | Bionics Enviro Tech",
    description:
      "Practical guidance for ETP, STP and industrial wastewater teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wastewater Treatment Knowledge Centre | Bionics Enviro Tech",
    description:
      "Practical guidance for ETP, STP and industrial wastewater teams.",
  },
};
export default function BlogsPage() {
  const articles = getAllBlogs();
  return (<>
    <main className="min-h-screen bg-slate-50">
      <BlogHero />
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <section id="articles" className="scroll-mt-24">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-emerald-700">
            Latest insight
          </p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
            Technical articles for plant teams
          </h2>
          <div className="mt-5 sm:mt-6">
            <BlogExplorer
              articles={articles}
              categories={getBlogCategories()}
            />
          </div>
        </section>
      </div>
    </main>
    <ScrollToTop />
    </>
  );
}
