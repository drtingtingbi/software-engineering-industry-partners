import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the industry partnership call", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Call for/);
  assert.match(html, /industry partners/);
  assert.match(html, /SWEN90009/);
  assert.match(html, /SWEN90014/);
  assert.match(html, /There is no charge/);
  assert.match(html, /tingting\.bi@unimelb\.edu\.au/);
  assert.match(html, /Does the project need to involve AI/);
  assert.doesNotMatch(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("server-renders the previous project showcase without private details", async () => {
  const response = await render("/projects");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Previous student/);
  assert.match(html, /OppSpot Snap/);
  assert.match(html, /Yoir/);
  assert.match(html, /Ready to Learn Scale/);
  assert.match(html, /Digital Twin Data Ingestion/);
  assert.match(html, /Partnership is free of charge/);
  assert.match(html, /private repositories/);
  assert.doesNotMatch(html, /github\.com\/(?:SWEN90014-2025-SM2|swen90014-2026-sm2)/i);
  assert.doesNotMatch(html, /@student\.unimelb\.edu\.au/i);
  assert.doesNotMatch(html, /password|postgres(?:ql)?:\/\//i);
});
