"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { AuthProvider } from "../../components/admin/AuthProvider";
import { useState } from "react";

function AdminDashboard() {
  const params = useParams();
  const router = useRouter();
  const locale = params.locale || "en";
  const projects = useQuery(api.projects.getAllProjects);
  const deleteProject = useMutation(api.projects.deleteProject);
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (projectId, projectTitle) => {
    if (!confirm(`Are you sure you want to delete "${projectTitle}"?`)) {
      return;
    }

    setDeletingId(projectId);
    try {
      await deleteProject({ _id: projectId });
    } catch (error) {
      alert("Error deleting project: " + error.message);
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("tokenExpiry");
    router.push(`/${locale}/admin/login`);
  };

  if (projects === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading projects...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin CMS</h1>
            <p className="text-sm text-gray-600">Manage your portfolio projects</p>
          </div>
          <div className="flex gap-4">
            <Link
              href={`/${locale}/portfolio`}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              target="_blank"
            >
              View Site →
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Actions Bar */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">All Projects</h2>
            <p className="text-sm text-gray-600 mt-1">{projects.length} total projects</p>
          </div>
          <Link
            href={`/${locale}/admin/new`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            + New Project
          </Link>
        </div>

        {/* Projects Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  URL
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {(project.media.thumbnail || project.media.url) ? (
                          <img
                            className="h-10 w-10 rounded object-cover"
                            src={project.media.thumbnail || project.media.url}
                            alt={project.translations.en.title}
                          />
                        ) : (
                          <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                            —
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {project.translations.en.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {project.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {project.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800"
                      >
                        View →
                      </a>
                    ) : (
                      <span className="text-gray-400">No URL</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/${locale}/admin/edit/${project._id}`}
                        className="text-green-600 hover:text-green-900"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(project._id, project.translations.en.title)}
                        disabled={deletingId === project._id}
                        className="text-red-600 hover:text-red-900 disabled:opacity-50"
                      >
                        {deletingId === project._id ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No projects yet</p>
            <Link
              href={`/${locale}/admin/new`}
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Create your first project →
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default function AdminPage() {
  return (
    <AuthProvider>
      <AdminDashboard />
    </AuthProvider>
  );
}
