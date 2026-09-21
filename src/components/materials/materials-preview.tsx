import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { materials, collars } from "@/data/materials";

export function MaterialsPreview() {
  const collections = [
    {
      title: "Jenis kain",
      subtitle: "21 pilihan tekstur",
      anchor: "jenis-kain",
      items: [materials[0], materials[4], materials[12]],
    },
    {
      title: "Model kerah",
      subtitle: "19 pilihan bentuk",
      anchor: "model-kerah",
      items: [collars[0], collars[11], collars[17]],
    },
  ];
  return (
    <section className="section container materials-preview">
      <div className="section-heading">
        <div>
          <span className="eyebrow">DETAIL YANG BIKIN BEDA</span>
          <h2>
            Pilih bahannya.
            <br />
            <span className="muted">Tentukan kerahnya.</span>
          </h2>
        </div>
        <Link href="/bahan-kerah" className="text-link">
          Lihat semua bahan & kerah <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="materials-preview-groups">
        {collections.map((group) => (
          <div className="materials-preview-group" key={group.anchor}>
            <div className="preview-group-title">
              <h3>{group.title}</h3>
              <span>{group.subtitle}</span>
            </div>
            <div className="preview-option-grid">
              {group.items.map((item) => (
                <Link
                  className="preview-option"
                  key={item.id}
                  href={`/bahan-kerah#${group.anchor}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={360}
                    height={360}
                  />
                  <strong>{item.name}</strong>
                  <span>{item.priceLabel}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="materials-price-note">
        Label mengikuti referensi pilihan bahan/kerah, bukan harga jersey
        lengkap. Harga akhir dikonfirmasi saat konsultasi.
      </p>
    </section>
  );
}
