import { Outlet } from "react-router";

/**
 * The projects page is deliberately one thing only: a black page with a single
 * large red word in the middle. It is an intentional exception to the design
 * system — black is not a themed surface and `--Red600` is a raw palette value —
 * so the page looks identical in every theme. The route hides the app header
 * (see its `handle`), so this page owns the whole viewport.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl text-[color:var(--Red600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
