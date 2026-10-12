const fs = require("fs");
const path = require("path");

const source = path.join(
  __dirname,
  "../node_modules/pdfjs-dist/build/pdf.worker.min.js"
);
const destination = path.join(__dirname, "../public/pdf.worker.min.js");

if (!fs.existsSync(source)) {
  console.error("pdf.js worker was not found. Run npm install and try again.");
  process.exit(1);
}

fs.copyFileSync(source, destination);
