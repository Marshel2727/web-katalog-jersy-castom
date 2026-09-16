import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site";
export function Footer() {
  const wa = buildWhatsAppUrl(siteConfig.whatsapp);
  return (
    <>
      <footer className="footer">
        <div className="container footer-main">
          <div>
            <Link className="brand" href="/">
              Jersey<span className="lime">Kita.</span>
            </Link>
            <p>
              Identitas tim kamu, dalam setiap jahitan.
              <br />
              Jersey custom untuk cerita yang berbeda.
            </p>
          </div>
          <div className="footer-links">
            <Link href="/katalog">
              Jelajahi katalog <ArrowUpRight size={15} />
            </Link>
            <Link href="/#cara-pesan">
              Cara pemesanan <ArrowUpRight size={15} />
            </Link>
            <Link href="/#ulasan">
              Cerita pelanggan <ArrowUpRight size={15} />
            </Link>
          </div>
          <div>
            <span className="eyebrow">PUNYA IDE DESAIN?</span>
            <Link href="/#custom" className="footer-contact">
              Yuk, kita wujudkan. ↗
            </Link>
            <small>Desain bebas. Karakter tetap kamu.</small>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} JerseyKita.</span>
          <span>Website demo · Desain & ulasan merupakan contoh.</span>
        </div>
      </footer>
      {wa ? (
        <a
          className="floating-wa"
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konsultasi WhatsApp"
        >
          <MessageCircle size={22} />
        </a>
      ) : (
        <div
          className="floating-wa unavailable"
          role="note"
          aria-label="WhatsApp toko belum tersedia"
        >
          <MessageCircle size={20} />
          <span>WA belum tersedia</span>
        </div>
      )}
    </>
  );
}
