export const whatsappLink = "https://wa.me/6282340824547";

export function whatsappOrderLink(menuName: string) {
  return `${whatsappLink}?text=${encodeURIComponent(
    `Hai kak, saya mau pesan ${menuName}`
  )}`;
}

export const menuItems = [
  {
    name: "Kue Lapis",
    category: "Kue Basah",
    price: "Mulai Rp 85.000",
    portion: "Loyang / potong",
    description:
      "Lembut, harum santan, dan berlapis cantik untuk hantaran maupun acara keluarga.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=900&h=700&fit=crop&auto=format&q=80",
  },
  {
    name: "Nasi Kotak",
    category: "Paket Catering",
    price: "Mulai Rp 28.000",
    portion: "Per kotak",
    description:
      "Porsi rapi dengan lauk rumahan premium, cocok untuk rapat, syukuran, dan arisan.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900&h=700&fit=crop&auto=format&q=80",
  },
  {
    name: "Risoles",
    category: "Snack Gurih",
    price: "Mulai Rp 65.000",
    portion: "Isi 20 pcs",
    description:
      "Kulit tipis, isian gurih melimpah, digoreng segar agar tetap renyah saat disajikan.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=900&h=700&fit=crop&auto=format&q=80",
  },
  {
    name: "Klepon Premium",
    category: "Jajan Pasar",
    price: "Mulai Rp 55.000",
    portion: "Isi 25 pcs",
    description:
      "Gula merah lumer, kelapa parut segar, dan tekstur kenyal yang pas untuk suguhan.",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Klepon.JPG?width=900",
  },
  {
    name: "Nasi Kuning Tampah",
    category: "Acara Keluarga",
    price: "Mulai Rp 320.000",
    portion: "10-15 porsi",
    description:
      "Nasi gurih beraroma rempah dengan lauk lengkap untuk syukuran dan ulang tahun.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=900&h=700&fit=crop&auto=format&q=80",
  },
  {
    name: "Paket Snack Box",
    category: "Snack Box",
    price: "Mulai Rp 18.000",
    portion: "Per box",
    description:
      "Kombinasi kue manis dan gurih yang rapi untuk rapat, seminar, dan pengajian.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=900&h=700&fit=crop&auto=format&q=80",
  },
  {
    name: "Brownies Panggang",
    category: "Kue Manis",
    price: "Mulai Rp 95.000",
    portion: "Loyang",
    description:
      "Padat, legit, dan coklatnya terasa dalam, cocok untuk hampers dan meja tamu.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&h=700&fit=crop&auto=format&q=80",
  },
  {
    name: "Pastel Isi Ayam",
    category: "Snack Gurih",
    price: "Mulai Rp 70.000",
    portion: "Isi 20 pcs",
    description:
      "Kulit renyah dengan isian ayam, sayur, dan telur yang gurih seimbang.",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=900&h=700&fit=crop&auto=format&q=80",
  },
  {
    name: "Paket Prasmanan Mini",
    category: "Catering",
    price: "Mulai Rp 38.000",
    portion: "Per porsi",
    description:
      "Menu rumahan lengkap untuk acara kecil dengan tampilan bersih dan elegan.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&h=700&fit=crop&auto=format&q=80",
  },
];

export const bestSellers = menuItems.slice(0, 3);

export const heroImage = "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1400&h=900&fit=crop&auto=format&q=80";

export const highlightImage = "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1100&h=700&fit=crop&auto=format&q=80";

export const advantages = [
  {
    title: "Bahan Pilihan",
    description:
      "Setiap pesanan dibuat dari bahan segar, santan berkualitas, dan bumbu yang diracik teliti.",
    icon: "leaf",
  },
  {
    title: "Dimasak Harian",
    description:
      "Produksi mengikuti jadwal pesanan, sehingga rasa, aroma, dan tekstur tetap prima.",
    icon: "fire",
  },
  {
    title: "Kemasan Rapi",
    description:
      "Tampilan siap saji yang elegan untuk acara keluarga, kantor, hampers, dan syukuran.",
    icon: "box",
  },
];
