"use client";

import { useRouter, useParams } from "next/navigation";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import ProjectForm from "../../../../components/admin/ProjectForm";
import { AuthProvider } from "../../../../components/admin/AuthProvider";
import Link from "next/link";

function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || "en";
  const projectId = params.id;
  
  const project = useQuery(api.projects.getProjectById, { id: projectId });
  const updateProject = useMutation(api.projects.updateProject);

  const handleSubmit = async (formData) => {
    try {
      // Only pass fields that updateProject accepts (exclude id, _id, _creationTime)
      const { _id, _creationTime, id, ...rest } = formData;
      
      await updateProject({
        _id: project._id,
        date: rest.date,
        media: rest.media,
        tags: rest.tags,
        translations: rest.translations,
        url: rest.url,
      });
      
      router.push(`/${locale}/admin`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  if (project === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading project...</div>
      </div>
    );
  }

  if (project === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Project not found</h2>
          <Link
            href={`/${locale}/admin`}
            className="text-green-600 hover:text-green-700"
          >
            ← Back to dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <Link
              href={`/${locale}/admin`}
              className="text-sm text-gray-600 hover:text-gray-900 mb-1 inline-block"
            >
              ← Back to dashboard
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              Edit: {project.translations.en.title}
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProjectForm
          initialData={project}
          onSubmit={handleSubmit}
          submitLabel="Update Project"
        />
      </main>
    </div>
  );
}

export default function EditProject() {
  return (
    <AuthProvider>
      <EditProjectPage />
    </AuthProvider>
  );
}
