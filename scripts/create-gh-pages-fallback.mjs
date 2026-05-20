import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const indexPath = resolve('dist', 'index.html');
const fallbackPath = resolve('dist', '404.html');
const routes = [
  'main',
  'estilo-1',
  'estilo-2',
  'estilo-3',
  'estilo-4',
  'estilo-5',
  'estilo-6',
  'estilo-7',
  'estilo-8',
  'estilo-9',
  'simples',
  'retro',
  'minimalista',
  'suave',
];

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html was not found. Run the Vite build before creating the Pages fallback.');
}

copyFileSync(indexPath, fallbackPath);

for (const route of routes) {
  const routeDir = resolve('dist', route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexPath, resolve(routeDir, 'index.html'));
}

console.log('Created GitHub Pages fallback files in dist.');
