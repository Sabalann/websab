import ProjectDetailClient from "./ProjectDetailClient";
import { notFound } from "next/navigation";
import { getProjectData } from "../../../lib/projects";
import Navbar from "../../../components/Navbar";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { locale, id } = await params;
  const baseUrl = 'https://websab.nl';

  try {
    const project = await getProjectData(id, locale);
    const imageUrl = project.media?.thumbnail || project.media?.url || `${baseUrl}/profile.jpeg`;

    return {
      title: project.title,
      description: project.description,
      alternates: {
        canonical: `${baseUrl}/${locale}/portfolio/${id}`,
        languages: {
          'nl': `${baseUrl}/nl/portfolio/${id}`,
          'en': `${baseUrl}/en/portfolio/${id}`,
          'x-default': `${baseUrl}/en/portfolio/${id}`,
        }
      },
      openGraph: {
        title: project.title,
        description: project.description,
        locale: locale,
        alternateLocale: locale === 'nl' ? 'en' : 'nl',
        type: 'website',
        url: `${baseUrl}/${locale}/portfolio/${id}`,
        images: [{ url: imageUrl, alt: project.title }],
      },
      twitter: {
        card: 'summary_large_image',
        title: project.title,
        description: project.description,
        images: [imageUrl],
      }
    };
  } catch {
    return {
      title: id,
      alternates: {
        canonical: `${baseUrl}/${locale}/portfolio/${id}`,
      }
    };
  }
}

export default async function Project({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { id } = params;

  if (!params || typeof id === "undefined") {
    notFound();
    return null;
  }

  return (
    <>
      <Navbar />
      <ProjectDetailClient id={id} />
    </>
  );
}
