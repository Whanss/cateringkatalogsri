"use client";

import { motion } from "framer-motion";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp, SiteNav } from "@/components/SiteNav";
import { whatsappLink } from "@/lib/site-data";

const serviceAreas = [
  "Pesanan rumahan sekitar area dapur",
  "Acara keluarga dan kantor",
  "Snack box untuk rapat dan pengajian",
  "Nasi kotak dan tampah untuk syukuran",
];

const mapSrc =
  "https://maps.google.com/maps?q=Desa+Ganti,+Praya+Timur,+Lombok+Tengah&z=15&output=embed";

export default function LokasiPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-charcoal">
      <SiteNav />

      <section className="px-5 pb-16 pt-28 sm:px-8 lg:pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-toffee">
              Lokasi & layanan
            </p>
            <h1 className="mt-4 font-heading text-5xl font-semibold leading-tight text-charcoal sm:text-6xl">
              Dapur rumahan di Praya Timur, Lombok Tengah.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/70">
              Dapur SRI melayani pemesanan kue, snack box, nasi kotak, dan
              catering rumahan. Detail titik ambil, pengantaran, dan jadwal
              produksi bisa dikonfirmasi melalui WhatsApp.
            </p>
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex rounded-full bg-toffee px-7 py-4 font-semibold text-white shadow-cta"
            >
              Tanya Area Pengantaran
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="rounded-3xl bg-white p-4 shadow-soft"
          >
            <iframe
              title="Peta lokasi Dapur SRI"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[460px] w-full rounded-[1.25rem] border-0"
            />
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-10 pt-2 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-toffee">
                Area layanan
              </p>
              <h2 className="mt-3 font-heading text-4xl font-semibold text-charcoal">
                Praya Timur, Lombok Tengah
              </h2>
            </div>
            <p className="text-sm leading-7 text-charcoal/70">
              Untuk alamat lengkap, titik pengambilan, atau ongkir pengantaran,
              silakan chat terlebih dahulu agar pesanan bisa diarahkan dengan
              tepat.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 pt-10 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6 }}
            className="grid gap-5 md:grid-cols-4"
          >
            {serviceAreas.map((area, index) => (
              <div key={area} className="rounded-2xl bg-white p-6 shadow-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-toffee/15 text-sm font-bold text-toffee">
                  {index + 1}
                </span>
                <p className="mt-5 text-sm font-semibold leading-7 text-charcoal">
                  {area}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
