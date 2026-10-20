import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-[#00ff00]">Fei</h1>
      <Outlet />
    </div>
  );
};
