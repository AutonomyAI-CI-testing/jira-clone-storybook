import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  // This page is a bare screen: the projects list is deliberately not shown,
  // so the summary the route loads is intentionally unused here.
  void projectsSummary;

  return (
    <>
      <div className="flex h-full flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
