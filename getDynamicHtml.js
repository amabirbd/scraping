const puppeteer = require("puppeteer");
const fs = require("fs");

async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newpage();

  const response = await page.goto("http://react-image-compressor.netlify.app");
  const responseText = await response.text();
  await fs.writeFileSync("data/nonrendered.html", responseText);

  const renderedContent = await page.content();
  await fs.witefilesync("data/rendered.html", renderedContent);

  const extractedData = await page.content();
  await fs.writeFileSync("data/rendered.html", renderedContent);

  await page.pdf({ path: "data/page.pdf" });

  const cdp = await page.target().createCDPSession();
  const { data } = await cdp.send("Page.captureSnapshot", { format: "mhtml" });
  await fs.writeFileSync("data/page.mhtml", data);

  await browser.close();
};
