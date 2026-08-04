import Image from "next/image";
import { Globe2, Mail, Phone, ReceiptText } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const socials = [
  { label: "Website", href: "https://bionicsenviro.com", icon: Globe2 },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bionics-enviro-tech/",
    icon: FaLinkedinIn,
  },
  { label: "Facebook", href: "https://www.facebook.com/BionicsEnviro1", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/bionicsenvirotech_0/", icon: FaInstagram },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@bioculturebybionics",
    icon: FaYoutube,
  },
];
export default function FooterBrand() {
  return (
    <section>
      <a href="/" className="inline-flex items-center gap-3">
        <Image
          src="/icon.png"
          alt="Bionics Enviro Tech"
          width={54}
          height={54}
        />
        <span>
          <span className="block text-lg font-black">BIONICS ENVIRO TECH</span>
          <span className="text-sm text-emerald-300">
            Scientific Manufacturer
          </span>
        </span>
      </a>
      <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
        Scientific manufacturer of Nanozyme Bioculture for wastewater treatment
        and industrial biological solutions.
      </p>
      <div className="mt-4 space-y-2.5 text-sm text-slate-300">
        <a
          href="tel:+919095000090"
          className="flex items-center gap-2 hover:text-emerald-300"
        >
          <Phone className="h-4 w-4 text-emerald-400" />
          +91 90950 00090
        </a>
        <a
          href="mailto:info@bionicsenviro.com"
          className="flex items-center gap-2 hover:text-emerald-300"
        >
          <Mail className="h-4 w-4 text-emerald-400" />
          info@bionicsenviro.com
        </a>
        <span className="flex items-center gap-2">
          <ReceiptText className="h-4 w-4 text-emerald-400" />
          GST No. 33BKEPS2994G1ZV
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[.1] bg-white/[.05] text-slate-200 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-500 hover:text-emerald-950"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </section>
  );
}
