import { ProjectSummary } from "@domain/project/project";

// The page renders a single centered word, so the projects summary is not used.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProjectsView = (_: ProjectsViewProps): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-[color:var(--Green600)]">
        Fei
      </h1>
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
