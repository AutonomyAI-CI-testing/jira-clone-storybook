import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = (props: ProjectsViewProps): JSX.Element => {
  // This route renders a single wordmark. The projects summary stays in the
  // props contract so the route and its stories keep their current shape.
  void props;

  return (
    <>
      <div className="flex flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
