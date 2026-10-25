import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 flex-col bg-black">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="font-primary-black text-5xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </div>
  );
};
