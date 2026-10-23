import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full flex-grow items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[#ff0000]">Fei</h1>
      <Outlet />
    </div>
  );
};
