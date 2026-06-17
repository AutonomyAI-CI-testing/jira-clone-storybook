import type { LoaderFunction } from "@remix-run/node";
import { useEffect } from "react";
import { useParams } from "@remix-run/react";
import { toast } from "react-toastify";
import { ProjectId } from "@domain/project";
import { Error404 } from "@app/components/error-404";

/**
 * Catch-all route for invalid project sub-paths.
 * Always throws 404 - the actual UI is rendered in CatchBoundary.
 */
export const loader: LoaderFunction = async () => {
  throw new Response("Not Found", {
    status: 404,
  });
};

/**
 * Catches 404s from invalid project sub-paths (e.g., /projects/123/invalid-section).
 * Shows toast warning and Error404 component with navigation back to the project board.
 */
export function CatchBoundary() {
  useEffect(() => {
    toast.warning("Try to go back to the previous page.");
  }, []);

  const params = useParams();
  const projectId = params.projectId as ProjectId;

  return (
    <div className="flex h-full items-center justify-center">
      <Error404 href={`/projects/${projectId}/board`} />
    </div>
  );
}

// Default export required by Remix but never renders - CatchBoundary handles all cases
export default function Error404Route() {
  return null;
}
