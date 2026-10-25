import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      {/* Off-palette splash: the theme has no black or display-red token, so
          black is used as-is and the red is the palette's own Red600. */}
      <h1 className="font-primary-black text-9xl text-[var(--Red600)]">Fei</h1>
      <Outlet />
    </div>
  );
};
