"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative h-12 w-12">
            <Image 
              src={theme === 'dark' ? '/logo-transparent-white.png' : '/logo-transparent-black.png'}
              alt="Logo" 
              fill
              className="object-contain"
            />
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="nav-link relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
              <svg className="branch-svg absolute left-0 w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path className="branch" d="M0,20 Q25,25 50,20 T100,20" fill="none" stroke="#854d0e" strokeWidth="3"/>
                <path className="leaf leaf-1" d="M30,22 C34,22 36,28 38,30 40,28 42,22 30,22" fill="none"/>
                <path className="leaf leaf-2" d="M50,16 C54,16 56,8 58,6 60,8 62,16 50,16" fill="none"/>
                <path className="leaf leaf-3" d="M70,24 C74,24 76,32 78,34 80,32 82,24 70,24" fill="none"/>
              </svg>
            </Link>
            
            <Link 
              href="/overmij" 
              className="nav-link relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Over mij
              <svg className="branch-svg absolute left-0 w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path className="branch" d="M0,20 Q25,25 50,20 T100,20" fill="none" stroke="#854d0e" strokeWidth="3"/>
                <path className="leaf leaf-1" d="M30,22 C34,22 36,28 38,30 40,28 42,22 30,22" fill="none"/>
                <path className="leaf leaf-2" d="M50,16 C54,16 56,8 58,6 60,8 62,16 50,16" fill="none"/>
                <path className="leaf leaf-3" d="M70,24 C74,24 76,32 78,34 80,32 82,24 70,24" fill="none"/>
              </svg>
            </Link>
            
            <Link 
              href="/portfolio" 
              className="nav-link relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Portfolio
              <svg className="branch-svg absolute left-0 w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path className="branch" d="M0,20 Q25,25 50,20 T100,20" fill="none" stroke="#854d0e" strokeWidth="3"/>
                <path className="leaf leaf-1" d="M30,22 C34,22 36,28 38,30 40,28 42,22 30,22" fill="none"/>
                <path className="leaf leaf-2" d="M50,16 C54,16 56,8 58,6 60,8 62,16 50,16" fill="none"/>
                <path className="leaf leaf-3" d="M70,24 C74,24 76,32 78,34 80,32 82,24 70,24" fill="none"/>
              </svg>
            </Link>
            
            <Link 
              href="/prijzen" 
              className="nav-link relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Prijzen
              <svg className="branch-svg absolute left-0 w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path className="branch" d="M0,20 Q25,25 50,20 T100,20" fill="none" stroke="#854d0e" strokeWidth="3"/>
                <path className="leaf leaf-1" d="M30,22 C34,22 36,28 38,30 40,28 42,22 30,22" fill="none"/>
                <path className="leaf leaf-2" d="M50,16 C54,16 56,8 58,6 60,8 62,16 50,16" fill="none"/>
                <path className="leaf leaf-3" d="M70,24 C74,24 76,32 78,34 80,32 82,24 70,24" fill="none"/>
              </svg>
            </Link>
            
            <Link 
              href="/contact" 
              className="nav-link relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
              <svg className="branch-svg absolute left-0 w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path className="branch" d="M0,20 Q25,25 50,20 T100,20" fill="none" stroke="#854d0e" strokeWidth="3"/>
                <path className="leaf leaf-1" d="M30,22 C34,22 36,28 38,30 40,28 42,22 30,22" fill="none"/>
                <path className="leaf leaf-2" d="M50,16 C54,16 56,8 58,6 60,8 62,16 50,16" fill="none"/>
                <path className="leaf leaf-3" d="M70,24 C74,24 76,32 78,34 80,32 82,24 70,24" fill="none"/>
              </svg>
            </Link>
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 