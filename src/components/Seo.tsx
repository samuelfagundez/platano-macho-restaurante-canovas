import { Head } from 'vite-react-ssg';
import { content } from '../content';

export default function Seo() {
  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${content.siteUrl}#website`,
      url: content.siteUrl,
      name: content.name,
      inLanguage: 'es-ES',
    },
    {
      '@type': 'Restaurant',
      '@id': `${content.siteUrl}#restaurant`,
      name: content.name,
      image: content.gallery.slice(0, 3).map((p) => `${content.siteUrl}${p.src.replace(/^\//, '')}`),
      url: content.siteUrl,
      telephone: content.phone,
      servesCuisine: content.cuisine,
      priceRange: content.priceRange,
      address: {
        '@type': 'PostalAddress',
        streetAddress: content.address.streetAddress,
        addressLocality: content.address.addressLocality,
        addressRegion: content.address.addressRegion,
        postalCode: content.address.postalCode,
        addressCountry: content.address.addressCountry,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: content.geo.lat,
        longitude: content.geo.lng,
      },
      openingHoursSpecification: content.openingHoursSchema.map((block) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: block.dayOfWeek,
        opens: block.opens,
        closes: block.closes,
      })),
      acceptsReservations: content.mapLinkUrl,
      aggregateRating:
        content.rating.value && content.rating.count
          ? {
              '@type': 'AggregateRating',
              ratingValue: content.rating.value,
              reviewCount: content.rating.count,
            }
          : undefined,
      sameAs: [content.social.instagram, content.social.facebook, content.social.tiktok].filter(
        Boolean,
      ),
      keywords: content.keywords.join(', '),
    },
  ];

  return (
    <Head>
      <html lang="es" />
      <title>{`${content.name} — ${content.tagline}`}</title>
      <meta name="description" content={content.metaDescription} />
      <meta name="keywords" content={content.keywords.join(', ')} />
      <link rel="canonical" href={content.siteUrl} />

      <meta property="og:type" content="restaurant.restaurant" />
      <meta property="og:title" content={content.name} />
      <meta property="og:description" content={content.metaDescription} />
      <meta property="og:url" content={content.siteUrl} />
      <meta property="og:image" content={`${content.siteUrl}${content.gallery[0].src.replace(/^\//, '')}`} />
      <meta property="og:locale" content="es_ES" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={content.name} />
      <meta name="twitter:description" content={content.metaDescription} />

      <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
    </Head>
  );
}
