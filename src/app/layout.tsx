import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "BP Sport — Jersey & Kaos Custom",
    template: "%s | BP Sport",
  },
  description:
    "BP Sport melayani jersey sebagai produk utama serta kaos desain custom. Jelajahi katalog jersey dan diskusikan desain, nama, nomor, warna, serta logo melalui WhatsApp.",
  icons: { icon: "/images/bp-sport-icon.png" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
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
