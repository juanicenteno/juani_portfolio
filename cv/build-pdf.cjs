// Renders cv/cv.html and cv/cv-en.html to public/ and public/en/ with headless Chromium.
// Usage: node cv/build-pdf.cjs  (needs Playwright; set PLAYWRIGHT_PATH if it isn't installed here)
const fs = require("fs");
const path = require("path");
const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");

const builds = [
  { src: "cv.html", out: path.join("public", "Juan_Ignacio_Centeno_CV.pdf") },
  { src: "cv-en.html", out: path.join("public", "en", "Juan_Ignacio_Centeno_CV.pdf") },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const { src, out } of builds) {
    const target = path.join(__dirname, "..", out);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    await page.goto("file://" + path.join(__dirname, src));
    await page.pdf({
      path: target,
      format: "Letter",
      printBackground: true,
      preferCSSPageSize: true,
    });
    console.log("CV PDF generated: " + out);
  }
  await browser.close();
})();
