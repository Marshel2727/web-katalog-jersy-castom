"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="JerseyKita beranda"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            J<span>↗</span>
          </span>
          Jersey<span className="lime">Kita.</span>
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
            Katalog Jersey
          </Link>
          <Link href="/#cara-pesan" onClick={() => setOpen(false)}>
            Cara Pesan
          </Link>
          <Link href="/#ulasan" onClick={() => setOpen(false)}>
            Ulasan
          </Link>
          <Link
            className="nav-cta"
            href="/#custom"
            onClick={() => setOpen(false)}
          >
            Bikin Jersey Kamu <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
