import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-[clamp(3rem,12vw,9rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
