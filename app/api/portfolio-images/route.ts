import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const IMG_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif', '.svg']);

function listImagesInFolder(portfolioDir: string, folderName: string): string[] {
  const dir = path.join(portfolioDir, folderName);
  try {
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return [];
  } catch {
    return [];
  }
  const files = fs.readdirSync(dir);
  return files
    .filter((file) => IMG_EXT.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => `/portfolio/${folderName}/${file}`);
}

export async function GET() {
  const portfolioDir = path.join(process.cwd(), 'public', 'portfolio');
  const result: Record<string, string[]> = {};
  
  try {
    if (fs.existsSync(portfolioDir) && fs.statSync(portfolioDir).isDirectory()) {
      const folders = fs.readdirSync(portfolioDir).filter(f => 
        fs.statSync(path.join(portfolioDir, f)).isDirectory()
      );
      
      for (const folder of folders) {
        result[folder] = listImagesInFolder(portfolioDir, folder);
      }
    }
  } catch (error) {
    console.error('Error reading portfolio directory:', error);
  }
  
  return NextResponse.json(result);
}
