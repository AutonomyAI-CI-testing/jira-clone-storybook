import type { FC } from "react";
import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView: FC<ProjectsViewProps> = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-[var(--Red600)]">Fei</h1>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
