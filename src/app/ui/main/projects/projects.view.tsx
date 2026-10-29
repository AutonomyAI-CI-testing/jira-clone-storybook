import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl text-[#22a06b]">Fei</h1>
      </div>
      {/* Keeps the nested create-project route (/projects/new) rendering. */}
      <Outlet />
    </>
  );
};
