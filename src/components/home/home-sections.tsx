import Link from "next/link";
import Image from "next/image";
import { designs } from "@/data/designs";
import { testimonials } from "@/data/site";
import { DesignCard } from "@/components/catalog/design-card";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  PencilRuler,
  Palette,
  Shirt,
  PackageCheck,
  Star,
} from "@/components/ui/icon";
export function Hero() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="status-dot" /> YOUR TEAM. YOUR IDENTITY.
          </div>
          <h1>
            Bukan sekadar
            <br />
            jersey.
            <br />
            <span className="lime">Ini identitas.</span>
          </h1>
          <p>
            Dari ide di kepala, jadi kebanggaan satu tim.
            <br />
            Bikin jersey custom yang sepenuhnya kamu—
            <br className="desktop-break" />
            mulai dari warna, logo, sampai detail terkecil.
          </p>
          <div className="hero-actions">
            <Link href="/katalog" className="button">
              Jelajahi Katalog <ArrowUpRight size={19} />
            </Link>
            <Link href="#custom" className="hero-secondary">
              Punya desain sendiri? <ArrowRight size={17} />
            </Link>
          </div>
          <div className="hero-features">
            <span>
              <Check size={15} /> Desain sesukamu
            </span>
            <span>
              <Check size={15} /> Konsultasi langsung
            </span>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-grid" />
          <div className="art-word">
            YOUR
            <br />
            GAME.
          </div>
          <span className="art-label">JK® — CUSTOM ATHLETIC WEAR</span>
          <Image
            className="hero-jersey"
            src="/images/volt-united.svg"
            alt="Ilustrasi jersey Volt United warna hitam dengan pola diagonal hijau lime"
            width={650}
            height={720}
            priority
          />
          <div className="hero-sticker">
            <span>BUILT FOR</span>
            <strong>
              YOUR
              <br />
              TEAM.
            </strong>
            <ArrowUpRight size={27} />
          </div>
          <div className="art-bottom">
            <span>
              <i className="status-dot" /> VOLT UNITED — 001
            </span>
            <span>CONCEPT DESIGN ↗</span>
          </div>
        </div>
      </section>
      <div className="ticker" aria-label="Layanan custom jersey">
        <div>
          YOUR TEAM, YOUR RULES <span>✳</span> CUSTOM TANPA BATAS <span>✳</span>{" "}
          DARI IDE JADI IDENTITAS <span>✳</span> MADE FOR YOUR GAME{" "}
          <span>✳</span>
        </div>
      </div>
    </>
  );
}
export function FeaturedDesigns() {
  return (
    <section className="section container" id="pilihan">
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 / FIND YOUR INSPIRATION</span>
          <h2>
            Desain pilihan.
            <br />
            <span className="muted">Karakter nggak pasaran.</span>
          </h2>
        </div>
        <div className="heading-side">
          <p>
            Temukan titik awal untuk jersey tim kamu.
            <br />
            Setiap desain bisa dibuat lebih personal.
          </p>
          <Link href="/katalog" className="text-link">
            Lihat semua desain <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <div className="design-grid">
        {designs
          .filter((d) => d.popular)
          .map((d) => (
            <DesignCard key={d.slug} design={d} />
          ))}
      </div>
      <p className="demo-note">
        Koleksi demo · Ilustrasi dan label favorit merupakan contoh konten.
      </p>
    </section>
  );
}
export function CustomSection() {
  return (
    <section className="container" id="custom">
      <div className="custom-section">
        <div className="custom-visual">
          <div className="design-note">
            YOUR IDEA
            <br />
            <span>STARTS HERE.</span>
          </div>
          <Image
            src="/images/midnight-fc-back.svg"
            alt="Ilustrasi sisi belakang jersey dengan nama dan nomor yang dapat disesuaikan"
            width={500}
            height={560}
          />
          <span className="annotation annotation-one">↘ NAMA KAMU</span>
          <span className="annotation annotation-two">WARNA TIM ↗</span>
          <span className="custom-label">DESIGN LAB / JERSEYKITA</span>
        </div>
        <div className="custom-copy">
          <span className="eyebrow">02 / MAKE IT PERSONAL</span>
          <h2>
            Tim kamu unik.
            <br />
            Jerseynya juga
            <br />
            <span className="lime">harus begitu.</span>
          </h2>
          <p>
            Punya sketsa sendiri atau baru sebatas ide? Mulai aja dulu. Kita
            diskusikan sampai ketemu desain yang cocok dengan karakter tim kamu.
          </p>
          <div className="custom-pill-list">
            <span>↗ Warna tim</span>
            <span>↗ Logo & sponsor</span>
            <span>↗ Nama & nomor</span>
            <span>↗ Desain sendiri</span>
          </div>
          <WhatsAppLink />
        </div>
      </div>
    </section>
  );
}
export function PreviousOrders() {
  return (
    <section className="section container">
      <div className="section-heading">
        <div>
          <span className="eyebrow">03 / TEAM STORIES</span>
          <h2>
            Beda tim.
            <br />
            Beda cerita.
          </h2>
        </div>
        <div className="heading-side">
          <p>
            Inspirasi tampilan jersey untuk komunitas,
            <br />
            klub, dan momen kebersamaan tim.
          </p>
          <span className="demo-note">
            Contoh portofolio pesanan — bukan pesanan asli.
          </span>
        </div>
      </div>
      <div className="stories-grid">
        {[designs[1], designs[4]].map((d, i) => (
          <Link
            href={`/katalog/${d.slug}/`}
            className={`story story-${i}`}
            key={d.slug}
          >
            <div className="story-top">
              <span>TEAM COLLECTION / 0{i + 1}</span>
              <ArrowUpRight size={24} />
            </div>
            <div className="story-shirts">
              <Image
                src={d.images[0]}
                alt={`Referensi ${d.name} tampak depan`}
                width={350}
                height={390}
              />
              <Image
                src={d.images[1]}
                alt={`Referensi ${d.name} tampak belakang`}
                width={350}
                height={390}
              />
            </div>
            <div className="story-caption">
              <div>
                <small>{d.category.toUpperCase()} / CONCEPT PROJECT</small>
                <h3>{d.name} Collection</h3>
              </div>
              <span>Lihat desain ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
export function OrderingSteps() {
  const steps = [
    {
      icon: Shirt,
      title: "Pilih referensi",
      text: "Cari inspirasi dari katalog atau siapkan ide desain sendiri.",
    },
    {
      icon: PencilRuler,
      title: "Ngobrol di WhatsApp",
      text: "Ceritakan kebutuhan tim, jumlah jersey, dan detail custom kamu.",
    },
    {
      icon: Palette,
      title: "Sepakati detailnya",
      text: "Konfirmasi desain, bahan, harga, serta estimasi pengerjaan.",
    },
    {
      icon: PackageCheck,
      title: "Waktunya produksi",
      text: "Setelah disepakati, jersey tim kamu masuk proses produksi.",
    },
  ];
  return (
    <section className="process-section" id="cara-pesan">
      <div className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">04 / SIMPLE STEPS, GREAT JERSEYS</span>
            <h2>
              Dari ide ke lapangan.
              <br />
              <span className="muted">Gampang, kok.</span>
            </h2>
          </div>
          <p className="muted">
            Empat langkah menuju
            <br />
            identitas baru tim kamu.
          </p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <article key={s.title}>
              <div className="step-top">
                <s.icon size={27} />
                <span>0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Reviews() {
  return (
    <section className="section container" id="ulasan">
      <div className="section-heading">
        <div>
          <span className="eyebrow">05 / FROM THE TEAM</span>
          <h2>Cerita di balik jersey.</h2>
        </div>
        <span className="demo-badge">ULASAN CONTOH</span>
      </div>
      <div className="reviews-grid">
        {testimonials.map((t) => (
          <article className="review" key={t.name}>
            <div className="stars" aria-label="Contoh rating 5 dari 5">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <blockquote>“{t.quote}”</blockquote>
            <div className="review-person">
              <span className="avatar">{t.initials}</span>
              <div>
                <strong>{t.name}</strong>
                <small>{t.team}</small>
              </div>
            </div>
            {t.isExample && (
              <small className="example-caption">
                Contoh ulasan · bukan testimoni asli
              </small>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
export function ClosingCta() {
  return (
    <section className="container closing-wrap">
      <div className="closing-cta">
        <span className="eyebrow">LET’S CREATE SOMETHING THAT’S YOURS.</span>
        <h2>
          Siap bikin tim kamu
          <br />
          tampil <span>beda?</span>
        </h2>
        <p>Satu ide kecil bisa jadi awal identitas besar tim kamu.</p>
        <WhatsAppLink>Yuk, diskusi jersey kamu</WhatsAppLink>
        <span className="closing-decoration" aria-hidden="true">
          ↗
        </span>
      </div>
    </section>
  );
}
