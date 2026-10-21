import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-50 grid place-items-center bg-black">
        <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
