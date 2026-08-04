import type { Metadata } from "next";
import { legalPages } from "@/data/legal-pages";
import { createMetadata } from "@/lib/site";

export function createLegalMetadata(slug: string): Metadata {
  const page = legalPages[slug];
  return createMetadata({
    title: `${page.title} | Bionics Enviro Tech`,
    description: `${page.description} Review the current Bionics Enviro Tech policy, responsibilities and contact information for website users.`,
    path: `/${slug}`,
    keywords: [
      page.title,
      "Bionics Enviro Tech policy",
      "website legal information",
    ],
  });
}
