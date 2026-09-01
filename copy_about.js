const fs = require('fs');
const path = require('path');

const src = `C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\4f8b1d65-1568-4980-9f11-e52fb8d831d2\\streetwear_about_banner_1788250370705.jpg`;
const destDir = path.join(__dirname, 'public', 'images');
const dest = path.join(destDir, 'about-banner.jpg');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

try {
  fs.copyFileSync(src, dest);
  console.log('Copied about banner image successfully!');
} catch (e) {
  console.error('Error copying:', e.message);
}
