import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const imageDirs = [
  path.join(rootDir, 'src/assets'),
  path.join(rootDir, 'public/lovable-uploads'),
  path.join(rootDir, 'public/share-cards'),
];

const convertToWebP = async (inputPath) => {
  const ext = path.extname(inputPath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return null;

  // Skip if already a webp version exists
  const webpPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  if (fs.existsSync(webpPath)) {
    console.log(`⏭️  Skipping (exists): ${path.basename(webpPath)}`);
    return null;
  }

  try {
    const inputStats = fs.statSync(inputPath);
    const inputSize = inputStats.size;

    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);

    const outputStats = fs.statSync(webpPath);
    const outputSize = outputStats.size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(webpPath)}`);
    console.log(`   ${(inputSize / 1024 / 1024).toFixed(2)}MB → ${(outputSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);

    return { input: inputPath, output: webpPath, inputSize, outputSize };
  } catch (err) {
    console.error(`❌ Error converting ${inputPath}:`, err.message);
    return null;
  }
};

const main = async () => {
  console.log('🖼️  Converting images to WebP...\n');

  let totalInputSize = 0;
  let totalOutputSize = 0;
  let converted = 0;

  for (const dir of imageDirs) {
    if (!fs.existsSync(dir)) {
      console.log(`Directory not found: ${dir}`);
      continue;
    }

    console.log(`\n📁 Processing: ${dir}\n`);
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) continue;

      const result = await convertToWebP(filePath);
      if (result) {
        totalInputSize += result.inputSize;
        totalOutputSize += result.outputSize;
        converted++;
      }
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`📊 Summary:`);
  console.log(`   Files converted: ${converted}`);
  console.log(`   Total original: ${(totalInputSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Total WebP: ${(totalOutputSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Total savings: ${((1 - totalOutputSize / totalInputSize) * 100).toFixed(1)}%`);
  console.log('='.repeat(50));
};

main().catch(console.error);
