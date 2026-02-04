import { getAllProjects } from './lib/projects';

export default async function sitemap() {
  const baseUrl = 'https://websab.nl';
  const locales = ['nl', 'en'];
  const currentDate = new Date();

  // Static routes
  const staticRoutes = [
    '', // home
    '/portfolio',
    '/contact',
    '/overmij',
    '/kosten'
  ];

  // Generate entries for all static routes in all locales
  const staticEntries = staticRoutes.flatMap(route => 
    locales.map(locale => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: currentDate,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : 0.8,
    }))
  );

  // Get all projects and create entries for each locale
  const projectsNl = await getAllProjects('nl');
  const projectsEn = await getAllProjects('en');
  
  const projectEntriesNl = projectsNl.map(project => ({
    url: `${baseUrl}/nl/portfolio/${project.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const projectEntriesEn = projectsEn.map(project => ({
    url: `${baseUrl}/en/portfolio/${project.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Support/Privacy pages (English only, outside locale structure)
  const supportPages = [
    {
      url: `${baseUrl}/pomofocus-support`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/pomofocus-privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  ];

  return [
    ...staticEntries,
    ...projectEntriesNl,
    ...projectEntriesEn,
    ...supportPages
  ];
}
