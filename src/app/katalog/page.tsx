import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CatalogBrowser } from "@/components/catalog/catalog-browser";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { Sparkles, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Katalog Jersey Custom" };

export default function CatalogPage() {
  return (
    <main id="main" className="container catalog-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Beranda</Link>
        <span>/</span>
        <span>Katalog</span>
      </nav>

      {/* HERO SECTION: BALANCED 2-COLUMN SHOWCASE */}
      <section className="catalog-hero">
        <div className="catalog-hero-grid">
          {/* KOLOM KIRI: TEKS & NAVIGASI */}
          <div className="catalog-hero-left">
            <span className="eyebrow">
              <Sparkles size={13} className="inline-icon" /> KOLEKSI FOTO PRODUK / 18+ DESAIN PILIHAN
            </span>
            <h1>
              Temukan gaya.
              <br />
              <span className="lime">Bikin jadi kamu.</span>
            </h1>
            <p className="catalog-hero-lead">
              Mulai dari desain yang kamu suka. Sesuaikan kombinasi warna tim, penempatan logo,
              nama pemain, dan nomor punggung untuk identitas penuh di lapangan.
            </p>

            <div className="catalog-hero-actions">
              <Link className="button" href="/#custom">
                Coba Simulator Desain <ArrowRight size={15} />
              </Link>
              <Link className="button button-outline" href="/paket-harga">
                Cek Paket Harga <ArrowRight size={15} />
              </Link>
            </div>

            <div className="catalog-feature-tags">
              <span>
                <Check size={14} /> Foto Asli Portofolio
              </span>
              <span>
                <Check size={14} /> Bebas Custom Nama & Nomor
              </span>
              <span>
                <Check size={14} /> Sublimasi Anti-Luntur
              </span>
            </div>
          </div>

          {/* KOLOM KANAN: SPOTLIGHT VISUAL CARD (MENGISI RUANG KOSONG) */}
          <div className="catalog-hero-right">
            <div className="catalog-spotlight-card">
              <div className="spotlight-badge-row">
                <span className="spotlight-tag">★ SERI UNGGULAN</span>
                <span className="spotlight-sub">Bisa Custom Warna</span>
              </div>

              <div className="spotlight-preview-box">
                <Image
                  src="/images/katalog/setelan-teal/sampul.jpg"
                  alt="Portofolio jersey setelan teal BP Sport"
                  width={400}
                  height={230}
                  className="spotlight-img"
                  priority
                />
                <div className="spotlight-caption-overlay">
                  <strong>Jersey Setelan Turnamen</strong>
                  <small>Foto asli pesanan tim • Bahan Dry-Fit Milano • Sablon Sublimasi</small>
                </div>
              </div>

              <div className="catalog-spotlight-info">
                <div className="mini-spec-item">
                  <span>Minimal Order:</span>
                  <strong>Mulai 6 Pcs</strong>
                </div>
                <div className="mini-spec-item">
                  <span>Estimasi Kerja:</span>
                  <strong>7–14 Hari Kerja</strong>
                </div>
                <div className="mini-spec-item">
                  <span>Bahan Populer:</span>
                  <strong>Dry-Fit Milano / Brazil</strong>
                </div>
              </div>

              <div className="spotlight-consultation">
                <p>Punya referensi sendiri atau ingin memodifikasi warna dari katalog ini?</p>
                <WhatsAppLink className="spotlight-btn">Diskusi Desain via WhatsApp</WhatsAppLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CatalogBrowser />
    </main>
  );
}
