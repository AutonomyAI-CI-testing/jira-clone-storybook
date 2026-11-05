import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  // The page is a full-screen splash, so the route's data is not rendered.
  // The prop stays part of the component's contract for the route and its story.
  void projectsSummary;

  return (
    <div className="flex h-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-[clamp(4rem,18vw,14rem)] text-[var(--Red600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
