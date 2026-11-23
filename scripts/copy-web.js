const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'www');
const files = ['index.html', 'manifest.webmanifest', 'icon.svg', 'sw.js'];

fs.mkdirSync(output, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}

console.log(`Copied ${files.length} app files to www/`);
