import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

// The projects list is replaced by a full screen page, so the summary the
// route loads is accepted here but deliberately not rendered.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProjectsView = (_props: ProjectsViewProps): JSX.Element => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-black">
      {/* This page is fixed black in every theme, so it uses the palette green
          directly instead of a theme scoped semantic token. */}
      <h1 className="font-primary-black text-8xl text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
