import { getTranslations } from 'next-intl/server';
import PricingClient from './PricingClient';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pricing' });
  const baseUrl = 'https://websab.nl';
  
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
    alternates: {
      canonical: `${baseUrl}/${locale}/kosten`,
      languages: {
        'nl': `${baseUrl}/nl/kosten`,
        'en': `${baseUrl}/en/kosten`,
        'x-default': `${baseUrl}/en/kosten`,
      }
    },
    openGraph: {
      title: t('hero.title'),
      description: t('hero.subtitle'),
      locale: locale,
      alternateLocale: locale === 'nl' ? 'en' : 'nl',
      type: 'website',
      url: `${baseUrl}/${locale}/kosten`,
      images: [{ url: `${baseUrl}/profile.jpeg`, width: 800, height: 1200, alt: 'Sab - Webdeveloper Apeldoorn' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('hero.title'),
      description: t('hero.subtitle'),
      images: [`${baseUrl}/profile.jpeg`],
    }
  };
}

export default async function Prijzen({ params }) {
  const { locale } = await params;
  
  return <PricingClient />;
}
