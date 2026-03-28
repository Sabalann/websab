"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ScrollAnimation } from "../../../components/ScrollAnimation";
import Navbar from "../../../components/Navbar";
import ProjectMedia from "../../../components/ProjectMedia";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";

export default function ProjectDetailClient({ id }) {
  const params = useParams();
  const locale = params.locale || "en";
  const t = useTranslations("Common");
  const decodedId = id ? decodeURIComponent(id) : null;
  const project = useQuery(api.projects.getProjectById, decodedId ? { id: decodedId } : "skip");

  if (project === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading project...</div>
      </div>
    );
  }

  if (project === null) {
    notFound();
    return null;
  }

  const translation = project.translations[locale] || project.translations.en;
  const content = translation?.content ?? "";
  const title = translation?.title ?? "";
  const description = translation?.description ?? "";

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <ProjectMedia media={project.media} />
          </ScrollAnimation>
          <div className="max-w-3xl mx-auto mt-16">
            <ScrollAnimation>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
                {decodedId === "pomofocus" && (
                  <Link
                    href={`/${locale}/pomofocus-support`}
                    className="px-4 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-full transition-colors font-medium"
                  >
                    App Support
                  </Link>
                )}
                {decodedId === "stillhere" && (
                  <Link
                    href={`/${locale}/stillhere-support`}
                    className="px-4 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-full transition-colors font-medium"
                  >
                    App Support
                  </Link>
                )}
                {decodedId === "presented" && (
                  <>
                    <Link
                      href={`/${locale}/presented-privacy`}
                      className="px-4 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-full transition-colors font-medium"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href={`/${locale}/presented-terms`}
                      className="px-4 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-full transition-colors font-medium"
                    >
                      Terms of Use
                    </Link>
                  </>
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
                  ← {t("backToPortfolio")}
                </Link>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {t("viewProject")} →
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
