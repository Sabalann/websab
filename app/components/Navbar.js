"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navigation');
  const params = useParams();
  const locale = params?.locale || 'en';

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                href={`/${locale}`}
                className="relative w-12 h-12"
              >
                <Image 
                  src="/logo-transparent-black.png"
                  alt="Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link 
              href={`/${locale}`}
              className="btn-nav"
            >
              {t('home')}
            </Link>
            <Link 
              href={`/${locale}/overmij`}
              className="btn-nav"
            >
              {t('about')}
            </Link>
            <Link 
              href={`/${locale}/portfolio`}
              className="btn-nav"
            >
              {t('portfolio')}
            </Link>
            <Link 
              href={`/${locale}/kosten`}
              className="btn-nav"
            >
              {t('pricing')}
            </Link>
            <Link 
              href={`/${locale}/contact`}
              className="btn-contact ml-2"
            >
              {t('contact')}
            </Link>
            <LanguageSwitcher />
          </div>
          
          <div className="-mr-2 flex items-center md:hidden gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1 px-2 bg-white shadow-lg">
            <Link 
              href={`/${locale}`}
              className="btn-nav block w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              href={`/${locale}/overmij`}
              className="btn-nav block w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              {t('about')}
            </Link>
            <Link 
              href={`/${locale}/portfolio`}
              className="btn-nav block w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              {t('portfolio')}
            </Link>
            <Link 
              href={`/${locale}/kosten`}
              className="btn-nav block w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              {t('pricing')}
            </Link>
            <Link 
              href={`/${locale}/contact`}
              className="btn-contact block w-full text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
