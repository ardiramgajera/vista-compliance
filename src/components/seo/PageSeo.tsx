import { Helmet } from 'react-helmet-async';
import { buildCanonicalUrl } from './seoConfig';

interface Breadcrumb {
  name: string;
  path: string;
}

interface PageSeoProps {
  title: string;
  description: string;
  path?: string;
  breadcrumbs?: Breadcrumb[];
  imageUrl?: string;
}

export function PageSeo({ 
  title, 
  description, 
  path = '/', 
  breadcrumbs,
  imageUrl = 'https://compliancevista.com/company-images/cv-hero-new.webp'
}: PageSeoProps) {
  const fullTitle = `${title} | ComplianceVista`;
  const canonicalUrl = buildCanonicalUrl(path);

  const breadcrumbSchema = breadcrumbs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: buildCanonicalUrl(crumb.path),
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="ComplianceVista" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
