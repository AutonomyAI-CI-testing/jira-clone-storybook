import { Outlet, useLocation } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const { pathname } = useLocation();
  // Only the projects page itself is the standalone black page. Its child
  // route (`/projects/new`) keeps rendering through the Outlet below.
  const isProjectsPage = pathname === "/projects";

  return (
    <>
      {isProjectsPage && (
        <div className="flex h-full w-full items-center justify-center bg-black">
          <h1 className="font-primary-black text-8xl text-[var(--Red600)]">
            Fei
          </h1>
        </div>
      )}
      <Outlet />
    </>
  );
};
