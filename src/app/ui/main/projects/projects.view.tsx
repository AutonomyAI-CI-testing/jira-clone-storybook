import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="h-full w-full bg-black">
      <div className="flex h-full items-center justify-center">
        <h1 className="font-primary-black text-8xl text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </div>
  );
};
