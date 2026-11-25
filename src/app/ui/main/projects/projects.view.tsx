import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="grid h-full w-full place-items-center bg-black">
      <h1 className="font-primary-black text-8xl text-font-danger">Fei</h1>
      <Outlet />
    </div>
  );
};
