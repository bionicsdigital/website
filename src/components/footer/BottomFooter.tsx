import Link from "next/link";
import CookieSettingsButton from "@/components/cookies/CookieSettingsButton";

export default function BottomFooter() {
  return (
    <div className="border-t border-white/[.08]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-3.5 text-center text-xs text-slate-400 sm:flex-row sm:px-8 sm:text-left lg:px-10">
        <p>© {new Date().getFullYear()} Bionics Enviro Tech Pvt. Ltd.</p>
        <nav
          className="flex flex-wrap justify-center gap-x-4 gap-y-1 sm:justify-end"
          aria-label="Legal links"
        >
          <Link href="/privacy-policy" className="hover:text-emerald-300">
            Privacy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-emerald-300">
            Terms
          </Link>
          <CookieSettingsButton />
          <Link href="/disclaimer" className="hover:text-emerald-300">Disclaimer</Link>
          <Link href="/sitemap" className="hover:text-emerald-300">Sitemap</Link>
        </nav>
      </div>
    </div>
  );
}
