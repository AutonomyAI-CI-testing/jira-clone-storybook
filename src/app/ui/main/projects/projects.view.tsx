import { Link, Outlet, useLocation } from "react-router";
import { AiOutlinePlus } from "react-icons/ai";
import { ProjectSummary } from "@domain/project/project";
import { Button } from "@app/components/button/button";
import { ProjectCard } from "./project-card/project-card";

const projectsIndexPath = "/projects";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  const { pathname } = useLocation();

  if (pathname === projectsIndexPath) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-icon-accent-green">
          Fei
        </h1>
      </div>
    );
  }

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
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,_400px)] gap-8">
        {projectsSummary.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
