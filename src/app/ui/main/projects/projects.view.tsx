import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

// The projects page is a full-bleed splash, so the route's data is no longer
// rendered; the prop stays in the view's contract so the page can be restored.
export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  void projectsSummary;

  return (
    <>
      <div className="flex h-full w-full items-center justify-center bg-black">
        <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
