import { spawn } from "node:child_process";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

const origin = "http://localhost:3000";
const publicUrl = "https://drtingtingbi.github.io/swen90009-industry-partners";
const output = new URL("../docs/", import.meta.url);

const server = spawn("npm", ["run", "dev"], {
  cwd: new URL("../", import.meta.url),
  detached: process.platform !== "win32",
  stdio: "ignore",
});

async function waitForSite() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(origin);
      if (response.ok) return response.text();
    } catch {
      // The local preview is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error("The site did not start in time.");
}

try {
  let html = await waitForSite();
  const css = (await readFile(new URL("../app/globals.css", import.meta.url), "utf8"))
    .replace('@import "tailwindcss";', "");

  html = html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<link[^>]+rel="modulepreload"[^>]*>/g, "")
    .replace('href="/app/globals.css"', 'href="./style.css"')
    .replaceAll('href="/favicon.svg"', 'href="./favicon.svg"')
    .replaceAll("http://127.0.0.1:3000/og.png", `${publicUrl}/og.png`)
    .replaceAll("http://localhost:3000/og.png", `${publicUrl}/og.png`);

  await mkdir(output, { recursive: true });
  await Promise.all([
    writeFile(new URL("index.html", output), html),
    writeFile(new URL("style.css", output), css),
    writeFile(new URL(".nojekyll", output), ""),
    copyFile(new URL("../public/og.png", import.meta.url), new URL("og.png", output)),
    copyFile(new URL("../public/favicon.svg", import.meta.url), new URL("favicon.svg", output)),
  ]);
} finally {
  if (server.pid) {
    try {
      process.kill(-server.pid, "SIGTERM");
    } catch {
      server.kill("SIGTERM");
    }
  }
}
