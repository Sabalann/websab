import { getAllProjects } from './lib/projects';

/**
 * SEO-OPTIMIZED SITEMAP
 * 
 * This sitemap follows Google's best practices for better crawling and indexing:
 * 
 * 1. ACCURATE LASTMOD DATES
 *    - Static pages: Set to actual content update dates (not current date)
 *    - Project pages: Use the project's published date from projects.json
 *    - Home/Portfolio: Use latest project date (shows active development)
 * 
 * 2. STRATEGIC PRIORITIES
 *    - 1.0: Home page (main entry point)
 *    - 0.9: Portfolio overview & Contact (key pages)
 *    - 0.8: Individual projects (high-value content)
 *    - 0.7: About/Pricing (supporting pages)
 *    - 0.3: Legal/Support pages (low SEO value)
 * 
 * 3. REALISTIC CHANGE FREQUENCIES
 *    - 'weekly': Home (reflects new projects)
 *    - 'monthly': Portfolio overview (new projects added 2-4x/year)
 *    - 'yearly': Static content pages, individual projects
 * 
 * MAINTENANCE:
 * - When updating page content, manually update the static date constants below
 * - Project dates automatically come from projects.json
 * - Submit updated sitemap to Google Search Console after major changes
 */

export default async function sitemap() {
  const baseUrl = 'https://websab.nl';
  const locales = ['nl', 'en'];

  // Get all projects to determine latest update date
  const projectsNl = await getAllProjects('nl');
  const projectsEn = await getAllProjects('en');
  
  // Find the most recent project date (shows site is actively maintained)
  const latestProjectDate = projectsNl.reduce((latest, project) => {
    const projectDate = new Date(project.date);
    return projectDate > latest ? projectDate : latest;
  }, new Date('2024-01-01'));

  // STATIC PAGE DATES - Update these when you modify the actual page content
  const staticPageDates = {
    contact: new Date('2025-01-15'),      // Last updated contact form/info
    overmij: new Date('2025-02-01'),      // Last updated about page
    kosten: new Date('2025-01-20'),       // Last updated pricing page
  };

  // ===== HOME PAGE =====
  // Priority 1.0 - Most important page, uses latest project date
  const homeEntries = locales.map(locale => ({
    url: `${baseUrl}/${locale}`,
    lastModified: latestProjectDate,
    changeFrequency: 'weekly',
    priority: locale === 'nl' ? 1.0 : 0.95, // Slight boost for NL (primary market)
  }));

  // ===== PORTFOLIO OVERVIEW =====
  // Priority 0.9 - Key showcase page, uses latest project date
  const portfolioEntries = locales.map(locale => ({
    url: `${baseUrl}/${locale}/portfolio`,
    lastModified: latestProjectDate,
    changeFrequency: 'monthly',
    priority: locale === 'nl' ? 0.9 : 0.85,
  }));

  // ===== CONTACT PAGE =====
  // Priority 0.9 - Key conversion page
  const contactEntries = locales.map(locale => ({
    url: `${baseUrl}/${locale}/contact`,
    lastModified: staticPageDates.contact,
    changeFrequency: 'yearly',
    priority: locale === 'nl' ? 0.9 : 0.85,
  }));

  // ===== ABOUT & PRICING PAGES =====
  // Priority 0.7 - Supporting pages
  const aboutEntries = locales.map(locale => ({
    url: `${baseUrl}/${locale}/overmij`,
    lastModified: staticPageDates.overmij,
    changeFrequency: 'yearly',
    priority: locale === 'nl' ? 0.7 : 0.65,
  }));

  const pricingEntries = locales.map(locale => ({
    url: `${baseUrl}/${locale}/kosten`,
    lastModified: staticPageDates.kosten,
    changeFrequency: 'yearly',
    priority: locale === 'nl' ? 0.7 : 0.65,
  }));

  // ===== INDIVIDUAL PROJECT PAGES =====
  // Priority 0.8 - High-value content pages
  // Each project uses its actual published date from projects.json
  const projectEntriesNl = projectsNl.map(project => ({
    url: `${baseUrl}/nl/portfolio/${project.id}`,
    lastModified: new Date(project.date),
    changeFrequency: 'yearly', // Projects rarely change after publishing
    priority: 0.8,
  }));

  const projectEntriesEn = projectsEn.map(project => ({
    url: `${baseUrl}/en/portfolio/${project.id}`,
    lastModified: new Date(project.date),
    changeFrequency: 'yearly',
    priority: 0.75, // Slightly lower for EN (secondary market)
  }));

  // ===== LEGAL/SUPPORT PAGES =====
  // Priority 0.3 - Low SEO value, rarely change
  const supportPages = [
    {
      url: `${baseUrl}/pomofocus-support`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/pomofocus-privacy`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  ];

  // Return all entries grouped logically (helps with readability and debugging)
  return [
    // High priority pages (1.0 - 0.9)
    ...homeEntries,
    ...portfolioEntries,
    ...contactEntries,
    
    // Medium-high priority (0.8)
    ...projectEntriesNl,
    ...projectEntriesEn,
    
    // Medium priority (0.7)
    ...aboutEntries,
    ...pricingEntries,
    
    // Low priority (0.3)
    ...supportPages
  ];
}
