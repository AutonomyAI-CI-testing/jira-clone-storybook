import { ProjectSummary } from "@domain/project/project";

// The projects list is intentionally not rendered on this page, but the prop stays
// part of the view's API because the route loader and its stories pass it.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProjectsView = ({ projectsSummary }: ProjectsViewProps): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-[10rem] leading-none text-icon-danger">
        Fei
      </h1>
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
