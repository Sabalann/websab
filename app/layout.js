import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sab - Webdeveloper',
  description: 'Ik bouw websites die niet alleen jou, maar ook jouw klanten aanspreken.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
