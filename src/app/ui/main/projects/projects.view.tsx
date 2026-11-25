import { Outlet } from "react-router";

/**
 * The projects index is a full-bleed splash: it paints the whole viewport
 * itself, so the app header is not rendered for this route (see MainLayout).
 * The outlet stays mounted so the create project dialog keeps working.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="grid h-full place-items-center bg-black">
      <h1 className="font-primary-black text-[clamp(4rem,16vw,11rem)] text-icon-accent-red">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
