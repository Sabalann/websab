"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                href="/" 
                className="relative w-12 h-12"
              >
                <Image 
                  src={theme === 'dark' ? '/logo-transparent-white.png' : '/logo-transparent-black.png'}
                  alt="Logo" 
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link 
              href="/" 
              className="btn-nav"
            >
              Home
            </Link>
            <Link 
              href="/overmij" 
              className="btn-nav"
            >
              Over mij
            </Link>
            <Link 
              href="/portfolio" 
              className="btn-nav"
            >
              Portfolio
            </Link>
            <Link 
              href="/prijzen" 
              className="btn-nav"
            >
              Prijzen
            </Link>
            <Link 
              href="/contact" 
              className="btn-contact ml-2"
            >
              Contact
            </Link>
            
            {/* Theme toggle button */}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
          
          <div className="-mr-2 flex items-center md:hidden">
            {/* Theme toggle for mobile */}
            <div className="mr-4">
              <ThemeToggle />
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
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
          <div className="pt-2 pb-4 space-y-1 px-2 bg-white dark:bg-gray-900 shadow-lg">
            <Link 
              href="/" 
              className="btn-nav block w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/overmij" 
              className="btn-nav block w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              Over mij
            </Link>
            <Link 
              href="/portfolio" 
              className="btn-nav block w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/prijzen" 
              className="btn-nav block w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              Prijzen
            </Link>
            <Link 
              href="/contact" 
              className="btn-contact block w-full text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 