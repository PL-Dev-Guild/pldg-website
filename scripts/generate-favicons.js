import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicons() {
  const svgBuffer = await fs.readFile(join(__dirname, '../public/favicon.svg'));
  
  // Generate regular favicon.png (32x32)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(join(__dirname, '../public/favicon.png'));

  // Generate apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(join(__dirname, '../public/apple-touch-icon.png'));

  // Generate social preview image (1200x630)
  await sharp(svgBuffer)
    .resize(1200, 1200)
    .extend({
      top: 0,
      bottom: 0,
      left: 285,
      right: 285,
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    })
    .png()
    .toFile(join(__dirname, '../public/social-preview.png'));

  console.log('✅ Generated all favicon versions successfully');
}

generateFavicons().catch(console.error); 