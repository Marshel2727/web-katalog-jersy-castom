import type { MetadataRoute } from "next";
import { designs } from "@/data/designs";
import { absoluteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/katalog/", "/paket-harga/", "/bahan-kerah/"];

  return [
    ...paths.map((path) => ({ url: absoluteUrl(path) })),
    ...designs.map((design) => ({
      url: absoluteUrl(`/katalog/${design.slug}/`),
    })),
  ];
}
