import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  // The page is a single full-screen statement and renders none of its route
  // data. The prop stays part of the view's contract for the route and its story.
  void projectsSummary;

  return (
    <div className="fixed inset-0 z-20 bg-black">
      <div className="flex h-full items-center justify-center">
        <h1 className="font-primary-black text-7xl text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
