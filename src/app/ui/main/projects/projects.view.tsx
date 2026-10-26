import { Outlet } from "react-router";

/**
 * The projects page is a single full-bleed screen: a black background with one
 * word in the centre. It is positioned over the app chrome so nothing else is
 * visible on this route. The Outlet is kept so nested routes (e.g. "new") still
 * render on top of it.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-7xl text-icon-accent-green">Fei</h1>
      <Outlet />
    </div>
  );
};
