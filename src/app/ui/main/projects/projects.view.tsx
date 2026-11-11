import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="grid h-full flex-1 place-items-center bg-black">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
      <Outlet />
    </div>
  );
};
