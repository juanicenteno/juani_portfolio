// Renders cv/cv.html to public/Juan_Ignacio_Centeno_CV.pdf with headless Chromium.
// Usage: node cv/build-pdf.cjs  (needs Playwright; set PLAYWRIGHT_PATH if it isn't installed here)
const path = require("path");
const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + path.join(__dirname, "cv.html"));
  await page.pdf({
    path: path.join(__dirname, "..", "public", "Juan_Ignacio_Centeno_CV.pdf"),
    format: "Letter",
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();
  console.log("CV PDF generated");
})();
