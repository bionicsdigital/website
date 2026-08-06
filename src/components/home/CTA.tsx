"use client";

import {
  ArrowRight,
  Download,
  MessageCircle,
  Phone,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import QuoteModal from "@/components/forms/QuoteModal";
import { siteConfig } from "@/lib/site";

export default function CTA() {
  const [open, setOpen] = useState(false);
  const whatsappNumber = siteConfig.phoneHref.replace(/\D/g, "");
  return (
    <section id="contact" className="bg-white py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-[#07333a] to-emerald-900 px-6 py-8 text-white shadow-[0_28px_80px_rgba(6,78,59,.25)] sm:px-9 lg:px-12 lg:py-12">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[55px] border-cyan-400/10"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-300">
                Technical consultation
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Improve treatment performance with the right Nanozyme
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Share your plant conditions with our technical team for an
                application-specific product recommendation.
              </p>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="mt-5 inline-flex items-center gap-2 font-bold text-white hover:text-emerald-300"
              >
                <Phone className="h-5 w-5" />
                {siteConfig.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[.07] p-4 backdrop-blur sm:p-5">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 font-black text-emerald-800 shadow-xl transition hover:-translate-y-0.5"
              >
                Request Technical Consultation{" "}
                <ArrowRight className="h-5 w-5" />
              </button>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/products/buy"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 text-sm font-bold text-slate-950"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Buy Product
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-4 text-sm font-bold hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={siteConfig.brochure}
                  download
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-4 text-sm font-bold hover:bg-white/10 sm:col-span-2"
                >
                  <Download className="h-4 w-4" />
                  Download Company Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
