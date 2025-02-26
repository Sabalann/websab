import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'app/content/projects');

export async function getAllProjects() {
  // Get file names under /content/projects
  const fileNames = await fs.readdir(projectsDirectory);
  const allProjectsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        // Remove ".mdx" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { data: frontMatter } = matter(fileContents);

        // Combine the data with the id
        return {
          id,
          ...frontMatter,
        };
      })
  );

  // Sort projects by date
  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.mdx`);
  const fileContents = await fs.readFile(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { data: frontMatter, content } = matter(fileContents);

  // Combine the data with the id and content
  return {
    id,
    content,
    ...frontMatter,
  };
} 