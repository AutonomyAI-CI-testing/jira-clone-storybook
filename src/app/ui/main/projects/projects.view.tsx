import { Outlet } from "react-router";

/**
 * Full-screen page: it is a fixed layer so the app header is covered as well
 * and the word is the only thing on screen. The `Outlet` is kept so the
 * create-project child route still renders.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl leading-none text-icon-accent-green">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
