import localFont from 'next/font/local';
import './globals.css';
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../i18n';
import { ConvexClientProvider } from './ConvexClientProvider';

const satoshi = localFont({
  src: [
    { path: './fonts/Satoshi-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Satoshi-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export default async function RootLayout({ children, params }) {
  const { locale } = await params || { locale: 'en' };
  
  // Validate locale
  if (params?.locale && !locales.includes(params.locale)) {
    notFound();
  }
  
  // Providing all messages to the client side is the easiest way
  const messages = await getMessages();
  
  return (
    <html lang={locale} className={`scroll-smooth ${satoshi.variable}`} suppressHydrationWarning>
      <body className={`${satoshi.className} bg-white text-black transition-colors duration-300`}>
        <ConvexClientProvider>
          <NextIntlClientProvider messages={messages}>
            <Analytics />
            {children}
          </NextIntlClientProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
