import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-[#000000]">
      <h1 className="font-primary-black text-[10rem] leading-none text-[#00ff00]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
