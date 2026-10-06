import type { Metadata } from "next";
import Link from "next/link";
import { FaqBrowser } from "@/components/faq/faq-browser";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { Sparkles, Check, ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tanya Jawab (Q&A) Seputar Pemesanan Jersey",
  description:
    "Jawaban lengkap seputar cara pemesanan jersey custom di BP Sport, minimal order, jenis bahan dry-fit, proses desain, estimasi waktu produksi, dan pengiriman.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  return (
    <main id="main" className="container faq-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Beranda</Link>
        <span>/</span>
        <span>Q&A</span>
      </nav>

      {/* HERO SECTION: BALANCED 2-COLUMN SHOWCASE */}
      <section className="faq-hero">
        <div className="faq-hero-grid">
          {/* KOLOM KIRI: TEKS & NAVIGASI */}
          <div className="faq-hero-left">
            <span className="eyebrow">
              <Sparkles size={13} className="inline-icon" /> BP SPORT / PUSAT BANTUAN & PANDUAN
            </span>
            <h1>
              Semua jawaban.
              <br />
              <span className="lime">Jelas sebelum pesan.</span>
            </h1>
            <p className="faq-hero-lead">
              Temukan informasi lengkap seputar alur pemesanan jersey custom, pilihan kain
              dan model kerah, proses revisi desain, hingga estimasi pengerjaan dan pengiriman
              ke seluruh Indonesia.
            </p>

            <div className="faq-hero-actions">
              <WhatsAppLink className="button">
                Konsultasi WhatsApp <ArrowRight size={15} />
              </WhatsAppLink>
              <Link className="button button-outline" href="/paket-harga">
                Lihat Paket Harga <ArrowRight size={15} />
              </Link>
            </div>

            <div className="faq-feature-tags">
              <span>
                <Check size={14} /> Minimal Order Mulai 6 Pcs
              </span>
              <span>
                <Check size={14} /> Gratis Konsultasi & Layout
              </span>
              <span>
                <Check size={14} /> Kirim ke Seluruh Indonesia
              </span>
            </div>
          </div>

          {/* KOLOM KANAN: SPOTLIGHT CARD */}
          <div className="faq-hero-right">
            <div className="faq-spotlight-card">
              <div>
                <div className="spotlight-badge-row">
                  <span className="spotlight-tag">RESPON CEPAT</span>
                  <span className="spotlight-badge-secondary">ADMIN KONSULTASI</span>
                </div>
                <div className="spotlight-icon-wrap">
                  <HelpCircle size={32} />
                </div>
                <h3>Punya Pertanyaan Khusus?</h3>
                <p>
                  Belum menemukan jawaban yang kamu cari? Sampaikan detail kebutuhan tim kamu
                  langsung ke WhatsApp kami. Kami bantu dari pemilihan bahan hingga acc desain.
                </p>
              </div>

              <div className="spotlight-footer">
                <div className="spotlight-status">
                  <span className="status-dot" />
                  <span>Konsultasi online via WhatsApp</span>
                </div>
                <WhatsAppLink className="button button-full">
                  Chat WhatsApp Sekarang
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ BROWSER COMPONENT */}
      <section className="section" id="faq-list">
        <FaqBrowser />
      </section>
    </main>
  );
}
