import { Outlet } from "react-router";

/**
 * The projects page is a fixed, full-bleed black surface showing only the
 * product wordmark, so it pins the light theme: a semantic token would
 * otherwise resolve to a different colour under each theme.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="light flex h-full flex-grow items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
