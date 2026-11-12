import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-[8rem] leading-none text-[color:var(--Green500)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
