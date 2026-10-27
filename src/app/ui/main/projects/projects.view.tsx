import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  // The projects page is deliberately a bare black surface: the only thing it
  // shows is the name, centred. The projects data is not rendered here.
  void projectsSummary;

  return (
    <>
      <div className="flex h-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-[color:var(--Green600)]">
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
