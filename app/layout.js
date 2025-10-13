import { Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import { Analytics } from "@vercel/analytics/next"

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'Sab - Webdeveloper',
  description: 'Ik bouw websites die niet alleen jou, maar ook jouw klanten aanspreken.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`scroll-smooth ${outfit.variable}`}>
      <body className={`${outfit.className} bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
