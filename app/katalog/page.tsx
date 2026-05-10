"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp, SiteNav } from "@/components/SiteNav";
import {
  highlightImage,
  menuItems,
  whatsappLink,
  whatsappOrderLink,
} from "@/lib/site-data";

const filters = ["Semua", "Kue Basah", "Snack Gurih", "Paket Catering", "Snack Box"];

export default function KatalogPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredItems = useMemo(() => {
    if (activeFilter === "Semua") return menuItems;

    if (activeFilter === "Paket Catering") {
      return menuItems.filter((item) =>
        ["Paket Catering", "Catering", "Acara Keluarga"].includes(item.category)
      );
    }

    if (activeFilter === "Kue Basah") {
      return menuItems.filter((item) =>
        ["Kue Basah", "Jajan Pasar", "Kue Manis"].includes(item.category)
      );
    }

    return menuItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-charcoal">
      <SiteNav />

      <section className="px-5 pb-12 pt-28 sm:px-8 lg:pt-36">
        <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-toffee">
              Katalog lengkap
            </p>
            <h1 className="mt-4 font-heading text-5xl font-semibold leading-tight text-charcoal sm:text-6xl">
              Pilih menu yang paling pas untuk acara Anda.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/70">
              Dari kue basah, snack box, nasi kotak, sampai paket prasmanan
              mini. Harga dapat menyesuaikan jumlah pesanan, pilihan lauk, dan
              kebutuhan kemasan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="overflow-hidden rounded-3xl bg-white shadow-soft"
          >
            <img
              src={highlightImage}
              alt="Katalog hidangan catering Dapur SRI"
              className="h-72 w-full object-cover sm:h-96"
            />
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55 }}
            className="flex gap-3 overflow-x-auto pb-3"
          >
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold shadow-soft ${
                  active
                    ? "bg-toffee text-white"
                    : "bg-white text-charcoal/72 hover:text-toffee"
                } transition`}
              >
                {filter}
              </button>
              );
            })}
          </motion.div>

          <motion.div
            key={activeFilter}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            initial="hidden"
            animate="visible"
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredItems.map((item) => (
              <motion.article
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.58, ease: "easeOut" }}
                className="group overflow-hidden rounded-2xl bg-white shadow-soft"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    whileInView={{ scale: 1.04 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className="h-60 w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-toffee">
                        {item.category}
                      </p>
                      <h2 className="mt-2 font-heading text-3xl font-semibold text-charcoal">
                        {item.name}
                      </h2>
                    </div>
                    <span className="rounded-full bg-toffee/10 px-3 py-1 text-xs font-semibold text-toffee">
                      {item.portion}
                    </span>
                  </div>
                  <p className="mt-4 min-h-[5rem] text-sm leading-7 text-charcoal/70">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="font-semibold text-toffee">{item.price}</p>
                    <motion.a
                      href={whatsappOrderLink(item.name)}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="rounded-full bg-charcoal px-5 py-2 text-sm font-semibold text-white transition hover:bg-toffee hover:shadow-cta"
                    >
                      Pesan
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-28 pt-14 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-3xl bg-charcoal px-6 py-10 text-center text-white shadow-soft sm:px-10 sm:py-14"
        >
          <h2 className="font-heading text-4xl font-semibold">
            Butuh paket custom?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/70">
            Kirim jumlah tamu, tanggal acara, dan preferensi menu. Dapur SRI
            akan bantu susun rekomendasi yang enak, rapi, dan sesuai budget.
          </p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex rounded-full bg-whatsapp px-7 py-4 font-semibold text-white shadow-whatsapp"
          >
            Konsultasi via WhatsApp
          </motion.a>
        </motion.div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
