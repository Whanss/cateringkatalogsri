"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { AdvantageIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp, SiteNav } from "@/components/SiteNav";
import {
  advantages,
  bestSellers,
  heroImage,
  highlightImage,
  whatsappLink,
  whatsappOrderLink,
} from "@/lib/site-data";

function MenuCard({
  item,
  index,
}: {
  item: (typeof bestSellers)[number];
  index: number;
}) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 34 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl bg-white shadow-soft"
    >
      <div className="overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.name}
          loading={index === 0 ? "eager" : "lazy"}
          whileInView={{ scale: 1.06 }}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-64 w-full object-cover"
        />
      </div>
      <div className="space-y-4 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-toffee">
            {item.category}
          </p>
          <h3 className="mt-2 font-heading text-3xl font-semibold text-charcoal">
            {item.name}
          </h3>
        </div>
        <p className="min-h-[5rem] text-sm leading-7 text-charcoal/70">
          {item.description}
        </p>
        <div className="flex items-center justify-between gap-4">
          <p className="font-semibold text-toffee">{item.price}</p>
          <motion.a
            href={whatsappOrderLink(item.name)}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full border border-toffee/25 px-5 py-2 text-sm font-semibold text-toffee transition hover:bg-toffee hover:text-white hover:shadow-cta"
          >
            Pesan
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

function Advantages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section id="unggulan" ref={ref} className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-toffee">
            Dikerjakan dengan hati
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold text-charcoal sm:text-5xl">
            Kenapa pelanggan kembali pesan
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="rounded-2xl bg-white p-7 shadow-soft"
            >
              <motion.div
                animate={inView ? { y: [0, -8, 0] } : undefined}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.18,
                }}
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-toffee/20 text-toffee"
              >
                <AdvantageIcon icon={advantage.icon} />
              </motion.div>
              <h3 className="font-heading text-2xl font-semibold text-charcoal">
                {advantage.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/70">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-charcoal">
      <SiteNav />

      <section
        id="hero"
        className="relative px-5 pb-16 pt-28 sm:px-8 lg:min-h-screen lg:pb-24 lg:pt-36"
      >
        <div className="absolute left-0 top-24 h-64 w-64 rounded-full bg-toffee/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-whatsapp/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-sm font-semibold uppercase tracking-[0.24em] text-toffee"
            >
              Kue & catering rumahan premium
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-5 font-heading text-5xl font-semibold leading-[1.05] text-charcoal sm:text-6xl lg:text-7xl"
            >
              Dapur SRI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-xl text-lg leading-8 text-charcoal/70"
            >
              Sajian kue basah, nasi kotak, dan snack rumahan yang dibuat segar,
              tampak cantik, dan terasa hangat di setiap acara spesial Anda.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-toffee px-7 py-4 text-base font-semibold text-white shadow-cta transition hover:shadow-[0_20px_45px_rgba(232,116,30,0.34)]"
              >
                Pesan Sekarang
                <span aria-hidden="true">-&gt;</span>
              </motion.a>
              <Link
                href="/katalog"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/15 px-7 py-4 text-base font-semibold text-charcoal transition hover:border-toffee/50 hover:text-toffee"
              >
                Lihat Katalog
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <motion.img
              src={heroImage}
              alt="Aneka kue dan hidangan catering rumahan Dapur SRI"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-[420px] w-full rounded-3xl object-cover shadow-soft sm:h-[540px] lg:h-[620px]"
            />
          </motion.div>
        </div>
      </section>

      <section id="menu" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl">
              Menu Paling Laris
            </h2>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-toffee" />
            <p className="mt-6 text-base leading-8 text-charcoal/70">
              Pilihan favorit pelanggan untuk acara kantor, keluarga, hantaran,
              dan momen kecil yang pantas terasa istimewa.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {bestSellers.map((item, index) => (
              <MenuCard key={item.name} item={item} index={index} />
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link
              href="/katalog"
              className="inline-flex items-center justify-center rounded-full bg-charcoal px-7 py-3 font-semibold text-white transition hover:bg-toffee hover:shadow-cta"
            >
              Buka Katalog Lengkap
            </Link>
          </div>
        </div>
      </section>

      <section id="cerita" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <img
              src={highlightImage}
              alt="Hidangan catering rumahan yang tersusun rapi"
              className="h-[420px] w-full rounded-3xl object-cover shadow-soft sm:h-[560px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="lg:pl-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-toffee">
              Rasa rumahan, tampilan premium
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
              Sajian yang membuat meja acara langsung terasa hangat.
            </h2>
            <p className="mt-6 text-base leading-8 text-charcoal/70">
              Dapur SRI menyiapkan setiap pesanan dengan ritme dapur rumahan:
              teliti, bersih, dan tidak terburu-buru. Dari aroma kue yang baru
              matang sampai nasi kotak yang tertata rapi, semuanya dibuat agar
              tamu merasa disambut.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-soft">
                <p className="font-heading text-3xl font-semibold text-toffee">
                  48+
                </p>
                <p className="mt-1 text-sm text-charcoal/70">
                  varian kue, snack, dan paket nasi
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-soft">
                <p className="font-heading text-3xl font-semibold text-toffee">
                  Harian
                </p>
                <p className="mt-1 text-sm text-charcoal/70">
                  diproduksi sesuai jadwal pesanan
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Advantages />

      <section className="px-5 pb-28 pt-8 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-5xl rounded-3xl bg-charcoal px-6 py-10 text-center text-white shadow-soft sm:px-10 sm:py-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-toffee">
            Siap bantu acara Anda
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold sm:text-5xl">
            Pesan lebih awal, kami siapkan yang terbaik.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
            Konsultasikan jumlah porsi, jenis acara, dan menu favorit Anda.
            Dapur SRI akan bantu rekomendasikan pilihan yang pas.
          </p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-semibold text-white shadow-whatsapp"
          >
            <WhatsAppIcon />
            Chat WhatsApp
          </motion.a>
        </motion.div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
