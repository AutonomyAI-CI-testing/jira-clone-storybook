import { Outlet } from "react-router";

/**
 * The projects page is a full-bleed splash: a black page with the wordmark
 * centered on it and nothing else. The nested `new` route still renders through
 * the outlet underneath.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-[10rem] leading-none text-icon-accent-green">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
