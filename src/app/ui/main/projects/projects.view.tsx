import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 flex-col bg-black">
      <div className="grid flex-1 place-items-center">
        <h1 className="font-primary-black text-9xl text-icon-accent-red">
          Fei
        </h1>
      </div>
      <Outlet />
    </div>
  );
};
