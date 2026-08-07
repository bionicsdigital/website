"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Search, ShoppingBag, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  type MotionProps,
} from "framer-motion";
import type { ComponentType, HTMLAttributes } from "react";
import { useEffect, useState } from "react";
const leadingLinks = [
  { label: "About", href: "/#about" },
  { label: "Why Nanozyme", href: "/#why-nanozyme" },
];
const trailingLinks = [
  { label: "Career", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];
const megaMenus = [
  {
    label: "Products",
    href: "/products",
    items: [
      { label: "Aerobic Bioculture", href: "/products/aerobic-bioculture" },
      { label: "Anaerobic Bioculture", href: "/products/anaerobic-bioculture" },
      { label: "ETP Bioculture", href: "/products/etp-bioculture" },
      { label: "STP Bioculture", href: "/products/stp-bioculture" },
      {
        label: "Sugar & Distillery Bioculture",
        href: "/products/sugar-distillery-bioculture",
      },
      {
        label: "Organic Compost Culture",
        href: "/products/organic-compost-culture",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      {
        label: "Textile Processing Industry",
        href: "/industries/textile-industry-wastewater-treatment",
      },
      {
        label: "Dye Processing Industry",
        href: "/industries/dye-processing-industry-wastewater-treatment",
      },
      {
        label: "Sugar Industry",
        href: "/industries/sugar-industry-wastewater-treatment",
      },
      {
        label: "Distillery Industry",
        href: "/industries/distillery-industry-wastewater-treatment",
      },
      {
        label: "Chemical Industry",
        href: "/industries/chemical-industry-wastewater-treatment",
      },
      { label: "Pharmaceutical Industry", href: "/industries/pharmaceutical-industry-wastewater-treatment" },

      {
        label: "Food Processing Industry",
        href: "/industries/food-processing-industry-wastewater-treatment",
      },
      {
        label: "Dairy Processing Industry",
        href: "/industries/dairy-processing-industry-wastewater-treatment",
      },
      {
        label: "Pulp & Paper Industry",
        href: "/industries/paper-and-pulp-industry-wastewater-treatment",
      },
      {
        label: "Municipal Solid Waste Composting",
        href: "/industries/municipal-solid-waste-composting",
      },
      {
        label: "Sewage Treatment Plant (STP)",
        href: "/industries/sewage-treatment-plant-stp",
      },
      {
        label: "Effluent Treatment Plant (ETP)",
        href: "/industries/effluent-treatment-plant-etp",
      },
    ],
  },
];
const resourceMenu = [
  { label: "Blogs", href: "/blogs" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Downloads", href: "/downloads" },
  { label: "Awards", href: "/awards" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
];
const MotionDiv = motion.div as unknown as ComponentType<
  Omit<HTMLAttributes<HTMLDivElement>, "style"> & MotionProps
>;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [dismissedMenu, setDismissedMenu] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    setActiveMenu(null);
    setDismissedMenu(null);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldFloat = latest > 40;
    setScrolled((current) => (current === shouldFloat ? current : shouldFloat));
  });

  const isHomePage = pathname === "/";
  const isFloating = scrolled || !isHomePage;
  const navTextClass = "text-slate-700";
  const iconTextClass = "text-slate-900";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-0"
      aria-label="Main navigation"
    >
      <MotionDiv
        layout
        initial={false}
        animate={
          isFloating
            ? {
                width: isDesktop ? "94%" : "calc(100% - 24px)",
                top: isDesktop ? 12 : 10,
                borderRadius: isDesktop ? 999 : 24,
                paddingLeft: isDesktop ? 12 : 0,
                paddingRight: isDesktop ? 12 : 0,
                boxShadow: isDesktop
                  ? "0 20px 45px rgba(15, 23, 42, 0.14)"
                  : "0 14px 30px rgba(15, 23, 42, 0.12)",
              }
            : {
                width: "100%",
                top: 0,
                borderRadius: 0,
                paddingLeft: 0,
                paddingRight: 0,
                boxShadow: "0 0 0 rgba(15, 23, 42, 0)",
              }
        }
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto border border-transparent text-slate-900 max-lg:overflow-visible"
        style={{
          maxWidth: isFloating ? 1380 : "100%",
          borderColor: isFloating ? "rgba(15, 23, 42, 0.08)" : "transparent",
          backdropFilter: isFloating ? "blur(24px)" : "none",
          backgroundColor: isFloating
            ? "rgba(255,255,255,0.96)"
            : "transparent",
        }}
      >
        <MotionDiv
          layout="position"
          animate={{
            height: isFloating ? 66 : 74,
            paddingLeft: isFloating ? 12 : 24,
            paddingRight: isFloating ? 12 : 24,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex w-full max-w-[1320px] items-center justify-between lg:px-0"
        >
          <Link
            href="/"
            className="flex items-center"
            aria-label="Bionics Enviro Tech home"
          >
            <Image
              src="/logo.png"
              alt="Bionics Enviro Tech"
              width={220}
              height={60}
              priority
              className="h-10 w-auto lg:h-12"
              style={{ width: "auto" }}
            />
          </Link>

          <nav
            className="hidden items-center gap-5 xl:flex"
            aria-label="Primary navigation"
          >
            {leadingLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-1 py-2 text-[13px] font-semibold tracking-wide text-slate-700 transition hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {link.label}
              </Link>
            ))}
            {megaMenus.map((menu) => (
              <div
                key={menu.label}
                className="relative py-5"
                onMouseEnter={() => {
                  setActiveMenu(menu.label);
                  setDismissedMenu(null);
                }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={menu.href}
                  aria-haspopup="true"
                  aria-expanded={activeMenu === menu.label}
                  onFocus={() => setActiveMenu(menu.label)}
                  onClick={() => {
                    setActiveMenu(null);
                    setDismissedMenu(menu.label);
                  }}
                  className={`flex items-center gap-1 rounded-lg px-1 py-2 text-[13px] font-semibold tracking-wide transition hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${pathname.startsWith(`/${menu.label.toLowerCase()}`) ? "text-emerald-700" : navTextClass}`}
                >
                  {menu.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition ${activeMenu === menu.label ? "rotate-180" : ""}`}
                  />
                </Link>
                {activeMenu === menu.label && dismissedMenu !== menu.label && (
                  <div className="absolute left-1/2 top-[calc(100%-4px)] w-[34rem] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white/98 p-4 shadow-2xl backdrop-blur-xl">
                    <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-[.18em] text-emerald-700">
                      Explore {menu.label}
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {menu.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setActiveMenu(null);
                            setDismissedMenu(menu.label);
                          }}
                          className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div
              className="relative py-5"
              onMouseEnter={() => setActiveMenu("Resources")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href="/blogs"
                onFocus={() => setActiveMenu("Resources")}
                onClick={() => setActiveMenu(null)}
                aria-haspopup="true"
                aria-expanded={activeMenu === "Resources"}
                className={`flex items-center gap-1 rounded-lg px-1 py-2 text-[13px] font-semibold tracking-wide transition hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${pathname.startsWith("/blogs") || pathname === "/case-studies" || pathname === "/downloads" || pathname === "/awards" || pathname === "/testimonials" ? "text-emerald-700" : navTextClass}`}
              >
                Resources{" "}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition ${activeMenu === "Resources" ? "rotate-180" : ""}`}
                />
              </Link>
              {activeMenu === "Resources" && (
                <div className="absolute left-1/2 top-[calc(100%-4px)] w-64 -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
                  {resourceMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {trailingLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={
                  !link.href.includes("#") && pathname === link.href
                    ? "page"
                    : undefined
                }
                className={`group relative rounded-lg px-1 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-300 hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${!link.href.includes("#") && pathname === link.href ? "text-emerald-700" : navTextClass}`}
              >
                <span>{link.label}</span>
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-[#00C853] to-[#00B4D8] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("bionics:open-search"))
              }
              aria-label="Search website (Ctrl or Command plus K)"
              className="group flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-slate-600 transition hover:border-cyan-300 hover:text-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <Search className="h-4 w-4" />
              <span className="hidden text-xs font-bold xl:inline">Search</span>
              <kbd className="hidden rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-400 2xl:inline">
                Ctrl K
              </kbd>
            </button>
            <Link
              href="/products/buy"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00C853] to-[#00B4D8] px-6 py-3 text-sm font-bold leading-none text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              <ShoppingBag className="h-4 w-4" />
              Buy Product
            </Link>
          </div>

          <div className="flex items-center gap-1 xl:hidden">
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("bionics:open-search"))
              }
              aria-label="Search website"
              className={`rounded-lg p-2 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${iconTextClass}`}
            >
              <Search size={23} />
            </button>
            <button
              onClick={() => setOpen((current) => !current)}
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={open}
              className={`rounded-lg p-2 transition-colors duration-300 xl:hidden ${iconTextClass}`}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </MotionDiv>
      </MotionDiv>

      <AnimatePresence initial={false}>
        {open && (
          <MotionDiv
            key="mobile-menu"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 w-[calc(100%-24px)] max-w-[1380px] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl xl:hidden"
          >
            <nav className="p-3" aria-label="Mobile navigation">
              <div className="flex flex-col gap-1">
                {leadingLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-[15px] font-semibold text-slate-700 hover:bg-emerald-50"
                  >
                    {link.label}
                  </Link>
                ))}
                {megaMenus.map((menu) => (
                  <details key={menu.label} className="group rounded-2xl">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold text-slate-700 hover:bg-emerald-50">
                      <span>{menu.label}</span>
                      <ChevronDown
                        className="h-4 w-4 text-slate-500 transition-transform duration-200 group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="grid gap-1 px-3 pb-2">
                      <Link
                        href={menu.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-800"
                      >
                        View all {menu.label.toLowerCase()}
                      </Link>
                      {menu.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="rounded-xl px-4 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ))}
                <details className="group rounded-2xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold text-slate-700 hover:bg-emerald-50">
                    <span>Resources</span>
                    <ChevronDown
                      className="h-4 w-4 text-slate-500 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="grid gap-1 px-3 pb-2">
                    {resourceMenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-4 py-2.5 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
                {trailingLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-[15px] font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/products/buy"
                  onClick={() => setOpen(false)}
                  className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#00C853] to-[#00B4D8] px-5 py-3 font-bold leading-none text-white shadow-lg shadow-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Buy Product
                </Link>
              </div>
            </nav>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
}
