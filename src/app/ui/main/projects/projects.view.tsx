import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  // The projects list is intentionally not rendered on this page. The prop
  // stays part of this component's API so the route and its stories are
  // unchanged, and `void` marks it as deliberately unused.
  void projectsSummary;

  return (
    <div className="flex h-full flex-grow items-center justify-center bg-black">
      <h1 className="font-primary-black text-7xl text-[#22a06b]">Fei</h1>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
