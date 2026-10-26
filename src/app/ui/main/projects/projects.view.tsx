import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-[#00ff00]">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
