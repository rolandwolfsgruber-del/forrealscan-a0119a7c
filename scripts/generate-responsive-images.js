import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Sizes for responsive images (widths in pixels)
const SIZES = [400, 800, 1200];

const imagesToProcess = [
  // LCP hero image - most important for mobile
  {
    input: path.join(rootDir, 'public/lovable-uploads/ed0e1459-52f3-4131-9d2f-c4342e615982.webp'),
    outputDir: path.join(rootDir, 'public/lovable-uploads'),
    baseName: 'hero-logo'
  },
  // Share cards - visible on homepage
  {
    input: path.join(rootDir, 'public/share-cards/skater-1-percent.webp'),
    outputDir: path.join(rootDir, 'public/share-cards'),
    baseName: 'skater-1-percent'
  },
  {
    input: path.join(rootDir, 'public/share-cards/car-40-percent.webp'),
    outputDir: path.join(rootDir, 'public/share-cards'),
    baseName: 'car-40-percent'
  },
  {
    input: path.join(rootDir, 'public/share-cards/fashion-99-percent.webp'),
    outputDir: path.join(rootDir, 'public/share-cards'),
    baseName: 'fashion-99-percent'
  },
];

const generateResponsiveImages = async () => {
  console.log('📱 Generating responsive images...\n');

  for (const item of imagesToProcess) {
    if (!fs.existsSync(item.input)) {
      console.log(`⏭️  Skipping (not found): ${item.input}`);
      continue;
    }

    console.log(`\n📸 Processing: ${path.basename(item.input)}`);

    for (const width of SIZES) {
      const outputPath = path.join(item.outputDir, `${item.baseName}-${width}w.webp`);

      if (fs.existsSync(outputPath)) {
        console.log(`   ⏭️  ${width}w exists, skipping`);
        continue;
      }

      try {
        const metadata = await sharp(item.input).metadata();

        // Only resize if original is larger
        if (metadata.width && metadata.width > width) {
          await sharp(item.input)
            .resize(width, null, { withoutEnlargement: true })
            .webp({ quality: 85 })
            .toFile(outputPath);

          const stats = fs.statSync(outputPath);
          console.log(`   ✅ ${width}w → ${(stats.size / 1024).toFixed(1)}KB`);
        } else {
          console.log(`   ⏭️  ${width}w skipped (original smaller)`);
        }
      } catch (err) {
        console.error(`   ❌ Error: ${err.message}`);
      }
    }
  }

  console.log('\n✨ Responsive images generated!');
};

generateResponsiveImages().catch(console.error);
