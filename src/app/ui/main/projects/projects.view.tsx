import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

/**
 * A bare black canvas showing only the product name, centered.
 *
 * The page is deliberately outside the theme system: the surface stays black
 * and the word keeps the same red in every theme, so both colours are fixed
 * instead of following the theme-mapped tokens. The icon-grade danger red is
 * the palette's bright red and stays legible on black.
 *
 * The projects summary the route passes is deliberately unused, so the list
 * can be brought back without touching the route or its loader.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProjectsView = (_props: ProjectsViewProps): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl text-icon-danger">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
