import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full flex-grow items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl text-icon-accent-green">Fei</h1>
      <Outlet />
    </div>
  );
};
