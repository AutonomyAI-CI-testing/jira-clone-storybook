import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 w-full items-center justify-center bg-[#000000]">
      <h1 className="font-primary-black text-[clamp(4rem,18vw,12rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
