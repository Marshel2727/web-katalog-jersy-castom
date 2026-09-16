"use client";
import Image from "next/image";
import { useState } from "react";
import type { JerseyDesign } from "@/types";
export function DesignGallery({ design }: { design: JerseyDesign }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="gallery">
      <div className="gallery-main">
        <span className="card-tag">{design.code} / CUSTOM SERIES</span>
        <Image
          src={design.images[index]}
          alt={`Ilustrasi ${design.name} tampak ${index === 0 ? "depan" : "belakang"}`}
          width={650}
          height={720}
          priority
        />
        <span className="image-note">
          ILUSTRASI DESAIN · WARNA DAPAT DISESUAIKAN
        </span>
      </div>
      <div className="gallery-thumbnails">
        {design.images.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            aria-pressed={index === i}
            aria-label={`Lihat tampak ${i === 0 ? "depan" : "belakang"}`}
            className={index === i ? "selected" : ""}
          >
            <Image src={src} alt="" width={70} height={78} />
            <span>{i === 0 ? "Depan" : "Belakang"}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
