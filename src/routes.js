const basePath = normalizeBasePath(import.meta.env.BASE_URL);

function normalizeBasePath(value) {
  if (!value || value === '/') {
    return '';
  }

  try {
    const { pathname } = new URL(value, 'https://example.test');
    const normalized = pathname.replace(/\/+$/, '');
    return normalized === '/' ? '' : normalized;
  } catch {
    const normalized = `/${String(value).replace(/^\/+|\/+$/g, '')}`;
    return normalized === '/' ? '' : normalized;
  }
}

function normalizeRoute(route) {
  const value = route || '/';
  return value.startsWith('/') ? value : `/${value}`;
}

export function routeHref(route) {
  const [path, hash] = String(route).split('#');
  const normalizedPath = normalizeRoute(path);

  return `${basePath}${normalizedPath}${hash === undefined ? '' : `#${hash}`}`;
}

export function assetHref(path) {
  return `${basePath}/${String(path).replace(/^\/+/, '')}`;
}

export function getCurrentRoute() {
  let pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))) {
    pathname = pathname.slice(basePath.length) || '/';
  }

  return pathname.replace(/\/+$/, '') || '/';
}
