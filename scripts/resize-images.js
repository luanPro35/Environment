import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directory = 'src/assets/quang';
const outputDir = 'src/assets/quang_optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(directory).forEach(file => {
  const filePath = path.join(directory, file);
  const ext = path.extname(file).toLowerCase();

  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    const outputPath = path.join(outputDir, file);

    console.log(`Optimizing ${file}...`);

    sharp(filePath)
      .resize(1000) // Resize to 1000px wide
      .jpeg({ quality: 80 }) // 80% quality
      .toFile(outputPath)
      .then(() => {
        console.log(`Done: ${file}`);
        // Overwrite original file
        fs.renameSync(outputPath, filePath);
      })
      .catch(err => {
        console.error(`Error with ${file}:`, err);
      });
  }
});
