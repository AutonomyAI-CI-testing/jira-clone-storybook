import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-40 flex bg-black flex-center">
        <h1 className="font-primary-black text-8xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
