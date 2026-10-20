import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  // This screen no longer lists the projects, so the summary is not read. The
  // prop stays part of the contract so the route and the stories keep working.
  void projectsSummary;

  return (
    <>
      <div className="flex min-h-screen flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
