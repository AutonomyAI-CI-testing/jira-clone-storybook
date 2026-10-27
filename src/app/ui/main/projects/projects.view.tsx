import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

// The page shows nothing but the word below, so the summary the route loads is
// deliberately not rendered here. The prop stays so the route and its stories
// keep their shape.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProjectsView = (_props: ProjectsViewProps): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-7xl text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
