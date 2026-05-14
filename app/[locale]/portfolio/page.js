import { getAllProjects } from '../../lib/projects';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollAnimation } from '../../components/ScrollAnimation';
import Navbar from '../../components/Navbar';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Portfolio' });
  const baseUrl = 'https://websab.nl';
  
  return {
    title: locale === 'nl'
      ? `${t('hero.title')} | Webdeveloper Apeldoorn | Sab`
      : `${t('hero.title')} | Web Developer Apeldoorn | Sab`,
    description: t('hero.subtitle'),
    alternates: {
      canonical: `${baseUrl}/${locale}/portfolio`,
      languages: {
        'nl': `${baseUrl}/nl/portfolio`,
        'en': `${baseUrl}/en/portfolio`,
        'x-default': `${baseUrl}/en/portfolio`,
      }
    },
    openGraph: {
      title: t('hero.title'),
      description: t('hero.subtitle'),
      locale: locale,
      alternateLocale: locale === 'nl' ? 'en' : 'nl',
      type: 'website',
      url: `${baseUrl}/${locale}/portfolio`,
      images: [{ url: `${baseUrl}/profile.jpeg`, width: 800, height: 1200, alt: 'Sab - Webdeveloper Apeldoorn' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('hero.title'),
      description: t('hero.subtitle'),
      images: [`${baseUrl}/profile.jpeg`],
    }
  };
}

async function PortfolioContent({ locale }) {
  const t = await getTranslations({ locale, namespace: 'Portfolio' });
  const projects = await getAllProjects(locale);

  // Helper function to get the correct image source
  const getImageSource = (media) => {
    if (!media) return null;
    // For videos, use thumbnail, otherwise use the media url
    return media.type === 'video' ? media.thumbnail : media.url;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              {t('hero.title')}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 100}>
                <Link href={`/${locale}/portfolio/${project.id}`} className="group block h-full">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] h-[32rem] flex flex-col">
                    <div className="relative aspect-video shrink-0">
                      {getImageSource(project.media) ? (
                        <>
                          <Image
                            src={getImageSource(project.media)}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          {project.media.type === 'video' && (
                            <div className="absolute bottom-4 right-4">
                              <div className="w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-400">{t('noMedia')}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map(tag => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold">
              {t('cta.title')}
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation delay={100}>
            <p className="text-xl text-gray-600">
              {t('cta.subtitle')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <Link 
              href={`/${locale}/contact`}
              className="btn-primary"
            >
              {t('cta.contact')}
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

export default async function Portfolio({ params }) {
  const { locale } = await params;
  return <PortfolioContent locale={locale} />;
}
