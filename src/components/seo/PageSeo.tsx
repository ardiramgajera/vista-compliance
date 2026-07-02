import { Helmet } from 'react-helmet-async';

interface Breadcrumb {
  name: string;
  url: string;
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
  path = '', 
  breadcrumbs,
  imageUrl = 'https://compliancevista.com/company-images/cv-hero-new.webp'
}: PageSeoProps) {
  const fullTitle = `${title} | ComplianceVista`;
  const canonicalUrl = `https://compliancevista.com${path}`;

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* JSON-LD Schema (Breadcrumbs) */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
