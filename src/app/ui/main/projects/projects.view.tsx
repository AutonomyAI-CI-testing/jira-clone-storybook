import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-center h-screen w-full bg-black">
      <h1 className="font-primary-black text-8xl text-font-success">Fei</h1>
      {/* Nested routes (e. g. the "new project" panel) render here. */}
      <Outlet />
    </div>
  );
};
