import type { BlogArticle, BlogCategory } from "@/types/blog";
import { blogs as sourceBlogs } from "../../content/blog";

const categoryMap: Record<string, BlogCategory> = {
  Bioculture: "Bioculture",
  ETP: "ETP",
  "Wastewater Treatment": "Wastewater Treatment",
  Products: "STP",
};

const technicalAddendum = `

## Operating checklist

### How to use these checks

Use plant data to make decisions, rather than responding only after outlet quality changes. Record the following in the daily logbook.

| Parameter | Why it matters | Good practice |
| --- | --- | --- |
| pH and temperature | Determines microbial activity | Track every shift and investigate abrupt variation |
| DO and MLSS | Indicates biological capacity | Review with loading and return-sludge data |
| COD/BOD trend | Shows treatment direction | Compare influent, reactor and outlet samples |

> **Best-practice tip:** introduce any process change one at a time, document the dose and observe a complete treatment cycle before making the next adjustment.

## Conclusion

Reliable wastewater treatment comes from healthy biology, disciplined monitoring and a process plan matched to the actual effluent. A technical assessment can turn plant data into an achievable improvement programme.
`;

/**
 * BLOG AUTHORING SOURCE
 * ---------------------
 * Add and edit all blog records through this file. Every post must provide a
 * `coverImage` and `content`. Blog banner images should be landscape 600 × 200 px
 * (width × height, 3:1 ratio) and stored in `/public/blogs/`. Reference them as
 * `/blogs/your-image-name.webp`. Prefer WebP and keep each image below 200 KB.
 *
 * `sourceBlogs` currently contains the existing articles and is normalized below.
 * New articles should be added to `authoredBlogs` so this data file remains the
 * single repository consumed by the blog listing and slug pages.
 */
const authoredBlogs: BlogArticle[] = [];

const migratedBlogs: BlogArticle[] = sourceBlogs.map((blog) => ({
  id: blog.id,
  slug: blog.slug,
  title: blog.title,
  excerpt: blog.excerpt,
  description: blog.metaDescription,
  keywords: [
    ...blog.tags,
    blog.category,
    "Nanozyme Bioculture",
    "wastewater treatment",
  ],
  category: categoryMap[blog.category] ?? "Industrial",
  tags: blog.tags,
  coverImage: blog.coverImage,
  publishedDate: blog.publishedDate,
  updatedDate: blog.updatedDate ?? blog.publishedDate,
  author: {
    name: blog.author,
    role: "Wastewater Treatment Specialists",
    bio: "The Bionics Enviro Tech team helps operators build resilient, compliant biological treatment systems.",
  },
  featured: blog.featured,
  readingTime: blog.readingTime,
  content: `${blog.content}${technicalAddendum}`,
  faq: blog.faq,
  relatedIndustries: blog.relatedIndustries,
  relatedProducts: blog.relatedProducts,
}));

export const blogs: BlogArticle[] = [...authoredBlogs, ...migratedBlogs];

export const blogCategories: BlogCategory[] = [
  "Bioculture",
  "Wastewater Treatment",
  "ETP",
  "STP",
  "Composting",
  "Industrial",
  "Textile",
  "Chemical",
  "Pharma",
  "Sugar",
  "Food & Beverage",
  "Municipal",
];
