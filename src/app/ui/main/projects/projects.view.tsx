import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  // The projects list is no longer rendered on this page, but the prop stays in
  // the view's contract so the route and its stories are unchanged.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-[10rem] leading-none text-[#ff0000]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
