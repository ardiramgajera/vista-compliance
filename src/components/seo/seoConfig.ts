const DEFAULT_SITE_URL = 'https://compliancevista.com';

export function getSiteUrl() {
  return (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
}

export function isProductionEnvironment() {
  const environmentName = (
    import.meta.env.VITE_APP_ENV ||
    import.meta.env.VITE_VERCEL_ENV ||
    import.meta.env.MODE ||
    ''
  ).toLowerCase();

  return environmentName === 'production';
}

export function normalizeRoutePath(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  const normalizedPath = pathname.replace(/\/+$/, '');
  return normalizedPath || '/';
}

export function buildCanonicalUrl(pathname: string) {
  const siteUrl = getSiteUrl();
  const routePath = normalizeRoutePath(pathname);

  return routePath === '/' ? `${siteUrl}/` : `${siteUrl}${routePath}`;
}