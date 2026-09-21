import type { Metadata } from "next";
import Link from "next/link";
import { CatalogBrowser } from "@/components/catalog/catalog-browser";
export const metadata: Metadata = { title: "Katalog Jersey Custom" };
export default function CatalogPage() {
  return (
    <main id="main" className="container catalog-page">
      <div className="page-heading">
        <span className="eyebrow">KOLEKSI FOTO PRODUK / 18 DESAIN</span>
        <h1>
          Temukan gaya.
          <br />
          <span className="lime">Bikin jadi kamu.</span>
        </h1>
        <p>
          Mulai dari desain yang kamu suka. Sesuaikan warna, logo, nama, dan
          nomor untuk identitas tim kamu.
        </p>
        <Link className="text-link catalog-pricing-link" href="/paket-harga">Lihat paket harga jersey ↗</Link>
        <span className="demo-note">
          Foto asli jersey dan kaos BP Sport sebagai referensi pesanan custom.
        </span>
      </div>
      <CatalogBrowser />
    </main>
  );
}
