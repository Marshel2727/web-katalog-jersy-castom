import test from "node:test";
import assert from "node:assert/strict";
import { buildWhatsAppUrl } from "../src/lib/whatsapp.ts";
import { printingPackages, screenPrintPackages } from "../src/data/pricing.ts";
test("package consultation retains package name and handles missing phone", () => {
  const packages = [...printingPackages, ...screenPrintPackages];
  const messages = packages.map((item) => {
    const url = new URL(buildWhatsAppUrl("6281234567890", undefined, item)!);
    const message = url.searchParams.get("text")!;
    assert.ok(message.includes(item.name));
    assert.ok(message.includes(item.description));
    assert.ok(message.includes(item.condition));
    for (const option of item.options) {
      assert.ok(message.includes(`Rp${option.price.toLocaleString("id-ID")}/${option.unit}`));
    }
    return message;
  });
  assert.equal(new Set(messages).size, packages.length);
  assert.equal(buildWhatsAppUrl("", undefined, printingPackages[0]), null);
});
test("blank and malformed numbers never create a link", () => {
  for (const number of ["", " ", "abc", "123", "+62<script>12345678"])
    assert.equal(buildWhatsAppUrl(number), null);
});
test("Indonesian local number normalizes and design message round trips", () => {
  const url = new URL(
    buildWhatsAppUrl("0812-3456-7890", {
      name: "Volt & Blue",
      code: "JK-001",
    })!,
  );
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, "/6281234567890");
  assert.ok(url.searchParams.get("text")?.includes("Volt & Blue (JK-001)"));
});
test("international formatting and general consultation are supported", () => {
  const url = new URL(buildWhatsAppUrl("+62 812 3456 7890")!);
  assert.equal(url.pathname, "/6281234567890");
  assert.ok(url.searchParams.get("text")?.includes("konsultasi"));
});
