import Link from "next/link";

export default function BottomFooter() {
  return (
    <div className="border-t border-white/[.08]">
      <div className="mx-auto grid max-w-7xl gap-2 px-5 py-3.5 text-center text-xs text-slate-400 sm:grid-cols-3 sm:items-center sm:px-8 sm:text-left lg:px-10">
        <p>© {new Date().getFullYear()} Bionics Enviro Tech Pvt. Ltd.</p>
        <p className="sm:text-center">Made with love in India</p>
        <nav
          className="flex justify-center gap-4 sm:justify-end"
          aria-label="Legal links"
        >
          <Link href="/privacy-policy" className="hover:text-emerald-300">
            Privacy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-emerald-300">
            Terms
          </Link>
          <Link href="/cookie-policy" className="hover:text-emerald-300">
            Cookies
          </Link>
          <Link href="/sitemap.xml" className="hover:text-emerald-300">
            Sitemap
          </Link>
        </nav>
      </div>
    </div>
  );
}
