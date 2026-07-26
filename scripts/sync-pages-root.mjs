import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { basename, resolve, sep } from 'node:path';

const projectRoot = process.cwd();
const distRoot = resolve(projectRoot, 'dist');

if (!existsSync(resolve(distRoot, 'index.html'))) {
  throw new Error('dist/index.html was not found. Run the Vite build before syncing GitHub Pages files.');
}

const stalePublishedTargets = [
  'main',
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
  'consorcios',
  'contabilidade',
  'credito',
  'seguros',
  'logistica',
  'fretes',
  'saude',
];

for (const targetName of stalePublishedTargets) {
  const target = resolve(projectRoot, targetName);

  if (target.startsWith(`${projectRoot}${sep}`) && existsSync(target)) {
    rmSync(target, { recursive: true, force: true });
  }
}

const publishedAssets = resolve(projectRoot, 'assets');

if (publishedAssets.startsWith(`${projectRoot}${sep}`) && existsSync(publishedAssets)) {
  for (const entry of readdirSync(publishedAssets)) {
    if (/^index-.*\.(css|js|map)$/.test(entry)) {
      rmSync(resolve(publishedAssets, entry), { force: true });
    }
  }
}

for (const entry of readdirSync(distRoot)) {
  const source = resolve(distRoot, entry);
  const target = resolve(projectRoot, basename(entry));

  if (statSync(source).isDirectory()) {
    mkdirSync(target, { recursive: true });
    cpSync(source, target, { recursive: true });
  } else {
    copyFileSync(source, target);
  }
}

writeFileSync(resolve(projectRoot, '.nojekyll'), '');
console.log('Synced dist output to the repository root for branch-based GitHub Pages.');
