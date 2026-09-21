"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="BP Sport beranda"
          onClick={() => setOpen(false)}
        >
          <Image
            className="brand-logo"
            src="/images/bp-sport-logo.png"
            alt="BP Sport"
            width={2296}
            height={394}
            priority
          />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation open" : "navigation"}
          aria-label="Navigasi utama"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          <Link
            className={path === "/" ? "active" : ""}
            href="/"
            onClick={() => setOpen(false)}
          >
            Beranda
          </Link>
          <Link
            className={path.startsWith("/katalog") ? "active" : ""}
            href="/katalog"
            onClick={() => setOpen(false)}
          >
            Katalog
          </Link>
          <Link href="/paket-harga" className={path.startsWith("/paket-harga") ? "active" : ""} onClick={() => setOpen(false)}>Paket Harga</Link>
          <Link
            className={path.startsWith("/bahan-kerah") ? "active" : ""}
            href="/bahan-kerah"
            onClick={() => setOpen(false)}
          >
            Bahan & Kerah
          </Link>
          <Link href="/#cara-pesan" onClick={() => setOpen(false)}>
            Cara Pesan
          </Link>
<WhatsAppLink className="nav-cta">Konsultasi WhatsApp</WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}
