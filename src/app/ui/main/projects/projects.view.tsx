import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-[color:var(--Red600)]">
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
