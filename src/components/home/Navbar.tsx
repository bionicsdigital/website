"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  type MotionProps,
} from "framer-motion";
import type { ComponentType, HTMLAttributes } from "react";
import { useEffect, useState } from "react";
import QuoteModal from "@/components/forms/QuoteModal";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Industries", href: "/#industries" },
  { label: "Why Nanozyme", href:"/#applications" },
  { label: "Case Studies", href: "/#process" },
  { label: "Clients", href: "/#clients" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

const MotionDiv = motion.div as unknown as ComponentType<
  Omit<HTMLAttributes<HTMLDivElement>, "style"> & MotionProps
>;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

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
            height: isFloating ? 72 : 84,
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
              className="h-12 w-auto lg:h-14"
              style={{ width: "auto" }}
            />
          </Link>

          <nav
            className="hidden items-center gap-8 xl:flex"
            aria-label="Primary navigation"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative text-[14px] font-semibold tracking-wide transition-colors duration-300 hover:text-blue-600 ${navTextClass}`}
              >
                <span>{link.label}</span>
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-[#00C853] to-[#00B4D8] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {/* <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('bionics:open-search'))}
              aria-label="Search website (Ctrl or Command plus K)"
              className="group flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-slate-600 transition hover:border-cyan-300 hover:text-cyan-700"
            >
              <Search className="h-4 w-4" />
              <span className="hidden text-xs font-bold xl:inline">Search</span>
              <kbd className="hidden rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-400 2xl:inline">Ctrl K</kbd>
            </button> */}
            <Link
              href="/products/buy"
              className="rounded-full bg-gradient-to-r from-[#00C853] to-[#00B4D8] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/35"
            >
              Buy Products
            </Link>
          </div>

          <div className="flex items-center gap-1 xl:hidden">
            <button type="button" onClick={() => window.dispatchEvent(new Event('bionics:open-search'))} aria-label="Search website" className={`rounded-lg p-2 transition-colors duration-300 lg:hidden ${iconTextClass}`}><Search size={23} /></button>
            <button onClick={() => setOpen((current) => !current)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} className={`rounded-lg p-2 transition-colors duration-300 xl:hidden ${iconTextClass}`}>{open ? <X size={26} /> : <Menu size={26} />}</button>
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
                {links.map((link) => (
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
                  className="mt-3 flex min-h-12 justify-center rounded-2xl bg-gradient-to-r from-[#00C853] to-[#00B4D8] px-5 py-3 font-bold text-white shadow-lg shadow-cyan-500/20"
                >
                  Buy Products
                </Link>
              </div>
            </nav>
          </MotionDiv>
        )}
      </AnimatePresence>
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </header>
  );
}
