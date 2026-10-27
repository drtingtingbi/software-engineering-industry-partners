import { spawn } from "node:child_process";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

const origin = "http://localhost:3000";
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
      if (response.ok) return;
    } catch {
      // The local preview is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error("The site did not start in time.");
}

function cleanHtml(html, prefix) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<link[^>]+rel="modulepreload"[^>]*>/g, "")
    .replace('href="/app/globals.css"', `href="${prefix}style.css"`)
    .replaceAll('href="/favicon.svg"', `href="${prefix}favicon.svg"`);
}

try {
  await waitForSite();
  const [homeResponse, projectsResponse] = await Promise.all([
    fetch(`${origin}/`),
    fetch(`${origin}/projects`),
  ]);
  if (!homeResponse.ok || !projectsResponse.ok) {
    throw new Error("One or more site routes could not be exported.");
  }
  const [homeHtml, projectsHtml] = await Promise.all([
    homeResponse.text(),
    projectsResponse.text(),
  ]);
  const css = (await readFile(new URL("../app/globals.css", import.meta.url), "utf8"))
    .replace('@import "tailwindcss";', "");

  await mkdir(output, { recursive: true });
  await mkdir(new URL("projects/", output), { recursive: true });
  await Promise.all([
    writeFile(new URL("index.html", output), cleanHtml(homeHtml, "./")),
    writeFile(new URL("projects/index.html", output), cleanHtml(projectsHtml, "../")),
    writeFile(new URL("style.css", output), css),
    writeFile(new URL(".nojekyll", output), ""),
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
