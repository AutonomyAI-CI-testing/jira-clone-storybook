import { Outlet } from "react-router";

// One-off splash page: the projects page is a full-viewport black surface
// showing only "Fei". The green is the design system's Green600 palette
// step, the value its success/green semantics resolve to.
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      {/* Keeps the nested /projects/new route rendering above the splash. */}
      <Outlet />
    </>
  );
};
