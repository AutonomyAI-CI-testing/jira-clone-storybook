import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-icon-accent-green">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
