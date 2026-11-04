import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

// The page renders a single wordmark on a black surface, so the projects
// summary is not shown anymore. The prop stays part of the view's contract
// with the route and its story, which still pass it.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProjectsView = (_props: ProjectsViewProps): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-20 grid place-items-center bg-black">
        <h1 className="font-primary-black text-5xl text-[color:var(--Green500)]">
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
