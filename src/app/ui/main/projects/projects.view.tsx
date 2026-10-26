import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-full flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black text-7xl text-icon-danger">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
