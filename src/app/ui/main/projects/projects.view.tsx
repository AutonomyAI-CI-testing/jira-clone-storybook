import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  // The route and its stories still pass the project list, but this page
  // deliberately renders nothing except the splash below.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl text-icon-accent-green">
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
