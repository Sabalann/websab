import { fetchQuery } from "convex/nextjs";
import { api } from "../../convex/_generated/api";

export async function getAllProjects(locale = 'en') {
  const projects = await fetchQuery(api.projects.getAllProjects);
  
  const allProjectsData = projects.map((project) => {
    const translation = project.translations[locale] || project.translations['en'];
    
    return {
      id: project.id,
      title: translation.title,
      description: translation.description,
      media: project.media,
      tags: project.tags,
      date: project.date,
      url: project.url,
    };
  });

  // Sort projects by date
  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getProjectData(id, locale = 'en') {
  const project = await fetchQuery(api.projects.getProjectById, { id });
  
  if (!project) {
    throw new Error(`Project ${id} not found`);
  }
  
  const translation = project.translations[locale] || project.translations['en'];
  
  return {
    id: project.id,
    title: translation.title,
    description: translation.description,
    content: translation.content,
    media: project.media,
    tags: project.tags,
    date: project.date,
    url: project.url,
  };
} 