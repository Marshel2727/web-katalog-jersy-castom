"use client";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { designs } from "@/data/designs";
import { filterDesigns } from "@/lib/catalog";
import { DesignCard } from "./design-card";
export function CatalogBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");
  const [collection, setCollection] = useState("Semua desain");
  const results = filterDesigns(designs, query, category, collection);
  return (
    <>
      <div className="catalog-controls">
        <label className="search-field">
          <Search size={20} />
          <span className="sr-only">Cari nama atau kode desain</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama atau kode desain..."
          />
        </label>
        <label className="collection-select">
          <SlidersHorizontal size={18} />
          <span className="sr-only">Koleksi desain</span>
          <select
            value={collection}
            onChange={(e) => setCollection(e.target.value)}
          >
            {["Semua desain", "Populer", "Pesanan sebelumnya"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="filter-row">
        <div className="filter-tabs" aria-label="Kategori olahraga">
          {["Semua", "Sepak bola", "Futsal", "Basket", "Badminton"].map((c) => (
            <button
              key={c}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={category === c ? "selected" : ""}
            >
              {c}
            </button>
          ))}
        </div>
        <span className="results-count" aria-live="polite">
          {results.length} desain tersedia
        </span>
      </div>
      {results.length ? (
        <div className="design-grid">
          {results.map((d) => (
            <DesignCard key={d.slug} design={d} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={32} />
          <h2>Desain belum ditemukan</h2>
          <p>Coba kata kunci lain atau ubah filter kategori kamu.</p>
          <button
            className="button"
            onClick={() => {
              setQuery("");
              setCategory("Semua");
              setCollection("Semua desain");
            }}
          >
            Reset pencarian
          </button>
        </div>
      )}
    </>
  );
}
