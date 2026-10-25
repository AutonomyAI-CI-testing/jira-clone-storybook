import { FC } from "react";
import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView: FC<ProjectsViewProps> = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl leading-none text-icon-accent-green">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
