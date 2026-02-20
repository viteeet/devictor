const fs = require('fs');
const path = require('path');

const PORTFOLIO_DIR = path.join(__dirname, '..', 'public', 'portfolio');
const OUT_FILE = path.join(__dirname, '..', 'lib', 'portfolio-images.json');
const FOLDERS = ['projeto 1', 'projeto 2', 'projeto 3'];
const IMG_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif', '.svg']);

function listImagesInFolder(folderName) {
  const dir = path.join(PORTFOLIO_DIR, folderName);
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
    return [];
  }
  const files = fs.readdirSync(dir);
  const images = files
    .filter((file) => IMG_EXT.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => `/portfolio/${folderName}/${file}`);
  return images;
}

const result = {};
for (const folder of FOLDERS) {
  result[folder] = listImagesInFolder(folder);
}

const libDir = path.dirname(OUT_FILE);
if (!fs.existsSync(libDir)) {
  fs.mkdirSync(libDir, { recursive: true });
}
fs.writeFileSync(OUT_FILE, JSON.stringify(result, null, 2), 'utf8');
console.log('Portfolio images list updated:', OUT_FILE);
