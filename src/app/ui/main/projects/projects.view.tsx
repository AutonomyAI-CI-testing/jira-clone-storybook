import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

// The projects page renders a standalone screen, so the loaded projects data is
// intentionally not displayed. The props stay on the route's contract.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProjectsView = (_props: ProjectsViewProps): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="text-center font-primary-black text-[clamp(4rem,20vw,16rem)] leading-none text-[#00ff00]">
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
