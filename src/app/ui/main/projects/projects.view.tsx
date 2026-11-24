import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <main className="flex h-full w-full flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-icon-accent-green">Fei</h1>
      <Outlet />
    </main>
  );
};
