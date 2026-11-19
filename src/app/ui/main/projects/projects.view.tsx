import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
      {/* Keeps the nested "new project" route mounted behind this screen. */}
      <Outlet />
    </div>
  );
};
