import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-1 items-center justify-center bg-[#000000]">
        <h1 className="font-primary-black text-8xl text-[#22a06b]">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
