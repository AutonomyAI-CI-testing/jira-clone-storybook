import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-font-danger">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
