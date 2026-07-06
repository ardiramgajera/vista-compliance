import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buildCanonicalUrl } from './seoConfig';

export function CanonicalManager() {
  const location = useLocation();

  useEffect(() => {
    const canonicalLink = document.getElementById('canonical-link') as HTMLLinkElement;

    if (canonicalLink) {
      canonicalLink.href = buildCanonicalUrl(location.pathname);
    }
  }, [location.pathname]);

  return null;
}
