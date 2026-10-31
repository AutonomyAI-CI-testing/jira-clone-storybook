import { FC } from "react";
import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView: FC<ProjectsViewProps> = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-[clamp(4rem,18vw,16rem)] leading-none text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
