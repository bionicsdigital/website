import Image from 'next/image'
import Link from 'next/link'

import {
  Mail,
  Phone,
  MapPin,
  Globe2,
} from 'lucide-react'

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa'

const groups = {
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ],
  Products: [
    { name: 'Aerobic Bioculture', href: '#' },
    { name: 'Anaerobic Bioculture', href: '#' },
    { name: 'STP Bioculture', href: '#' },
    { name: 'ETP Bioculture', href: '#' },
  ],
  Industries: [
    { name: 'Textile', href: '#industries' },
    { name: 'Sugar', href: '#industries' },
    { name: 'Chemical', href: '#industries' },
    { name: 'Municipal', href: '#industries' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#08170F] text-white">
      <div className="border-t border-green-900" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company */}

          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/logo.png"
                alt="Bionics Enviro Tech"
                width={52}
                height={52}
              />

              <div>
                <h3 className="text-lg font-bold">
                  BIONICS ENVIRO TECH
                </h3>

                <p className="text-sm text-green-300">
                  Scientific Manufacturer
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-slate-300">
              Scientific manufacturer of Nanozyme Bioculture for ETP, STP,
              CETP and industrial wastewater treatment. Delivering sustainable,
              cost-effective and high-performance biological solutions.
            </p>

            {/* Contact */}

            <div className="mt-8 space-y-3 text-sm">
              <a
                href="mailto:info@bionicsenviro.com"
                className="flex items-center gap-3 text-slate-300 transition hover:text-green-400"
              >
                <Mail size={18} />
                info@bionicsenviro.com
              </a>

              <a
                href="tel:+919095000090"
                className="flex items-center gap-3 text-slate-300 transition hover:text-green-400"
              >
                <Phone size={18} />
                +91 90950 00090
              </a>

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} />
                India • Global Supply
              </div>
            </div>

            {/* Social */}

                <div className="mt-8 flex gap-4">
                <a
                    href="https://bionicsenviro.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:bg-green-500 hover:scale-110"
                >
                    <Globe2 size={18} />
                </a>

                <a
                    href="https://www.linkedin.com/company/bionics-enviro-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:bg-[#0077B5] hover:scale-110"
                >
                    <FaLinkedinIn size={18} />
                </a>

                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:bg-[#1877F2] hover:scale-110"
                >
                    <FaFacebookF size={18} />
                </a>

                <a
                    href="https://www.youtube.com/@bioculturebybionics"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:bg-[#FF0000] hover:scale-110"
                >
                    <FaYoutube size={18} />
                </a>

                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:bg-[#E4405F] hover:scale-110"
                >
                    <FaInstagram size={18} />
                </a>
                </div>
          </div>

          {/* Links */}

          {Object.entries(groups).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-bold">{title}</h4>

              <ul className="mt-6 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 transition hover:text-green-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}

          {/* <div>
            <h4 className="text-lg font-bold">
              Newsletter
            </h4>

            <p className="mt-5 text-sm leading-6 text-slate-300">
              Get technical updates, wastewater treatment insights and product
              innovations directly in your inbox.
            </p>

            <form className="mt-6 space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="
                  w-full
                  rounded-xl
                  border
                  border-green-800
                  bg-white/10
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-400
                  outline-none
                  focus:border-green-500
                "
              />

              <button
                className="
                  w-full
                  rounded-xl
                  bg-green-500
                  py-3
                  font-semibold
                  text-slate-900
                  transition
                  hover:bg-green-400
                "
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-green-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} Bionics Enviro Tech Pvt. Ltd. All
            Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}