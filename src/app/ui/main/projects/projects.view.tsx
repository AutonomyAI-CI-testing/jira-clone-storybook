import { useMemo, useState } from "react";
import { Link, Outlet } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxValueNone } from "react-icons/rx";
import { ProjectSummary } from "@domain/project";
import { Button } from "@app/components/button";
import { ProjectCard } from "./project-card";
import { SearchProjects } from "./search-projects";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return projectsSummary;
    }

    return projectsSummary.filter((project) => {
      const name = project.name.toLowerCase();
      const description = project.description?.toLowerCase() || "";

      return (
        name.includes(normalizedSearch) || description.includes(normalizedSearch)
      );
    });
  }, [projectsSummary, search]);

  const noResults = projectsSummary.length > 0 && filteredProjects.length === 0;

  return (
    <div className="p-6">
      <h1 className="font-primary-black text-2xl">PROJECTS</h1>
      <div className="mt-8 flex items-center gap-4">
        <Link to="new" className="flex w-fit">
          <Button color="neutral" variant="subtlest" className="py-3 pl-3 pr-4">
            <span>
              <AiOutlinePlus size={22} />
            </span>
            <span className="leading-4">Add Project</span>
          </Button>
        </Link>
        {projectsSummary.length > 0 && (
          <SearchProjects search={search} setSearch={setSearch} />
        )}
      </div>
      {noResults ? (
        <NoProjectsFound />
      ) : (
        <div className="mt-4 grid grid-cols-[repeat(auto-fit,_400px)] gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
};

const NoProjectsFound = (): JSX.Element => (
  <div className="mt-16 flex flex-col items-center text-font-subtlest">
    <RxValueNone size={36} />
    <p className="mt-4 font-primary-light text-xs uppercase">
      No projects found
    </p>
  </div>
);

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
