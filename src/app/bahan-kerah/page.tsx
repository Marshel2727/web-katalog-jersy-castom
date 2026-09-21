import type { Metadata } from "next";
import Link from "next/link";
import { materials, collars } from "@/data/materials";
import { OptionGallery } from "@/components/materials/option-gallery";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export const metadata: Metadata = {
  title: "Pilihan Bahan & Kerah",
  description:
    "Lihat 21 jenis kain dan 19 model kerah BP Sport. Temukan tekstur dan bentuk pilihan untuk jersey kamu, lalu diskusikan detailnya saat konsultasi.",
};

export default function MaterialsPage() {
  return (
    <main id="main" className="container materials-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Beranda</Link>
        <span>/</span>
        <span>Bahan & Kerah</span>
      </nav>
      <div className="page-heading">
        <span className="eyebrow">BP SPORT / THE FINISHING TOUCH</span>
        <h1>
          Detail pilihan.
          <br />
          <span className="lime">Nyaman jadi kamu.</span>
        </h1>
        <p>
          Kenali tekstur kain dan pilih bentuk kerah untuk jersey kamu. Klik
          gambar untuk melihat lebih dekat sebelum berdiskusi dengan kami.
        </p>
      </div>
      <nav
        className="materials-section-nav"
        aria-label="Bagian bahan dan kerah"
      >
        <a href="#jenis-kain">
          Jenis Kain <span>21</span>
        </a>
        <a href="#model-kerah">
          Model Kerah <span>19</span>
        </a>
      </nav>
      <div className="materials-consultation ordering-guidance"><h2>Belum tahu bahan yang cocok?</h2><p>Kami bantu pilih saat konsultasi. Kamu tidak harus menentukan bahan dan kerah sebelum menghubungi kami.</p><WhatsAppLink>Bantu pilih bahan & kerah</WhatsAppLink></div>
      <p className="materials-price-note">
        FREE, nilai K/STEL, dan +K ditampilkan sesuai referensi pilihan
        bahan/kerah, bukan harga jersey lengkap. Harga akhir dan kesesuaian
        dengan pesanan dikonfirmasi saat konsultasi.
      </p>
      <section id="jenis-kain" className="materials-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / JENIS KAIN</span>
            <h2>Tekstur yang kamu pilih.</h2>
          </div>
          <p className="muted">21 pilihan · Diurutkan sesuai kelompok harga</p>
        </div>
        <OptionGallery items={materials} />
      </section>
      <section id="model-kerah" className="materials-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / MODEL KERAH</span>
            <h2>Karakter di setiap potongan.</h2>
          </div>
          <p className="muted">19 model · Nomor sesuai referensi</p>
        </div>
        <OptionGallery items={collars} />
      </section>
      <section className="materials-consultation">
        <h2>Sudah punya pilihan?</h2>
        <p>
          Sebutkan nama kain dan nomor kerah saat konsultasi. Kami bantu
          diskusikan detailnya untuk jersey atau kaos custom kamu.
        </p>
        <WhatsAppLink />
      </section>
    </main>
  );
}
