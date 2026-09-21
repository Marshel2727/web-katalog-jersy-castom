import type { Metadata } from "next";
import Link from "next/link";
import { printingPackages, screenPrintPackages } from "@/data/pricing";
import { PackageCard } from "@/components/pricing/package-card";

export const metadata: Metadata = { title: "Paket Harga Jersey", description: "Pilihan harga jersey printing dan setelan sablon BP Sport. Bandingkan isi paket, bahan lokal atau import, dan ketentuan pembelian." };
export default function PricingPage() {
  return <main id="main" className="container pricing-page">
    <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Beranda</Link><span>/</span><span>Paket Harga</span></nav>
    <div className="page-heading"><span className="eyebrow">BP SPORT / PILIH PAKETMU</span><h1>Pas untuk tim.<br/><span className="lime">Jelas pilihannya.</span></h1><p>Mulai dari atasan printing hingga setelan lengkap. Pilih paket sesuai kebutuhan, lalu diskusikan desain dan detail pesanan kamu.</p></div>
    <nav className="materials-section-nav" aria-label="Jenis paket"><a href="#printing">Jersey Printing</a><a href="#sablon">Setelan + Sablon</a></nav>
    <section className="pricing-section" id="printing"><div className="section-heading"><div><span className="eyebrow">01 / PRINTING</span><h2>Desain bebas. Identitas penuh.</h2></div><p>Minimal order 6 pcs</p></div><div className="package-grid">{printingPackages.map(item => <PackageCard item={item} key={item.id}/>)}</div></section>
    <section className="pricing-section" id="sablon"><div className="section-heading"><div><span className="eyebrow">02 / SETELAN + SABLON</span><h2>Lokal atau import, pilihan kamu.</h2></div><p>Harga untuk pembelian 12 pcs</p></div><p className="pricing-section-note">Penempatan logo, nama, nomor, dan sponsor dapat disesuaikan. Pilih kelengkapan sablon saat konsultasi.</p><div className="package-grid package-grid-two">{screenPrintPackages.map(item => <PackageCard item={item} key={item.id}/>)}</div></section>
    <aside className="pricing-footnote"><h2>Lengkapi dengan bahan & kerah pilihan.</h2><p>Tambahan pilihan bahan atau kerah tidak otomatis termasuk dalam harga paket. Harga akhir dan detail produksi dikonfirmasi saat konsultasi.</p><Link href="/bahan-kerah" className="text-link">Lihat pilihan bahan & kerah ↗</Link></aside>
  </main>;
}
