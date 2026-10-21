import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

// The splash renders no project data; the prop stays in the component's type
// so the route and the stories that render this view keep compiling.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProjectsView = (_: ProjectsViewProps): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-font-success md:text-9xl">
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
