import type { Metadata } from "next";
import {
  Hero,
  FeaturedDesigns,
  CustomSection,
  PreviousOrders,
  OrderingSteps,
  Reviews,
  ClosingCta,
} from "@/components/home/home-sections";
import { MaterialsPreview } from "@/components/materials/materials-preview";
import Link from "next/link";
import { OrderingFaq } from "@/components/home/ordering-faq";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <FeaturedDesigns />
      <div className="container pricing-teaser"><div><span className="eyebrow">PAKET JERSEY BP SPORT</span><h2>Sudah punya desain incaran?</h2><p>Lihat harga printing dan setelan sablon beserta isi paketnya.</p></div><Link className="button" href="/paket-harga">Lihat Paket Harga ↗</Link></div>
      <CustomSection />
      <MaterialsPreview />
      <PreviousOrders />
      <OrderingSteps />
      <OrderingFaq />
      <Reviews />
      <ClosingCta />
    </main>
  );
}
