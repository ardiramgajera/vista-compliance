import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function CanonicalManager() {
  const location = useLocation();

  useEffect(() => {
    // We assume there's a base link tag in index.html like:
    // <link id="canonical-link" rel="canonical" href="https://compliancevista.com/" />
    const canonicalLink = document.getElementById('canonical-link') as HTMLLinkElement;
    
    if (canonicalLink) {
      const baseUrl = 'https://compliancevista.com';
      let path = location.pathname;

      // Clean trailing slash for SEO best practices, except for the root route
      if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
      }

      canonicalLink.href = `${baseUrl}${path}`;
    }
  }, [location.pathname]);

  return null; // This component does not render anything
}
