import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const projectsDir = path.resolve('public/projects');

function findPngFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findPngFiles(filePath));
    } else if (file.toLowerCase().endsWith('.png')) {
      results.push(filePath);
    }
  }
  return results;
}

async function convertAllImages() {
  console.log('🚀 เริ่มต้นการแปลงรูปภาพเป็น WebP ด้วย sharp...');
  
  if (!fs.existsSync(projectsDir)) {
    console.error(`❌ ไม่พบโฟลเดอร์: ${projectsDir}`);
    return;
  }

  const pngFiles = findPngFiles(projectsDir);
  console.log(`📁 พบไฟล์ PNG ทั้งหมด ${pngFiles.length} ไฟล์\n`);

  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const pngPath of pngFiles) {
    const webpPath = pngPath.replace(/\.png$/i, '.webp');
    const originalStats = fs.statSync(pngPath);
    const originalSizeKb = (originalStats.size / 1024).toFixed(1);
    totalOriginalSize += originalStats.size;

    await sharp(pngPath)
      .webp({ quality: 82, effort: 6 })
      .toFile(webpPath);

    const newStats = fs.statSync(webpPath);
    const newSizeKb = (newStats.size / 1024).toFixed(1);
    totalNewSize += newStats.size;

    const savedPercent = (((originalStats.size - newStats.size) / originalStats.size) * 100).toFixed(1);
    const relativePath = path.relative(process.cwd(), pngPath);
    const relativeWebp = path.relative(process.cwd(), webpPath);

    console.log(`✨ [${savedPercent}% saved] ${relativePath} (${originalSizeKb} KB) ➔ ${relativeWebp} (${newSizeKb} KB)`);
  }

  const totalOrigMb = (totalOriginalSize / (1024 * 1024)).toFixed(2);
  const totalNewMb = (totalNewSize / (1024 * 1024)).toFixed(2);
  const totalSavedPercent = (((totalOriginalSize - totalNewSize) / totalOriginalSize) * 100).toFixed(1);

  console.log('\n==================================================');
  console.log(`🎉 แปลงไฟล์ภาพเสร็จสมบูรณ์ 100%!`);
  console.log(`📊 ขนาดไฟล์เดิมทั้งหมด: ${totalOrigMb} MB`);
  console.log(`📉 ขนาดไฟล์ใหม่ทั้งหมด (WebP): ${totalNewMb} MB`);
  console.log(`⚡ ประหยัดพื้นที่และลดเวลาโหลดลงได้ถึง: ${totalSavedPercent}%`);
  console.log('==================================================\n');
}

convertAllImages().catch(err => {
  console.error('❌ เกิดข้อผิดพลาดในการแปลงไฟล์:', err);
  process.exit(1);
});
