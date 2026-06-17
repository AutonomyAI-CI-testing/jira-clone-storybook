import { Error404 } from "@app/components/error-404";

/**
 * Main 404 error page route.
 * Renders when no other route matches. Provides navigation back to projects.
 */
export default function NotFound404Route() {
  return <Error404 href="/projects" />;
}
