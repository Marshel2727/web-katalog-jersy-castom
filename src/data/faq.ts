export type FaqCategory =
  | "Semua"
  | "Pemesanan"
  | "Desain"
  | "Bahan & Kerah"
  | "Produksi & Kirim";

export type FaqItem = {
  id: string;
  category: "Pemesanan" | "Desain" | "Bahan & Kerah" | "Produksi & Kirim";
  question: string;
  answer: string;
};

export const faqCategories: FaqCategory[] = [
  "Semua",
  "Pemesanan",
  "Desain",
  "Bahan & Kerah",
  "Produksi & Kirim",
];

export const faqItems: FaqItem[] = [
  // 1. Pemesanan
  {
    id: "cara-pesan",
    category: "Pemesanan",
    question: "Bagaimana alur dan cara memesan jersey di BP Sport?",
    answer:
      "Pilih referensi desain dari katalog kami atau siapkan ide/sketsa kamu sendiri. Hubungi kami melalui tombol WhatsApp yang tersedia di website untuk mendiskusikan jumlah pesanan, detail sablon, jenis bahan, dan penempatan nama/nomor pemain. Tim kami akan memberikan penawaran harga akhir dan estimasi pengerjaan sebelum pesanan diproses.",
  },
  {
    id: "minimal-order",
    category: "Pemesanan",
    question: "Berapa minimal pemesanan (minimum order) di BP Sport?",
    answer:
      "Untuk paket jersey full printing sublimasi, minimal order mulai dari 6 pcs. Untuk paket setelan sablon, harga tertera berlaku untuk pemesanan mulai dari 12 pcs. Jika kamu memerlukan pemesanan kaos custom atau jumlah di luar ketentuan tersebut, silakan diskusikan langsung via WhatsApp.",
  },
  {
    id: "sampel-pesanan",
    category: "Pemesanan",
    question: "Apakah bisa memesan 1 pcs atau sampel terlebih dahulu?",
    answer:
      "Untuk pemesanan jersey tim atau komunitas dengan jumlah banyak (di atas 24 pcs), kami dapat membuatkan sample mockup digital secara gratis sebelum produksi massal dimulai. Untuk pembuatan sample fisik satuan, silakan konsultasikan biaya dan ketersediaan slot produksi dengan admin kami.",
  },
  {
    id: "harga-akhir",
    category: "Pemesanan",
    question: "Apakah harga yang tercantum di website sudah merupakan harga akhir?",
    answer:
      "Harga pada halaman Paket Harga adalah acuan standar paket. Harga akhir dapat menyesuaikan dengan jenis kain pilihan (lokal/import), variasi kerah khusus (misalnya kerah polo/kancing), jumlah titik logo sponsor, dan kuantiti pesanan. Seluruh rincian biaya akan disepakati transparan sebelum DP dibayarkan.",
  },

  // 2. Desain & Kustomisasi
  {
    id: "desain-sendiri",
    category: "Desain",
    question: "Apakah harus sudah punya file desain sendiri sebelum memesan?",
    answer:
      "Tidak harus! Jika kamu belum memiliki desain, kamu bisa memilih dari 18+ referensi portofolio di katalog kami atau cukup mengirimkan sketsa kasar/referensi foto dari internet. Tim desain BP Sport siap membantu merapikan layout, penempatan logo, sponsor, hingga perpaduan warna tanpa biaya tambahan.",
  },
  {
    id: "format-file",
    category: "Desain",
    question: "Format file apa yang sebaiknya dikirim jika sudah punya logo sendiri?",
    answer:
      "Agar hasil cetak maksimal dan tajam, kami menyarankan format vektor seperti AI, CorelDraw (CDR), PDF, atau SVG. Jika hanya memiliki format gambar raster (PNG atau JPG), pastikan resolusinya cukup tinggi (tidak pecah/buram saat diperbesar).",
  },
  {
    id: "nama-nomor",
    category: "Desain",
    question: "Apakah bebas menambahkan nama dan nomor punggung untuk setiap pemain?",
    answer:
      "Ya, betul! Seluruh paket jersey custom di BP Sport sudah termasuk bebas kustomisasi nama pemain (nameset) dan nomor punggung yang berbeda-beda untuk tiap anggota tim.",
  },
  {
    id: "gradasi-warna",
    category: "Desain",
    question: "Apakah bisa request variasi warna khusus atau gradasi warna rumit?",
    answer:
      "Bisa banget! Dengan teknologi digital printing sublimasi full color, kami bisa mencetak gradasi warna halus, motif abstrak, corak geometris, maupun pola batik/loreng tanpa batasan jumlah warna.",
  },

  // 3. Bahan & Kerah
  {
    category: "Bahan & Kerah",
    id: "pilih-kain",
    question: "Bagaimana cara memilih jenis kain dan model kerah yang sesuai?",
    answer:
      "Kamu bisa membuka halaman 'Bahan & Kerah' di website kami untuk melihat 21 pilihan jenis kain (seperti Dry-Fit Milano, Serena, Brazil, Benzema) dan 19 model kerah. Tim kami juga siap memberikan rekomendasi kain yang paling pas sesuai cabang olahraga kamu (futsal, sepak bola, basket, badminton, atau lari).",
  },
  {
    category: "Bahan & Kerah",
    id: "ketahanan-sublimasi",
    question: "Apakah warna cetak sablon sublimasi awet dan tidak mudah pudar?",
    answer:
      "Sangat awet! Kami menggunakan teknologi cetak sublimasi digital modern di mana tinta menyerap langsung ke dalam serat kain polyester, bukan sekadar menempel di permukaan. Hasilnya tidak akan luntur, tidak pecah saat ditarik, dan sirkulasi udara kain tetap terjaga sejuk.",
  },
  {
    category: "Bahan & Kerah",
    id: "size-chart",
    question: "Bagaimana panduan ukuran (size chart) untuk anggota tim?",
    answer:
      "Kami menyediakan tabel size chart standar (dari ukuran S, M, L, XL, XXL, hingga ukuran anak) dengan toleransi jahitan yang presisi. Admin kami akan mengirimkan tabel detail ukuran panjang dan lebar dada saat proses konsultasi di WhatsApp.",
  },

  // 4. Produksi & Pengiriman
  {
    category: "Produksi & Kirim",
    id: "waktu-produksi",
    question: "Berapa lama estimasi waktu proses pengerjaan pesanan?",
    answer:
      "Waktu pengerjaan standar berkisar antara 7 hingga 14 hari kerja setelah approval final desain dan pembayaran uang muka (DP). Untuk kebutuhan turnamen mendesak (urgent/express order), silakan infokan deadline pertandingan kamu agar kami jadwalkan prioritas produksi.",
  },
  {
    category: "Produksi & Kirim",
    id: "sistem-pembayaran",
    question: "Bagaimana sistem pembayaran di BP Sport?",
    answer:
      "Pembayaran dilakukan secara aman via transfer bank. Sistemnya menggunakan Down Payment (DP) sebesar 50% untuk memulai proses produksi, dan sisa pelunasan 50% dibayarkan setelah pesanan selesai diproduksi dan siap dikirim.",
  },
  {
    category: "Produksi & Kirim",
    id: "kirim-seluruh-indonesia",
    question: "Apakah BP Sport melayani pengiriman ke seluruh Indonesia?",
    answer:
      "Ya, kami melayani pengiriman ke seluruh kota dan kabupaten di Indonesia menggunakan berbagai pilihan ekspedisi terpercaya (JNE, J&T, SiCepat, Lion Parcel, Cargo, dll.). Resi pengiriman akan langsung diinfokan begitu paket diserahkan ke pihak ekspedisi.",
  },
];
