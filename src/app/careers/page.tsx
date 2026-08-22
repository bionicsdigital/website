import type { Metadata } from "next";
import CareersPage from "@/components/careers/CareersPage";
import { jobs } from "@/data/careers";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Careers | Bionics Enviro Tech",
  description:
    "Join Bionics Enviro Tech and build your career in Nanozyme bioculture, environmental biotechnology and wastewater treatment. View current openings.",
  path: "/careers",
  keywords: [
    "Environmental Biotechnology Careers",
    "Wastewater Treatment Jobs",
    "Biotechnology Jobs India",
    "Bionics Enviro Tech Careers",
  ],
});

export default function Page() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.logo}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Careers",
          item: `${siteConfig.url}/careers`,
        },
      ],
    },
    ...jobs.map((job) => ({
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: job.title,
      description: job.summary,
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: siteConfig.name,
        sameAs: siteConfig.url,
        logo: `${siteConfig.url}${siteConfig.logo}`,
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      },
      experienceRequirements: job.experience,
      industry: "Environmental Biotechnology and Wastewater Treatment",
    })),
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <CareersPage />
    </>
  );
}
