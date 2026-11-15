import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="font-primary-black text-7xl text-icon-accent-red">
          Fei
        </h1>
      </div>
      <Outlet />
    </div>
  );
};
