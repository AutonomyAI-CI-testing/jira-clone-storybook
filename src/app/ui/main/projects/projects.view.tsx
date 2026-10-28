import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl text-[#00ff00]">Fei</h1>
      <Outlet />
    </div>
  );
};
