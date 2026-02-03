"use client";

import { useRouter, useParams } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import ProjectForm from "../../../components/admin/ProjectForm";
import { AuthProvider } from "../../../components/admin/AuthProvider";
import Link from "next/link";

function NewProjectPage() {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || "en";
  const createProject = useMutation(api.projects.createProject);

  const handleSubmit = async (formData) => {
    try {
      await createProject(formData);
      router.push(`/${locale}/admin`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

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
            <h1 className="text-2xl font-bold text-gray-900">Create New Project</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProjectForm onSubmit={handleSubmit} submitLabel="Create Project" />
      </main>
    </div>
  );
}

export default function NewProject() {
  return (
    <AuthProvider>
      <NewProjectPage />
    </AuthProvider>
  );
}
