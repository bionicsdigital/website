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
      { label: "Sugar", href: "/industries/sugar-industry" },
      { label: "Distillery", href: "/industries/distillery-industry" },
      {
        label: "Textile",
        href: "/industries/textile-processing-industry",
      },
      { label: "Dye Processing", href: "/industries/dye-processing-industry" },
      { label: "Chemical", href: "/industries/chemical-industry" },
      { label: "Pharma", href: "/industries/pharma-industry" },
      { label: "Food Processing", href: "/industries/food-processing-industry" },
      { label: "Dairy", href: "/industries/dairy-industry" },
      { label: "Municipal Solid Waste Composting", href: "/industries/municipal" },
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
      { label: "FAQs", href: "/#faq" },
    ],
  },
];
