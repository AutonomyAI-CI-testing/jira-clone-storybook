import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full flex-grow flex-col bg-black">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="font-primary-black text-8xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </div>
  );
};
