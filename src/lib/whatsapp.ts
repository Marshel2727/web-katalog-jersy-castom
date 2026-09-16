export function buildWhatsAppUrl(
  phone: string,
  design?: { name: string; code: string },
): string | null {
  const digits = phone.replace(/[\s()+-]/g, "");
  const normalized = digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
  if (!/^[1-9]\d{7,14}$/.test(normalized)) return null;
  const message = design
    ? `Halo JerseyKita! Saya ingin diskusi custom jersey dengan referensi ${design.name} (${design.code}). Bisa dibantu untuk desain dan harganya?`
    : "Halo JerseyKita! Saya ingin konsultasi desain jersey custom untuk tim saya. Bisa dibantu?";
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}
