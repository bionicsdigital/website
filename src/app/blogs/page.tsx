import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogExplorer from "@/components/blog/BlogExplorer";
import { getAllBlogs, getBlogCategories } from "@/lib/blog";
import ScrollToTop from '@/components/home/ScrollToTop'
import { createMetadata } from '@/lib/site'

export const metadata: Metadata = createMetadata({ title: "Wastewater Treatment Blog | Bionics Enviro Tech", description: "Read practical articles on bioculture, ETP, STP, COD, BOD, activated sludge and industrial wastewater treatment. Explore technical guidance today.", path: "/blogs", keywords: ["Wastewater Treatment","Bioculture","ETP","STP","COD","BOD","Microbial Culture","Activated Sludge","Industrial Wastewater"] });
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
