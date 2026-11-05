import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  // The page renders a splash only, so the loaded summary goes unused; the prop
  // stays part of the route's contract.
  void projectsSummary;

  return (
    <>
      <div className="flex h-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-[var(--Red600)]">
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
