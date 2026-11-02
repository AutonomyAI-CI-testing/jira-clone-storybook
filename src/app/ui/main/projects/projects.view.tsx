import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

// The route and its stories still pass the projects list, so the prop stays
// part of this view's contract even though this page renders no project data.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProjectsView = (_props: ProjectsViewProps): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[#22a06b]">Fei</h1>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
