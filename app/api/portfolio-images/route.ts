import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const FOLDERS = ['projeto 1', 'projeto 2', 'projeto 3'];
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
  for (const folder of FOLDERS) {
    result[folder] = listImagesInFolder(portfolioDir, folder);
  }
  return NextResponse.json(result);
}
