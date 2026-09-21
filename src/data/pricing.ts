import type { PricingPackage } from "@/types";

export const printingPackages: PricingPackage[] = [
  { id: "atasan-print", name: "Atasan Print", image: "/images/paket-harga/atasan-print.webp", description: "Jersey full printing", condition: "Desain bebas · Minimal order 6 pcs", options: [{ label: "Jersey full printing", price: 100000, unit: "atasan" }] },
  { id: "half-print", name: "Half Print", image: "/images/paket-harga/half-print.webp", description: "Jersey full printing + celana sablon DTF/polyflex", condition: "Desain bebas · Minimal order 6 pcs", options: [{ label: "Jersey + celana sablon", price: 125000, unit: "setel" }] },
  { id: "full-print", name: "Full Print", image: "/images/paket-harga/full-print.webp", description: "Jersey dan celana full printing", condition: "Desain bebas · Minimal order 6 pcs", options: [{ label: "Jersey + celana full printing", price: 140000, unit: "setel" }] },
];
export const screenPrintPackages: PricingPackage[] = [
  { id: "sablon-lokal", name: "Setelan Sablon Lokal", image: "/images/paket-harga/setelan-sablon.webp", description: "Setelan berbahan lokal dengan pilihan kelengkapan sablon.", condition: "Harga berlaku untuk pembelian 12 pcs", options: [{ label: "Nama + nomor", price: 75000, unit: "setel" }, { label: "Nama + nomor + sponsor", price: 80000, unit: "setel" }, { label: "Nama + nomor + sponsor + logo", price: 85000, unit: "setel" }] },
  { id: "sablon-import", name: "Setelan Sablon Import", image: "/images/paket-harga/setelan-sablon.webp", description: "Setelan berbahan import dengan pilihan kelengkapan sablon.", condition: "Harga berlaku untuk pembelian 12 pcs", options: [{ label: "Nama + nomor", price: 115000, unit: "setel" }, { label: "Nama + nomor + sponsor", price: 120000, unit: "setel" }, { label: "Nama + nomor + sponsor + logo", price: 125000, unit: "setel" }] },
];
