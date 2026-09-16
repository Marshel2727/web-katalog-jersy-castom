import test from "node:test";
import assert from "node:assert/strict";
import { buildWhatsAppUrl } from "../src/lib/whatsapp.ts";
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
