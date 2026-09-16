import { siteConfig } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, ArrowUpRight } from "./icon";
export function WhatsAppLink({
  design,
  children = "Konsultasi via WhatsApp",
  className = "",
}: {
  design?: { name: string; code: string };
  children?: React.ReactNode;
  className?: string;
}) {
  const url = buildWhatsAppUrl(siteConfig.whatsapp, design);
  if (!url)
    return (
      <span className={`wa-unavailable ${className}`}>
        <span className="button disabled" aria-disabled="true">
          <MessageCircle size={18} />
          {children}
        </span>
        <small>WhatsApp toko belum tersedia</small>
      </span>
    );
  return (
    <a
      className={`button ${className}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={18} />
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
