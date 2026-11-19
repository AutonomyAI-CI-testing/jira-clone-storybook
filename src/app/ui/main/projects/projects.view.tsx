import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  // The page is a single full-bleed statement: a black canvas with the
  // wordmark centered on it, and nothing else of its own rendered.
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-icon-accent-green">Fei</h1>
      <Outlet />
    </div>
  );
};
