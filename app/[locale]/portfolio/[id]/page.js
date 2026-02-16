import ProjectDetailClient from "./ProjectDetailClient";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Project({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { id } = params;

  if (!params || typeof id === "undefined") {
    notFound();
    return null;
  }

  return <ProjectDetailClient id={id} />;
}
