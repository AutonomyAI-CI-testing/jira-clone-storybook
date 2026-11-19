import { Outlet } from "react-router";

/**
 * Full-screen splash: the page shows nothing but the name, centered on black.
 * The layer is fixed so the page owns the viewport on its own, without relying
 * on the height its parent happens to have.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
