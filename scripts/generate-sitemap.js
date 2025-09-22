// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";

const BASE_URL = "https://css-loaders-gl.vercel.app";

// Statik sahifalar
const staticUrls = [""];

// JSON fayldan dynamic type’larni olish
const loadersJsonPath = path.resolve("src/assets/loaders.json");
const loaders = JSON.parse(fs.readFileSync(loadersJsonPath, "utf-8"));

const dynamicUrls = loaders.map(loader => `/${loader.id}`);

// Barcha URL’larni birlashtirish
const allUrls = [...staticUrls, ...dynamicUrls];

// XML yaratish
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    url => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <priority>${url === "/" ? 1.0 : 0.8}</priority>
  </url>`
  )
  .join("")}
</urlset>
`;

// dist yoki public ga yozish
fs.writeFileSync("public/sitemap.xml", sitemap);
console.log("✅ Sitemap generated!");
