import type { Metadata } from "next";
import { CatalogBrowser } from "@/components/catalog/catalog-browser";
export const metadata: Metadata = { title: "Katalog Jersey Custom" };
export default function CatalogPage() {
  return (
    <main id="main" className="container catalog-page">
      <div className="page-heading">
        <span className="eyebrow">THE DESIGN COLLECTION / 01—08</span>
        <h1>
          Temukan gaya.
          <br />
          <span className="lime">Bikin jadi kamu.</span>
        </h1>
        <p>
          Mulai dari desain yang kamu suka. Sesuaikan warna, logo, nama, dan
          nomor untuk identitas tim kamu.
        </p>
        <span className="demo-note">
          Seluruh desain merupakan ilustrasi contoh, termasuk label populer dan
          referensi pesanan.
        </span>
      </div>
      <CatalogBrowser />
    </main>
  );
}
