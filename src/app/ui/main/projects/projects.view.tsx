import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    // Fixed black surface, so the theme is pinned to keep the colour stable.
    <div className="light flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-[120px] leading-none text-font-success">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
