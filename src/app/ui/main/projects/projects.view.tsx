import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  // This page is a black takeover that shows nothing but the wordmark, so the
  // project list is deliberately not rendered. The prop stays part of the
  // view's contract so the route and its stories keep their shape.
  void projectsSummary;

  return (
    <>
      {/* The layer is fixed so the page owns the whole viewport, including the
          area the app header occupies. */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl leading-none text-[color:var(--Green600)]">
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
