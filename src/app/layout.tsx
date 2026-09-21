import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

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
