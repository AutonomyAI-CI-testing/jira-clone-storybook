import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      <h1 className="text-center font-primary-black text-8xl leading-none text-font-danger">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
