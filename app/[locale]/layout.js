import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { locales } from '../../i18n';
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const baseUrl = 'https://websab.nl';
  
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'nl': `${baseUrl}/nl`,
        'en': `${baseUrl}/en`,
        'x-default': `${baseUrl}/en`,
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale,
      alternateLocale: locale === 'nl' ? 'en' : 'nl',
      type: 'website',
      url: `${baseUrl}/${locale}`,
      images: [{ url: `${baseUrl}/profile.jpeg`, width: 800, height: 1200, alt: 'Sab - Webdeveloper Apeldoorn' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/profile.jpeg`],
    }
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  return children;
}
