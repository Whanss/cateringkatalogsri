"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
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

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="flex h-6 w-6 flex-col items-center justify-center gap-[5px]">
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
        className="block h-0.5 w-5 rounded-full bg-charcoal"
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block h-0.5 w-5 rounded-full bg-charcoal"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
        className="block h-0.5 w-5 rounded-full bg-charcoal"
      />
    </span>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => setScrolled(latest > 20));
  }, [scrollY]);

  // Tutup sidebar saat navigasi
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Cegah scroll body saat sidebar terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-charcoal/10 bg-cream/90 shadow-soft backdrop-blur-md"
            : "border-white/25 bg-white/20 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <DapurSriLogo className="h-9 w-9 flex-shrink-0" />
            <span className="truncate font-heading text-2xl font-semibold text-charcoal">
              Dapur SRI
            </span>
          </Link>

          {/* Nav desktop */}
          <div className="hidden items-center gap-7 text-sm font-medium text-charcoal/75 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition hover:text-toffee ${active ? "text-toffee" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* WhatsApp button */}
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

            {/* Hamburger — hanya mobile */}
            <button
              type="button"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-charcoal/8 md:hidden"
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            key="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-cream shadow-[−8px_0_40px_rgba(0,0,0,0.12)] md:hidden"
          >
            {/* Header sidebar */}
            <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-4">
              <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
                <DapurSriLogo className="h-8 w-8" />
                <span className="font-heading text-xl font-semibold text-charcoal">Dapur SRI</span>
              </Link>
              <button
                type="button"
                aria-label="Tutup menu"
                onClick={() => setMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal/60 transition hover:bg-charcoal/8 hover:text-charcoal"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-1 px-4 py-6">
              {navItems.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-semibold transition ${
                        active
                          ? "bg-toffee/10 text-toffee"
                          : "text-charcoal hover:bg-charcoal/5 hover:text-toffee"
                      }`}
                    >
                      <NavIcon href={item.href} />
                      {item.label}
                      {active && (
                        <span className="ml-auto h-2 w-2 rounded-full bg-toffee" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer sidebar */}
            <div className="mt-auto border-t border-charcoal/10 px-6 py-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp py-3.5 text-sm font-semibold text-white shadow-whatsapp"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat WhatsApp
              </a>
              <p className="mt-4 text-center text-xs text-charcoal/40">
                Dapur SRI · Praya Timur, Lombok Tengah
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

/** Icon kecil per halaman di sidebar */
function NavIcon({ href }: { href: string }) {
  if (href === "/") return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
  if (href === "/katalog") return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
  if (href === "/lokasi") return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
    </svg>
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
