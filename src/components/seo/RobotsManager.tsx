import { Helmet } from 'react-helmet-async';

export function RobotsManager() {
  // If the environment is not explicitly 'production', inject the noindex tag.
  // This protects staging, development, and preview URLs from being crawled.
  const isProduction = import.meta.env.VITE_APP_ENV === 'production';

  if (isProduction) {
    return null;
  }

  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow, noarchive" />
    </Helmet>
  );
}
