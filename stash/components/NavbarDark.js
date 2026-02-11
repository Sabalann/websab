"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function NavbarDark() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const locale = params?.locale || 'en';

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop Navigation - fixed styles, no scroll listener for performance */}
      <div className="hidden md:flex items-center gap-2 glass-navbar px-6 py-3 rounded-full">
        <Link 
          href={`/${locale}`}
          className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 group"
          title="Home"
        >
          <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
        
        <Link 
          href={`/${locale}/portfolio`}
          className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 group"
          title="Portfolio"
        >
          <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </Link>
        
        <Link 
          href={`/${locale}/contact`}
          className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 group"
          title="Contact"
        >
          <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </Link>

        <div className="w-px h-6 bg-white/10 mx-2"></div>
        
        <button
          onClick={() => {
            const newLocale = locale === 'en' ? 'nl' : 'en';
            window.location.href = `/${newLocale}/test-home`;
          }}
          className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 group"
          title="Change Language"
        >
          <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="glass-navbar p-4 rounded-full"
        >
          {!isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 glass-navbar rounded-3xl p-8 min-w-[280px]">
            <div className="flex flex-col gap-4">
              <Link 
                href={`/${locale}`}
                className="flex items-center gap-4 p-4 hover:bg-white/10 rounded-2xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-white">Home</span>
              </Link>
              
              <Link 
                href={`/${locale}/portfolio`}
                className="flex items-center gap-4 p-4 hover:bg-white/10 rounded-2xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white">Portfolio</span>
              </Link>
              
              <Link 
                href={`/${locale}/contact`}
                className="flex items-center gap-4 p-4 hover:bg-white/10 rounded-2xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white">Contact</span>
              </Link>

              <div className="h-px bg-white/10 my-2"></div>

              <button
                onClick={() => {
                  const newLocale = locale === 'en' ? 'nl' : 'en';
                  window.location.href = `/${newLocale}/test-home`;
                }}
                className="flex items-center gap-4 p-4 hover:bg-white/10 rounded-2xl transition-all"
              >
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="text-white">{locale === 'en' ? 'Nederlands' : 'English'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
