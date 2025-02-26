import { getProjectData } from '../../lib/projects';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ScrollAnimation } from '../../components/ScrollAnimation';
import Navbar from '../../components/Navbar';
import ProjectMedia from '../../components/ProjectMedia';

export default async function Project({ params }) {
  const { id, content, ...project } = await getProjectData(params.id);

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
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="prose dark:prose-invert">
                <MDXRemote source={content} />
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="mt-12 flex justify-between items-center">
                <Link 
                  href="/portfolio"
                  className="btn-secondary"
                >
                  ← Terug naar portfolio
                </Link>
                {project.url && (
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Bekijk live website →
                  </a>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
} 