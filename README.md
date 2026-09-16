# JerseyKita

Website katalog jersey custom statis: Next.js App Router, TypeScript/TSX, Tailwind CSS 4, dan Lucide. Seluruh ilustrasi disimpan lokal; tidak ada database atau layanan backend.

## Jalankan (PowerShell)

```powershell
npm.cmd ci --cache .npm-cache
npm.cmd run dev
```

Buka http://localhost:3000. Node.js 22.18+ atau Node.js 24 direkomendasikan untuk menjalankan pengujian TypeScript bawaan Node.

## Struktur

```text
src/
  app/                    # Route, layout, metadata, CSS, dan 404
    katalog/[slug]/        # Detail yang dihasilkan saat build
  components/
    layout/               # Header dan footer
    home/                 # Bagian beranda
    catalog/              # Kartu, filter, dan galeri
    ui/                   # Komponen bersama dan WhatsApp
  data/                   # Konfigurasi toko, desain, ulasan
  lib/                    # Filter katalog dan pembuat URL WhatsApp
  types/                  # Tipe konten
public/images/            # Ilustrasi lokal depan dan belakang
scripts/                  # Generator ilustrasi SVG
tests/                    # Pengujian perilaku katalog dan WhatsApp
```

## Ganti konten

- `src/data/site.ts`: nama/nomor WhatsApp serta ulasan. Isi `whatsapp` dengan nomor toko, misalnya format `628...`. Nilai awal kosong sehingga website tidak menghubungi nomor acak. Saat terisi, tombol dan tautan mengambang otomatis aktif.
- Nama JerseyKita pada logo, metadata, copy halaman, dan template pesan di `src/lib/whatsapp.ts` perlu disesuaikan juga jika mengganti merek.
- `src/data/designs.ts`: desain, slug unik, kode, kategori, deskripsi, warna, status populer/pesanan sebelumnya, dan gambar.
- Letakkan gambar asli di `public/images/`, lalu ganti daftar `images` setiap desain. Galeri saat ini menampilkan dua sudut: depan dan belakang. Gunakan tepat dua gambar sesuai urutan tersebut.
- Semua data awal adalah contoh. Ganti ilustrasi portofolio dan testimoni dengan konten asli berizin sebelum menghapus label contoh. Tidak ada klaim transaksi atau rating pelanggan nyata pada demo.
- Nominal harga, jumlah minimum, bahan, dan waktu produksi dikonfirmasi melalui konsultasi; website tidak menetapkan angka fiktif.

## Validasi dan build statis

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

Build menghasilkan `out/`. Preview melayani hasil ekspor di http://localhost:3000. Hentikan server dev sebelum preview jika menggunakan port yang sama. Hosting harus melayani folder route/index.html dan memakai `404.html` untuk URL tidak dikenal; jangan gunakan fallback SPA ke beranda. Seluruh route katalog dihasilkan oleh `generateStaticParams`. Gambar memakai `unoptimized` sehingga tidak memerlukan server optimasi Next.js. Gunakan `preview`, bukan `next start`, untuk hasil static export.

Setelah mengubah data, jalankan build ulang. Tidak ada dashboard admin, checkout, pembayaran, pengiriman ulasan, atau editor jersey interaktif. Konsultasi desain dilakukan lewat WhatsApp. Publikasi hosting belum termasuk.

Untuk menghasilkan ulang ilustrasi demo: `node scripts/generate-assets.mjs` (menimpa SVG contoh).
