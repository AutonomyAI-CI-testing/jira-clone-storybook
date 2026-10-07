import { Link, Outlet } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineViewBoards } from "react-icons/hi";
import { ProjectSummary } from "@domain/project";
import { Button } from "@app/components/button";
import { ProjectCard } from "./project-card";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  return (
    <div className="p-6">
      <h1 className="font-primary-black text-2xl">PROJECTS</h1>
      <div className="mt-8">
        <Link to="new" className="flex w-fit">
          <Button color="neutral" variant="subtlest" className="py-3 pl-3 pr-4">
            <span>
              <AiOutlinePlus size={22} />
            </span>
            <span className="leading-4">Add Project</span>
          </Button>
        </Link>
      </div>
      {projectsSummary.length === 0 ? (
        <EmptyProjects />
      ) : (
        <div className="mt-4 grid grid-cols-[repeat(auto-fit,_400px)] gap-8">
          {projectsSummary.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
};

const EmptyProjects = (): JSX.Element => (
  <div className="mt-4 flex flex-col items-center rounded-lg border border-dashed border-border bg-elevation-surface-sunken px-6 py-14 text-center">
    <HiOutlineViewBoards size={44} className="text-icon-subtle" />
    <p className="mt-4 font-primary-bold text-lg text-font">No projects yet</p>
    <p className="mt-1 max-w-[420px] font-primary-light text-sm text-font-subtle">
      Projects gather issues, boards and comments in one place. Create your
      first one to get started.
    </p>
    <Link to="new" className="mt-6 flex w-fit">
      <Button size="lg">
        <AiOutlinePlus size={22} />
        <span className="leading-4">Create your first project</span>
      </Button>
    </Link>
  </div>
);

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
