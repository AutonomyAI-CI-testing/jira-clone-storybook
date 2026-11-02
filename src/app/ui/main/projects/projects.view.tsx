import { Outlet } from "react-router";
import { ProjectSummary } from "@domain/project/project";

// The projects list is not rendered on this page; the prop is kept so the route
// and the existing stories keep their contract.
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- kept for the route + stories contract
export const ProjectsView = (_props: ProjectsViewProps): JSX.Element => {
  return (
    <>
      <div className="dark fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
