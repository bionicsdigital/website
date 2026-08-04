import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import { footerLinkGroups } from "@/data/footer-links";
export default function FooterNavigation() {
  return (
    <div className="mx-auto grid max-w-7xl gap-0 px-5 py-7 sm:px-8 lg:grid-cols-[1.35fr_.8fr_.9fr_.75fr_.9fr] lg:gap-7 lg:px-10 lg:py-10">
      <div className="mb-5 lg:mb-0"><FooterBrand /></div>
      {footerLinkGroups.map((group) => (
        <FooterLinks key={group.title} group={group} />
      ))}
    </div>
  );
}
