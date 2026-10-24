import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="font-primary-black text-9xl text-[#00ff00]">Fei</h1>
      </div>
      <Outlet />
    </div>
  );
};
