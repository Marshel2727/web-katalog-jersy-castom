import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { JerseyDesign } from "@/types";
export function DesignCard({ design }: { design: JerseyDesign }) {
  return (
    <Link className="design-card group" href={`/katalog/${design.slug}/`}>
      <div
        className="card-image"
        style={{ "--accent": design.accent } as React.CSSProperties}
      >
        <span className="card-tag">
          {design.popular
            ? "FAVORIT PILIHAN"
            : design.previousOrder
              ? "REFERENSI PESANAN"
              : "CUSTOM SERIES"}
        </span>
        <Image
          src={design.images[0]}
          alt={`Ilustrasi jersey ${design.name} tampak depan`}
          width={520}
          height={580}
        />
        <span className="card-arrow">
          <ArrowUpRight size={21} />
        </span>
        <span className="image-note">ILUSTRASI DESAIN</span>
      </div>
      <div className="card-meta">
        <span>{design.category}</span>
        <span>{design.code}</span>
      </div>
      <h3>{design.name}</h3>
      <div className="card-bottom">
        <span>{design.color}</span>
        <span className="color-dot" style={{ background: design.accent }} />
      </div>
      <p className="card-price">
        Diskusikan harga <ArrowUpRight size={13} />
      </p>
    </Link>
  );
}
