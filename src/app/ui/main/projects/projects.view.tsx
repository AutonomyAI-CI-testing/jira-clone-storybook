import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed left-0 top-0 z-50 grid h-full w-full place-items-center bg-black">
        <h1 className="font-primary-black text-9xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
