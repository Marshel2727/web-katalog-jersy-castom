import type { JerseyDesign } from "@/types";
export const designs: JerseyDesign[] = [
  {
    slug: "volt-united",
    code: "JK-001",
    name: "Volt United",
    category: "Sepak bola",
    color: "Lime / Carbon",
    accent: "#c5f657",
    popular: true,
    previousOrder: false,
    description:
      "Energi baru untuk tim yang selalu bergerak maju. Pola diagonal berani berpadu dengan aksen lime yang menonjol di lapangan.",
  },
  {
    slug: "velocity-blue",
    code: "JK-002",
    name: "Velocity Blue",
    category: "Futsal",
    color: "Electric Blue / Navy",
    accent: "#6ca6ed",
    popular: true,
    previousOrder: true,
    description:
      "Garis dinamis dan biru elektrik untuk permainan cepat. Jadikan identitas tim kamu pusat perhatian di setiap pertandingan.",
  },
  {
    slug: "crimson-strike",
    code: "JK-003",
    name: "Crimson Strike",
    category: "Sepak bola",
    color: "Crimson / Black",
    accent: "#eb665b",
    popular: true,
    previousOrder: false,
    description:
      "Merah tegas dengan detail gelap yang menghadirkan karakter kuat. Cocok untuk tim dengan semangat pantang menyerah.",
  },
  {
    slug: "sandstorm",
    code: "JK-004",
    name: "Sandstorm",
    category: "Basket",
    color: "Sand / Espresso",
    accent: "#ddc6a1",
    popular: true,
    previousOrder: true,
    description:
      "Nuansa pasir yang hangat bertemu potongan basket klasik. Pilihan untuk tim yang ingin tampil berbeda di dalam maupun luar lapangan.",
  },
  {
    slug: "forest-club",
    code: "JK-005",
    name: "Forest Club",
    category: "Futsal",
    color: "Forest / Cream",
    accent: "#79bda0",
    popular: false,
    previousOrder: true,
    description:
      "Hijau hutan dan aksen krem dalam komposisi yang tenang. Ruang untuk logo dan nama tim dibuat jelas dan mudah terlihat.",
  },
  {
    slug: "violet-rally",
    code: "JK-006",
    name: "Violet Rally",
    category: "Badminton",
    color: "Violet / Lilac",
    accent: "#b6a0ee",
    popular: false,
    previousOrder: false,
    description:
      "Permainan gradasi ungu dengan garis gesit untuk komunitas badminton. Sesuaikan warna dan detail untuk gaya pasanganmu.",
  },
  {
    slug: "midnight-fc",
    code: "JK-007",
    name: "Midnight FC",
    category: "Sepak bola",
    color: "Midnight / Silver",
    accent: "#acb9cf",
    popular: false,
    previousOrder: true,
    description:
      "Tampilan monokrom dengan pola geometris yang rapi. Desain serbaguna untuk identitas klub yang modern.",
  },
  {
    slug: "sunset-hoops",
    code: "JK-008",
    name: "Sunset Hoops",
    category: "Basket",
    color: "Orange / Burgundy",
    accent: "#f6a565",
    popular: false,
    previousOrder: false,
    description:
      "Warna senja yang ekspresif dalam siluet basket. Tambahkan nomor andalan dan nama tim untuk membuatnya jadi milikmu.",
  },
].map((d) => ({
  ...d,
  category: d.category as JerseyDesign["category"],
  images: [`/images/${d.slug}.svg`, `/images/${d.slug}-back.svg`],
}));
