import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import { footerLinkGroups } from "@/data/footer-links";
export default function FooterNavigation() {
  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 lg:grid-cols-[1.35fr_.8fr_.9fr_.8fr_1fr] lg:gap-10 lg:px-10 lg:py-18">
      <FooterBrand />
      {footerLinkGroups.map((group) => (
        <FooterLinks key={group.title} group={group} />
      ))}
    </div>
  );
}
