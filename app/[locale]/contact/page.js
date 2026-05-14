import { getTranslations } from 'next-intl/server';
import ContactClient from './ContactClient';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });
  const baseUrl = 'https://websab.nl';
  
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
      languages: {
        'nl': `${baseUrl}/nl/contact`,
        'en': `${baseUrl}/en/contact`,
        'x-default': `${baseUrl}/en/contact`,
      }
    },
    openGraph: {
      title: t('hero.title'),
      description: t('hero.subtitle'),
      locale: locale,
      alternateLocale: locale === 'nl' ? 'en' : 'nl',
      type: 'website',
      url: `${baseUrl}/${locale}/contact`,
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

export default async function Contact({ params }) {
  const { locale } = await params;
  
  return <ContactClient />;
}
