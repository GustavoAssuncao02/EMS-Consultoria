import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';

const projectRoot = process.cwd();
const distRoot = resolve(projectRoot, 'dist');

if (!existsSync(resolve(distRoot, 'index.html'))) {
  throw new Error('dist/index.html was not found. Run the Vite build before syncing GitHub Pages files.');
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
