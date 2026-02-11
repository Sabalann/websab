import localFont from 'next/font/local';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { ConvexClientProvider } from './ConvexClientProvider';
import StructuredData from './components/StructuredData';

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

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  // Providing all messages to the client side is the easiest way
  const messages = await getMessages();
  
  return (
    <html lang={locale} className={`scroll-smooth ${satoshi.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <StructuredData locale={locale} />
      </head>
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
