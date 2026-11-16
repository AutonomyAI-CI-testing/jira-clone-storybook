import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 bg-black">
      <div className="flex h-full items-center justify-center">
        <h1 className="font-primary-black text-5xl text-[#ff0000]">Fei</h1>
      </div>
      <Outlet />
    </div>
  );
};
