export type FooterLink = { label: string; href: string };
export type FooterLinkGroup = { title: string; links: FooterLink[] };

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Products",
    links: [
      { label: "View All Products", href: "/products" },
      { label: "Bioculture Manufacturer in India", href: "/bioculture-manufacturer-in-india" },
      { label: "Aerobic Bioculture", href: "/products/aerobic-bioculture" },
      { label: "Anaerobic Bioculture", href: "/products/anaerobic-bioculture" },
      { label: "ETP Bioculture", href: "/products/etp-bioculture" },
      { label: "STP Bioculture", href: "/products/stp-bioculture" },
      { label: "Organic Compost Culture", href: "/products/organic-compost-culture" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "View All Industries", href: "/industries" },
      { label: "Industrial ETP", href: "/industries/effluent-treatment-plant-etp" },
      { label: "Sewage Treatment Plant", href: "/industries/sewage-treatment-plant-stp" },
      { label: "Common Effluent Treatment Plant", href: "/industries/cetp" },
      { label: "Organic Waste Composting", href: "/industries/municipal-solid-waste-composting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Contact", href: "/#contact" },
      { label: "Careers", href: "/careers" },
      { label: "Awards", href: "/awards" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/blogs" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Downloads", href: "/downloads" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Certificates", href: "/downloads#certificates" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];
