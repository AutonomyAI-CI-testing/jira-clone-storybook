import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
