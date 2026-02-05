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
    },
    twitter: {
      card: 'summary_large_image',
      title: t('hero.title'),
      description: t('hero.subtitle'),
    }
  };
}

export default async function Prijzen({ params }) {
  const { locale } = await params;
  
  return <PricingClient />;
}
