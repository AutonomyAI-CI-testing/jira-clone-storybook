import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = (props: ProjectsViewProps): JSX.Element => {
  // The page is a single static screen; the projects data is no longer rendered.
  void props;

  return (
    <>
      <div className="flex h-full flex-grow items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-icon-danger">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
