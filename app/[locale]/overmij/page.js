import { getTranslations } from 'next-intl/server';
import AboutClient from './AboutClient';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });
  const baseUrl = 'https://websab.nl';
  
  return {
    title: `${t('hero.title')} ${t('hero.name')}`,
    description: t('hero.subtitle'),
    alternates: {
      canonical: `${baseUrl}/${locale}/overmij`,
      languages: {
        'nl': `${baseUrl}/nl/overmij`,
        'en': `${baseUrl}/en/overmij`,
        'x-default': `${baseUrl}/en/overmij`,
      }
    },
    openGraph: {
      title: `${t('hero.title')} ${t('hero.name')}`,
      description: t('hero.subtitle'),
      locale: locale,
      alternateLocale: locale === 'nl' ? 'en' : 'nl',
      type: 'profile',
      url: `${baseUrl}/${locale}/overmij`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('hero.title')} ${t('hero.name')}`,
      description: t('hero.subtitle'),
    }
  };
}

export default async function OverMij({ params }) {
  const { locale } = await params;
  
  return <AboutClient />;
}
