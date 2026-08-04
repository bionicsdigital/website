export type FooterLink = { label: string; href: string };
export type FooterLinkGroup = { title: string; links: FooterLink[] };

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Products",
    links: [
      { label: "Aerobic Bioculture", href: "/products/aerobic-bioculture" },
      { label: "Anaerobic Bioculture", href: "/products/anaerobic-bioculture" },
      { label: "ETP Bioculture", href: "/products/etp-bioculture" },
      { label: "STP Bioculture", href: "/products/stp-bioculture" },
      { label: "Organic Compost Bioculture", href: "/products/compost-culture" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Sugar", href: "/industries/sugar-industry" },
      {
        label: "Textile & Dye",
        href: "/industries/textile-processing-industry",
      },
      { label: "Chemical", href: "/industries/chemical-industry" },
      { label: "Pharma", href: "/industries/pharmaceutical-industry" },
      { label: "Food", href: "/industries/food-processing-industry" },
      { label: "Dairy", href: "/industries/dairy-industry" },
      { label: "Municipal Solid Waste Compost", href: "/industries/municipal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Blogs", href: "/blogs" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Shipping Policy", href: "/shipping-policy" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];
