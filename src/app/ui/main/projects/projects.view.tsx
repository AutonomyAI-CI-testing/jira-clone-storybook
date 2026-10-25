import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-icon-accent-green">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
