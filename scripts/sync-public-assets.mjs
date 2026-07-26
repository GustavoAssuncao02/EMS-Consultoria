import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = process.cwd();

const assetFolders = [
  ['assets/banners', 'public/assets/banners'],
  ['assets/logos', 'public/assets/logos'],
];

for (const [sourceFolder, targetFolder] of assetFolders) {
  const source = resolve(projectRoot, sourceFolder);
  const target = resolve(projectRoot, targetFolder);

  if (!existsSync(source)) {
    continue;
  }

  mkdirSync(target, { recursive: true });
  cpSync(source, target, { recursive: true, force: true });
}

console.log('Synced editable assets to public/assets.');
