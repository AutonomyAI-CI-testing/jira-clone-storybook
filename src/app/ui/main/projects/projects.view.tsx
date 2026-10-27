import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView: (props: ProjectsViewProps) => JSX.Element = () => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-[12rem] leading-none text-[#00ff00]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
