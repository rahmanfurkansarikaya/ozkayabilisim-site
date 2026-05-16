import sharp from 'sharp';
import fs from 'fs';

const dir = './public/images';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.match(/\.(png|jpe?g)$/) && file !== 'logo.png' && !file.includes('favicon')) {
    const name = file.replace(/\.[^.]+$/, '');
    sharp(`${dir}/${file}`)
      .webp({ quality: 80 })
      .toFile(`${dir}/${name}.webp`)
      .then(() => console.log(`Converted ${file} to ${name}.webp`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
}
