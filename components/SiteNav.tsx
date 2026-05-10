"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site-data";
import { DapurSriLogo, WhatsAppIcon } from "./BrandIcons";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Katalog", href: "/katalog" },
  { label: "Lokasi", href: "/lokasi" },
  { label: "Kontak", href: "/kontak" },
];

export function SiteNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => setScrolled(latest > 20));
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-charcoal/10 bg-cream/90 shadow-soft backdrop-blur-md"
          : "border-white/25 bg-white/20 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <DapurSriLogo className="h-9 w-9 flex-shrink-0" />
          <span className="truncate font-heading text-2xl font-semibold text-charcoal">
            Dapur SRI
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-charcoal/75 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                className={`transition hover:text-toffee ${
                  active ? "text-toffee" : ""
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white shadow-whatsapp transition"
        >
          <WhatsAppIcon />
          <span className="hidden sm:inline">Chat WhatsApp</span>
          <span className="sm:hidden">Chat</span>
        </motion.a>
      </nav>
    </motion.header>
  );
}

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat Dapur SRI melalui WhatsApp"
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(37,211,102,0.42)",
          "0 0 0 18px rgba(37,211,102,0)",
          "0 0 0 0 rgba(37,211,102,0)",
        ],
      }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-whatsapp sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </motion.a>
  );
}
