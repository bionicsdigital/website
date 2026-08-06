import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import { footerLinkGroups } from "@/data/footer-links";

export default function FooterNavigation() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <div className="grid gap-0 lg:grid-cols-[1.4fr_.8fr_.9fr_.75fr_.95fr] lg:gap-8">
        <div className="mb-5 lg:mb-0">
          <FooterBrand />
        </div>
        {footerLinkGroups.map((group) => (
          <FooterLinks key={group.title} group={group} />
        ))}
      </div>
    </div>
  );
}
