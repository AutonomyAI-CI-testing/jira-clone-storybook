import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-full flex-grow items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-font-success">Fei</h1>
      </div>
      {/* The "new project" route renders through this outlet */}
      <Outlet />
    </>
  );
};
