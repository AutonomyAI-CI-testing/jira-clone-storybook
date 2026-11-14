import { Outlet } from "react-router";

// The projects screen is a full-bleed splash: the shell renders no chrome
// around it (see MainLayout), so this view owns the whole viewport. The black
// ground and the green mark are fixed by the design and deliberately do not
// follow the theme.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 flex-col bg-black">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="font-primary-black text-[clamp(4rem,16vw,14rem)] leading-none text-[#22a06b]">
          Fei
        </h1>
      </div>
      <Outlet />
    </div>
  );
};
