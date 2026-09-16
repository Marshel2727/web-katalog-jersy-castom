import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "JerseyKita — Jersey Custom, Karakter Kamu.",
    template: "%s | JerseyKita",
  },
  description:
    "Temukan inspirasi jersey untuk tim kamu. Jelajahi katalog desain dan diskusikan custom nama, nomor, warna, serta logo melalui WhatsApp.",
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
