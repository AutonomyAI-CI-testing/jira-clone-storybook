import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

// The route still passes projectsSummary, but this page renders nothing from it.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProjectsView = (_props: ProjectsViewProps): JSX.Element => {
  return (
    <>
      <div className="flex flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
