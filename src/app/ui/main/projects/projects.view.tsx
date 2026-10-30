import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-[#e34935]">Fei</h1>
      <Outlet />
    </div>
  );
};
