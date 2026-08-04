import type { Metadata } from "next";
import About from "@/components/home/About";
import Awards from "@/components/home/Awards";
import Clients from "@/components/home/Clients";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import Products from "@/components/home/Products";
import ScrollToTop from "@/components/home/ScrollToTop";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Offices from "@/components/footer/Offices";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({ title: "Nanozyme Bioculture Manufacturer | Bionics Enviro Tech", description: "Scientific Nanozyme bioculture manufacturer in India for industrial wastewater, ETP, STP and CETP treatment. Request a technical consultation today.", path: "/", keywords: ["Nanozyme Bioculture Manufacturer","Nanozyme Manufacturer India","Bioculture Manufacturer India","Wastewater Treatment Company","Industrial Wastewater Treatment","Wastewater Treatment Chemicals Alternative","Microbial Culture Manufacturer","Biological Wastewater Treatment","Wastewater Treatment Solutions","ETP Microbial Culture","STP Microbial Culture","CETP Bioculture","COD Reduction","BOD Reduction","Zero Sludge Technology","Industrial ETP Solutions"] });

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      description:
        "Scientific Nanozyme Bioculture Manufacturer for Industrial Wastewater Treatment.",
    },
    {
      "@type": "Product",
      name: "Nanozyme Bioculture",
      brand: { "@type": "Brand", name: "Bionics Enviro Tech" },
      description:
        "Scientific microbial culture for ETP, STP and industrial wastewater treatment.",
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
        <Products />
        <Features />
        <Stats />
        <Industries />
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
