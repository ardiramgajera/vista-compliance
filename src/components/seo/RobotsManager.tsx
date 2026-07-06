import { Helmet } from 'react-helmet-async';
import { isProductionEnvironment } from './seoConfig';

export function RobotsManager() {
  const isProduction = isProductionEnvironment();

  if (isProduction) {
    return null;
  }

  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow, noarchive" />
    </Helmet>
  );
}
