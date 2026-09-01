const fs = require('fs');
const path = require('path');

const src1 = 'C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\dcab672e-349a-455a-8e45-77f1870e84ee\\blue_anime_tee_1788263207972.jpg';
const src2 = 'C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\dcab672e-349a-455a-8e45-77f1870e84ee\\beige_samurai_tee_1788263230130.jpg';
const src3 = 'C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\dcab672e-349a-455a-8e45-77f1870e84ee\\pink_demon_tee_1788263257305.jpg';
const src4 = 'C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\dcab672e-349a-455a-8e45-77f1870e84ee\\purple_anime_tee_1788263279107.jpg';

const destDir = path.join(__dirname, 'public', 'images');

fs.copyFileSync(src1, path.join(destDir, 'blue-anime-tee.jpg'));
fs.copyFileSync(src2, path.join(destDir, 'beige-samurai-tee.jpg'));
fs.copyFileSync(src3, path.join(destDir, 'pink-demon-tee.jpg'));
fs.copyFileSync(src4, path.join(destDir, 'purple-anime-tee.jpg'));

console.log("Images copied successfully!");
