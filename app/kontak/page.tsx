"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp, SiteNav } from "@/components/SiteNav";
import { whatsappLink } from "@/lib/site-data";

const contactSteps = [
  "Kirim tanggal acara dan jumlah porsi.",
  "Pilih menu atau minta rekomendasi paket.",
  "Konfirmasi pesanan, jadwal, dan pengantaran.",
];

export default function KontakPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-charcoal">
      <SiteNav />

      <section className="px-5 pb-20 pt-28 sm:px-8 lg:pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-toffee">
              Kontak pemesanan
            </p>
            <h1 className="mt-4 font-heading text-5xl font-semibold leading-tight text-charcoal sm:text-6xl">
              Ceritakan acaranya, kami bantu siapkan menunya.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/70">
              Klik WhatsApp untuk tanya stok, jadwal produksi, rekomendasi menu,
              atau paket custom. Balasan paling cepat melalui chat.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-semibold text-white shadow-whatsapp"
              >
                <WhatsAppIcon />
                Chat WhatsApp
              </motion.a>
              <Link
                href="/katalog"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/15 px-7 py-4 font-semibold text-charcoal transition hover:border-toffee/50 hover:text-toffee"
              >
                Lihat Katalog
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="rounded-3xl bg-white p-6 shadow-soft sm:p-8"
          >
            <p className="font-heading text-3xl font-semibold text-charcoal">
              Format order cepat
            </p>
            <div className="mt-6 space-y-4">
              {contactSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-cream p-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-toffee text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-7 text-charcoal/72">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-charcoal p-5 text-white">
              <p className="text-sm font-semibold text-toffee">Nomor WhatsApp</p>
              <p className="mt-2 font-heading text-3xl font-semibold">
                0823 4082 4547
              </p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Untuk pesanan banyak, sebaiknya hubungi lebih awal agar jadwal
                produksi dan pilihan menu bisa dikunci.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
