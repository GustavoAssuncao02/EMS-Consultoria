import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const indexPath = resolve('dist', 'index.html');
const fallbackPath = resolve('dist', '404.html');
const routes = [
  'estilo-1',
  'transporte-rodoviario',
  'carga-fracionada',
  'carga-lotacao',
  'logistica-integrada',
  'armazenagem-distribuicao',
  'seguranca-rastreamento',
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
