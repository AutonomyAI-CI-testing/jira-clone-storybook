import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

// The projects page is a full-bleed splash: it renders none of the route's
// data, but the prop stays part of the view's contract.
export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  void projectsSummary;

  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
