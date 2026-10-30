import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      {/* Deliberate literal: the page background is a fixed black that no theme
          produces, so the red stays fixed too instead of following the theme's
          --color-font-danger (which is a dark Red800 on light themes). */}
      <h1 className="font-primary-black text-5xl text-[#e34935]">Fei</h1>
      <Outlet />
    </div>
  );
};
