import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-black">
      <h1 className="font-primary-black text-[clamp(3rem,14vw,10rem)] leading-none text-icon-accent-green">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
