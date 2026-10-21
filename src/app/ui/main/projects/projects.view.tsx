import { ProjectSummary } from "@domain/project/project";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  // The projects page renders the "Fei" heading only; the projects list is kept
  // in the route's loader data for when the list comes back.
  void projectsSummary;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-contrast">
      <h1 className="font-primary-black text-9xl text-font-contrast">Fei</h1>
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
