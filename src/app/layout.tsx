import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  verification: { google: "ANSYNoLjWtV1srX8JBzorvRiZVmCLhPPSyccutgrM-A" },
  title: {
    default: "BP Sport — Jersey & Kaos Custom",
    template: "%s | BP Sport",
  },
  description:
    "BP Sport melayani jersey sebagai produk utama serta kaos desain custom. Jelajahi katalog jersey dan diskusikan desain, nama, nomor, warna, serta logo melalui WhatsApp.",
  icons: { icon: "/images/bp-sport-icon.png" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "BP Sport",
    title: "BP Sport — Jersey & Kaos Custom",
    description:
      "Desain sesuai identitas tim kamu. Lihat katalog, paket harga, serta pilihan bahan dan kerah. Konsultasikan pesanan langsung melalui WhatsApp.",
    images: [{ url: "/images/bp-sport-emerald.jpg", alt: "Logo BP Sport dengan latar kain emerald" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BP Sport — Jersey & Kaos Custom",
    description: "Jersey dan kaos custom untuk tim, komunitas, dan acara. Pilih desainmu dan konsultasikan melalui WhatsApp.",
    images: ["/images/bp-sport-emerald.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        <a href="#main" className="skip-link">
          Lewati ke konten
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
