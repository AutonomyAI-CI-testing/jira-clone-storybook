import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

// The projects page is a full-bleed splash, so none of the route's data is
// rendered; the props stay part of the view's contract.
export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  void projectsSummary;

  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl text-[var(--Red500)]">Fei</h1>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
