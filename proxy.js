import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale,
  
  // Always use a locale prefix
  localePrefix: 'always',
  
  // Automatically detect the user's locale based on:
  // 1. Cookie (if user has previously selected a language)
  // 2. Accept-Language header from browser
  // 3. Default to English
  localeDetection: true
});

export default function proxy(request) {
  const { pathname } = request.nextUrl;
  
  // Check if the request is for an admin route (but not the login page)
  if (pathname.includes('/admin') && !pathname.includes('/admin/login')) {
    // For admin routes, we rely on client-side AuthProvider
    // The middleware just allows the request through
    // Auth is handled by the AuthProvider component which checks sessionStorage
  }
  
  // Apply i18n middleware for all routes
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (Next.js internals)
  // - static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
