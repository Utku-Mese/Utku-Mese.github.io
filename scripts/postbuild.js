const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "../build/index.html");
const fallbackPath = path.join(__dirname, "../build/404.html");

// GitHub Pages serves 404.html for unknown paths and keeps the original URL,
// so client-side routes such as /about keep working after a refresh.
fs.copyFileSync(indexPath, fallbackPath);
