import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[var(--Red600)]">Fei</h1>
      <Outlet />
    </div>
  );
};
