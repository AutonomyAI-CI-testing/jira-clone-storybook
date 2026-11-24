import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-font-danger">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
