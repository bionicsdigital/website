'use client'

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { ComponentType, HTMLAttributes } from "react";
import { useState } from "react";
import type { FooterLinkGroup } from "@/data/footer-links";

const MotionUl =
  motion.ul as unknown as ComponentType<
    HTMLAttributes<HTMLUListElement> & MotionProps
  >;

export default function FooterLinks({ group }: { group: FooterLinkGroup }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-t border-white/[.08] py-1 lg:border-t-0 lg:py-0" aria-label={group.title}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-bold uppercase tracking-[.13em] text-emerald-300 lg:pointer-events-none lg:py-0"
        aria-expanded={open}
      >
        <span>{group.title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 lg:hidden ${open ? "rotate-180" : ""}`} />
      </button>

      <ul className="mt-5 hidden space-y-2.5 lg:block">
        {group.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-emerald-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <AnimatePresence initial={false}>
        {open && (
          <MotionUl
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden pb-4 lg:hidden"
          >
            {group.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-1 py-2 text-sm text-slate-300 transition hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </MotionUl>
        )}
      </AnimatePresence>
    </nav>
  );
}
