import type { SiteConfig, Testimonial } from "@/types";
export const siteConfig: SiteConfig = {
  name: "BP Sport",
  whatsapp: "62882020423072",
  tagline: "Spesialis jersey. Kaos custom sesuai desain kamu.",
};
export const testimonials: Testimonial[] = [
  {
    name: "Raka Pratama",
    team: "Tim futsal komunitas",
    initials: "RP",
    quote:
      "Dari ide di grup tim sampai jadi jersey yang kita banggakan. Diskusi desainnya gampang dan hasilnya sesuai karakter tim!",
    isExample: true,
  },
  {
    name: "Nadia Putri",
    team: "Komunitas badminton",
    initials: "NP",
    quote:
      "Suka karena bisa eksplor warna dan menambahkan identitas komunitas. Semua anggota jadi punya jersey yang kompak.",
    isExample: true,
  },
  {
    name: "Dimas Saputra",
    team: "Klub sepak bola",
    initials: "DS",
    quote:
      "Referensi di katalog membantu banget. Tinggal pilih gaya yang cocok, lalu diskusikan detail nama dan nomor pemain.",
    isExample: true,
  },
];
