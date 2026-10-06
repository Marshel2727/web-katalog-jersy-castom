"use client";

import { useState, useMemo } from "react";
import { faqItems, faqCategories, type FaqCategory } from "@/data/faq";
import { Search, ChevronDown, MessageCircle, ArrowUpRight, HelpCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function FaqBrowser() {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory>("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "cara-pesan": true, // Buka pertanyaan pertama secara default
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredItems = useMemo(() => {
    return faqItems.filter((item) => {
      const matchCategory =
        selectedCategory === "Semua" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="faq-browser-wrap">
      {/* FILTER & SEARCH CONTROLS */}
      <div className="faq-controls">
        <div className="faq-search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="faq-search-input"
            placeholder="Cari pertanyaan (misal: bahan, minimal order, estimasi waktu)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="faq-clear-btn"
              onClick={() => setSearchQuery("")}
              aria-label="Bersihkan pencarian"
            >
              ✕
            </button>
          )}
        </div>

        <div className="faq-category-pills" role="tablist">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`faq-pill ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* RESULT COUNT */}
      <div className="faq-result-meta">
        <span>
          Menampilkan <strong>{filteredItems.length}</strong> pertanyaan{" "}
          {selectedCategory !== "Semua" && `kategori ${selectedCategory}`}
          {searchQuery && ` untuk "${searchQuery}"`}
        </span>
      </div>

      {/* ACCORDION LIST */}
      <div className="faq-accordion-list">
        {filteredItems.length === 0 ? (
          <div className="faq-empty-state">
            <HelpCircle size={42} className="empty-icon" />
            <h3>Pertanyaan tidak ditemukan</h3>
            <p>
              Coba gunakan kata kunci lain, atau tanyakan langsung ke tim BP Sport
              melalui WhatsApp.
            </p>
            <WhatsAppLink className="button">Tanya via WhatsApp</WhatsAppLink>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isOpen = Boolean(openItems[item.id]);
            return (
              <article
                className={`faq-accordion-card ${isOpen ? "is-open" : ""}`}
                key={item.id}
              >
                <button
                  type="button"
                  className="faq-accordion-btn"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="faq-btn-left">
                    <span className="faq-category-tag">{item.category}</span>
                    <span className="faq-question-text">{item.question}</span>
                  </div>
                  <span className="faq-chevron" aria-hidden="true">
                    <ChevronDown size={20} />
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="faq-accordion-body"
                    id={`faq-answer-${item.id}`}
                    role="region"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>

      {/* HELPFUL FOOTER CTA */}
      <div className="faq-contact-card">
        <div className="faq-contact-info">
          <div className="faq-contact-icon">
            <MessageCircle size={24} />
          </div>
          <div>
            <h3>Masih punya pertanyaan lain seputar pesanan tim?</h3>
            <p>
              Konsultasikan ide desain, request jenis bahan khusus, atau cek antrean
              produksi dengan customer service BP Sport.
            </p>
          </div>
        </div>
        <WhatsAppLink className="button">
          Konsultasi Langsung via WhatsApp <ArrowUpRight size={17} />
        </WhatsAppLink>
      </div>
    </div>
  );
}
