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
      { label: "Food & Beverage", href: "/industries/food-beverage-industry" },
      { label: "Dairy", href: "/industries/dairy-industry" },
      { label: "Municipal", href: "/industries/municipal-wastewater" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Blogs", href: "/blogs" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
      { label: "Careers", href: "/#contact" },
    ],
  },
];
