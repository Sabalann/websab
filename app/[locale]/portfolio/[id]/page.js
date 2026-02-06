import { getProjectData, getAllProjects } from '../../../lib/projects';
import Link from 'next/link';
import { ScrollAnimation } from '../../../components/ScrollAnimation';
import Navbar from '../../../components/Navbar';
import ProjectMedia from '../../../components/ProjectMedia';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

// Generate static params for all projects
export async function generateStaticParams() {
  const locales = ['nl', 'en'];
  const allParams = [];
  
  for (const locale of locales) {
    const projects = await getAllProjects(locale);
    const params = projects.map((project) => ({
      locale,
      id: project.id,
    }));
    allParams.push(...params);
  }
  
  return allParams;
}

export default async function Project({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { locale, id } = params;
  
  const t = await getTranslations({ locale, namespace: 'Common' });
  
  try {
    if (!params || typeof id === 'undefined') {
      notFound();
      return;
    }
    
    const { content, ...project } = await getProjectData(id, locale);

    if (typeof content === 'undefined') {
      notFound();
      return;
    }

    return (
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation>
              <ProjectMedia media={project.media} />
            </ScrollAnimation>

            <div className="max-w-3xl mx-auto mt-16">
              <ScrollAnimation>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {project.title}
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags && Array.isArray(project.tags) && project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                  
                  {/* Support button for PomoFocus */}
                  {id === 'pomofocus' && (
                    <Link 
                      href={`/${locale}/pomofocus-support`}
                      className="px-4 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-full transition-colors font-medium"
                    >
                      App Support
                    </Link>
                  )}
                </div>
              </ScrollAnimation>

              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              <ScrollAnimation delay={300}>
                <div className="mt-12 flex justify-between items-center">
                  <Link 
                    href={`/${locale}/portfolio`}
                    className="btn-secondary"
                  >
                    ← {t('backToPortfolio')}
                  </Link>
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      {t('viewProject')} →
                    </a>
                  )}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
