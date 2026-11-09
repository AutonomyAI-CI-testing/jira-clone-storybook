import { Outlet } from "react-router";

// The projects route renders a full-bleed splash, so it is positioned over the
// app header to fill the whole viewport. The Outlet stays so the child routes
// (the create-project panel) still render on top of it.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-black">
      <h1 className="font-primary-black text-8xl text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
