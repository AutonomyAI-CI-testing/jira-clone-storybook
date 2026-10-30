import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl leading-none text-font-danger">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
