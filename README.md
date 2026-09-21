# BP Sport

## Bahan & Kerah

Halaman `/bahan-kerah/` berisi 21 pilihan kain dan 19 model kerah. Kartu membuka pembesaran gambar; Escape atau tombol tutup mengembalikan fokus ke kartu. Cuplikan tersedia setelah layanan custom di beranda, dengan tautan tambahan dari menu dan detail jersey.

- Data: `src/data/materials.ts`, bertipe `MaterialOption` dan `CollarOption`.
- Poster asli: `public/images/bahan-kerah/originals/` (disalin dari Downloads; sumber tidak dihapus).
- Gambar WebP: `public/images/bahan-kerah/kain/` dan `public/images/bahan-kerah/kerah/`.
- Manifest nama, harga, urutan, dan koordinat potong: `scripts/prepare-material-assets.mjs`. Ubah manifest lalu jalankan `node scripts/prepare-material-assets.mjs` untuk menghasilkan ulang aset dan data dari poster yang sudah ada di proyek. `sharp` menjadi dependensi pengembangan untuk pemrosesan ini.
- Gambar hanya dipotong dan dikompresi, tanpa menggambar ulang kain/kerah. Bagian pita harga poster yang memasuki sudut potongan kerah dikecualikan tanpa mengubah bentuk kerah.
- Label FREE, K/STEL, dan +K mengikuti poster; bukan harga jersey lengkap. Nomor WhatsApp dalam poster tidak digunakan untuk mengubah konfigurasi toko.

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
- Nama BP Sport pada logo, metadata, copy halaman, dan template pesan di `src/lib/whatsapp.ts` perlu disesuaikan juga jika mengganti merek.
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

## Identitas BP Sport

Logo resmi PNG diambil dari folder klien LOGO BP SPORT 2026. Logo horizontal dipakai pada header/footer, ikon pada favicon. Tema antarmuka emerald/teal mengikuti referensi kain 3.jpg dengan logo putih; warna ilustrasi produk tetap dipertahankan. Jersey merupakan layanan utama, sedangkan kaos desain custom ditawarkan melalui konsultasi. Katalog dan ulasan tetap berupa contoh.

## Paket harga

Halaman /paket-harga menampilkan paket printing dan setelan sablon. Ubah harga, syarat jumlah pesanan, dan deskripsi melalui src/data/pricing.ts lalu build ulang. Ilustrasi WebP dan poster sumber tersimpan di public/images/paket-harga/. Tombol konsultasi menggunakan konfigurasi WhatsApp toko yang sama.


## jQuery dasar untuk tugas

FAQ pemesanan di beranda (setelah Cara Pesan) menggunakan jQuery pada `src/components/home/ordering-faq.tsx`: `.on()` menangani klik, `.find()`/`.closest()` memilih elemen, `.attr()` memperbarui status aksesibilitas, `.toggleClass()` menandai pertanyaan aktif, dan `.slideToggle()` membuka/menutup jawaban. `.stop()` mencegah antrean animasi saat diklik cepat dan `.off()` membersihkan event saat komponen dilepas. React merender struktur awal, sedangkan jQuery mengelola interaksi FAQ melalui `useEffect` dan selector lokal. Tombol mendukung Enter/Spasi; animasi dinonaktifkan jika pengguna memilih reduced motion.

## Pratinjau tautan WhatsApp

Metadata Open Graph dan Twitter menggunakan nama BP Sport, deskripsi layanan, serta gambar identitas emerald. Isi environment variable NEXT_PUBLIC_SITE_URL dengan URL Production publik (termasuk https://) sebelum build. Pada Vercel, jika variabel tersebut kosong, metadata menggunakan VERCEL_PROJECT_PRODUCTION_URL; build lokal memakai http://localhost:3000.

Bagikan domain Production dari Settings > Domains, bukan URL deployment acak yang dilindungi. Jika bot menerima halaman Protected Deployment, metadata website tidak dapat dibaca. Perubahan metadata perlu di-deploy ulang; pratinjau lama dapat tetap tersimpan dalam cache aplikasi pesan.
