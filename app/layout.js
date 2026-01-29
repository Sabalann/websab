import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import { Analytics } from "@vercel/analytics/next";

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

export const metadata = {
  title: 'Sab - Webdeveloper',
  description: 'Ik bouw websites die niet alleen jou, maar ook jouw klanten aanspreken.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`scroll-smooth ${satoshi.variable}`}>
      <body className={`${satoshi.className} bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
