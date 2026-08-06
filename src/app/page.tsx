import type { Metadata } from "next";
import About from "@/components/home/About";
import Awards from "@/components/home/Awards";
import Clients from "@/components/home/Clients";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import ScrollToTop from "@/components/home/ScrollToTop";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Offices from "@/components/footer/Offices";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({ title: "Nanozyme Bioculture Manufacturer | Bionics Enviro Tech", description: "Scientific Nanozyme bioculture manufacturer in India for industrial wastewater, ETP, STP and CETP treatment. Request a technical consultation today.", path: "/", keywords: ["Scientific Bioculture Manufacturer","Nanozyme Bioculture Manufacturer","Wastewater Treatment Bioculture","Industrial Wastewater Treatment","ETP Bioculture","STP Bioculture","Wastewater Treatment Manufacturer India"] });

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.logo}`,
      description:
        "Scientific Nanozyme Bioculture Manufacturer for Industrial Wastewater Treatment.",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: { "@type": "PostalAddress", addressLocality: "Erode", addressRegion: "Tamil Nadu", addressCountry: "IN" },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.shortName,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      potentialAction: { "@type": "SearchAction", target: `${siteConfig.url}/search?q={search_term_string}`, "query-input": "required name=search_term_string" },
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: "Nanozyme Bioculture Manufacturer",
      description: siteConfig.description,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Nanozyme Bioculture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nanozyme Bioculture is a scientific microbial formulation developed to strengthen biological wastewater treatment.",
          },
        },
        {
          "@type": "Question",
          name: "Can bioculture be used in both ETP and STP plants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, formulations are selected for wastewater characteristics and treatment process needs.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <Hero />
        <Awards />
        <About />
        <Features />
        <Stats />
        <Process />
        <Clients />
        <Testimonials />
        <FAQ />
        <CTA />
        <Offices />
      </main>
      <ScrollToTop />
    </>
  );
}
