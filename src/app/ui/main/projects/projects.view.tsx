import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

// This page renders nothing but the splash screen below, so the project data
// the route still loads is deliberately not displayed here.
export const ProjectsView = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-icon-accent-green">
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
