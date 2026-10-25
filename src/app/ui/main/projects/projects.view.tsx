import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center bg-black">
      <h1 className="font-primary-black text-[10rem] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
